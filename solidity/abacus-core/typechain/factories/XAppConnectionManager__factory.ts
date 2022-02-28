/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  XAppConnectionManager,
  XAppConnectionManagerInterface,
} from "../XAppConnectionManager";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "previousOwner",
        type: "address",
      },
      {
        indexed: true,
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "OwnershipTransferred",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint32",
        name: "domain",
        type: "uint32",
      },
      {
        indexed: false,
        internalType: "address",
        name: "replica",
        type: "address",
      },
    ],
    name: "ReplicaEnrolled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint32",
        name: "domain",
        type: "uint32",
      },
      {
        indexed: false,
        internalType: "address",
        name: "replica",
        type: "address",
      },
    ],
    name: "ReplicaUnenrolled",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "uint32",
        name: "domain",
        type: "uint32",
      },
      {
        indexed: false,
        internalType: "address",
        name: "watcher",
        type: "address",
      },
      {
        indexed: false,
        internalType: "bool",
        name: "access",
        type: "bool",
      },
    ],
    name: "WatcherPermissionSet",
    type: "event",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    name: "domainToReplica",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "home",
    outputs: [
      {
        internalType: "contract Home",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_replica",
        type: "address",
      },
    ],
    name: "isReplica",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "localDomain",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_replica",
        type: "address",
      },
      {
        internalType: "uint32",
        name: "_domain",
        type: "uint32",
      },
    ],
    name: "ownerEnrollReplica",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_replica",
        type: "address",
      },
    ],
    name: "ownerUnenrollReplica",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "renounceOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "",
        type: "address",
      },
    ],
    name: "replicaToDomain",
    outputs: [
      {
        internalType: "uint32",
        name: "",
        type: "uint32",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_home",
        type: "address",
      },
    ],
    name: "setHome",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_watcher",
        type: "address",
      },
      {
        internalType: "uint32",
        name: "_domain",
        type: "uint32",
      },
      {
        internalType: "bool",
        name: "_access",
        type: "bool",
      },
    ],
    name: "setWatcherPermission",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "newOwner",
        type: "address",
      },
    ],
    name: "transferOwnership",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint32",
        name: "_domain",
        type: "uint32",
      },
      {
        internalType: "bytes32",
        name: "_updater",
        type: "bytes32",
      },
      {
        internalType: "bytes",
        name: "_signature",
        type: "bytes",
      },
    ],
    name: "unenrollReplica",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "address",
        name: "_watcher",
        type: "address",
      },
      {
        internalType: "uint32",
        name: "_domain",
        type: "uint32",
      },
    ],
    name: "watcherPermission",
    outputs: [
      {
        internalType: "bool",
        name: "",
        type: "bool",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50600061001b61006a565b600080546001600160a01b0319166001600160a01b0383169081178255604051929350917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a35061006e565b3390565b6114808061007d6000396000f3fe608060405234801561001057600080fd5b50600436106100ea5760003560e01c80638f5d90e01161008c578063b9cff16211610066578063b9cff162146102b9578063e0e7a913146102dc578063f2fde38b14610394578063f31faefb146103c7576100ea565b80638f5d90e014610237578063916c34701461026a5780639fa92f9d146102b1576100ea565b80636ef0f37f116100c85780636ef0f37f146101c1578063715018a6146101f65780638d3638f4146101fe5780638da5cb5b14610206576100ea565b8063427ebef5146100ef5780635190bc53146101425780635f8b1dba14610175575b600080fd5b61012e6004803603604081101561010557600080fd5b50803573ffffffffffffffffffffffffffffffffffffffff16906020013563ffffffff16610406565b604080519115158252519081900360200190f35b61012e6004803603602081101561015857600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16610446565b6101a86004803603602081101561018b57600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16610476565b6040805163ffffffff9092168252519081900360200190f35b6101f4600480360360208110156101d757600080fd5b503573ffffffffffffffffffffffffffffffffffffffff1661048e565b005b6101f461057d565b6101a8610694565b61020e610730565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b6101f46004803603602081101561024d57600080fd5b503573ffffffffffffffffffffffffffffffffffffffff1661074c565b6101f46004803603606081101561028057600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135169063ffffffff60208201351690604001351515610800565b61020e61094e565b61020e600480360360208110156102cf57600080fd5b503563ffffffff1661096a565b6101f4600480360360608110156102f257600080fd5b63ffffffff8235169160208101359181019060608101604082013564010000000081111561031f57600080fd5b82018360208201111561033157600080fd5b8035906020019184600183028401116401000000008311171561035357600080fd5b91908080601f016020809104026020016040519081016040528093929190818152602001838380828437600092019190915250929550610992945050505050565b6101f4600480360360208110156103aa57600080fd5b503573ffffffffffffffffffffffffffffffffffffffff16610c0b565b6101f4600480360360408110156103dd57600080fd5b50803573ffffffffffffffffffffffffffffffffffffffff16906020013563ffffffff16610dac565b73ffffffffffffffffffffffffffffffffffffffff8216600090815260046020908152604080832063ffffffff8516845290915290205460ff1692915050565b73ffffffffffffffffffffffffffffffffffffffff1660009081526002602052604090205463ffffffff16151590565b60026020526000908152604090205463ffffffff1681565b610496610f20565b73ffffffffffffffffffffffffffffffffffffffff166104b4610730565b73ffffffffffffffffffffffffffffffffffffffff161461053657604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b600180547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b610585610f20565b73ffffffffffffffffffffffffffffffffffffffff166105a3610730565b73ffffffffffffffffffffffffffffffffffffffff161461062557604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b6000805460405173ffffffffffffffffffffffffffffffffffffffff909116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a3600080547fffffffffffffffffffffffff0000000000000000000000000000000000000000169055565b600154604080517f8d3638f4000000000000000000000000000000000000000000000000000000008152905160009273ffffffffffffffffffffffffffffffffffffffff1691638d3638f4916004808301926020929190829003018186803b1580156106ff57600080fd5b505afa158015610713573d6000803e3d6000fd5b505050506040513d602081101561072957600080fd5b5051905090565b60005473ffffffffffffffffffffffffffffffffffffffff1690565b610754610f20565b73ffffffffffffffffffffffffffffffffffffffff16610772610730565b73ffffffffffffffffffffffffffffffffffffffff16146107f457604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b6107fd81610f24565b50565b610808610f20565b73ffffffffffffffffffffffffffffffffffffffff16610826610730565b73ffffffffffffffffffffffffffffffffffffffff16146108a857604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b73ffffffffffffffffffffffffffffffffffffffff8316600081815260046020908152604080832063ffffffff87168085529083529281902080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff0016861515908117909155815194855291840191909152805191927f517de16b526853f481451c5151e87484e1b251ec7d0302efa1019c2ece179c2c929081900390910190a2505050565b60015473ffffffffffffffffffffffffffffffffffffffff1681565b60036020526000908152604090205473ffffffffffffffffffffffffffffffffffffffff1681565b63ffffffff831660009081526003602052604090205473ffffffffffffffffffffffffffffffffffffffff1680610a2a57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600f60248201527f217265706c696361206578697374730000000000000000000000000000000000604482015290519081900360640190fd5b610a3383610fec565b73ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff1663df034cd06040518163ffffffff1660e01b815260040160206040518083038186803b158015610a8f57600080fd5b505afa158015610aa3573d6000803e3d6000fd5b505050506040513d6020811015610ab957600080fd5b505173ffffffffffffffffffffffffffffffffffffffff1614610b3d57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f2163757272656e74207570646174657200000000000000000000000000000000604482015290519081900360640190fd5b6000610b5385610b4c84610fef565b8686611008565b73ffffffffffffffffffffffffffffffffffffffff8116600090815260046020908152604080832063ffffffff8a16845290915290205490915060ff16610bfb57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152600e60248201527f2176616c69642077617463686572000000000000000000000000000000000000604482015290519081900360640190fd5b610c0482610f24565b5050505050565b610c13610f20565b73ffffffffffffffffffffffffffffffffffffffff16610c31610730565b73ffffffffffffffffffffffffffffffffffffffff1614610cb357604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b73ffffffffffffffffffffffffffffffffffffffff8116610d1f576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260268152602001806113e16026913960400191505060405180910390fd5b6000805460405173ffffffffffffffffffffffffffffffffffffffff808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b610db4610f20565b73ffffffffffffffffffffffffffffffffffffffff16610dd2610730565b73ffffffffffffffffffffffffffffffffffffffff1614610e5457604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b610e5d82610f24565b73ffffffffffffffffffffffffffffffffffffffff8216600081815260026020908152604080832080547fffffffffffffffffffffffffffffffffffffffffffffffffffffffff000000001663ffffffff8716908117909155808452600383529281902080547fffffffffffffffffffffffff0000000000000000000000000000000000000000168517905580519384525191927f8440df9bf8a8542634a9eb196da1735b786ed9aa2fc12b080ac34c5fa81a9234929081900390910190a25050565b3390565b73ffffffffffffffffffffffffffffffffffffffff81166000818152600260208181526040808420805463ffffffff168086526003845282862080547fffffffffffffffffffffffff00000000000000000000000000000000000000001690559486905292825282547fffffffffffffffffffffffffffffffffffffffffffffffffffffffff000000001690925581519384529051919283927fce1533133fb359ace801d3176bbad25ace030d714aed35e38a6293c8a60b115b929181900390910190a25050565b90565b73ffffffffffffffffffffffffffffffffffffffff1690565b60008061101485610fec565b73ffffffffffffffffffffffffffffffffffffffff166345630b1a6040518163ffffffff1660e01b815260040160206040518083038186803b15801561105957600080fd5b505afa15801561106d573d6000803e3d6000fd5b505050506040513d602081101561108357600080fd5b50516040805160208181018490527fffffffff0000000000000000000000000000000000000000000000000000000060e08b901b1682840152604480830189905283518084039091018152606490920190925280519101209091506110e7816110fe565b90506110f3818561114f565b979650505050505050565b604080517f19457468657265756d205369676e6564204d6573736167653a0a333200000000602080830191909152603c8083019490945282518083039094018452605c909101909152815191012090565b600081516041146111c157604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601f60248201527f45434453413a20696e76616c6964207369676e6174757265206c656e67746800604482015290519081900360640190fd5b60208201516040830151606084015160001a6111df868285856111e9565b9695505050505050565b60007f7fffffffffffffffffffffffffffffff5d576e7357a4501ddfe92f46681b20a0821115611264576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260228152602001806114076022913960400191505060405180910390fd5b8360ff16601b148061127957508360ff16601c145b6112ce576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825260228152602001806114296022913960400191505060405180910390fd5b600060018686868660405160008152602001604052604051808581526020018460ff1681526020018381526020018281526020019450505050506020604051602081039080840390855afa15801561132a573d6000803e3d6000fd5b50506040517fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe0015191505073ffffffffffffffffffffffffffffffffffffffff81166113d757604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601860248201527f45434453413a20696e76616c6964207369676e61747572650000000000000000604482015290519081900360640190fd5b9594505050505056fe4f776e61626c653a206e6577206f776e657220697320746865207a65726f206164647265737345434453413a20696e76616c6964207369676e6174757265202773272076616c756545434453413a20696e76616c6964207369676e6174757265202776272076616c7565a2646970667358221220be451a4f4e7d1878f1a90fa951463423ef35b668327544556fbec063e867265064736f6c63430007060033";

export class XAppConnectionManager__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<XAppConnectionManager> {
    return super.deploy(overrides || {}) as Promise<XAppConnectionManager>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): XAppConnectionManager {
    return super.attach(address) as XAppConnectionManager;
  }
  connect(signer: Signer): XAppConnectionManager__factory {
    return super.connect(signer) as XAppConnectionManager__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): XAppConnectionManagerInterface {
    return new utils.Interface(_abi) as XAppConnectionManagerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): XAppConnectionManager {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as XAppConnectionManager;
  }
}
