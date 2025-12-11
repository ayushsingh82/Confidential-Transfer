'use client';

import React, { useState } from 'react';
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useTheme } from '../contexts/ThemeContext';

export default function LandingPage() {
  const { theme } = useTheme();
  const isLight = theme === 'light';
  const [recipient, setRecipient] = useState('');
  const [amount, setAmount] = useState('');

  return (
    <section 
      className={`min-h-screen flex items-center justify-center p-8 relative overflow-hidden ${
        isLight ? 'bg-white text-[#011623]' : 'bg-[#0A0A0A] text-gray-100'
      }`}
    >
      {/* Orange gradient on left end - more intense (only in dark theme) */}
      {!isLight && (
        <div className="absolute left-0 top-0 w-[77px] md:w-[307px] h-full bg-gradient-to-r from-[#CC4420]/50 to-transparent pointer-events-none"></div>
      )}
      
      {/* Orange gradient on right end - more intense (only in dark theme) */}
      {!isLight && (
        <div className="absolute right-0 top-0 w-[77px] md:w-[307px] h-full bg-gradient-to-l from-[#CC4420]/50 to-transparent pointer-events-none"></div>
      )}

      <div className="max-w-4xl mx-auto text-center z-10 relative w-full">
        {/* --- Headline --- */}
        <h1 className={`text-5xl md:text-7xl font-semibold font-serif mb-6 leading-tight ${
          isLight ? 'text-[#011623]' : 'text-white'
        }`}>
          Confidential Transfer{' '}
          <span className={`px-2 ${
            isLight 
              ? 'bg-[#03D9DC] text-[#011623]' 
              : 'bg-[#CC4420] text-white'
          }`}>
            powered by Fhenix
          </span>
        </h1>
        
        <p className={`text-lg md:text-xl max-w-3xl mx-auto mb-10 ${
          isLight ? 'text-zinc-600' : 'text-zinc-400'
        }`}>
          Secure, private transfers on Base Sepolia  with encrypted transaction details
        </p>

        {/* --- Transfer Form Box --- */}
        <div className={`max-w-2xl mx-auto border rounded-sm p-8 relative ${
          isLight 
            ? 'border-[#03D9DC] bg-white' 
            : 'border-zinc-700 bg-zinc-900/50'
        }`}>
          {/* Border decorations - corners */}
          <div className={`absolute top-0 left-0 w-2 h-2 border-l-[3px] border-t-[2px] z-10 ${
            isLight ? 'border-[#03D9DC]' : 'border-[#CC4420]'
          }`}></div>
          <div className={`absolute top-0 right-0 w-2 h-2 border-r-[3px] border-t-[2px] z-10 ${
            isLight ? 'border-[#03D9DC]' : 'border-[#CC4420]'
          }`}></div>
          <div className={`absolute bottom-0 left-0 w-2 h-2 border-l-[3px] border-b-[2px] z-10 ${
            isLight ? 'border-[#03D9DC]' : 'border-[#CC4420]'
          }`}></div>
          <div className={`absolute bottom-0 right-0 w-2 h-2 border-r-[3px] border-b-[2px] z-10 ${
            isLight ? 'border-[#03D9DC]' : 'border-[#CC4420]'
          }`}></div>

          <div className="space-y-6 relative">
            {/* Wallet Connect */}
            <div className="space-y-2">
              <label className={`block text-left text-sm font-semibold ${
                isLight ? 'text-[#011623]' : 'text-white'
              }`}>
                Wallet
              </label>
              <div className="flex justify-start">
                <ConnectButton />
              </div>
            </div>

            {/* Recipient Address */}
            <div className="space-y-2">
              <label className={`block text-left text-sm font-semibold ${
                isLight ? 'text-[#011623]' : 'text-white'
              }`}>
                Recipient
              </label>
              <input
                type="text"
                value={recipient}
                onChange={(e) => setRecipient(e.target.value)}
                placeholder="0x..."
                className={`w-full px-4 py-3 border rounded-sm font-mono text-sm ${
                  isLight 
                    ? 'border-[#03D9DC] bg-white text-[#011623] placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-[#03D9DC]' 
                    : 'border-zinc-700 bg-zinc-800 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-[#CC4420]'
                }`}
              />
            </div>

            {/* Amount */}
            <div className="space-y-2">
              <label className={`block text-left text-sm font-semibold ${
                isLight ? 'text-[#011623]' : 'text-white'
              }`}>
                Amount
              </label>
              <input
                type="text"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
                placeholder="0.0"
                className={`w-full px-4 py-3 border rounded-sm font-mono text-sm ${
                  isLight 
                    ? 'border-[#03D9DC] bg-white text-[#011623] placeholder-zinc-400 focus:outline-none focus:ring-2 focus:ring-[#03D9DC]' 
                    : 'border-zinc-700 bg-zinc-800 text-white placeholder-zinc-500 focus:outline-none focus:ring-2 focus:ring-[#CC4420]'
                }`}
              />
            </div>

            {/* Transfer Button */}
            <button 
              className={`relative w-full h-12 border rounded-sm font-semibold text-lg transition duration-300 ease-in-out flex items-center justify-center mt-6 ${
                isLight 
                  ? 'border-[#03D9DC] text-[#011623] hover:bg-[#03D9DC]/10' 
                  : 'border-zinc-700 text-white hover:bg-[#CC4420]/10'
              }`}
            >
              {/* Border decorations - corners */}
              <div className={`absolute top-0 left-0 w-2 h-2 border-l-[3px] border-t-[2px] z-10 ${
                isLight ? 'border-[#03D9DC]' : 'border-[#CC4420]'
              }`}></div>
              <div className={`absolute top-0 right-0 w-2 h-2 border-r-[3px] border-t-[2px] z-10 ${
                isLight ? 'border-[#03D9DC]' : 'border-[#CC4420]'
              }`}></div>
              <div className={`absolute bottom-0 left-0 w-2 h-2 border-l-[3px] border-b-[2px] z-10 ${
                isLight ? 'border-[#03D9DC]' : 'border-[#CC4420]'
              }`}></div>
              <div className={`absolute bottom-0 right-0 w-2 h-2 border-r-[3px] border-b-[2px] z-10 ${
                isLight ? 'border-[#03D9DC]' : 'border-[#CC4420]'
              }`}></div>
              <span>Transfer</span>
            </button>
          </div>
        </div>
      </div>

      {/* More intense background glow effects (only in dark theme) */}
      {!isLight && (
        <>
          <div className="absolute w-96 h-96 bg-[#CC4420]/30 rounded-full blur-3xl opacity-60 bottom-10 left-10 animate-pulse pointer-events-none"></div>
          <div className="absolute w-96 h-96 bg-[#CC4420]/25 rounded-full blur-3xl opacity-50 top-10 right-10 animate-pulse pointer-events-none"></div>
        </>
      )}
    </section>
  );
}

