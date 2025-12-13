// SPDX-License-Identifier: MIT
pragma solidity ^0.8.28;

// Minimal ERC20 interface for USDC
interface IERC20 {
    function transfer(address to, uint256 amount) external returns (bool);
    function transferFrom(address from, address to, uint256 amount) external returns (bool);
    function balanceOf(address account) external view returns (uint256);
    function allowance(address owner, address spender) external view returns (uint256);
    function approve(address spender, uint256 amount) external returns (bool);
}

/**
 * @title ConfidentialTransfer
 * @notice Contract for transferring USDC tokens on Base Sepolia
 * @dev This contract allows users to transfer USDC tokens from their wallet to another address
 */
contract ConfidentialTransfer {

    // USDC token address on Base Sepolia
    // Base Sepolia USDC: 0x036CbD53842c5426634e7929541eC2318f3dCF7e
    address public immutable usdcToken;

    // Events
    event TransferExecuted(
        address indexed from,
        address indexed to,
        uint256 amount,
        uint256 timestamp
    );

    event TransferFailed(
        address indexed from,
        address indexed to,
        uint256 amount,
        string reason
    );

    // Errors
    error InvalidAddress();
    error InvalidAmount();
    error InsufficientBalance();
    error TransferFailedError();

    /**
     * @notice Constructor sets the USDC token address
     * @param _usdcToken Address of the USDC token contract on Base Sepolia
     */
    constructor(address _usdcToken) {
        if (_usdcToken == address(0)) {
            revert InvalidAddress();
        }
        usdcToken = _usdcToken;
    }

    /**
     * @notice Transfer USDC from the caller's wallet to a recipient
     * @dev User must first approve this contract to spend their USDC tokens
     * @param recipient Address to receive the USDC tokens
     * @param amount Amount of USDC to transfer (in USDC decimals, typically 6)
     * @return success Boolean indicating if the transfer was successful
     */
    function transferUSDC(address recipient, uint256 amount) external returns (bool success) {
        if (recipient == address(0)) {
            revert InvalidAddress();
        }
        if (amount == 0) {
            revert InvalidAmount();
        }

        IERC20 usdc = IERC20(usdcToken);
        
        // Check if caller has sufficient balance
        uint256 balance = usdc.balanceOf(msg.sender);
        if (balance < amount) {
            revert InsufficientBalance();
        }

        // Check allowance - user must approve this contract first
        uint256 allowance = usdc.allowance(msg.sender, address(this));
        if (allowance < amount) {
            revert InsufficientBalance();
        }

        // Transfer USDC from caller to recipient
        bool transferResult = usdc.transferFrom(msg.sender, recipient, amount);
        
        if (!transferResult) {
            emit TransferFailed(msg.sender, recipient, amount, "ERC20 transfer failed");
            revert TransferFailedError();
        }

        emit TransferExecuted(msg.sender, recipient, amount, block.timestamp);
        return true;
    }

    /**
     * @notice Transfer USDC using approve/transferFrom pattern
     * @dev User must first approve this contract to spend their USDC
     * @param from Address to transfer USDC from
     * @param to Address to transfer USDC to
     * @param amount Amount of USDC to transfer
     * @return success Boolean indicating if the transfer was successful
     */
    function transferUSDCFrom(address from, address to, uint256 amount) external returns (bool success) {
        if (from == address(0) || to == address(0)) {
            revert InvalidAddress();
        }
        if (amount == 0) {
            revert InvalidAmount();
        }

        IERC20 usdc = IERC20(usdcToken);
        
        // Check allowance
        uint256 allowance = usdc.allowance(from, address(this));
        if (allowance < amount) {
            revert InsufficientBalance();
        }

        // Transfer USDC
        bool transferResult = usdc.transferFrom(from, to, amount);
        
        if (!transferResult) {
            emit TransferFailed(from, to, amount, "ERC20 transferFrom failed");
            revert TransferFailedError();
        }

        emit TransferExecuted(from, to, amount, block.timestamp);
        return true;
    }

    /**
     * @notice Get the USDC balance of an address
     * @param account Address to check balance for
     * @return balance USDC balance of the account
     */
    function getUSDCBalance(address account) external view returns (uint256 balance) {
        IERC20 usdc = IERC20(usdcToken);
        return usdc.balanceOf(account);
    }

    /**
     * @notice Get the USDC allowance for this contract
     * @param owner Address that owns the USDC
     * @return allowance Amount of USDC this contract can spend on behalf of owner
     */
    function getUSDCAllowance(address owner) external view returns (uint256 allowance) {
        IERC20 usdc = IERC20(usdcToken);
        return usdc.allowance(owner, address(this));
    }
}

