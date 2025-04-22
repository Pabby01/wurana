# Wurana - Decentralized Artisan Marketplace on Solana

A decentralized web platform connecting skilled artisans with clients, powered by Solana blockchain for secure, low-fee transactions.

## Features

- **User Onboarding**: Email/SOL wallet sign-up with basic identity verification
- **Profile Management**: Portfolio management with IPFS storage
- **Service Listings**: Structured marketplace for artisan services
- **On-Chain Escrow**: Secure payment handling with Solana
- **Reputation System**: NFT-based reputation tracking
- **Real-time Messaging**: WebSocket-powered chat system
- **Solana Pay Integration**: Fiat on-ramp and crypto settlements

## Tech Stack

- **Blockchain**: Solana (mainnet-beta)
- **Smart Contracts**: Rust + Anchor
- **Frontend**: Next.js, React, Tailwind CSS
- **Backend**: Node.js/Express
- **Storage**: IPFS/Arweave
- **Database**: PostgreSQL

## Getting Started

### Prerequisites

- Node.js 18+
- Solana CLI tools
- Rust toolchain (for smart contract development)
- PostgreSQL

### Installation

1. Clone the repository and install dependencies:
```bash
git clone https://github.com/yourusername/wurana.git
cd wurana
npm install
```

2. Start the development server:
```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Project Structure

```
/src
  /app             # Next.js app directory
  /components      # React components
  /contracts       # Solana smart contracts
  /hooks           # Custom React hooks
  /lib             # Utility functions
  /pages           # Additional pages
  /styles          # Global styles
  /types           # TypeScript types
```

## Contributing

Contributions are welcome! Please read our contributing guidelines before submitting pull requests.

## License

MIT
