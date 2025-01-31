const { ethers } = require("ethers");

// Hardhat localhost provider
const provider = new ethers.JsonRpcProvider("http://127.0.0.1:8545");

// İlk hesabı kullan (deployer)
async function main() {
    const signer = await provider.getSigner(0);

    // Yeni deploy edilen kontratın adresini ekleyin
    const contractAddress = "0x5FC8d32690cc91D4c39d9d3abcBD16989F875707";

    // ABI dosyasını al
    const contractAbi = require("./artifacts/contracts/Voting.sol/Voting.json").abi;

    // Kontrata bağlan
    const Voting = new ethers.Contract(contractAddress, contractAbi, signer);

    // Aday listesini çek
    console.log("Adaylar:");
    for (let i = 0; i < 3; i++) {
        const candidate = await Voting.candidates(i);
        console.log(`Aday ${i}: ${candidate}`);
    }

    // Oy kullanma
    console.log("Oy kullanılıyor...");
    await Voting.vote(0);

    // Güncellenmiş oy sayısını çekme
    const votes = await Voting.votes(0);
    console.log(`0. adayın güncellenmiş oy sayısı: ${votes.toString()}`);
}

main().catch((error) => {
    console.error(error);
    process.exit(1);
});
