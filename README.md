# Hardhat Base Scripts

This project provides **50 generic Hardhat scripts** for deploying and interacting with smart contracts on **Base mainnet**.

## 🚀 Setup
```bash
npm install --save-dev hardhat @nomicfoundation/hardhat-toolbox
```

Add your keys to `.env`:
```
PRIVATE_KEY=your_wallet_private_key
BASESCAN_API_KEY=your_basescan_api_key
```

## 🛠 Run Scripts
```bash
npx hardhat run scripts/deploy-erc20.js --network base
```

## 📜 Scripts Overview
- ERC20: deploy, mint, transfer, balance, approve, allowance, burn
- ERC721: deploy, mint, transfer, approve, metadata
- ERC1155: deploy, batch mint, transfer
- Admin: transfer ownership, accept ownership, pause, unpause, withdraw, set fees
- Utilities: verify contracts, gas checks, block info, read events, batch txs

## ⚡ GitHub Actions
Runs all scripts automatically on push/PR to ensure they compile and execute without errors.
