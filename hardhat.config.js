require("@nomicfoundation/hardhat-toolbox");

module.exports = {
  solidity: "0.8.20", // Voting.sol ile uyumlu olmalı
  paths: {
    sources: "./contracts",  // Solidity dosyalarının bulunduğu klasör
    artifacts: "./artifacts", // Derlenmiş JSON dosyalarının geleceği yer
  },
};
