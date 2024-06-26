require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.20",
  networks: {
    hardhat: {
      accounts: [
        {
          // Deployer: 0xf39Fd6e51aad88F6F4ce6aB8827279cffFb92266
          privateKey: "0xac0974bec39a17e36ba4a6b4d238ff944bacb478cbed5efcae784d7bf4f2ff80",
          balance: "1984567890123456789" // ~1.9845 ETH
        },
        {
          // Buyer: 0x70997970C51812dc3A010C7d01b50e0d17dc79C8
          privateKey: "0x59c6995e998f97a5a0044966f0945389dc9e86dae88c7a8412f4603b6b78690d",
          balance: "2012345678901234567" // ~2.0123 ETH
        },
        {
          // Test: 0x3C44CdDdB6a900fa2b585dd299e03d12FA4293BC
          privateKey: "0x5de4111afa1a4b94908f83103eb1f1706367c2e68ca870fc3fb9a804cdab365a",
          balance: "10000000000000000000000" // 10000 ETH
        }
      ]
    }
  }
};
