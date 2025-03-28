//crossfi chain
export const Proposal_CONTRACT_ADDRESS =
  "0x1782758678DD1182d0b2b1884B4b09Ba6b26982D";
//sepolia
// export const Proposal_CONTRACT_ADDRESS =
//   "0x5F016798dF945e510a774ab422D61f20841a8BBe";
export const Proposal_CONTRACT_ABI = [
  { type: "constructor", inputs: [], stateMutability: "nonpayable" },
  {
    type: "function",
    name: "activeProposalIds",
    inputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "createProposal",
    inputs: [
      { name: "title", type: "string", internalType: "string" },
      { name: "description", type: "string", internalType: "string" },
      { name: "fundingGoal", type: "uint256", internalType: "uint256" },
      { name: "durationDays", type: "uint256", internalType: "uint256" },
    ],
    outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    stateMutability: "nonpayable",
  },
  {
    type: "function",
    name: "fundProposal",
    inputs: [{ name: "proposalId", type: "uint256", internalType: "uint256" }],
    outputs: [],
    stateMutability: "payable",
  },
  {
    type: "function",
    name: "getAllProposals",
    inputs: [],
    outputs: [
      {
        name: "",
        type: "tuple[]",
        internalType: "struct IDeScholarProposal.ProposalView[]",
        components: [
          { name: "id", type: "uint256", internalType: "uint256" },
          { name: "researcher", type: "address", internalType: "address" },
          { name: "title", type: "string", internalType: "string" },
          { name: "description", type: "string", internalType: "string" },
          { name: "fundingGoal", type: "uint256", internalType: "uint256" },
          { name: "currentFunding", type: "uint256", internalType: "uint256" },
          { name: "deadline", type: "uint256", internalType: "uint256" },
          { name: "active", type: "bool", internalType: "bool" },
        ],
      },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "getProposalFunding",
    inputs: [{ name: "proposalId", type: "uint256", internalType: "uint256" }],
    outputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "owner",
    inputs: [],
    outputs: [{ name: "", type: "address", internalType: "address" }],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "proposals",
    inputs: [{ name: "", type: "uint256", internalType: "uint256" }],
    outputs: [
      { name: "researcher", type: "address", internalType: "address" },
      { name: "title", type: "string", internalType: "string" },
      { name: "description", type: "string", internalType: "string" },
      { name: "fundingGoal", type: "uint256", internalType: "uint256" },
      { name: "currentFunding", type: "uint256", internalType: "uint256" },
      { name: "deadline", type: "uint256", internalType: "uint256" },
      { name: "active", type: "bool", internalType: "bool" },
    ],
    stateMutability: "view",
  },
  {
    type: "function",
    name: "withdrawFunds",
    inputs: [{ name: "proposalId", type: "uint256", internalType: "uint256" }],
    outputs: [],
    stateMutability: "nonpayable",
  },
  {
    type: "event",
    name: "ProposalCreated",
    inputs: [
      {
        name: "proposalId",
        type: "uint256",
        indexed: true,
        internalType: "uint256",
      },
      {
        name: "researcher",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "fundingGoal",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "ProposalFunded",
    inputs: [
      {
        name: "proposalId",
        type: "uint256",
        indexed: true,
        internalType: "uint256",
      },
      {
        name: "funder",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "amount",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  {
    type: "event",
    name: "ProposalFundingCompleted",
    inputs: [
      {
        name: "proposalId",
        type: "uint256",
        indexed: true,
        internalType: "uint256",
      },
      {
        name: "researcher",
        type: "address",
        indexed: true,
        internalType: "address",
      },
      {
        name: "totalFunded",
        type: "uint256",
        indexed: false,
        internalType: "uint256",
      },
    ],
    anonymous: false,
  },
  { type: "error", name: "ReentrancyGuardReentrantCall", inputs: [] },
];
