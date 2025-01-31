const hre = require("hardhat");

async function main() {
  console.log("Hardhat başarıyla yüklendi ve çalışıyor!");
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
