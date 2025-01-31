const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();
  
  console.log("Deploying contracts with the account:", deployer.address);

  const Voting = await hre.ethers.getContractFactory("Voting");
  const voting = await Voting.deploy(["Ali", "Ayşe", "Mehmet"]);
  await voting.waitForDeployment();

  console.log(`Voting contract deployed to: ${voting.target}`);
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});
