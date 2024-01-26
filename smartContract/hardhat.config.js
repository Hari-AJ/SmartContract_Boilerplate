require("@nomicfoundation/hardhat-toolbox");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.19",
  networks: {
    sepolia: {
      url: 'https://eth-sepolia.g.alchemy.com/v2/lyudugXLCU_jqKiIMdpaSbe8yPNeGED-',
      accounts: ['33ede857b31390a391413429aae423c6aee28b5521f4c3e8d4e39dd72e394a84'],
    },
  },
};