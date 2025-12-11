'use client';

import { ConnectButton } from '@rainbow-me/rainbowkit';

export default function LandingPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gradient-to-br from-purple-900 via-blue-900 to-indigo-900 px-4 py-12">
      <div className="w-full max-w-4xl space-y-12">
        {/* Header */}
        <div className="text-center space-y-6">
          <h1 className="text-5xl md:text-7xl font-bold text-white tracking-tight">
            Confidential Transfer
          </h1>
          <p className="text-xl md:text-2xl text-blue-100 max-w-2xl mx-auto">
            Secure, private transfers on Fhenix blockchain with encrypted transaction details
          </p>
        </div>

        {/* Connect Wallet Section */}
        <div className="flex flex-col items-center justify-center space-y-6 bg-white/10 backdrop-blur-lg rounded-2xl p-8 border border-white/20">
          <h2 className="text-2xl font-semibold text-white">
            Connect Your Wallet
          </h2>
          <p className="text-blue-100 text-center max-w-md">
            Get started by connecting your wallet to begin making confidential transfers
          </p>
          <div className="flex justify-center">
            <ConnectButton />
          </div>
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-12">
          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
            <div className="text-3xl mb-4">🔒</div>
            <h3 className="text-xl font-semibold text-white mb-2">
              Encrypted Transfers
            </h3>
            <p className="text-blue-100">
              Your transaction details are encrypted and remain confidential
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
            <div className="text-3xl mb-4">⚡</div>
            <h3 className="text-xl font-semibold text-white mb-2">
              Fast & Secure
            </h3>
            <p className="text-blue-100">
              Built on Fhenix for fast, secure, and private transactions
            </p>
          </div>

          <div className="bg-white/10 backdrop-blur-lg rounded-xl p-6 border border-white/20">
            <div className="text-3xl mb-4">🛡️</div>
            <h3 className="text-xl font-semibold text-white mb-2">
              Privacy First
            </h3>
            <p className="text-blue-100">
              Your financial privacy is protected with advanced encryption
            </p>
          </div>
        </div>

        {/* CTA Section */}
        <div className="text-center space-y-4 pt-8">
          <p className="text-blue-100 text-lg">
            Ready to make your first confidential transfer?
          </p>
          <p className="text-blue-200 text-sm">
            Connect your wallet above to get started
          </p>
        </div>
      </div>
    </div>
  );
}

