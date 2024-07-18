import {
  createUseReadContract,
  createUseWriteContract,
  createUseSimulateContract,
  createUseWatchContractEvent,
} from 'wagmi/codegen';

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// AlysNFT
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 *
 */
export const alysNftAbi = [
  {
    type: 'constructor',
    inputs: [
      { name: 'initialOwner', internalType: 'address', type: 'address' },
    ],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'RECIPIENT_WALLET',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'approve',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'balanceOf',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'burn',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'recipient', internalType: 'address', type: 'address' },
      { name: 'uri', internalType: 'string', type: 'string' },
      { name: 'price', internalType: 'uint256', type: 'uint256' },
      { name: 'ticker', internalType: 'string', type: 'string' },
      { name: 'units', internalType: 'uint32', type: 'uint32' },
    ],
    name: 'createNFT',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'getAllNFTs',
    outputs: [{ name: '', internalType: 'uint256[]', type: 'uint256[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'getApproved',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'getNFTsOwnedBy',
    outputs: [{ name: '', internalType: 'uint256[]', type: 'uint256[]' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'getTokenTicker',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'getTokenUnits',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'operator', internalType: 'address', type: 'address' },
    ],
    name: 'isApprovedForAll',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'name',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'owner',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'ownerOf',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'renounceOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'data', internalType: 'bytes', type: 'bytes' },
    ],
    name: 'safeTransferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'approved', internalType: 'bool', type: 'bool' },
    ],
    name: 'setApprovalForAll',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'interfaceId', internalType: 'bytes4', type: 'bytes4' }],
    name: 'supportsInterface',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'symbol',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'index', internalType: 'uint256', type: 'uint256' }],
    name: 'tokenByIndex',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'index', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'tokenOfOwnerByIndex',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'tokenURI',
    outputs: [{ name: '', internalType: 'string', type: 'string' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'totalSupply',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: 'from', internalType: 'address', type: 'address' },
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferFrom',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: 'to', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'transferNFT',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: 'newOwner', internalType: 'address', type: 'address' }],
    name: 'transferOwnership',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'approved',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Approval',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'owner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'operator',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      { name: 'approved', internalType: 'bool', type: 'bool', indexed: false },
    ],
    name: 'ApprovalForAll',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: '_fromTokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: '_toTokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'BatchMetadataUpdate',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: '_tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'MetadataUpdate',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'previousOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'newOwner',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'OwnershipTransferred',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      { name: 'from', internalType: 'address', type: 'address', indexed: true },
      { name: 'to', internalType: 'address', type: 'address', indexed: true },
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
    ],
    name: 'Transfer',
  },
  { type: 'error', inputs: [], name: 'ERC721EnumerableForbiddenBatchMint' },
  {
    type: 'error',
    inputs: [
      { name: 'sender', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'owner', internalType: 'address', type: 'address' },
    ],
    name: 'ERC721IncorrectOwner',
  },
  {
    type: 'error',
    inputs: [
      { name: 'operator', internalType: 'address', type: 'address' },
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC721InsufficientApproval',
  },
  {
    type: 'error',
    inputs: [{ name: 'approver', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidApprover',
  },
  {
    type: 'error',
    inputs: [{ name: 'operator', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidOperator',
  },
  {
    type: 'error',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidOwner',
  },
  {
    type: 'error',
    inputs: [{ name: 'receiver', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidReceiver',
  },
  {
    type: 'error',
    inputs: [{ name: 'sender', internalType: 'address', type: 'address' }],
    name: 'ERC721InvalidSender',
  },
  {
    type: 'error',
    inputs: [{ name: 'tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'ERC721NonexistentToken',
  },
  {
    type: 'error',
    inputs: [
      { name: 'owner', internalType: 'address', type: 'address' },
      { name: 'index', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'ERC721OutOfBoundsIndex',
  },
  {
    type: 'error',
    inputs: [{ name: 'owner', internalType: 'address', type: 'address' }],
    name: 'OwnableInvalidOwner',
  },
  {
    type: 'error',
    inputs: [{ name: 'account', internalType: 'address', type: 'address' }],
    name: 'OwnableUnauthorizedAccount',
  },
] as const;

/**
 *
 */
export const alysNftAddress = {
  212121: '0x503CAe3000AaC78583b641fe74a4D81FD7De64E7',
} as const;

/**
 *
 */
export const alysNftConfig = {
  address: alysNftAddress,
  abi: alysNftAbi,
} as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// AlysNFTP2PMarket
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 *
 */
export const alysNftp2PMarketAbi = [
  {
    type: 'constructor',
    inputs: [
      { name: '_nftContractAddress', internalType: 'address', type: 'address' },
    ],
    stateMutability: 'nonpayable',
  },
  { type: 'receive', stateMutability: 'payable' },
  {
    type: 'function',
    inputs: [],
    name: 'MAX_LTV_PERCENTAGE',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'OFFER_DURATION',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'PERCENTAGE_BASE',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'PLATFORM_FEE_PERCENTAGE',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_requestId', internalType: 'uint256', type: 'uint256' }],
    name: 'acceptLoanOffer',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '_tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'acceptOffer',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'activeLoans',
    outputs: [
      { name: 'borrower', internalType: 'address', type: 'address' },
      { name: 'lender', internalType: 'address', type: 'address' },
      { name: 'principal', internalType: 'uint256', type: 'uint256' },
      { name: 'interestRate', internalType: 'uint256', type: 'uint256' },
      { name: 'duration', internalType: 'uint256', type: 'uint256' },
      { name: 'startTime', internalType: 'uint256', type: 'uint256' },
      { name: 'isRepaid', internalType: 'bool', type: 'bool' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_loanId', internalType: 'uint256', type: 'uint256' }],
    name: 'claimCollateral',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [
      { name: '_tokenIds', internalType: 'uint256[]', type: 'uint256[]' },
      { name: '_principal', internalType: 'uint256', type: 'uint256' },
      { name: '_totalValue', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'createLoanRequest',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '_tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'getActiveListing',
    outputs: [
      {
        name: '',
        internalType: 'struct AlysNFTP2PMarket.Listing',
        type: 'tuple',
        components: [
          { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
          { name: 'seller', internalType: 'address', type: 'address' },
          { name: 'price', internalType: 'uint256', type: 'uint256' },
          { name: 'isActive', internalType: 'bool', type: 'bool' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_loanId', internalType: 'uint256', type: 'uint256' }],
    name: 'getActiveLoan',
    outputs: [
      {
        name: '',
        internalType: 'struct AlysNFTP2PMarket.ActiveLoan',
        type: 'tuple',
        components: [
          { name: 'borrower', internalType: 'address', type: 'address' },
          { name: 'lender', internalType: 'address', type: 'address' },
          { name: 'tokenIds', internalType: 'uint256[]', type: 'uint256[]' },
          { name: 'principal', internalType: 'uint256', type: 'uint256' },
          { name: 'interestRate', internalType: 'uint256', type: 'uint256' },
          { name: 'duration', internalType: 'uint256', type: 'uint256' },
          { name: 'startTime', internalType: 'uint256', type: 'uint256' },
          { name: 'isRepaid', internalType: 'bool', type: 'bool' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'getActiveOffer',
    outputs: [
      {
        name: '',
        internalType: 'struct AlysNFTP2PMarket.Offer',
        type: 'tuple',
        components: [
          { name: 'buyer', internalType: 'address', type: 'address' },
          { name: 'amount', internalType: 'uint256', type: 'uint256' },
          { name: 'expirationTime', internalType: 'uint256', type: 'uint256' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_requestId', internalType: 'uint256', type: 'uint256' }],
    name: 'getLoanOffer',
    outputs: [
      {
        name: '',
        internalType: 'struct AlysNFTP2PMarket.LoanOffer',
        type: 'tuple',
        components: [
          { name: 'lender', internalType: 'address', type: 'address' },
          { name: 'principal', internalType: 'uint256', type: 'uint256' },
          { name: 'interestRate', internalType: 'uint256', type: 'uint256' },
          { name: 'duration', internalType: 'uint256', type: 'uint256' },
          { name: 'expirationTime', internalType: 'uint256', type: 'uint256' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_requestId', internalType: 'uint256', type: 'uint256' }],
    name: 'getLoanRequest',
    outputs: [
      {
        name: '',
        internalType: 'struct AlysNFTP2PMarket.LoanRequest',
        type: 'tuple',
        components: [
          { name: 'tokenIds', internalType: 'uint256[]', type: 'uint256[]' },
          { name: 'borrower', internalType: 'address', type: 'address' },
          { name: 'principal', internalType: 'uint256', type: 'uint256' },
          { name: 'interestRate', internalType: 'uint256', type: 'uint256' },
          { name: 'duration', internalType: 'uint256', type: 'uint256' },
          { name: 'totalValue', internalType: 'uint256', type: 'uint256' },
          { name: 'isActive', internalType: 'bool', type: 'bool' },
        ],
      },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'isNFTCollateral',
    outputs: [{ name: '', internalType: 'bool', type: 'bool' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_tokenId', internalType: 'uint256', type: 'uint256' },
      { name: '_price', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'listNFT',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'listings',
    outputs: [
      { name: 'tokenId', internalType: 'uint256', type: 'uint256' },
      { name: 'seller', internalType: 'address', type: 'address' },
      { name: 'price', internalType: 'uint256', type: 'uint256' },
      { name: 'isActive', internalType: 'bool', type: 'bool' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'loanOffers',
    outputs: [
      { name: 'lender', internalType: 'address', type: 'address' },
      { name: 'principal', internalType: 'uint256', type: 'uint256' },
      { name: 'interestRate', internalType: 'uint256', type: 'uint256' },
      { name: 'duration', internalType: 'uint256', type: 'uint256' },
      { name: 'expirationTime', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'loanRequests',
    outputs: [
      { name: 'borrower', internalType: 'address', type: 'address' },
      { name: 'principal', internalType: 'uint256', type: 'uint256' },
      { name: 'interestRate', internalType: 'uint256', type: 'uint256' },
      { name: 'duration', internalType: 'uint256', type: 'uint256' },
      { name: 'totalValue', internalType: 'uint256', type: 'uint256' },
      { name: 'isActive', internalType: 'bool', type: 'bool' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [
      { name: '_requestId', internalType: 'uint256', type: 'uint256' },
      { name: '_principal', internalType: 'uint256', type: 'uint256' },
      { name: '_interestRate', internalType: 'uint256', type: 'uint256' },
      { name: '_duration', internalType: 'uint256', type: 'uint256' },
    ],
    name: 'makeLoanOffer',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [{ name: '_tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'makeOffer',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [],
    name: 'nftContract',
    outputs: [{ name: '', internalType: 'contract AlysNFT', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'nftToActiveLoan',
    outputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '', internalType: 'uint256', type: 'uint256' }],
    name: 'offers',
    outputs: [
      { name: 'buyer', internalType: 'address', type: 'address' },
      { name: 'amount', internalType: 'uint256', type: 'uint256' },
      { name: 'expirationTime', internalType: 'uint256', type: 'uint256' },
    ],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [],
    name: 'platformFeeRecipient',
    outputs: [{ name: '', internalType: 'address', type: 'address' }],
    stateMutability: 'view',
  },
  {
    type: 'function',
    inputs: [{ name: '_requestId', internalType: 'uint256', type: 'uint256' }],
    name: 'rejectLoanOffer',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '_tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'rejectOffer',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'function',
    inputs: [{ name: '_loanId', internalType: 'uint256', type: 'uint256' }],
    name: 'repayLoan',
    outputs: [],
    stateMutability: 'payable',
  },
  {
    type: 'function',
    inputs: [{ name: '_tokenId', internalType: 'uint256', type: 'uint256' }],
    name: 'unlistNFT',
    outputs: [],
    stateMutability: 'nonpayable',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'loanId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'lender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'CollateralClaimed',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'loanId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'borrower',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'lender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'principal',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'LoanOfferAccepted',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'requestId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'lender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'principal',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'interestRate',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
      {
        name: 'duration',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'LoanOfferMade',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'requestId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'lender',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'LoanOfferRejected',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'loanId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'borrower',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'amountRepaid',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'LoanRepaid',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'requestId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'borrower',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'principal',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'LoanRequestCreated',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'seller',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'price',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'NFTListed',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'seller',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'NFTUnlisted',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'seller',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'buyer',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'OfferAccepted',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'buyer',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
    ],
    name: 'OfferCancelled',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'buyer',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'OfferMade',
  },
  {
    type: 'event',
    anonymous: false,
    inputs: [
      {
        name: 'tokenId',
        internalType: 'uint256',
        type: 'uint256',
        indexed: true,
      },
      {
        name: 'buyer',
        internalType: 'address',
        type: 'address',
        indexed: true,
      },
      {
        name: 'amount',
        internalType: 'uint256',
        type: 'uint256',
        indexed: false,
      },
    ],
    name: 'OfferRejected',
  },
  { type: 'error', inputs: [], name: 'MathOverflowedMulDiv' },
  { type: 'error', inputs: [], name: 'ReentrancyGuardReentrantCall' },
] as const;

/**
 *
 */
export const alysNftp2PMarketAddress = {
  212121: '0xe7b32384D4B4E3F474aEA14c42b8317e939df593',
} as const;

/**
 *
 */
export const alysNftp2PMarketConfig = {
  address: alysNftp2PMarketAddress,
  abi: alysNftp2PMarketAbi,
} as const;

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
// React
//////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link alysNftAbi}__
 *
 *
 */
export const useReadAlysNft = /*#__PURE__*/ createUseReadContract({
  abi: alysNftAbi,
  address: alysNftAddress,
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link alysNftAbi}__ and `functionName` set to `"RECIPIENT_WALLET"`
 *
 *
 */
export const useReadAlysNftRecipientWallet =
  /*#__PURE__*/ createUseReadContract({
    abi: alysNftAbi,
    address: alysNftAddress,
    functionName: 'RECIPIENT_WALLET',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link alysNftAbi}__ and `functionName` set to `"balanceOf"`
 *
 *
 */
export const useReadAlysNftBalanceOf = /*#__PURE__*/ createUseReadContract({
  abi: alysNftAbi,
  address: alysNftAddress,
  functionName: 'balanceOf',
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link alysNftAbi}__ and `functionName` set to `"getAllNFTs"`
 *
 *
 */
export const useReadAlysNftGetAllNfTs = /*#__PURE__*/ createUseReadContract({
  abi: alysNftAbi,
  address: alysNftAddress,
  functionName: 'getAllNFTs',
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link alysNftAbi}__ and `functionName` set to `"getApproved"`
 *
 *
 */
export const useReadAlysNftGetApproved = /*#__PURE__*/ createUseReadContract({
  abi: alysNftAbi,
  address: alysNftAddress,
  functionName: 'getApproved',
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link alysNftAbi}__ and `functionName` set to `"getNFTsOwnedBy"`
 *
 *
 */
export const useReadAlysNftGetNfTsOwnedBy = /*#__PURE__*/ createUseReadContract(
  { abi: alysNftAbi, address: alysNftAddress, functionName: 'getNFTsOwnedBy' }
);

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link alysNftAbi}__ and `functionName` set to `"getTokenTicker"`
 *
 *
 */
export const useReadAlysNftGetTokenTicker = /*#__PURE__*/ createUseReadContract(
  { abi: alysNftAbi, address: alysNftAddress, functionName: 'getTokenTicker' }
);

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link alysNftAbi}__ and `functionName` set to `"getTokenUnits"`
 *
 *
 */
export const useReadAlysNftGetTokenUnits = /*#__PURE__*/ createUseReadContract({
  abi: alysNftAbi,
  address: alysNftAddress,
  functionName: 'getTokenUnits',
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link alysNftAbi}__ and `functionName` set to `"isApprovedForAll"`
 *
 *
 */
export const useReadAlysNftIsApprovedForAll =
  /*#__PURE__*/ createUseReadContract({
    abi: alysNftAbi,
    address: alysNftAddress,
    functionName: 'isApprovedForAll',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link alysNftAbi}__ and `functionName` set to `"name"`
 *
 *
 */
export const useReadAlysNftName = /*#__PURE__*/ createUseReadContract({
  abi: alysNftAbi,
  address: alysNftAddress,
  functionName: 'name',
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link alysNftAbi}__ and `functionName` set to `"owner"`
 *
 *
 */
export const useReadAlysNftOwner = /*#__PURE__*/ createUseReadContract({
  abi: alysNftAbi,
  address: alysNftAddress,
  functionName: 'owner',
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link alysNftAbi}__ and `functionName` set to `"ownerOf"`
 *
 *
 */
export const useReadAlysNftOwnerOf = /*#__PURE__*/ createUseReadContract({
  abi: alysNftAbi,
  address: alysNftAddress,
  functionName: 'ownerOf',
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link alysNftAbi}__ and `functionName` set to `"supportsInterface"`
 *
 *
 */
export const useReadAlysNftSupportsInterface =
  /*#__PURE__*/ createUseReadContract({
    abi: alysNftAbi,
    address: alysNftAddress,
    functionName: 'supportsInterface',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link alysNftAbi}__ and `functionName` set to `"symbol"`
 *
 *
 */
export const useReadAlysNftSymbol = /*#__PURE__*/ createUseReadContract({
  abi: alysNftAbi,
  address: alysNftAddress,
  functionName: 'symbol',
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link alysNftAbi}__ and `functionName` set to `"tokenByIndex"`
 *
 *
 */
export const useReadAlysNftTokenByIndex = /*#__PURE__*/ createUseReadContract({
  abi: alysNftAbi,
  address: alysNftAddress,
  functionName: 'tokenByIndex',
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link alysNftAbi}__ and `functionName` set to `"tokenOfOwnerByIndex"`
 *
 *
 */
export const useReadAlysNftTokenOfOwnerByIndex =
  /*#__PURE__*/ createUseReadContract({
    abi: alysNftAbi,
    address: alysNftAddress,
    functionName: 'tokenOfOwnerByIndex',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link alysNftAbi}__ and `functionName` set to `"tokenURI"`
 *
 *
 */
export const useReadAlysNftTokenUri = /*#__PURE__*/ createUseReadContract({
  abi: alysNftAbi,
  address: alysNftAddress,
  functionName: 'tokenURI',
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link alysNftAbi}__ and `functionName` set to `"totalSupply"`
 *
 *
 */
export const useReadAlysNftTotalSupply = /*#__PURE__*/ createUseReadContract({
  abi: alysNftAbi,
  address: alysNftAddress,
  functionName: 'totalSupply',
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link alysNftAbi}__
 *
 *
 */
export const useWriteAlysNft = /*#__PURE__*/ createUseWriteContract({
  abi: alysNftAbi,
  address: alysNftAddress,
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link alysNftAbi}__ and `functionName` set to `"approve"`
 *
 *
 */
export const useWriteAlysNftApprove = /*#__PURE__*/ createUseWriteContract({
  abi: alysNftAbi,
  address: alysNftAddress,
  functionName: 'approve',
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link alysNftAbi}__ and `functionName` set to `"burn"`
 *
 *
 */
export const useWriteAlysNftBurn = /*#__PURE__*/ createUseWriteContract({
  abi: alysNftAbi,
  address: alysNftAddress,
  functionName: 'burn',
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link alysNftAbi}__ and `functionName` set to `"createNFT"`
 *
 *
 */
export const useWriteAlysNftCreateNft = /*#__PURE__*/ createUseWriteContract({
  abi: alysNftAbi,
  address: alysNftAddress,
  functionName: 'createNFT',
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link alysNftAbi}__ and `functionName` set to `"renounceOwnership"`
 *
 *
 */
export const useWriteAlysNftRenounceOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: alysNftAbi,
    address: alysNftAddress,
    functionName: 'renounceOwnership',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link alysNftAbi}__ and `functionName` set to `"safeTransferFrom"`
 *
 *
 */
export const useWriteAlysNftSafeTransferFrom =
  /*#__PURE__*/ createUseWriteContract({
    abi: alysNftAbi,
    address: alysNftAddress,
    functionName: 'safeTransferFrom',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link alysNftAbi}__ and `functionName` set to `"setApprovalForAll"`
 *
 *
 */
export const useWriteAlysNftSetApprovalForAll =
  /*#__PURE__*/ createUseWriteContract({
    abi: alysNftAbi,
    address: alysNftAddress,
    functionName: 'setApprovalForAll',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link alysNftAbi}__ and `functionName` set to `"transferFrom"`
 *
 *
 */
export const useWriteAlysNftTransferFrom = /*#__PURE__*/ createUseWriteContract(
  { abi: alysNftAbi, address: alysNftAddress, functionName: 'transferFrom' }
);

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link alysNftAbi}__ and `functionName` set to `"transferNFT"`
 *
 *
 */
export const useWriteAlysNftTransferNft = /*#__PURE__*/ createUseWriteContract({
  abi: alysNftAbi,
  address: alysNftAddress,
  functionName: 'transferNFT',
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link alysNftAbi}__ and `functionName` set to `"transferOwnership"`
 *
 *
 */
export const useWriteAlysNftTransferOwnership =
  /*#__PURE__*/ createUseWriteContract({
    abi: alysNftAbi,
    address: alysNftAddress,
    functionName: 'transferOwnership',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link alysNftAbi}__
 *
 *
 */
export const useSimulateAlysNft = /*#__PURE__*/ createUseSimulateContract({
  abi: alysNftAbi,
  address: alysNftAddress,
});

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link alysNftAbi}__ and `functionName` set to `"approve"`
 *
 *
 */
export const useSimulateAlysNftApprove =
  /*#__PURE__*/ createUseSimulateContract({
    abi: alysNftAbi,
    address: alysNftAddress,
    functionName: 'approve',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link alysNftAbi}__ and `functionName` set to `"burn"`
 *
 *
 */
export const useSimulateAlysNftBurn = /*#__PURE__*/ createUseSimulateContract({
  abi: alysNftAbi,
  address: alysNftAddress,
  functionName: 'burn',
});

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link alysNftAbi}__ and `functionName` set to `"createNFT"`
 *
 *
 */
export const useSimulateAlysNftCreateNft =
  /*#__PURE__*/ createUseSimulateContract({
    abi: alysNftAbi,
    address: alysNftAddress,
    functionName: 'createNFT',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link alysNftAbi}__ and `functionName` set to `"renounceOwnership"`
 *
 *
 */
export const useSimulateAlysNftRenounceOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: alysNftAbi,
    address: alysNftAddress,
    functionName: 'renounceOwnership',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link alysNftAbi}__ and `functionName` set to `"safeTransferFrom"`
 *
 *
 */
export const useSimulateAlysNftSafeTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: alysNftAbi,
    address: alysNftAddress,
    functionName: 'safeTransferFrom',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link alysNftAbi}__ and `functionName` set to `"setApprovalForAll"`
 *
 *
 */
export const useSimulateAlysNftSetApprovalForAll =
  /*#__PURE__*/ createUseSimulateContract({
    abi: alysNftAbi,
    address: alysNftAddress,
    functionName: 'setApprovalForAll',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link alysNftAbi}__ and `functionName` set to `"transferFrom"`
 *
 *
 */
export const useSimulateAlysNftTransferFrom =
  /*#__PURE__*/ createUseSimulateContract({
    abi: alysNftAbi,
    address: alysNftAddress,
    functionName: 'transferFrom',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link alysNftAbi}__ and `functionName` set to `"transferNFT"`
 *
 *
 */
export const useSimulateAlysNftTransferNft =
  /*#__PURE__*/ createUseSimulateContract({
    abi: alysNftAbi,
    address: alysNftAddress,
    functionName: 'transferNFT',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link alysNftAbi}__ and `functionName` set to `"transferOwnership"`
 *
 *
 */
export const useSimulateAlysNftTransferOwnership =
  /*#__PURE__*/ createUseSimulateContract({
    abi: alysNftAbi,
    address: alysNftAddress,
    functionName: 'transferOwnership',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link alysNftAbi}__
 *
 *
 */
export const useWatchAlysNftEvent = /*#__PURE__*/ createUseWatchContractEvent({
  abi: alysNftAbi,
  address: alysNftAddress,
});

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link alysNftAbi}__ and `eventName` set to `"Approval"`
 *
 *
 */
export const useWatchAlysNftApprovalEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: alysNftAbi,
    address: alysNftAddress,
    eventName: 'Approval',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link alysNftAbi}__ and `eventName` set to `"ApprovalForAll"`
 *
 *
 */
export const useWatchAlysNftApprovalForAllEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: alysNftAbi,
    address: alysNftAddress,
    eventName: 'ApprovalForAll',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link alysNftAbi}__ and `eventName` set to `"BatchMetadataUpdate"`
 *
 *
 */
export const useWatchAlysNftBatchMetadataUpdateEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: alysNftAbi,
    address: alysNftAddress,
    eventName: 'BatchMetadataUpdate',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link alysNftAbi}__ and `eventName` set to `"MetadataUpdate"`
 *
 *
 */
export const useWatchAlysNftMetadataUpdateEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: alysNftAbi,
    address: alysNftAddress,
    eventName: 'MetadataUpdate',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link alysNftAbi}__ and `eventName` set to `"OwnershipTransferred"`
 *
 *
 */
export const useWatchAlysNftOwnershipTransferredEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: alysNftAbi,
    address: alysNftAddress,
    eventName: 'OwnershipTransferred',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link alysNftAbi}__ and `eventName` set to `"Transfer"`
 *
 *
 */
export const useWatchAlysNftTransferEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: alysNftAbi,
    address: alysNftAddress,
    eventName: 'Transfer',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link alysNftp2PMarketAbi}__
 *
 *
 */
export const useReadAlysNftp2PMarket = /*#__PURE__*/ createUseReadContract({
  abi: alysNftp2PMarketAbi,
  address: alysNftp2PMarketAddress,
});

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link alysNftp2PMarketAbi}__ and `functionName` set to `"MAX_LTV_PERCENTAGE"`
 *
 *
 */
export const useReadAlysNftp2PMarketMaxLtvPercentage =
  /*#__PURE__*/ createUseReadContract({
    abi: alysNftp2PMarketAbi,
    address: alysNftp2PMarketAddress,
    functionName: 'MAX_LTV_PERCENTAGE',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link alysNftp2PMarketAbi}__ and `functionName` set to `"OFFER_DURATION"`
 *
 *
 */
export const useReadAlysNftp2PMarketOfferDuration =
  /*#__PURE__*/ createUseReadContract({
    abi: alysNftp2PMarketAbi,
    address: alysNftp2PMarketAddress,
    functionName: 'OFFER_DURATION',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link alysNftp2PMarketAbi}__ and `functionName` set to `"PERCENTAGE_BASE"`
 *
 *
 */
export const useReadAlysNftp2PMarketPercentageBase =
  /*#__PURE__*/ createUseReadContract({
    abi: alysNftp2PMarketAbi,
    address: alysNftp2PMarketAddress,
    functionName: 'PERCENTAGE_BASE',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link alysNftp2PMarketAbi}__ and `functionName` set to `"PLATFORM_FEE_PERCENTAGE"`
 *
 *
 */
export const useReadAlysNftp2PMarketPlatformFeePercentage =
  /*#__PURE__*/ createUseReadContract({
    abi: alysNftp2PMarketAbi,
    address: alysNftp2PMarketAddress,
    functionName: 'PLATFORM_FEE_PERCENTAGE',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link alysNftp2PMarketAbi}__ and `functionName` set to `"activeLoans"`
 *
 *
 */
export const useReadAlysNftp2PMarketActiveLoans =
  /*#__PURE__*/ createUseReadContract({
    abi: alysNftp2PMarketAbi,
    address: alysNftp2PMarketAddress,
    functionName: 'activeLoans',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link alysNftp2PMarketAbi}__ and `functionName` set to `"getActiveListing"`
 *
 *
 */
export const useReadAlysNftp2PMarketGetActiveListing =
  /*#__PURE__*/ createUseReadContract({
    abi: alysNftp2PMarketAbi,
    address: alysNftp2PMarketAddress,
    functionName: 'getActiveListing',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link alysNftp2PMarketAbi}__ and `functionName` set to `"getActiveLoan"`
 *
 *
 */
export const useReadAlysNftp2PMarketGetActiveLoan =
  /*#__PURE__*/ createUseReadContract({
    abi: alysNftp2PMarketAbi,
    address: alysNftp2PMarketAddress,
    functionName: 'getActiveLoan',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link alysNftp2PMarketAbi}__ and `functionName` set to `"getActiveOffer"`
 *
 *
 */
export const useReadAlysNftp2PMarketGetActiveOffer =
  /*#__PURE__*/ createUseReadContract({
    abi: alysNftp2PMarketAbi,
    address: alysNftp2PMarketAddress,
    functionName: 'getActiveOffer',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link alysNftp2PMarketAbi}__ and `functionName` set to `"getLoanOffer"`
 *
 *
 */
export const useReadAlysNftp2PMarketGetLoanOffer =
  /*#__PURE__*/ createUseReadContract({
    abi: alysNftp2PMarketAbi,
    address: alysNftp2PMarketAddress,
    functionName: 'getLoanOffer',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link alysNftp2PMarketAbi}__ and `functionName` set to `"getLoanRequest"`
 *
 *
 */
export const useReadAlysNftp2PMarketGetLoanRequest =
  /*#__PURE__*/ createUseReadContract({
    abi: alysNftp2PMarketAbi,
    address: alysNftp2PMarketAddress,
    functionName: 'getLoanRequest',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link alysNftp2PMarketAbi}__ and `functionName` set to `"isNFTCollateral"`
 *
 *
 */
export const useReadAlysNftp2PMarketIsNftCollateral =
  /*#__PURE__*/ createUseReadContract({
    abi: alysNftp2PMarketAbi,
    address: alysNftp2PMarketAddress,
    functionName: 'isNFTCollateral',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link alysNftp2PMarketAbi}__ and `functionName` set to `"listings"`
 *
 *
 */
export const useReadAlysNftp2PMarketListings =
  /*#__PURE__*/ createUseReadContract({
    abi: alysNftp2PMarketAbi,
    address: alysNftp2PMarketAddress,
    functionName: 'listings',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link alysNftp2PMarketAbi}__ and `functionName` set to `"loanOffers"`
 *
 *
 */
export const useReadAlysNftp2PMarketLoanOffers =
  /*#__PURE__*/ createUseReadContract({
    abi: alysNftp2PMarketAbi,
    address: alysNftp2PMarketAddress,
    functionName: 'loanOffers',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link alysNftp2PMarketAbi}__ and `functionName` set to `"loanRequests"`
 *
 *
 */
export const useReadAlysNftp2PMarketLoanRequests =
  /*#__PURE__*/ createUseReadContract({
    abi: alysNftp2PMarketAbi,
    address: alysNftp2PMarketAddress,
    functionName: 'loanRequests',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link alysNftp2PMarketAbi}__ and `functionName` set to `"nftContract"`
 *
 *
 */
export const useReadAlysNftp2PMarketNftContract =
  /*#__PURE__*/ createUseReadContract({
    abi: alysNftp2PMarketAbi,
    address: alysNftp2PMarketAddress,
    functionName: 'nftContract',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link alysNftp2PMarketAbi}__ and `functionName` set to `"nftToActiveLoan"`
 *
 *
 */
export const useReadAlysNftp2PMarketNftToActiveLoan =
  /*#__PURE__*/ createUseReadContract({
    abi: alysNftp2PMarketAbi,
    address: alysNftp2PMarketAddress,
    functionName: 'nftToActiveLoan',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link alysNftp2PMarketAbi}__ and `functionName` set to `"offers"`
 *
 *
 */
export const useReadAlysNftp2PMarketOffers =
  /*#__PURE__*/ createUseReadContract({
    abi: alysNftp2PMarketAbi,
    address: alysNftp2PMarketAddress,
    functionName: 'offers',
  });

/**
 * Wraps __{@link useReadContract}__ with `abi` set to __{@link alysNftp2PMarketAbi}__ and `functionName` set to `"platformFeeRecipient"`
 *
 *
 */
export const useReadAlysNftp2PMarketPlatformFeeRecipient =
  /*#__PURE__*/ createUseReadContract({
    abi: alysNftp2PMarketAbi,
    address: alysNftp2PMarketAddress,
    functionName: 'platformFeeRecipient',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link alysNftp2PMarketAbi}__
 *
 *
 */
export const useWriteAlysNftp2PMarket = /*#__PURE__*/ createUseWriteContract({
  abi: alysNftp2PMarketAbi,
  address: alysNftp2PMarketAddress,
});

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link alysNftp2PMarketAbi}__ and `functionName` set to `"acceptLoanOffer"`
 *
 *
 */
export const useWriteAlysNftp2PMarketAcceptLoanOffer =
  /*#__PURE__*/ createUseWriteContract({
    abi: alysNftp2PMarketAbi,
    address: alysNftp2PMarketAddress,
    functionName: 'acceptLoanOffer',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link alysNftp2PMarketAbi}__ and `functionName` set to `"acceptOffer"`
 *
 *
 */
export const useWriteAlysNftp2PMarketAcceptOffer =
  /*#__PURE__*/ createUseWriteContract({
    abi: alysNftp2PMarketAbi,
    address: alysNftp2PMarketAddress,
    functionName: 'acceptOffer',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link alysNftp2PMarketAbi}__ and `functionName` set to `"claimCollateral"`
 *
 *
 */
export const useWriteAlysNftp2PMarketClaimCollateral =
  /*#__PURE__*/ createUseWriteContract({
    abi: alysNftp2PMarketAbi,
    address: alysNftp2PMarketAddress,
    functionName: 'claimCollateral',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link alysNftp2PMarketAbi}__ and `functionName` set to `"createLoanRequest"`
 *
 *
 */
export const useWriteAlysNftp2PMarketCreateLoanRequest =
  /*#__PURE__*/ createUseWriteContract({
    abi: alysNftp2PMarketAbi,
    address: alysNftp2PMarketAddress,
    functionName: 'createLoanRequest',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link alysNftp2PMarketAbi}__ and `functionName` set to `"listNFT"`
 *
 *
 */
export const useWriteAlysNftp2PMarketListNft =
  /*#__PURE__*/ createUseWriteContract({
    abi: alysNftp2PMarketAbi,
    address: alysNftp2PMarketAddress,
    functionName: 'listNFT',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link alysNftp2PMarketAbi}__ and `functionName` set to `"makeLoanOffer"`
 *
 *
 */
export const useWriteAlysNftp2PMarketMakeLoanOffer =
  /*#__PURE__*/ createUseWriteContract({
    abi: alysNftp2PMarketAbi,
    address: alysNftp2PMarketAddress,
    functionName: 'makeLoanOffer',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link alysNftp2PMarketAbi}__ and `functionName` set to `"makeOffer"`
 *
 *
 */
export const useWriteAlysNftp2PMarketMakeOffer =
  /*#__PURE__*/ createUseWriteContract({
    abi: alysNftp2PMarketAbi,
    address: alysNftp2PMarketAddress,
    functionName: 'makeOffer',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link alysNftp2PMarketAbi}__ and `functionName` set to `"rejectLoanOffer"`
 *
 *
 */
export const useWriteAlysNftp2PMarketRejectLoanOffer =
  /*#__PURE__*/ createUseWriteContract({
    abi: alysNftp2PMarketAbi,
    address: alysNftp2PMarketAddress,
    functionName: 'rejectLoanOffer',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link alysNftp2PMarketAbi}__ and `functionName` set to `"rejectOffer"`
 *
 *
 */
export const useWriteAlysNftp2PMarketRejectOffer =
  /*#__PURE__*/ createUseWriteContract({
    abi: alysNftp2PMarketAbi,
    address: alysNftp2PMarketAddress,
    functionName: 'rejectOffer',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link alysNftp2PMarketAbi}__ and `functionName` set to `"repayLoan"`
 *
 *
 */
export const useWriteAlysNftp2PMarketRepayLoan =
  /*#__PURE__*/ createUseWriteContract({
    abi: alysNftp2PMarketAbi,
    address: alysNftp2PMarketAddress,
    functionName: 'repayLoan',
  });

/**
 * Wraps __{@link useWriteContract}__ with `abi` set to __{@link alysNftp2PMarketAbi}__ and `functionName` set to `"unlistNFT"`
 *
 *
 */
export const useWriteAlysNftp2PMarketUnlistNft =
  /*#__PURE__*/ createUseWriteContract({
    abi: alysNftp2PMarketAbi,
    address: alysNftp2PMarketAddress,
    functionName: 'unlistNFT',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link alysNftp2PMarketAbi}__
 *
 *
 */
export const useSimulateAlysNftp2PMarket =
  /*#__PURE__*/ createUseSimulateContract({
    abi: alysNftp2PMarketAbi,
    address: alysNftp2PMarketAddress,
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link alysNftp2PMarketAbi}__ and `functionName` set to `"acceptLoanOffer"`
 *
 *
 */
export const useSimulateAlysNftp2PMarketAcceptLoanOffer =
  /*#__PURE__*/ createUseSimulateContract({
    abi: alysNftp2PMarketAbi,
    address: alysNftp2PMarketAddress,
    functionName: 'acceptLoanOffer',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link alysNftp2PMarketAbi}__ and `functionName` set to `"acceptOffer"`
 *
 *
 */
export const useSimulateAlysNftp2PMarketAcceptOffer =
  /*#__PURE__*/ createUseSimulateContract({
    abi: alysNftp2PMarketAbi,
    address: alysNftp2PMarketAddress,
    functionName: 'acceptOffer',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link alysNftp2PMarketAbi}__ and `functionName` set to `"claimCollateral"`
 *
 *
 */
export const useSimulateAlysNftp2PMarketClaimCollateral =
  /*#__PURE__*/ createUseSimulateContract({
    abi: alysNftp2PMarketAbi,
    address: alysNftp2PMarketAddress,
    functionName: 'claimCollateral',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link alysNftp2PMarketAbi}__ and `functionName` set to `"createLoanRequest"`
 *
 *
 */
export const useSimulateAlysNftp2PMarketCreateLoanRequest =
  /*#__PURE__*/ createUseSimulateContract({
    abi: alysNftp2PMarketAbi,
    address: alysNftp2PMarketAddress,
    functionName: 'createLoanRequest',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link alysNftp2PMarketAbi}__ and `functionName` set to `"listNFT"`
 *
 *
 */
export const useSimulateAlysNftp2PMarketListNft =
  /*#__PURE__*/ createUseSimulateContract({
    abi: alysNftp2PMarketAbi,
    address: alysNftp2PMarketAddress,
    functionName: 'listNFT',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link alysNftp2PMarketAbi}__ and `functionName` set to `"makeLoanOffer"`
 *
 *
 */
export const useSimulateAlysNftp2PMarketMakeLoanOffer =
  /*#__PURE__*/ createUseSimulateContract({
    abi: alysNftp2PMarketAbi,
    address: alysNftp2PMarketAddress,
    functionName: 'makeLoanOffer',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link alysNftp2PMarketAbi}__ and `functionName` set to `"makeOffer"`
 *
 *
 */
export const useSimulateAlysNftp2PMarketMakeOffer =
  /*#__PURE__*/ createUseSimulateContract({
    abi: alysNftp2PMarketAbi,
    address: alysNftp2PMarketAddress,
    functionName: 'makeOffer',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link alysNftp2PMarketAbi}__ and `functionName` set to `"rejectLoanOffer"`
 *
 *
 */
export const useSimulateAlysNftp2PMarketRejectLoanOffer =
  /*#__PURE__*/ createUseSimulateContract({
    abi: alysNftp2PMarketAbi,
    address: alysNftp2PMarketAddress,
    functionName: 'rejectLoanOffer',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link alysNftp2PMarketAbi}__ and `functionName` set to `"rejectOffer"`
 *
 *
 */
export const useSimulateAlysNftp2PMarketRejectOffer =
  /*#__PURE__*/ createUseSimulateContract({
    abi: alysNftp2PMarketAbi,
    address: alysNftp2PMarketAddress,
    functionName: 'rejectOffer',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link alysNftp2PMarketAbi}__ and `functionName` set to `"repayLoan"`
 *
 *
 */
export const useSimulateAlysNftp2PMarketRepayLoan =
  /*#__PURE__*/ createUseSimulateContract({
    abi: alysNftp2PMarketAbi,
    address: alysNftp2PMarketAddress,
    functionName: 'repayLoan',
  });

/**
 * Wraps __{@link useSimulateContract}__ with `abi` set to __{@link alysNftp2PMarketAbi}__ and `functionName` set to `"unlistNFT"`
 *
 *
 */
export const useSimulateAlysNftp2PMarketUnlistNft =
  /*#__PURE__*/ createUseSimulateContract({
    abi: alysNftp2PMarketAbi,
    address: alysNftp2PMarketAddress,
    functionName: 'unlistNFT',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link alysNftp2PMarketAbi}__
 *
 *
 */
export const useWatchAlysNftp2PMarketEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: alysNftp2PMarketAbi,
    address: alysNftp2PMarketAddress,
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link alysNftp2PMarketAbi}__ and `eventName` set to `"CollateralClaimed"`
 *
 *
 */
export const useWatchAlysNftp2PMarketCollateralClaimedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: alysNftp2PMarketAbi,
    address: alysNftp2PMarketAddress,
    eventName: 'CollateralClaimed',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link alysNftp2PMarketAbi}__ and `eventName` set to `"LoanOfferAccepted"`
 *
 *
 */
export const useWatchAlysNftp2PMarketLoanOfferAcceptedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: alysNftp2PMarketAbi,
    address: alysNftp2PMarketAddress,
    eventName: 'LoanOfferAccepted',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link alysNftp2PMarketAbi}__ and `eventName` set to `"LoanOfferMade"`
 *
 *
 */
export const useWatchAlysNftp2PMarketLoanOfferMadeEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: alysNftp2PMarketAbi,
    address: alysNftp2PMarketAddress,
    eventName: 'LoanOfferMade',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link alysNftp2PMarketAbi}__ and `eventName` set to `"LoanOfferRejected"`
 *
 *
 */
export const useWatchAlysNftp2PMarketLoanOfferRejectedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: alysNftp2PMarketAbi,
    address: alysNftp2PMarketAddress,
    eventName: 'LoanOfferRejected',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link alysNftp2PMarketAbi}__ and `eventName` set to `"LoanRepaid"`
 *
 *
 */
export const useWatchAlysNftp2PMarketLoanRepaidEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: alysNftp2PMarketAbi,
    address: alysNftp2PMarketAddress,
    eventName: 'LoanRepaid',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link alysNftp2PMarketAbi}__ and `eventName` set to `"LoanRequestCreated"`
 *
 *
 */
export const useWatchAlysNftp2PMarketLoanRequestCreatedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: alysNftp2PMarketAbi,
    address: alysNftp2PMarketAddress,
    eventName: 'LoanRequestCreated',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link alysNftp2PMarketAbi}__ and `eventName` set to `"NFTListed"`
 *
 *
 */
export const useWatchAlysNftp2PMarketNftListedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: alysNftp2PMarketAbi,
    address: alysNftp2PMarketAddress,
    eventName: 'NFTListed',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link alysNftp2PMarketAbi}__ and `eventName` set to `"NFTUnlisted"`
 *
 *
 */
export const useWatchAlysNftp2PMarketNftUnlistedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: alysNftp2PMarketAbi,
    address: alysNftp2PMarketAddress,
    eventName: 'NFTUnlisted',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link alysNftp2PMarketAbi}__ and `eventName` set to `"OfferAccepted"`
 *
 *
 */
export const useWatchAlysNftp2PMarketOfferAcceptedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: alysNftp2PMarketAbi,
    address: alysNftp2PMarketAddress,
    eventName: 'OfferAccepted',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link alysNftp2PMarketAbi}__ and `eventName` set to `"OfferCancelled"`
 *
 *
 */
export const useWatchAlysNftp2PMarketOfferCancelledEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: alysNftp2PMarketAbi,
    address: alysNftp2PMarketAddress,
    eventName: 'OfferCancelled',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link alysNftp2PMarketAbi}__ and `eventName` set to `"OfferMade"`
 *
 *
 */
export const useWatchAlysNftp2PMarketOfferMadeEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: alysNftp2PMarketAbi,
    address: alysNftp2PMarketAddress,
    eventName: 'OfferMade',
  });

/**
 * Wraps __{@link useWatchContractEvent}__ with `abi` set to __{@link alysNftp2PMarketAbi}__ and `eventName` set to `"OfferRejected"`
 *
 *
 */
export const useWatchAlysNftp2PMarketOfferRejectedEvent =
  /*#__PURE__*/ createUseWatchContractEvent({
    abi: alysNftp2PMarketAbi,
    address: alysNftp2PMarketAddress,
    eventName: 'OfferRejected',
  });
