import { defineConfig } from '@wagmi/cli';
import { react } from '@wagmi/cli/plugins';
import { chains } from '@/config/chains';

export default defineConfig({
  out: 'src/wagmi.generated.ts',
  contracts: [
    {
      name: 'AlysNFT',
      address: {
        [chains.alys.id]: '0x503cae3000aac78583b641fe74a4d81fd7de64e7',
      },
      abi: [
        {
          type: 'constructor',
          inputs: [
            {
              name: 'initialOwner',
              type: 'address',
              internalType: 'address',
            },
          ],
          stateMutability: 'nonpayable',
        },
        {
          type: 'function',
          name: 'RECIPIENT_WALLET',
          inputs: [],
          outputs: [
            {
              name: '',
              type: 'address',
              internalType: 'address',
            },
          ],
          stateMutability: 'view',
        },
        {
          type: 'function',
          name: 'approve',
          inputs: [
            {
              name: 'to',
              type: 'address',
              internalType: 'address',
            },
            {
              name: 'tokenId',
              type: 'uint256',
              internalType: 'uint256',
            },
          ],
          outputs: [],
          stateMutability: 'nonpayable',
        },
        {
          type: 'function',
          name: 'balanceOf',
          inputs: [
            {
              name: 'owner',
              type: 'address',
              internalType: 'address',
            },
          ],
          outputs: [
            {
              name: '',
              type: 'uint256',
              internalType: 'uint256',
            },
          ],
          stateMutability: 'view',
        },
        {
          type: 'function',
          name: 'burn',
          inputs: [
            {
              name: 'tokenId',
              type: 'uint256',
              internalType: 'uint256',
            },
          ],
          outputs: [],
          stateMutability: 'nonpayable',
        },
        {
          type: 'function',
          name: 'createNFT',
          inputs: [
            {
              name: 'recipient',
              type: 'address',
              internalType: 'address',
            },
            {
              name: 'uri',
              type: 'string',
              internalType: 'string',
            },
            {
              name: 'price',
              type: 'uint256',
              internalType: 'uint256',
            },
            {
              name: 'ticker',
              type: 'string',
              internalType: 'string',
            },
            {
              name: 'units',
              type: 'uint32',
              internalType: 'uint32',
            },
          ],
          outputs: [
            {
              name: '',
              type: 'uint256',
              internalType: 'uint256',
            },
          ],
          stateMutability: 'payable',
        },
        {
          type: 'function',
          name: 'getAllNFTs',
          inputs: [],
          outputs: [
            {
              name: '',
              type: 'uint256[]',
              internalType: 'uint256[]',
            },
          ],
          stateMutability: 'view',
        },
        {
          type: 'function',
          name: 'getApproved',
          inputs: [
            {
              name: 'tokenId',
              type: 'uint256',
              internalType: 'uint256',
            },
          ],
          outputs: [
            {
              name: '',
              type: 'address',
              internalType: 'address',
            },
          ],
          stateMutability: 'view',
        },
        {
          type: 'function',
          name: 'getNFTsOwnedBy',
          inputs: [
            {
              name: 'owner',
              type: 'address',
              internalType: 'address',
            },
          ],
          outputs: [
            {
              name: '',
              type: 'uint256[]',
              internalType: 'uint256[]',
            },
          ],
          stateMutability: 'view',
        },
        {
          type: 'function',
          name: 'getTokenTicker',
          inputs: [
            {
              name: 'tokenId',
              type: 'uint256',
              internalType: 'uint256',
            },
          ],
          outputs: [
            {
              name: '',
              type: 'string',
              internalType: 'string',
            },
          ],
          stateMutability: 'view',
        },
        {
          type: 'function',
          name: 'getTokenUnits',
          inputs: [
            {
              name: 'tokenId',
              type: 'uint256',
              internalType: 'uint256',
            },
          ],
          outputs: [
            {
              name: '',
              type: 'uint256',
              internalType: 'uint256',
            },
          ],
          stateMutability: 'view',
        },
        {
          type: 'function',
          name: 'isApprovedForAll',
          inputs: [
            {
              name: 'owner',
              type: 'address',
              internalType: 'address',
            },
            {
              name: 'operator',
              type: 'address',
              internalType: 'address',
            },
          ],
          outputs: [
            {
              name: '',
              type: 'bool',
              internalType: 'bool',
            },
          ],
          stateMutability: 'view',
        },
        {
          type: 'function',
          name: 'name',
          inputs: [],
          outputs: [
            {
              name: '',
              type: 'string',
              internalType: 'string',
            },
          ],
          stateMutability: 'view',
        },
        {
          type: 'function',
          name: 'owner',
          inputs: [],
          outputs: [
            {
              name: '',
              type: 'address',
              internalType: 'address',
            },
          ],
          stateMutability: 'view',
        },
        {
          type: 'function',
          name: 'ownerOf',
          inputs: [
            {
              name: 'tokenId',
              type: 'uint256',
              internalType: 'uint256',
            },
          ],
          outputs: [
            {
              name: '',
              type: 'address',
              internalType: 'address',
            },
          ],
          stateMutability: 'view',
        },
        {
          type: 'function',
          name: 'renounceOwnership',
          inputs: [],
          outputs: [],
          stateMutability: 'nonpayable',
        },
        {
          type: 'function',
          name: 'safeTransferFrom',
          inputs: [
            {
              name: 'from',
              type: 'address',
              internalType: 'address',
            },
            {
              name: 'to',
              type: 'address',
              internalType: 'address',
            },
            {
              name: 'tokenId',
              type: 'uint256',
              internalType: 'uint256',
            },
          ],
          outputs: [],
          stateMutability: 'nonpayable',
        },
        {
          type: 'function',
          name: 'safeTransferFrom',
          inputs: [
            {
              name: 'from',
              type: 'address',
              internalType: 'address',
            },
            {
              name: 'to',
              type: 'address',
              internalType: 'address',
            },
            {
              name: 'tokenId',
              type: 'uint256',
              internalType: 'uint256',
            },
            {
              name: 'data',
              type: 'bytes',
              internalType: 'bytes',
            },
          ],
          outputs: [],
          stateMutability: 'nonpayable',
        },
        {
          type: 'function',
          name: 'setApprovalForAll',
          inputs: [
            {
              name: 'operator',
              type: 'address',
              internalType: 'address',
            },
            {
              name: 'approved',
              type: 'bool',
              internalType: 'bool',
            },
          ],
          outputs: [],
          stateMutability: 'nonpayable',
        },
        {
          type: 'function',
          name: 'supportsInterface',
          inputs: [
            {
              name: 'interfaceId',
              type: 'bytes4',
              internalType: 'bytes4',
            },
          ],
          outputs: [
            {
              name: '',
              type: 'bool',
              internalType: 'bool',
            },
          ],
          stateMutability: 'view',
        },
        {
          type: 'function',
          name: 'symbol',
          inputs: [],
          outputs: [
            {
              name: '',
              type: 'string',
              internalType: 'string',
            },
          ],
          stateMutability: 'view',
        },
        {
          type: 'function',
          name: 'tokenByIndex',
          inputs: [
            {
              name: 'index',
              type: 'uint256',
              internalType: 'uint256',
            },
          ],
          outputs: [
            {
              name: '',
              type: 'uint256',
              internalType: 'uint256',
            },
          ],
          stateMutability: 'view',
        },
        {
          type: 'function',
          name: 'tokenOfOwnerByIndex',
          inputs: [
            {
              name: 'owner',
              type: 'address',
              internalType: 'address',
            },
            {
              name: 'index',
              type: 'uint256',
              internalType: 'uint256',
            },
          ],
          outputs: [
            {
              name: '',
              type: 'uint256',
              internalType: 'uint256',
            },
          ],
          stateMutability: 'view',
        },
        {
          type: 'function',
          name: 'tokenURI',
          inputs: [
            {
              name: 'tokenId',
              type: 'uint256',
              internalType: 'uint256',
            },
          ],
          outputs: [
            {
              name: '',
              type: 'string',
              internalType: 'string',
            },
          ],
          stateMutability: 'view',
        },
        {
          type: 'function',
          name: 'totalSupply',
          inputs: [],
          outputs: [
            {
              name: '',
              type: 'uint256',
              internalType: 'uint256',
            },
          ],
          stateMutability: 'view',
        },
        {
          type: 'function',
          name: 'transferFrom',
          inputs: [
            {
              name: 'from',
              type: 'address',
              internalType: 'address',
            },
            {
              name: 'to',
              type: 'address',
              internalType: 'address',
            },
            {
              name: 'tokenId',
              type: 'uint256',
              internalType: 'uint256',
            },
          ],
          outputs: [],
          stateMutability: 'nonpayable',
        },
        {
          type: 'function',
          name: 'transferNFT',
          inputs: [
            {
              name: 'to',
              type: 'address',
              internalType: 'address',
            },
            {
              name: 'tokenId',
              type: 'uint256',
              internalType: 'uint256',
            },
          ],
          outputs: [
            {
              name: '',
              type: 'address',
              internalType: 'address',
            },
          ],
          stateMutability: 'nonpayable',
        },
        {
          type: 'function',
          name: 'transferOwnership',
          inputs: [
            {
              name: 'newOwner',
              type: 'address',
              internalType: 'address',
            },
          ],
          outputs: [],
          stateMutability: 'nonpayable',
        },
        {
          type: 'event',
          name: 'Approval',
          inputs: [
            {
              name: 'owner',
              type: 'address',
              indexed: true,
              internalType: 'address',
            },
            {
              name: 'approved',
              type: 'address',
              indexed: true,
              internalType: 'address',
            },
            {
              name: 'tokenId',
              type: 'uint256',
              indexed: true,
              internalType: 'uint256',
            },
          ],
          anonymous: false,
        },
        {
          type: 'event',
          name: 'ApprovalForAll',
          inputs: [
            {
              name: 'owner',
              type: 'address',
              indexed: true,
              internalType: 'address',
            },
            {
              name: 'operator',
              type: 'address',
              indexed: true,
              internalType: 'address',
            },
            {
              name: 'approved',
              type: 'bool',
              indexed: false,
              internalType: 'bool',
            },
          ],
          anonymous: false,
        },
        {
          type: 'event',
          name: 'BatchMetadataUpdate',
          inputs: [
            {
              name: '_fromTokenId',
              type: 'uint256',
              indexed: false,
              internalType: 'uint256',
            },
            {
              name: '_toTokenId',
              type: 'uint256',
              indexed: false,
              internalType: 'uint256',
            },
          ],
          anonymous: false,
        },
        {
          type: 'event',
          name: 'MetadataUpdate',
          inputs: [
            {
              name: '_tokenId',
              type: 'uint256',
              indexed: false,
              internalType: 'uint256',
            },
          ],
          anonymous: false,
        },
        {
          type: 'event',
          name: 'OwnershipTransferred',
          inputs: [
            {
              name: 'previousOwner',
              type: 'address',
              indexed: true,
              internalType: 'address',
            },
            {
              name: 'newOwner',
              type: 'address',
              indexed: true,
              internalType: 'address',
            },
          ],
          anonymous: false,
        },
        {
          type: 'event',
          name: 'Transfer',
          inputs: [
            {
              name: 'from',
              type: 'address',
              indexed: true,
              internalType: 'address',
            },
            {
              name: 'to',
              type: 'address',
              indexed: true,
              internalType: 'address',
            },
            {
              name: 'tokenId',
              type: 'uint256',
              indexed: true,
              internalType: 'uint256',
            },
          ],
          anonymous: false,
        },
        {
          type: 'error',
          name: 'ERC721EnumerableForbiddenBatchMint',
          inputs: [],
        },
        {
          type: 'error',
          name: 'ERC721IncorrectOwner',
          inputs: [
            {
              name: 'sender',
              type: 'address',
              internalType: 'address',
            },
            {
              name: 'tokenId',
              type: 'uint256',
              internalType: 'uint256',
            },
            {
              name: 'owner',
              type: 'address',
              internalType: 'address',
            },
          ],
        },
        {
          type: 'error',
          name: 'ERC721InsufficientApproval',
          inputs: [
            {
              name: 'operator',
              type: 'address',
              internalType: 'address',
            },
            {
              name: 'tokenId',
              type: 'uint256',
              internalType: 'uint256',
            },
          ],
        },
        {
          type: 'error',
          name: 'ERC721InvalidApprover',
          inputs: [
            {
              name: 'approver',
              type: 'address',
              internalType: 'address',
            },
          ],
        },
        {
          type: 'error',
          name: 'ERC721InvalidOperator',
          inputs: [
            {
              name: 'operator',
              type: 'address',
              internalType: 'address',
            },
          ],
        },
        {
          type: 'error',
          name: 'ERC721InvalidOwner',
          inputs: [
            {
              name: 'owner',
              type: 'address',
              internalType: 'address',
            },
          ],
        },
        {
          type: 'error',
          name: 'ERC721InvalidReceiver',
          inputs: [
            {
              name: 'receiver',
              type: 'address',
              internalType: 'address',
            },
          ],
        },
        {
          type: 'error',
          name: 'ERC721InvalidSender',
          inputs: [
            {
              name: 'sender',
              type: 'address',
              internalType: 'address',
            },
          ],
        },
        {
          type: 'error',
          name: 'ERC721NonexistentToken',
          inputs: [
            {
              name: 'tokenId',
              type: 'uint256',
              internalType: 'uint256',
            },
          ],
        },
        {
          type: 'error',
          name: 'ERC721OutOfBoundsIndex',
          inputs: [
            {
              name: 'owner',
              type: 'address',
              internalType: 'address',
            },
            {
              name: 'index',
              type: 'uint256',
              internalType: 'uint256',
            },
          ],
        },
        {
          type: 'error',
          name: 'OwnableInvalidOwner',
          inputs: [
            {
              name: 'owner',
              type: 'address',
              internalType: 'address',
            },
          ],
        },
        {
          type: 'error',
          name: 'OwnableUnauthorizedAccount',
          inputs: [
            {
              name: 'account',
              type: 'address',
              internalType: 'address',
            },
          ],
        },
      ],
    },
    {
      name: 'AlysNFTP2PMarket',
      address: {
        [chains.alys.id]: '0xe7b32384d4b4e3f474aea14c42b8317e939df593',
      },
      abi: [
        {
          type: 'constructor',
          inputs: [
            {
              name: '_nftContractAddress',
              type: 'address',
              internalType: 'address',
            },
          ],
          stateMutability: 'nonpayable',
        },
        {
          type: 'receive',
          stateMutability: 'payable',
        },
        {
          type: 'function',
          name: 'MAX_LTV_PERCENTAGE',
          inputs: [],
          outputs: [
            {
              name: '',
              type: 'uint256',
              internalType: 'uint256',
            },
          ],
          stateMutability: 'view',
        },
        {
          type: 'function',
          name: 'OFFER_DURATION',
          inputs: [],
          outputs: [
            {
              name: '',
              type: 'uint256',
              internalType: 'uint256',
            },
          ],
          stateMutability: 'view',
        },
        {
          type: 'function',
          name: 'PERCENTAGE_BASE',
          inputs: [],
          outputs: [
            {
              name: '',
              type: 'uint256',
              internalType: 'uint256',
            },
          ],
          stateMutability: 'view',
        },
        {
          type: 'function',
          name: 'PLATFORM_FEE_PERCENTAGE',
          inputs: [],
          outputs: [
            {
              name: '',
              type: 'uint256',
              internalType: 'uint256',
            },
          ],
          stateMutability: 'view',
        },
        {
          type: 'function',
          name: 'acceptLoanOffer',
          inputs: [
            {
              name: '_requestId',
              type: 'uint256',
              internalType: 'uint256',
            },
          ],
          outputs: [],
          stateMutability: 'nonpayable',
        },
        {
          type: 'function',
          name: 'acceptOffer',
          inputs: [
            {
              name: '_tokenId',
              type: 'uint256',
              internalType: 'uint256',
            },
          ],
          outputs: [],
          stateMutability: 'nonpayable',
        },
        {
          type: 'function',
          name: 'activeLoans',
          inputs: [
            {
              name: '',
              type: 'uint256',
              internalType: 'uint256',
            },
          ],
          outputs: [
            {
              name: 'borrower',
              type: 'address',
              internalType: 'address',
            },
            {
              name: 'lender',
              type: 'address',
              internalType: 'address',
            },
            {
              name: 'principal',
              type: 'uint256',
              internalType: 'uint256',
            },
            {
              name: 'interestRate',
              type: 'uint256',
              internalType: 'uint256',
            },
            {
              name: 'duration',
              type: 'uint256',
              internalType: 'uint256',
            },
            {
              name: 'startTime',
              type: 'uint256',
              internalType: 'uint256',
            },
            {
              name: 'isRepaid',
              type: 'bool',
              internalType: 'bool',
            },
          ],
          stateMutability: 'view',
        },
        {
          type: 'function',
          name: 'claimCollateral',
          inputs: [
            {
              name: '_loanId',
              type: 'uint256',
              internalType: 'uint256',
            },
          ],
          outputs: [],
          stateMutability: 'nonpayable',
        },
        {
          type: 'function',
          name: 'createLoanRequest',
          inputs: [
            {
              name: '_tokenIds',
              type: 'uint256[]',
              internalType: 'uint256[]',
            },
            {
              name: '_principal',
              type: 'uint256',
              internalType: 'uint256',
            },
            {
              name: '_totalValue',
              type: 'uint256',
              internalType: 'uint256',
            },
          ],
          outputs: [],
          stateMutability: 'nonpayable',
        },
        {
          type: 'function',
          name: 'getActiveListing',
          inputs: [
            {
              name: '_tokenId',
              type: 'uint256',
              internalType: 'uint256',
            },
          ],
          outputs: [
            {
              name: '',
              type: 'tuple',
              internalType: 'struct AlysNFTP2PMarket.Listing',
              components: [
                {
                  name: 'tokenId',
                  type: 'uint256',
                  internalType: 'uint256',
                },
                {
                  name: 'seller',
                  type: 'address',
                  internalType: 'address',
                },
                {
                  name: 'price',
                  type: 'uint256',
                  internalType: 'uint256',
                },
                {
                  name: 'isActive',
                  type: 'bool',
                  internalType: 'bool',
                },
              ],
            },
          ],
          stateMutability: 'view',
        },
        {
          type: 'function',
          name: 'getActiveLoan',
          inputs: [
            {
              name: '_loanId',
              type: 'uint256',
              internalType: 'uint256',
            },
          ],
          outputs: [
            {
              name: '',
              type: 'tuple',
              internalType: 'struct AlysNFTP2PMarket.ActiveLoan',
              components: [
                {
                  name: 'borrower',
                  type: 'address',
                  internalType: 'address',
                },
                {
                  name: 'lender',
                  type: 'address',
                  internalType: 'address',
                },
                {
                  name: 'tokenIds',
                  type: 'uint256[]',
                  internalType: 'uint256[]',
                },
                {
                  name: 'principal',
                  type: 'uint256',
                  internalType: 'uint256',
                },
                {
                  name: 'interestRate',
                  type: 'uint256',
                  internalType: 'uint256',
                },
                {
                  name: 'duration',
                  type: 'uint256',
                  internalType: 'uint256',
                },
                {
                  name: 'startTime',
                  type: 'uint256',
                  internalType: 'uint256',
                },
                {
                  name: 'isRepaid',
                  type: 'bool',
                  internalType: 'bool',
                },
              ],
            },
          ],
          stateMutability: 'view',
        },
        {
          type: 'function',
          name: 'getActiveOffer',
          inputs: [
            {
              name: '_tokenId',
              type: 'uint256',
              internalType: 'uint256',
            },
          ],
          outputs: [
            {
              name: '',
              type: 'tuple',
              internalType: 'struct AlysNFTP2PMarket.Offer',
              components: [
                {
                  name: 'buyer',
                  type: 'address',
                  internalType: 'address',
                },
                {
                  name: 'amount',
                  type: 'uint256',
                  internalType: 'uint256',
                },
                {
                  name: 'expirationTime',
                  type: 'uint256',
                  internalType: 'uint256',
                },
              ],
            },
          ],
          stateMutability: 'view',
        },
        {
          type: 'function',
          name: 'getLoanOffer',
          inputs: [
            {
              name: '_requestId',
              type: 'uint256',
              internalType: 'uint256',
            },
          ],
          outputs: [
            {
              name: '',
              type: 'tuple',
              internalType: 'struct AlysNFTP2PMarket.LoanOffer',
              components: [
                {
                  name: 'lender',
                  type: 'address',
                  internalType: 'address',
                },
                {
                  name: 'principal',
                  type: 'uint256',
                  internalType: 'uint256',
                },
                {
                  name: 'interestRate',
                  type: 'uint256',
                  internalType: 'uint256',
                },
                {
                  name: 'duration',
                  type: 'uint256',
                  internalType: 'uint256',
                },
                {
                  name: 'expirationTime',
                  type: 'uint256',
                  internalType: 'uint256',
                },
              ],
            },
          ],
          stateMutability: 'view',
        },
        {
          type: 'function',
          name: 'getLoanRequest',
          inputs: [
            {
              name: '_requestId',
              type: 'uint256',
              internalType: 'uint256',
            },
          ],
          outputs: [
            {
              name: '',
              type: 'tuple',
              internalType: 'struct AlysNFTP2PMarket.LoanRequest',
              components: [
                {
                  name: 'tokenIds',
                  type: 'uint256[]',
                  internalType: 'uint256[]',
                },
                {
                  name: 'borrower',
                  type: 'address',
                  internalType: 'address',
                },
                {
                  name: 'principal',
                  type: 'uint256',
                  internalType: 'uint256',
                },
                {
                  name: 'interestRate',
                  type: 'uint256',
                  internalType: 'uint256',
                },
                {
                  name: 'duration',
                  type: 'uint256',
                  internalType: 'uint256',
                },
                {
                  name: 'totalValue',
                  type: 'uint256',
                  internalType: 'uint256',
                },
                {
                  name: 'isActive',
                  type: 'bool',
                  internalType: 'bool',
                },
              ],
            },
          ],
          stateMutability: 'view',
        },
        {
          type: 'function',
          name: 'isNFTCollateral',
          inputs: [
            {
              name: '_tokenId',
              type: 'uint256',
              internalType: 'uint256',
            },
          ],
          outputs: [
            {
              name: '',
              type: 'bool',
              internalType: 'bool',
            },
          ],
          stateMutability: 'view',
        },
        {
          type: 'function',
          name: 'listNFT',
          inputs: [
            {
              name: '_tokenId',
              type: 'uint256',
              internalType: 'uint256',
            },
            {
              name: '_price',
              type: 'uint256',
              internalType: 'uint256',
            },
          ],
          outputs: [],
          stateMutability: 'nonpayable',
        },
        {
          type: 'function',
          name: 'listings',
          inputs: [
            {
              name: '',
              type: 'uint256',
              internalType: 'uint256',
            },
          ],
          outputs: [
            {
              name: 'tokenId',
              type: 'uint256',
              internalType: 'uint256',
            },
            {
              name: 'seller',
              type: 'address',
              internalType: 'address',
            },
            {
              name: 'price',
              type: 'uint256',
              internalType: 'uint256',
            },
            {
              name: 'isActive',
              type: 'bool',
              internalType: 'bool',
            },
          ],
          stateMutability: 'view',
        },
        {
          type: 'function',
          name: 'loanOffers',
          inputs: [
            {
              name: '',
              type: 'uint256',
              internalType: 'uint256',
            },
          ],
          outputs: [
            {
              name: 'lender',
              type: 'address',
              internalType: 'address',
            },
            {
              name: 'principal',
              type: 'uint256',
              internalType: 'uint256',
            },
            {
              name: 'interestRate',
              type: 'uint256',
              internalType: 'uint256',
            },
            {
              name: 'duration',
              type: 'uint256',
              internalType: 'uint256',
            },
            {
              name: 'expirationTime',
              type: 'uint256',
              internalType: 'uint256',
            },
          ],
          stateMutability: 'view',
        },
        {
          type: 'function',
          name: 'loanRequests',
          inputs: [
            {
              name: '',
              type: 'uint256',
              internalType: 'uint256',
            },
          ],
          outputs: [
            {
              name: 'borrower',
              type: 'address',
              internalType: 'address',
            },
            {
              name: 'principal',
              type: 'uint256',
              internalType: 'uint256',
            },
            {
              name: 'interestRate',
              type: 'uint256',
              internalType: 'uint256',
            },
            {
              name: 'duration',
              type: 'uint256',
              internalType: 'uint256',
            },
            {
              name: 'totalValue',
              type: 'uint256',
              internalType: 'uint256',
            },
            {
              name: 'isActive',
              type: 'bool',
              internalType: 'bool',
            },
          ],
          stateMutability: 'view',
        },
        {
          type: 'function',
          name: 'makeLoanOffer',
          inputs: [
            {
              name: '_requestId',
              type: 'uint256',
              internalType: 'uint256',
            },
            {
              name: '_principal',
              type: 'uint256',
              internalType: 'uint256',
            },
            {
              name: '_interestRate',
              type: 'uint256',
              internalType: 'uint256',
            },
            {
              name: '_duration',
              type: 'uint256',
              internalType: 'uint256',
            },
          ],
          outputs: [],
          stateMutability: 'payable',
        },
        {
          type: 'function',
          name: 'makeOffer',
          inputs: [
            {
              name: '_tokenId',
              type: 'uint256',
              internalType: 'uint256',
            },
          ],
          outputs: [],
          stateMutability: 'payable',
        },
        {
          type: 'function',
          name: 'nftContract',
          inputs: [],
          outputs: [
            {
              name: '',
              type: 'address',
              internalType: 'contract AlysNFT',
            },
          ],
          stateMutability: 'view',
        },
        {
          type: 'function',
          name: 'nftToActiveLoan',
          inputs: [
            {
              name: '',
              type: 'uint256',
              internalType: 'uint256',
            },
          ],
          outputs: [
            {
              name: '',
              type: 'uint256',
              internalType: 'uint256',
            },
          ],
          stateMutability: 'view',
        },
        {
          type: 'function',
          name: 'offers',
          inputs: [
            {
              name: '',
              type: 'uint256',
              internalType: 'uint256',
            },
          ],
          outputs: [
            {
              name: 'buyer',
              type: 'address',
              internalType: 'address',
            },
            {
              name: 'amount',
              type: 'uint256',
              internalType: 'uint256',
            },
            {
              name: 'expirationTime',
              type: 'uint256',
              internalType: 'uint256',
            },
          ],
          stateMutability: 'view',
        },
        {
          type: 'function',
          name: 'platformFeeRecipient',
          inputs: [],
          outputs: [
            {
              name: '',
              type: 'address',
              internalType: 'address',
            },
          ],
          stateMutability: 'view',
        },
        {
          type: 'function',
          name: 'rejectLoanOffer',
          inputs: [
            {
              name: '_requestId',
              type: 'uint256',
              internalType: 'uint256',
            },
          ],
          outputs: [],
          stateMutability: 'nonpayable',
        },
        {
          type: 'function',
          name: 'rejectOffer',
          inputs: [
            {
              name: '_tokenId',
              type: 'uint256',
              internalType: 'uint256',
            },
          ],
          outputs: [],
          stateMutability: 'nonpayable',
        },
        {
          type: 'function',
          name: 'repayLoan',
          inputs: [
            {
              name: '_loanId',
              type: 'uint256',
              internalType: 'uint256',
            },
          ],
          outputs: [],
          stateMutability: 'payable',
        },
        {
          type: 'function',
          name: 'unlistNFT',
          inputs: [
            {
              name: '_tokenId',
              type: 'uint256',
              internalType: 'uint256',
            },
          ],
          outputs: [],
          stateMutability: 'nonpayable',
        },
        {
          type: 'event',
          name: 'CollateralClaimed',
          inputs: [
            {
              name: 'loanId',
              type: 'uint256',
              indexed: true,
              internalType: 'uint256',
            },
            {
              name: 'lender',
              type: 'address',
              indexed: true,
              internalType: 'address',
            },
          ],
          anonymous: false,
        },
        {
          type: 'event',
          name: 'LoanOfferAccepted',
          inputs: [
            {
              name: 'loanId',
              type: 'uint256',
              indexed: true,
              internalType: 'uint256',
            },
            {
              name: 'borrower',
              type: 'address',
              indexed: true,
              internalType: 'address',
            },
            {
              name: 'lender',
              type: 'address',
              indexed: true,
              internalType: 'address',
            },
            {
              name: 'principal',
              type: 'uint256',
              indexed: false,
              internalType: 'uint256',
            },
          ],
          anonymous: false,
        },
        {
          type: 'event',
          name: 'LoanOfferMade',
          inputs: [
            {
              name: 'requestId',
              type: 'uint256',
              indexed: true,
              internalType: 'uint256',
            },
            {
              name: 'lender',
              type: 'address',
              indexed: true,
              internalType: 'address',
            },
            {
              name: 'principal',
              type: 'uint256',
              indexed: false,
              internalType: 'uint256',
            },
            {
              name: 'interestRate',
              type: 'uint256',
              indexed: false,
              internalType: 'uint256',
            },
            {
              name: 'duration',
              type: 'uint256',
              indexed: false,
              internalType: 'uint256',
            },
          ],
          anonymous: false,
        },
        {
          type: 'event',
          name: 'LoanOfferRejected',
          inputs: [
            {
              name: 'requestId',
              type: 'uint256',
              indexed: true,
              internalType: 'uint256',
            },
            {
              name: 'lender',
              type: 'address',
              indexed: true,
              internalType: 'address',
            },
            {
              name: 'amount',
              type: 'uint256',
              indexed: false,
              internalType: 'uint256',
            },
          ],
          anonymous: false,
        },
        {
          type: 'event',
          name: 'LoanRepaid',
          inputs: [
            {
              name: 'loanId',
              type: 'uint256',
              indexed: true,
              internalType: 'uint256',
            },
            {
              name: 'borrower',
              type: 'address',
              indexed: true,
              internalType: 'address',
            },
            {
              name: 'amountRepaid',
              type: 'uint256',
              indexed: false,
              internalType: 'uint256',
            },
          ],
          anonymous: false,
        },
        {
          type: 'event',
          name: 'LoanRequestCreated',
          inputs: [
            {
              name: 'requestId',
              type: 'uint256',
              indexed: true,
              internalType: 'uint256',
            },
            {
              name: 'borrower',
              type: 'address',
              indexed: true,
              internalType: 'address',
            },
            {
              name: 'principal',
              type: 'uint256',
              indexed: false,
              internalType: 'uint256',
            },
          ],
          anonymous: false,
        },
        {
          type: 'event',
          name: 'NFTListed',
          inputs: [
            {
              name: 'tokenId',
              type: 'uint256',
              indexed: true,
              internalType: 'uint256',
            },
            {
              name: 'seller',
              type: 'address',
              indexed: true,
              internalType: 'address',
            },
            {
              name: 'price',
              type: 'uint256',
              indexed: false,
              internalType: 'uint256',
            },
          ],
          anonymous: false,
        },
        {
          type: 'event',
          name: 'NFTUnlisted',
          inputs: [
            {
              name: 'tokenId',
              type: 'uint256',
              indexed: true,
              internalType: 'uint256',
            },
            {
              name: 'seller',
              type: 'address',
              indexed: true,
              internalType: 'address',
            },
          ],
          anonymous: false,
        },
        {
          type: 'event',
          name: 'OfferAccepted',
          inputs: [
            {
              name: 'tokenId',
              type: 'uint256',
              indexed: true,
              internalType: 'uint256',
            },
            {
              name: 'seller',
              type: 'address',
              indexed: true,
              internalType: 'address',
            },
            {
              name: 'buyer',
              type: 'address',
              indexed: true,
              internalType: 'address',
            },
            {
              name: 'amount',
              type: 'uint256',
              indexed: false,
              internalType: 'uint256',
            },
          ],
          anonymous: false,
        },
        {
          type: 'event',
          name: 'OfferCancelled',
          inputs: [
            {
              name: 'tokenId',
              type: 'uint256',
              indexed: true,
              internalType: 'uint256',
            },
            {
              name: 'buyer',
              type: 'address',
              indexed: true,
              internalType: 'address',
            },
          ],
          anonymous: false,
        },
        {
          type: 'event',
          name: 'OfferMade',
          inputs: [
            {
              name: 'tokenId',
              type: 'uint256',
              indexed: true,
              internalType: 'uint256',
            },
            {
              name: 'buyer',
              type: 'address',
              indexed: true,
              internalType: 'address',
            },
            {
              name: 'amount',
              type: 'uint256',
              indexed: false,
              internalType: 'uint256',
            },
          ],
          anonymous: false,
        },
        {
          type: 'event',
          name: 'OfferRejected',
          inputs: [
            {
              name: 'tokenId',
              type: 'uint256',
              indexed: true,
              internalType: 'uint256',
            },
            {
              name: 'buyer',
              type: 'address',
              indexed: true,
              internalType: 'address',
            },
            {
              name: 'amount',
              type: 'uint256',
              indexed: false,
              internalType: 'uint256',
            },
          ],
          anonymous: false,
        },
        {
          type: 'error',
          name: 'MathOverflowedMulDiv',
          inputs: [],
        },
        {
          type: 'error',
          name: 'ReentrancyGuardReentrantCall',
          inputs: [],
        },
      ],
    },
  ],
  plugins: [react()],
});
