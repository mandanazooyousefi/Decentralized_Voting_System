const { expect } = require("chai");

describe("Voting Smart Contract", function () {
  let Voting, voting, owner;

  beforeEach(async function () {
    [owner] = await ethers.getSigners();
    Voting = await ethers.getContractFactory("Voting");
    voting = await Voting.deploy(["Ali", "Ayşe", "Mehmet"]);
    await voting.waitForDeployment(); // Güncellenmiş satır

  });

  it("Should deploy the contract with candidates", async function () {
    expect(await voting.candidates(0)).to.equal("Ali");
    expect(await voting.candidates(1)).to.equal("Ayşe");
    expect(await voting.candidates(2)).to.equal("Mehmet");
  });
});
