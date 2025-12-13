import { buildModule } from "@nomicfoundation/hardhat-ignition/modules";

// USDC token address on Base Sepolia
// You can verify this address or update it if needed
const USDC_BASE_SEPOLIA = "0x036CbD53842c5426634e7929541eC2318f3dCF7e";

export default buildModule("TransferModule", (m) => {
  // Deploy the ConfidentialTransfer contract with USDC token address
  const transfer = m.contract("ConfidentialTransfer", [USDC_BASE_SEPOLIA]);

  return { transfer };
});

