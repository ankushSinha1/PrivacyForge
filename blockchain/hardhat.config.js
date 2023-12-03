require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
  paths: {
    artifacts: "../client/src/artifacts"
  },
  networks: {
    defichain: {
      url: process.env.DEFI_EVM,
      accounts: [process.env.PRIVATE_KEY],
    },
  }
};
