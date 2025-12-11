'use client';

import '@rainbow-me/rainbowkit/styles.css';

import {
  getDefaultConfig,
  RainbowKitProvider,
} from '@rainbow-me/rainbowkit';
import { WagmiProvider } from 'wagmi';
import { defineChain } from 'wagmi';
import {
  QueryClientProvider,
  QueryClient,
} from '@tanstack/react-query';
import { ReactNode } from 'react';

// Define Fhenix chain
const fhenix = defineChain({
  id: 42069, // Fhenix testnet chain ID (update if different)
  name: 'Fhenix',
  nativeCurrency: {
    decimals: 18,
    name: 'Fhenix',
    symbol: 'ETH',
  },
  rpcUrls: {
    default: {
      http: ['https://api.testnet.fhenix.zone'],
    },
  },
  blockExplorers: {
    default: {
      name: 'Fhenix Explorer',
      url: 'https://explorer.testnet.fhenix.zone',
    },
  },
  testnet: true,
});

const config = getDefaultConfig({
  appName: 'Confidential Transfer',
  projectId: process.env.NEXT_PUBLIC_WALLETCONNECT_PROJECT_ID || 'YOUR_PROJECT_ID',
  chains: [fhenix],
  ssr: true, // If your dApp uses server side rendering (SSR)
});

const queryClient = new QueryClient();

interface Web3ProviderProps {
  children: ReactNode;
}

export default function Web3Provider({ children }: Web3ProviderProps) {
  return (
    <WagmiProvider config={config}>
      <QueryClientProvider client={queryClient}>
        <RainbowKitProvider>
          {children}
        </RainbowKitProvider>
      </QueryClientProvider>
    </WagmiProvider>
  );
}

