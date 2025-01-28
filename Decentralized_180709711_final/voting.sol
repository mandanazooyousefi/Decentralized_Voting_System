pragma solidity ^0.8.0;

contract Voting {
    mapping(uint256 => string) public candidates; // ID => Candidate Name
    mapping(uint256 => uint256) public votes;     // ID => Vote Count
    mapping(address => bool) private _hasVoted;  // Tracks if an address has voted
    uint256 public candidateCount;
    uint256 private reentrancyGuard;             // Reentrancy protection flag

    constructor(string[] memory candidateNames) {
        for (uint256 i = 0; i < candidateNames.length; i++) {
            candidates[i] = candidateNames[i]; // Initialize candidate names
            candidateCount++;
        }
    }

    function vote(uint256 candidateId) public {
        require(candidateId < candidateCount, "Invalid candidate ID");
        require(!_hasVoted[msg.sender], "You have already voted");
        require(reentrancyGuard == 0, "Reentrant call detected");

        // Set reentrancy guard
        reentrancyGuard = 1;

        // Cast the vote
        votes[candidateId]++;
        _hasVoted[msg.sender] = true; // Mark the voter as having voted

        // Clear reentrancy guard
        reentrancyGuard = 0;
    }

    // Optional: Function to check if an address has voted
    function hasVoted(address voter) public view returns (bool) {
        return _hasVoted[voter];
    }
}
