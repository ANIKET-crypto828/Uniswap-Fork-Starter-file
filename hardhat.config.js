require("@nomiclabs/hardhat-waffle");

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  solidity: "0.8.18",
  networks: {
    hardhat: {
      forking: {
        url: "https://rpc.ankr.com/eth/7ca12fc5e92d382cba0868b6210f1babb5c53fea8e2823b48edf71181e6514e7",
      },
    },
  },
};
