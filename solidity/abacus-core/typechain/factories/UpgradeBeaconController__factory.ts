/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */

import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type {
  UpgradeBeaconController,
  UpgradeBeaconControllerInterface,
} from "../UpgradeBeaconController";

const _abi = [
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "beacon",
        type: "address",
      },
      {
        indexed: false,
        internalType: "address",
        name: "implementation",
        type: "address",
      },
    ],
    name: "BeaconUpgraded",
    type: "event",
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
        internalType: "address",
        name: "_beacon",
        type: "address",
      },
      {
        internalType: "address",
        name: "_implementation",
        type: "address",
      },
    ],
    name: "upgrade",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b50600061001b61006a565b600080546001600160a01b0319166001600160a01b0383169081178255604051929350917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908290a35061006e565b3390565b6106b98061007d6000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c8063715018a6146100515780638da5cb5b1461005b57806399a88ec41461008c578063f2fde38b146100c7575b600080fd5b6100596100fa565b005b610063610211565b6040805173ffffffffffffffffffffffffffffffffffffffff9092168252519081900360200190f35b610059600480360360408110156100a257600080fd5b5073ffffffffffffffffffffffffffffffffffffffff8135811691602001351661022d565b610059600480360360208110156100dd57600080fd5b503573ffffffffffffffffffffffffffffffffffffffff166104b2565b610102610653565b73ffffffffffffffffffffffffffffffffffffffff16610120610211565b73ffffffffffffffffffffffffffffffffffffffff16146101a257604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b6000805460405173ffffffffffffffffffffffffffffffffffffffff909116907f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e0908390a3600080547fffffffffffffffffffffffff0000000000000000000000000000000000000000169055565b60005473ffffffffffffffffffffffffffffffffffffffff1690565b610235610653565b73ffffffffffffffffffffffffffffffffffffffff16610253610211565b73ffffffffffffffffffffffffffffffffffffffff16146102d557604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b6102de82610657565b61034957604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820152601060248201527f626561636f6e2021636f6e747261637400000000000000000000000000000000604482015290519081900360640190fd5b60008273ffffffffffffffffffffffffffffffffffffffff1682604051602001808273ffffffffffffffffffffffffffffffffffffffff1681526020019150506040516020818303038152906040526040518082805190602001908083835b602083106103e557805182527fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffe090920191602091820191016103a8565b6001836020036101000a0380198251168184511680821785525050505050509050019150506000604051808303816000865af19150503d8060008114610447576040519150601f19603f3d011682016040523d82523d6000602084013e61044c565b606091505b505090508061045f573d6000803e3d6000fd5b6040805173ffffffffffffffffffffffffffffffffffffffff84811682529151918516917fc945ae30494f6ee00b9e4bf1fec5653ced7244b559666f44f9a88ea732e957b09181900360200190a2505050565b6104ba610653565b73ffffffffffffffffffffffffffffffffffffffff166104d8610211565b73ffffffffffffffffffffffffffffffffffffffff161461055a57604080517f08c379a000000000000000000000000000000000000000000000000000000000815260206004820181905260248201527f4f776e61626c653a2063616c6c6572206973206e6f7420746865206f776e6572604482015290519081900360640190fd5b73ffffffffffffffffffffffffffffffffffffffff81166105c6576040517f08c379a000000000000000000000000000000000000000000000000000000000815260040180806020018281038252602681526020018061065e6026913960400191505060405180910390fd5b6000805460405173ffffffffffffffffffffffffffffffffffffffff808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a3600080547fffffffffffffffffffffffff00000000000000000000000000000000000000001673ffffffffffffffffffffffffffffffffffffffff92909216919091179055565b3390565b3b15159056fe4f776e61626c653a206e6577206f776e657220697320746865207a65726f2061646472657373a264697066735822122037b6854cc29d6915711f7e0e3bd20ec11dc989d231d211f19f09c69f5386505e64736f6c63430007060033";

export class UpgradeBeaconController__factory extends ContractFactory {
  constructor(signer?: Signer) {
    super(_abi, _bytecode, signer);
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<UpgradeBeaconController> {
    return super.deploy(overrides || {}) as Promise<UpgradeBeaconController>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): UpgradeBeaconController {
    return super.attach(address) as UpgradeBeaconController;
  }
  connect(signer: Signer): UpgradeBeaconController__factory {
    return super.connect(signer) as UpgradeBeaconController__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): UpgradeBeaconControllerInterface {
    return new utils.Interface(_abi) as UpgradeBeaconControllerInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): UpgradeBeaconController {
    return new Contract(
      address,
      _abi,
      signerOrProvider
    ) as UpgradeBeaconController;
  }
}
