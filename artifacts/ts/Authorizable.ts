export const Authorizable = 
{
  "contractName": "Authorizable",
  "abi": [
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "uint256"
        }
      ],
      "name": "authorities",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [],
      "name": "renounceOwnership",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "owner",
      "outputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [
        {
          "name": "",
          "type": "address"
        }
      ],
      "name": "authorized",
      "outputs": [
        {
          "name": "",
          "type": "bool"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_newOwner",
          "type": "address"
        }
      ],
      "name": "transferOwnership",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "authAddress",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "authorizedBy",
          "type": "address"
        }
      ],
      "name": "AddressAuthorized",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "addressRemoved",
          "type": "address"
        },
        {
          "indexed": false,
          "name": "authorizedBy",
          "type": "address"
        }
      ],
      "name": "AuthorizedAddressRemoved",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "previousOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipRenounced",
      "type": "event"
    },
    {
      "anonymous": false,
      "inputs": [
        {
          "indexed": true,
          "name": "previousOwner",
          "type": "address"
        },
        {
          "indexed": true,
          "name": "newOwner",
          "type": "address"
        }
      ],
      "name": "OwnershipTransferred",
      "type": "event"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_authTarget",
          "type": "address"
        }
      ],
      "name": "addAuthorizedAddress",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_authTarget",
          "type": "address"
        }
      ],
      "name": "removeAuthorizedAddress",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": false,
      "inputs": [
        {
          "name": "_authTarget",
          "type": "address"
        },
        {
          "name": "_index",
          "type": "uint256"
        }
      ],
      "name": "removeAuthorizedAddressAtIndex",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "getAuthorizedAddresses",
      "outputs": [
        {
          "name": "",
          "type": "address[]"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    }
  ],
  "bytecode": "0x6080604052336000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550611246806100536000396000f300608060405260043610610099576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806342f1181e1461009e578063494503d4146100e1578063707129391461014e578063715018a6146101915780638da5cb5b146101a85780639ad26744146101ff578063b91816111461024c578063d39de6e9146102a7578063f2fde38b14610313575b600080fd5b3480156100aa57600080fd5b506100df600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610356565b005b3480156100ed57600080fd5b5061010c6004803603810190808035906020019092919050505061063f565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561015a57600080fd5b5061018f600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061067d565b005b34801561019d57600080fd5b506101a6610a3d565b005b3480156101b457600080fd5b506101bd610b3f565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561020b57600080fd5b5061024a600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610b64565b005b34801561025857600080fd5b5061028d600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610fba565b604051808215151515815260200191505060405180910390f35b3480156102b357600080fd5b506102bc610fda565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b838110156102ff5780820151818401526020810190506102e4565b505050509050019250505060405180910390f35b34801561031f57600080fd5b50610354600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611068565b005b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156103b157600080fd5b600160008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1615606060405190810160405280602681526020017f546172676574206d757374206e6f7420616c726561647920626520617574686f81526020017f72697a65642e0000000000000000000000000000000000000000000000000000815250901515610504576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b838110156104c95780820151818401526020810190506104ae565b50505050905090810190601f1680156104f65780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b5060018060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555060028190806001815401808255809150509060018203906000526020600020016000909192909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550508073ffffffffffffffffffffffffffffffffffffffff167f8918da6429714f0e9c40ae7f270773e27fc8caf7a256e19807f859563b7514de33604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a250565b60028181548110151561064e57fe5b906000526020600020016000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156106da57600080fd5b600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16606060405190810160405280602281526020017f5461726765742061646472657373206d75737420626520617574686f72697a6581526020017f642e00000000000000000000000000000000000000000000000000000000000081525090151561082c576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b838110156107f15780820151818401526020810190506107d6565b50505050905090810190601f16801561081e5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b50600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81549060ff0219169055600090505b600280549050811015610a39578173ffffffffffffffffffffffffffffffffffffffff166002828154811015156108b457fe5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415610a2c57600260016002805490500381548110151561091257fe5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1660028281548110151561094c57fe5b9060005260206000200160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060016002818180549050039150816109ac91906111c9565b508173ffffffffffffffffffffffffffffffffffffffff167f1f32c1b084e2de0713b8fb16bd46bb9df710a3dbeae2f3ca93af46e016dcc6b033604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a2610a39565b8080600101915050610881565b5050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610a9857600080fd5b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167ff8df31144d9c2f0f6b59d69b8b98abd5459d07f2742c4df920b25aae33c6482060405160405180910390a260008060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610bbf57600080fd5b6002805490508110606060405190810160405280602781526020017f53706563696669656420617272617920696e646578206973206f7574206f662081526020017f626f756e64732e00000000000000000000000000000000000000000000000000815250901515610ccc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b83811015610c91578082015181840152602081019050610c76565b50505050905090810190601f168015610cbe5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b508173ffffffffffffffffffffffffffffffffffffffff16600282815481101515610cf357fe5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614606060405190810160405280602d81526020017f4164647265737320666f756e6420617420696e64657820646f6573206e6f742081526020017f6d61746368207461726765742e00000000000000000000000000000000000000815250901515610e3a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b83811015610dff578082015181840152602081019050610de4565b50505050905090810190601f168015610e2c5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b50600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81549060ff02191690556002600160028054905003815481101515610ea157fe5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600282815481101515610edb57fe5b9060005260206000200160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506001600281818054905003915081610f3b91906111c9565b508173ffffffffffffffffffffffffffffffffffffffff167f1f32c1b084e2de0713b8fb16bd46bb9df710a3dbeae2f3ca93af46e016dcc6b033604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a25050565b60016020528060005260406000206000915054906101000a900460ff1681565b6060600280548060200260200160405190810160405280929190818152602001828054801561105e57602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019060010190808311611014575b5050505050905090565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156110c357600080fd5b6110cc816110cf565b50565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415151561110b57600080fd5b8073ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b8154818355818111156111f0578183600052602060002091820191016111ef91906111f5565b5b505050565b61121791905b808211156112135760008160009055506001016111fb565b5090565b905600a165627a7a72305820d7fb29cc1c6469093ea5675676ed97672e7edfd8d12d8a2d28533baa698323a70029",
  "deployedBytecode": "0x608060405260043610610099576000357c0100000000000000000000000000000000000000000000000000000000900463ffffffff16806342f1181e1461009e578063494503d4146100e1578063707129391461014e578063715018a6146101915780638da5cb5b146101a85780639ad26744146101ff578063b91816111461024c578063d39de6e9146102a7578063f2fde38b14610313575b600080fd5b3480156100aa57600080fd5b506100df600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610356565b005b3480156100ed57600080fd5b5061010c6004803603810190808035906020019092919050505061063f565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561015a57600080fd5b5061018f600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919050505061067d565b005b34801561019d57600080fd5b506101a6610a3d565b005b3480156101b457600080fd5b506101bd610b3f565b604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390f35b34801561020b57600080fd5b5061024a600480360381019080803573ffffffffffffffffffffffffffffffffffffffff16906020019092919080359060200190929190505050610b64565b005b34801561025857600080fd5b5061028d600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050610fba565b604051808215151515815260200191505060405180910390f35b3480156102b357600080fd5b506102bc610fda565b6040518080602001828103825283818151815260200191508051906020019060200280838360005b838110156102ff5780820151818401526020810190506102e4565b505050509050019250505060405180910390f35b34801561031f57600080fd5b50610354600480360381019080803573ffffffffffffffffffffffffffffffffffffffff169060200190929190505050611068565b005b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156103b157600080fd5b600160008273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff1615606060405190810160405280602681526020017f546172676574206d757374206e6f7420616c726561647920626520617574686f81526020017f72697a65642e0000000000000000000000000000000000000000000000000000815250901515610504576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b838110156104c95780820151818401526020810190506104ae565b50505050905090810190601f1680156104f65780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b5060018060008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81548160ff02191690831515021790555060028190806001815401808255809150509060018203906000526020600020016000909192909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550508073ffffffffffffffffffffffffffffffffffffffff167f8918da6429714f0e9c40ae7f270773e27fc8caf7a256e19807f859563b7514de33604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a250565b60028181548110151561064e57fe5b906000526020600020016000915054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b60008060009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156106da57600080fd5b600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060009054906101000a900460ff16606060405190810160405280602281526020017f5461726765742061646472657373206d75737420626520617574686f72697a6581526020017f642e00000000000000000000000000000000000000000000000000000000000081525090151561082c576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b838110156107f15780820151818401526020810190506107d6565b50505050905090810190601f16801561081e5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b50600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81549060ff0219169055600090505b600280549050811015610a39578173ffffffffffffffffffffffffffffffffffffffff166002828154811015156108b457fe5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff161415610a2c57600260016002805490500381548110151561091257fe5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1660028281548110151561094c57fe5b9060005260206000200160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555060016002818180549050039150816109ac91906111c9565b508173ffffffffffffffffffffffffffffffffffffffff167f1f32c1b084e2de0713b8fb16bd46bb9df710a3dbeae2f3ca93af46e016dcc6b033604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a2610a39565b8080600101915050610881565b5050565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610a9857600080fd5b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167ff8df31144d9c2f0f6b59d69b8b98abd5459d07f2742c4df920b25aae33c6482060405160405180910390a260008060006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff160217905550565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1681565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff16141515610bbf57600080fd5b6002805490508110606060405190810160405280602781526020017f53706563696669656420617272617920696e646578206973206f7574206f662081526020017f626f756e64732e00000000000000000000000000000000000000000000000000815250901515610ccc576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b83811015610c91578082015181840152602081019050610c76565b50505050905090810190601f168015610cbe5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b508173ffffffffffffffffffffffffffffffffffffffff16600282815481101515610cf357fe5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1614606060405190810160405280602d81526020017f4164647265737320666f756e6420617420696e64657820646f6573206e6f742081526020017f6d61746368207461726765742e00000000000000000000000000000000000000815250901515610e3a576040517f08c379a00000000000000000000000000000000000000000000000000000000081526004018080602001828103825283818151815260200191508051906020019080838360005b83811015610dff578082015181840152602081019050610de4565b50505050905090810190601f168015610e2c5780820380516001836020036101000a031916815260200191505b509250505060405180910390fd5b50600160008373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060006101000a81549060ff02191690556002600160028054905003815481101515610ea157fe5b9060005260206000200160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff16600282815481101515610edb57fe5b9060005260206000200160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055506001600281818054905003915081610f3b91906111c9565b508173ffffffffffffffffffffffffffffffffffffffff167f1f32c1b084e2de0713b8fb16bd46bb9df710a3dbeae2f3ca93af46e016dcc6b033604051808273ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200191505060405180910390a25050565b60016020528060005260406000206000915054906101000a900460ff1681565b6060600280548060200260200160405190810160405280929190818152602001828054801561105e57602002820191906000526020600020905b8160009054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019060010190808311611014575b5050505050905090565b6000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff163373ffffffffffffffffffffffffffffffffffffffff161415156110c357600080fd5b6110cc816110cf565b50565b600073ffffffffffffffffffffffffffffffffffffffff168173ffffffffffffffffffffffffffffffffffffffff161415151561110b57600080fd5b8073ffffffffffffffffffffffffffffffffffffffff166000809054906101000a900473ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff167f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e060405160405180910390a3806000806101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555050565b8154818355818111156111f0578183600052602060002091820191016111ef91906111f5565b5b505050565b61121791905b808211156112135760008160009055506001016111fb565b5090565b905600a165627a7a72305820d7fb29cc1c6469093ea5675676ed97672e7edfd8d12d8a2d28533baa698323a70029",
  "sourceMap": "963:4845:3:-;;;575:10:5;567:5;;:18;;;;;;;;;;;;;;;;;;963:4845:3;;;;;;",
  "deployedSourceMap": "963:4845:3:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2599:558;;8:9:-1;5:2;;;30:1;27;20:12;5:2;2599:558:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;1721:28;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1721:28:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3324:980;;8:9:-1;5:2;;;30:1;27;20:12;5:2;3324:980:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;827:111:5;;8:9:-1;5:2;;;30:1;27;20:12;5:2;827:111:5;;;;;;238:20;;8:9:-1;5:2;;;30:1;27;20:12;5:2;238:20:5;;;;;;;;;;;;;;;;;;;;;;;;;;;4571:939:3;;8:9:-1;5:2;;;30:1;27;20:12;5:2;4571:939:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;1634:43;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1634:43:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5620:186;;8:9:-1;5:2;;;30:1;27;20:12;5:2;5620:186:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;5620:186:3;;;;;;;;;;;;;;;;;1100:103:5;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1100:103:5;;;;;;;;;;;;;;;;;;;;;;;;;;;;2599:558:3;719:5:5;;;;;;;;;;;705:19;;:10;:19;;;697:28;;;;;;;;2779:10:3;:23;2790:11;2779:23;;;;;;;;;;;;;;;;;;;;;;;;;2778:24;2816:25;;;;;;;;;;;;;;;;;;;;;;;2757:94;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;2757:94:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;2929:4;2903:10;:23;2914:11;2903:23;;;;;;;;;;;;;;;;:30;;;;;;;;;;;;;;;;;;2988:11;3005;2988:29;;39:1:-1;33:3;27:10;23:18;57:10;52:3;45:23;79:10;72:17;;0:93;2988:29:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3105:11;3074:76;;;3130:10;3074:76;;;;;;;;;;;;;;;;;;;;;;2599:558;:::o;1721:28::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;3324:980::-;3664:6;719:5:5;;;;;;;;;;;705:19;;:10;:19;;;697:28;;;;;;;;3489:10:3;:23;3500:11;3489:23;;;;;;;;;;;;;;;;;;;;;;;;;3526:21;;;;;;;;;;;;;;;;;;;;;;;3468:89;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;3468:89:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;3625:10;:23;3636:11;3625:23;;;;;;;;;;;;;;;;3618:30;;;;;;;;;;;3673:1;3664:10;;3659:639;3680:11;:18;;;;3676:1;:22;3659:639;;;3812:11;3794:29;;:11;3806:1;3794:14;;;;;;;;;;;;;;;;;;;;;;;;;;;:29;;;3790:498;;;3938:11;3971:1;3950:11;:18;;;;:22;3938:35;;;;;;;;;;;;;;;;;;;;;;;;;;;3921:11;3933:1;3921:14;;;;;;;;;;;;;;;;;;:52;;;;;;;;;;;;;;;;;;4062:1;4040:11;:23;;;;;;;;;;;;;;:::i;:::-;;4189:11;4143:107;;;4222:10;4143:107;;;;;;;;;;;;;;;;;;;;;;4268:5;;3790:498;3700:3;;;;;;;3659:639;;;3324:980;;:::o;827:111:5:-;719:5;;;;;;;;;;;705:19;;:10;:19;;;697:28;;;;;;;;903:5;;;;;;;;;;;884:25;;;;;;;;;;;;931:1;915:5;;:18;;;;;;;;;;;;;;;;;;827:111::o;238:20::-;;;;;;;;;;;;;:::o;4571:939:3:-;719:5:5;;;;;;;;;;;705:19;;:10;:19;;;697:28;;;;;;;;4809:11:3;:18;;;;4800:6;:27;4841:19;;;;;;;;;;;;;;;;;;;;;;;4779:91;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;4779:91:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;4999:11;4976:34;;:11;4988:6;4976:19;;;;;;;;;;;;;;;;;;;;;;;;;;;:34;;;5024:22;;;;;;;;;;;;;;;;;;;;;;;4955:101;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;23:1:-1;8:100;33:3;30:1;27:10;8:100;;;99:1;94:3;90:11;84:18;80:1;75:3;71:11;64:39;52:2;49:1;45:10;40:15;;8:100;;;12:14;4955:101:3;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5124:10;:23;5135:11;5124:23;;;;;;;;;;;;;;;;5117:30;;;;;;;;;;;5245:11;5278:1;5257:11;:18;;;;:22;5245:35;;;;;;;;;;;;;;;;;;;;;;;;;;;5223:11;5235:6;5223:19;;;;;;;;;;;;;;;;;;:57;;;;;;;;;;;;;;;;;;5355:1;5333:11;:23;;;;;;;;;;;;;;:::i;:::-;;5458:11;5420:83;;;5483:10;5420:83;;;;;;;;;;;;;;;;;;;;;;4571:939;;:::o;1634:43::-;;;;;;;;;;;;;;;;;;;;;;:::o;5620:186::-;5701:9;5788:11;5781:18;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;5620:186;:::o;1100:103:5:-;719:5;;;;;;;;;;;705:19;;:10;:19;;;697:28;;;;;;;;1169:29;1188:9;1169:18;:29::i;:::-;1100:103;:::o;1338:171::-;1429:1;1408:23;;:9;:23;;;;1400:32;;;;;;;;1471:9;1443:38;;1464:5;;;;;;;;;;;1443:38;;;;;;;;;;;;1495:9;1487:5;;:17;;;;;;;;;;;;;;;;;;1338:171;:::o;963:4845:3:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;:::o;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o",
  "source": "/*\n    Copyright 2018 Set Labs Inc.\n\n    Licensed under the Apache License, Version 2.0 (the \"License\");\n    you may not use this file except in compliance with the License.\n    You may obtain a copy of the License at\n\n    http://www.apache.org/licenses/LICENSE-2.0\n\n    Unless required by applicable law or agreed to in writing, software\n    distributed under the License is distributed on an \"AS IS\" BASIS,\n    WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n    See the License for the specific language governing permissions and\n    limitations under the License.\n*/\n\npragma solidity 0.4.24;\n\nimport { Ownable } from \"zeppelin-solidity/contracts/ownership/Ownable.sol\";\n\n\n/**\n * @title Authorizable\n * @author Set Protocol\n *\n * The Authorizable contract is an inherited contract that sets permissions on certain function calls\n * through the onlyAuthorized modifier. Permissions can be managed only by the Owner of the contract.\n */\ncontract Authorizable is\n    Ownable\n{\n\n    /* ============ Constants ============ */\n\n    // Error messages\n    string constant SENDER_NOT_AUTHORIZED = \"Sender not authorized to call this method.\";\n    string constant TARGET_NOT_AUTHORIZED = \"Target address must be authorized.\";\n    string constant TARGET_ALREADY_AUTHORIZED = \"Target must not already be authorized.\";\n    string constant INDEX_OUT_OF_BOUNDS = \"Specified array index is out of bounds.\";\n    string constant INDEX_ADDRESS_MISMATCH = \"Address found at index does not match target.\";\n\n    /* ============ State Variables ============ */\n\n    // Mapping of addresses to bool indicator of authorization\n    mapping (address => bool) public authorized;\n\n    // Array of authorized addresses\n    address[] public authorities;\n\n    /* ============ Modifiers ============ */\n\n    // Only authorized addresses can invoke functions with this modifier.\n    modifier onlyAuthorized {\n        require(\n            authorized[msg.sender],\n            SENDER_NOT_AUTHORIZED\n        );\n        _;\n    }\n\n    /* ============ Events ============ */\n\n    // Event emitted when new address is authorized.\n    event AddressAuthorized (\n        address indexed authAddress,\n        address authorizedBy\n    );\n\n    // Event emitted when address is deauthorized.\n    event AuthorizedAddressRemoved (\n        address indexed addressRemoved,\n        address authorizedBy\n    );\n\n    /* ============ Setters ============ */\n\n    /**\n     * Add authorized address to contract. Can only be set by owner.\n     *\n     * @param  _authTarget   The address of the new authorized contract\n     */\n\n    function addAuthorizedAddress(address _authTarget)\n        external\n        onlyOwner\n    {\n        // Require that address is not already authorized\n        require(\n            !authorized[_authTarget],\n            TARGET_ALREADY_AUTHORIZED\n        );\n\n        // Set address authority to true\n        authorized[_authTarget] = true;\n\n        // Add address to authorities array\n        authorities.push(_authTarget);\n\n        // Emit authorized address event\n        emit AddressAuthorized(\n            _authTarget,\n            msg.sender\n        );\n    }\n\n    /**\n     * Remove authorized address from contract. Can only be set by owner.\n     *\n     * @param  _authTarget   The address to be de-permissioned\n     */\n\n    function removeAuthorizedAddress(address _authTarget)\n        external\n        onlyOwner\n    {\n        // Require address is authorized\n        require(\n            authorized[_authTarget],\n            TARGET_NOT_AUTHORIZED\n        );\n\n        // Delete address from authorized mapping\n        delete authorized[_authTarget];\n\n        for (uint i = 0; i < authorities.length; i++) {\n\n            // Check if address in authorities matches target address\n            if (authorities[i] == _authTarget) {\n\n                // Set target address index value to address at end of array\n                authorities[i] = authorities[authorities.length - 1];\n\n                // Delete last address in array\n                authorities.length -= 1;\n\n                // Emit AuthorizedAddressRemoved event.\n                emit AuthorizedAddressRemoved(\n                    _authTarget,\n                    msg.sender\n                );\n                break;\n            }\n        }\n    }\n\n    /**\n     * More efficiently remove authorized address from contract. Can only be set by owner.\n     *\n     * @param  _authTarget   The address to be de-permissioned\n     * @param _index           The index of the _authTarget address in authorities\n     */\n\n    function removeAuthorizedAddressAtIndex(\n        address _authTarget,\n        uint256 _index\n    )\n        external\n        onlyOwner\n    {\n        // Require index is less than length of authorities\n        require(\n            _index < authorities.length,\n            INDEX_OUT_OF_BOUNDS\n        );\n\n        // Require address at index of authorities matches target address\n        require(\n            authorities[_index] == _authTarget,\n            INDEX_ADDRESS_MISMATCH\n        );\n\n        // Delete address from authorized mapping\n        delete authorized[_authTarget];\n\n        // Replace address at index with address at end of array\n        authorities[_index] = authorities[authorities.length - 1];\n\n        // Remove last address from array\n        authorities.length -= 1;\n\n        // Emit AuthorizedAddressRemoved event.\n        emit AuthorizedAddressRemoved(\n            _authTarget,\n            msg.sender\n        );\n    }\n\n    /* ============ Getters ============ */\n\n    /**\n     * Get array of authorized addresses.\n     */\n\n    function getAuthorizedAddresses()\n        external\n        view\n        returns (address[] memory)\n    {\n        // Return array of authorized addresses\n        return authorities;\n    }\n}\n",
  "sourcePath": "/Users/justinkchen/workspace/set-protocol-contracts/contracts/lib/Authorizable.sol",
  "ast": {
    "absolutePath": "/Users/justinkchen/workspace/set-protocol-contracts/contracts/lib/Authorizable.sol",
    "exportedSymbols": {
      "Authorizable": [
        789
      ]
    },
    "id": 790,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 576,
        "literals": [
          "solidity",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "597:23:3"
      },
      {
        "absolutePath": "zeppelin-solidity/contracts/ownership/Ownable.sol",
        "file": "zeppelin-solidity/contracts/ownership/Ownable.sol",
        "id": 578,
        "nodeType": "ImportDirective",
        "scope": 790,
        "sourceUnit": 970,
        "src": "622:76:3",
        "symbolAliases": [
          {
            "foreign": 577,
            "local": null
          }
        ],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 579,
              "name": "Ownable",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 969,
              "src": "992:7:3",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_Ownable_$969",
                "typeString": "contract Ownable"
              }
            },
            "id": 580,
            "nodeType": "InheritanceSpecifier",
            "src": "992:7:3"
          }
        ],
        "contractDependencies": [
          969
        ],
        "contractKind": "contract",
        "documentation": "@title Authorizable\n@author Set Protocol\n * The Authorizable contract is an inherited contract that sets permissions on certain function calls\nthrough the onlyAuthorized modifier. Permissions can be managed only by the Owner of the contract.",
        "fullyImplemented": true,
        "id": 789,
        "linearizedBaseContracts": [
          789,
          969
        ],
        "name": "Authorizable",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": true,
            "id": 583,
            "name": "SENDER_NOT_AUTHORIZED",
            "nodeType": "VariableDeclaration",
            "scope": 789,
            "src": "1076:84:3",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_string_memory",
              "typeString": "string"
            },
            "typeName": {
              "id": 581,
              "name": "string",
              "nodeType": "ElementaryTypeName",
              "src": "1076:6:3",
              "typeDescriptions": {
                "typeIdentifier": "t_string_storage_ptr",
                "typeString": "string"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "53656e646572206e6f7420617574686f72697a656420746f2063616c6c2074686973206d6574686f642e",
              "id": 582,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "string",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "1116:44:3",
              "subdenomination": null,
              "typeDescriptions": {
                "typeIdentifier": "t_stringliteral_10199b21ebf84935aea33a882c0275c251121b4f5714541946187192f7438169",
                "typeString": "literal_string \"Sender not authorized to call this method.\""
              },
              "value": "Sender not authorized to call this method."
            },
            "visibility": "internal"
          },
          {
            "constant": true,
            "id": 586,
            "name": "TARGET_NOT_AUTHORIZED",
            "nodeType": "VariableDeclaration",
            "scope": 789,
            "src": "1166:76:3",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_string_memory",
              "typeString": "string"
            },
            "typeName": {
              "id": 584,
              "name": "string",
              "nodeType": "ElementaryTypeName",
              "src": "1166:6:3",
              "typeDescriptions": {
                "typeIdentifier": "t_string_storage_ptr",
                "typeString": "string"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "5461726765742061646472657373206d75737420626520617574686f72697a65642e",
              "id": 585,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "string",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "1206:36:3",
              "subdenomination": null,
              "typeDescriptions": {
                "typeIdentifier": "t_stringliteral_366140ba62d6876f8f5ac81ce449a05cc217fd70a2a6c4fe20968a2c9a7459fa",
                "typeString": "literal_string \"Target address must be authorized.\""
              },
              "value": "Target address must be authorized."
            },
            "visibility": "internal"
          },
          {
            "constant": true,
            "id": 589,
            "name": "TARGET_ALREADY_AUTHORIZED",
            "nodeType": "VariableDeclaration",
            "scope": 789,
            "src": "1248:84:3",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_string_memory",
              "typeString": "string"
            },
            "typeName": {
              "id": 587,
              "name": "string",
              "nodeType": "ElementaryTypeName",
              "src": "1248:6:3",
              "typeDescriptions": {
                "typeIdentifier": "t_string_storage_ptr",
                "typeString": "string"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "546172676574206d757374206e6f7420616c726561647920626520617574686f72697a65642e",
              "id": 588,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "string",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "1292:40:3",
              "subdenomination": null,
              "typeDescriptions": {
                "typeIdentifier": "t_stringliteral_a33a2795a8a1f2c72bcb412f76b44eb9cb4c52e6a307350a3f6ddaeb1809efd7",
                "typeString": "literal_string \"Target must not already be authorized.\""
              },
              "value": "Target must not already be authorized."
            },
            "visibility": "internal"
          },
          {
            "constant": true,
            "id": 592,
            "name": "INDEX_OUT_OF_BOUNDS",
            "nodeType": "VariableDeclaration",
            "scope": 789,
            "src": "1338:79:3",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_string_memory",
              "typeString": "string"
            },
            "typeName": {
              "id": 590,
              "name": "string",
              "nodeType": "ElementaryTypeName",
              "src": "1338:6:3",
              "typeDescriptions": {
                "typeIdentifier": "t_string_storage_ptr",
                "typeString": "string"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "53706563696669656420617272617920696e646578206973206f7574206f6620626f756e64732e",
              "id": 591,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "string",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "1376:41:3",
              "subdenomination": null,
              "typeDescriptions": {
                "typeIdentifier": "t_stringliteral_1638541c6ab382534775b3e33e4efa6ebe87533c9f35a0f2f538e2ab60ef9410",
                "typeString": "literal_string \"Specified array index is out of bounds.\""
              },
              "value": "Specified array index is out of bounds."
            },
            "visibility": "internal"
          },
          {
            "constant": true,
            "id": 595,
            "name": "INDEX_ADDRESS_MISMATCH",
            "nodeType": "VariableDeclaration",
            "scope": 789,
            "src": "1423:88:3",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_string_memory",
              "typeString": "string"
            },
            "typeName": {
              "id": 593,
              "name": "string",
              "nodeType": "ElementaryTypeName",
              "src": "1423:6:3",
              "typeDescriptions": {
                "typeIdentifier": "t_string_storage_ptr",
                "typeString": "string"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "4164647265737320666f756e6420617420696e64657820646f6573206e6f74206d61746368207461726765742e",
              "id": 594,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "string",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "1464:47:3",
              "subdenomination": null,
              "typeDescriptions": {
                "typeIdentifier": "t_stringliteral_8c3cba7e3f322cab1ee42269305798e851a629466be226218b19fcb7d615b25c",
                "typeString": "literal_string \"Address found at index does not match target.\""
              },
              "value": "Address found at index does not match target."
            },
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 599,
            "name": "authorized",
            "nodeType": "VariableDeclaration",
            "scope": 789,
            "src": "1634:43:3",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
              "typeString": "mapping(address => bool)"
            },
            "typeName": {
              "id": 598,
              "keyType": {
                "id": 596,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "1643:7:3",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "nodeType": "Mapping",
              "src": "1634:25:3",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                "typeString": "mapping(address => bool)"
              },
              "valueType": {
                "id": 597,
                "name": "bool",
                "nodeType": "ElementaryTypeName",
                "src": "1654:4:3",
                "typeDescriptions": {
                  "typeIdentifier": "t_bool",
                  "typeString": "bool"
                }
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 602,
            "name": "authorities",
            "nodeType": "VariableDeclaration",
            "scope": 789,
            "src": "1721:28:3",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_array$_t_address_$dyn_storage",
              "typeString": "address[]"
            },
            "typeName": {
              "baseType": {
                "id": 600,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "1721:7:3",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "id": 601,
              "length": null,
              "nodeType": "ArrayTypeName",
              "src": "1721:9:3",
              "typeDescriptions": {
                "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                "typeString": "address[]"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 613,
              "nodeType": "Block",
              "src": "1901:116:3",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 605,
                          "name": "authorized",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 599,
                          "src": "1932:10:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                            "typeString": "mapping(address => bool)"
                          }
                        },
                        "id": 608,
                        "indexExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 606,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1436,
                            "src": "1943:3:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 607,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "1943:10:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "1932:22:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 609,
                        "name": "SENDER_NOT_AUTHORIZED",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 583,
                        "src": "1968:21:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_string_memory",
                          "typeString": "string memory"
                        }
                      ],
                      "id": 604,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        1439,
                        1440
                      ],
                      "referencedDeclaration": 1440,
                      "src": "1911:7:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 610,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1911:88:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 611,
                  "nodeType": "ExpressionStatement",
                  "src": "1911:88:3"
                },
                {
                  "id": 612,
                  "nodeType": "PlaceholderStatement",
                  "src": "2009:1:3"
                }
              ]
            },
            "documentation": null,
            "id": 614,
            "name": "onlyAuthorized",
            "nodeType": "ModifierDefinition",
            "parameters": {
              "id": 603,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1901:0:3"
            },
            "src": "1877:140:3",
            "visibility": "internal"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 620,
            "name": "AddressAuthorized",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 619,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 616,
                  "indexed": true,
                  "name": "authAddress",
                  "nodeType": "VariableDeclaration",
                  "scope": 620,
                  "src": "2154:27:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 615,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2154:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 618,
                  "indexed": false,
                  "name": "authorizedBy",
                  "nodeType": "VariableDeclaration",
                  "scope": 620,
                  "src": "2191:20:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 617,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2191:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2144:73:3"
            },
            "src": "2120:98:3"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 626,
            "name": "AuthorizedAddressRemoved",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 625,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 622,
                  "indexed": true,
                  "name": "addressRemoved",
                  "nodeType": "VariableDeclaration",
                  "scope": 626,
                  "src": "2316:30:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 621,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2316:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 624,
                  "indexed": false,
                  "name": "authorizedBy",
                  "nodeType": "VariableDeclaration",
                  "scope": 626,
                  "src": "2356:20:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 623,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2356:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2306:76:3"
            },
            "src": "2275:108:3"
          },
          {
            "body": {
              "id": 659,
              "nodeType": "Block",
              "src": "2689:468:3",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 637,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "UnaryOperation",
                        "operator": "!",
                        "prefix": true,
                        "src": "2778:24:3",
                        "subExpression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 634,
                            "name": "authorized",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 599,
                            "src": "2779:10:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                              "typeString": "mapping(address => bool)"
                            }
                          },
                          "id": 636,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 635,
                            "name": "_authTarget",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 628,
                            "src": "2790:11:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "2779:23:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 638,
                        "name": "TARGET_ALREADY_AUTHORIZED",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 589,
                        "src": "2816:25:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_string_memory",
                          "typeString": "string memory"
                        }
                      ],
                      "id": 633,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        1439,
                        1440
                      ],
                      "referencedDeclaration": 1440,
                      "src": "2757:7:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 639,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2757:94:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 640,
                  "nodeType": "ExpressionStatement",
                  "src": "2757:94:3"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 645,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 641,
                        "name": "authorized",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 599,
                        "src": "2903:10:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                          "typeString": "mapping(address => bool)"
                        }
                      },
                      "id": 643,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 642,
                        "name": "_authTarget",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 628,
                        "src": "2914:11:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "2903:23:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "hexValue": "74727565",
                      "id": 644,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "bool",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "2929:4:3",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "value": "true"
                    },
                    "src": "2903:30:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 646,
                  "nodeType": "ExpressionStatement",
                  "src": "2903:30:3"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 650,
                        "name": "_authTarget",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 628,
                        "src": "3005:11:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 647,
                        "name": "authorities",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 602,
                        "src": "2988:11:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_address_$dyn_storage",
                          "typeString": "address[] storage ref"
                        }
                      },
                      "id": 649,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "push",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "2988:16:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_arraypush_nonpayable$_t_address_$returns$_t_uint256_$",
                        "typeString": "function (address) returns (uint256)"
                      }
                    },
                    "id": 651,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2988:29:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 652,
                  "nodeType": "ExpressionStatement",
                  "src": "2988:29:3"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 654,
                        "name": "_authTarget",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 628,
                        "src": "3105:11:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 655,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1436,
                          "src": "3130:3:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 656,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "3130:10:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 653,
                      "name": "AddressAuthorized",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 620,
                      "src": "3074:17:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$returns$__$",
                        "typeString": "function (address,address)"
                      }
                    },
                    "id": 657,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3074:76:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 658,
                  "nodeType": "EmitStatement",
                  "src": "3069:81:3"
                }
              ]
            },
            "documentation": "Add authorized address to contract. Can only be set by owner.\n     * @param  _authTarget   The address of the new authorized contract",
            "id": 660,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 631,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 630,
                  "name": "onlyOwner",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 917,
                  "src": "2675:9:3",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "2675:9:3"
              }
            ],
            "name": "addAuthorizedAddress",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 629,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 628,
                  "name": "_authTarget",
                  "nodeType": "VariableDeclaration",
                  "scope": 660,
                  "src": "2629:19:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 627,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2629:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2628:21:3"
            },
            "payable": false,
            "returnParameters": {
              "id": 632,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2689:0:3"
            },
            "scope": 789,
            "src": "2599:558:3",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": {
              "id": 723,
              "nodeType": "Block",
              "src": "3417:887:3",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 668,
                          "name": "authorized",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 599,
                          "src": "3489:10:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                            "typeString": "mapping(address => bool)"
                          }
                        },
                        "id": 670,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 669,
                          "name": "_authTarget",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 662,
                          "src": "3500:11:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "3489:23:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 671,
                        "name": "TARGET_NOT_AUTHORIZED",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 586,
                        "src": "3526:21:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_string_memory",
                          "typeString": "string memory"
                        }
                      ],
                      "id": 667,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        1439,
                        1440
                      ],
                      "referencedDeclaration": 1440,
                      "src": "3468:7:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 672,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3468:89:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 673,
                  "nodeType": "ExpressionStatement",
                  "src": "3468:89:3"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 677,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "delete",
                    "prefix": true,
                    "src": "3618:30:3",
                    "subExpression": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 674,
                        "name": "authorized",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 599,
                        "src": "3625:10:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                          "typeString": "mapping(address => bool)"
                        }
                      },
                      "id": 676,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 675,
                        "name": "_authTarget",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 662,
                        "src": "3636:11:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "3625:23:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 678,
                  "nodeType": "ExpressionStatement",
                  "src": "3618:30:3"
                },
                {
                  "body": {
                    "id": 721,
                    "nodeType": "Block",
                    "src": "3705:593:3",
                    "statements": [
                      {
                        "condition": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          "id": 694,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 690,
                              "name": "authorities",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 602,
                              "src": "3794:11:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_address_$dyn_storage",
                                "typeString": "address[] storage ref"
                              }
                            },
                            "id": 692,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 691,
                              "name": "i",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 680,
                              "src": "3806:1:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "3794:14:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "==",
                          "rightExpression": {
                            "argumentTypes": null,
                            "id": 693,
                            "name": "_authTarget",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 662,
                            "src": "3812:11:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "src": "3794:29:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "falseBody": null,
                        "id": 720,
                        "nodeType": "IfStatement",
                        "src": "3790:498:3",
                        "trueBody": {
                          "id": 719,
                          "nodeType": "Block",
                          "src": "3825:463:3",
                          "statements": [
                            {
                              "expression": {
                                "argumentTypes": null,
                                "id": 704,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftHandSide": {
                                  "argumentTypes": null,
                                  "baseExpression": {
                                    "argumentTypes": null,
                                    "id": 695,
                                    "name": "authorities",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 602,
                                    "src": "3921:11:3",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_array$_t_address_$dyn_storage",
                                      "typeString": "address[] storage ref"
                                    }
                                  },
                                  "id": 697,
                                  "indexExpression": {
                                    "argumentTypes": null,
                                    "id": 696,
                                    "name": "i",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 680,
                                    "src": "3933:1:3",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": true,
                                  "nodeType": "IndexAccess",
                                  "src": "3921:14:3",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                },
                                "nodeType": "Assignment",
                                "operator": "=",
                                "rightHandSide": {
                                  "argumentTypes": null,
                                  "baseExpression": {
                                    "argumentTypes": null,
                                    "id": 698,
                                    "name": "authorities",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 602,
                                    "src": "3938:11:3",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_array$_t_address_$dyn_storage",
                                      "typeString": "address[] storage ref"
                                    }
                                  },
                                  "id": 703,
                                  "indexExpression": {
                                    "argumentTypes": null,
                                    "commonType": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    },
                                    "id": 702,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "leftExpression": {
                                      "argumentTypes": null,
                                      "expression": {
                                        "argumentTypes": null,
                                        "id": 699,
                                        "name": "authorities",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 602,
                                        "src": "3950:11:3",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_array$_t_address_$dyn_storage",
                                          "typeString": "address[] storage ref"
                                        }
                                      },
                                      "id": 700,
                                      "isConstant": false,
                                      "isLValue": true,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "memberName": "length",
                                      "nodeType": "MemberAccess",
                                      "referencedDeclaration": null,
                                      "src": "3950:18:3",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    },
                                    "nodeType": "BinaryOperation",
                                    "operator": "-",
                                    "rightExpression": {
                                      "argumentTypes": null,
                                      "hexValue": "31",
                                      "id": 701,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "kind": "number",
                                      "lValueRequested": false,
                                      "nodeType": "Literal",
                                      "src": "3971:1:3",
                                      "subdenomination": null,
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_rational_1_by_1",
                                        "typeString": "int_const 1"
                                      },
                                      "value": "1"
                                    },
                                    "src": "3950:22:3",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "nodeType": "IndexAccess",
                                  "src": "3938:35:3",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                },
                                "src": "3921:52:3",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              "id": 705,
                              "nodeType": "ExpressionStatement",
                              "src": "3921:52:3"
                            },
                            {
                              "expression": {
                                "argumentTypes": null,
                                "id": 710,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftHandSide": {
                                  "argumentTypes": null,
                                  "expression": {
                                    "argumentTypes": null,
                                    "id": 706,
                                    "name": "authorities",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 602,
                                    "src": "4040:11:3",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_array$_t_address_$dyn_storage",
                                      "typeString": "address[] storage ref"
                                    }
                                  },
                                  "id": 708,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": true,
                                  "memberName": "length",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": null,
                                  "src": "4040:18:3",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "nodeType": "Assignment",
                                "operator": "-=",
                                "rightHandSide": {
                                  "argumentTypes": null,
                                  "hexValue": "31",
                                  "id": 709,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "4062:1:3",
                                  "subdenomination": null,
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_1_by_1",
                                    "typeString": "int_const 1"
                                  },
                                  "value": "1"
                                },
                                "src": "4040:23:3",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "id": 711,
                              "nodeType": "ExpressionStatement",
                              "src": "4040:23:3"
                            },
                            {
                              "eventCall": {
                                "argumentTypes": null,
                                "arguments": [
                                  {
                                    "argumentTypes": null,
                                    "id": 713,
                                    "name": "_authTarget",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 662,
                                    "src": "4189:11:3",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  },
                                  {
                                    "argumentTypes": null,
                                    "expression": {
                                      "argumentTypes": null,
                                      "id": 714,
                                      "name": "msg",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 1436,
                                      "src": "4222:3:3",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_magic_message",
                                        "typeString": "msg"
                                      }
                                    },
                                    "id": 715,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "memberName": "sender",
                                    "nodeType": "MemberAccess",
                                    "referencedDeclaration": null,
                                    "src": "4222:10:3",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    },
                                    {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  ],
                                  "id": 712,
                                  "name": "AuthorizedAddressRemoved",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 626,
                                  "src": "4143:24:3",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$returns$__$",
                                    "typeString": "function (address,address)"
                                  }
                                },
                                "id": 716,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "4143:107:3",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_tuple$__$",
                                  "typeString": "tuple()"
                                }
                              },
                              "id": 717,
                              "nodeType": "EmitStatement",
                              "src": "4138:112:3"
                            },
                            {
                              "id": 718,
                              "nodeType": "Break",
                              "src": "4268:5:3"
                            }
                          ]
                        }
                      }
                    ]
                  },
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 686,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 683,
                      "name": "i",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 680,
                      "src": "3676:1:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 684,
                        "name": "authorities",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 602,
                        "src": "3680:11:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_address_$dyn_storage",
                          "typeString": "address[] storage ref"
                        }
                      },
                      "id": 685,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "3680:18:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "3676:22:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 722,
                  "initializationExpression": {
                    "assignments": [
                      680
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 680,
                        "name": "i",
                        "nodeType": "VariableDeclaration",
                        "scope": 724,
                        "src": "3664:6:3",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 679,
                          "name": "uint",
                          "nodeType": "ElementaryTypeName",
                          "src": "3664:4:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "id": 682,
                    "initialValue": {
                      "argumentTypes": null,
                      "hexValue": "30",
                      "id": 681,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "3673:1:3",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "3664:10:3"
                  },
                  "loopExpression": {
                    "expression": {
                      "argumentTypes": null,
                      "id": 688,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "++",
                      "prefix": false,
                      "src": "3700:3:3",
                      "subExpression": {
                        "argumentTypes": null,
                        "id": 687,
                        "name": "i",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 680,
                        "src": "3700:1:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 689,
                    "nodeType": "ExpressionStatement",
                    "src": "3700:3:3"
                  },
                  "nodeType": "ForStatement",
                  "src": "3659:639:3"
                }
              ]
            },
            "documentation": "Remove authorized address from contract. Can only be set by owner.\n     * @param  _authTarget   The address to be de-permissioned",
            "id": 724,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 665,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 664,
                  "name": "onlyOwner",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 917,
                  "src": "3403:9:3",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "3403:9:3"
              }
            ],
            "name": "removeAuthorizedAddress",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 663,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 662,
                  "name": "_authTarget",
                  "nodeType": "VariableDeclaration",
                  "scope": 724,
                  "src": "3357:19:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 661,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3357:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3356:21:3"
            },
            "payable": false,
            "returnParameters": {
              "id": 666,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3417:0:3"
            },
            "scope": 789,
            "src": "3324:980:3",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": {
              "id": 778,
              "nodeType": "Block",
              "src": "4709:801:3",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 737,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 734,
                          "name": "_index",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 728,
                          "src": "4800:6:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "<",
                        "rightExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 735,
                            "name": "authorities",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 602,
                            "src": "4809:11:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_address_$dyn_storage",
                              "typeString": "address[] storage ref"
                            }
                          },
                          "id": 736,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "length",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "4809:18:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "4800:27:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 738,
                        "name": "INDEX_OUT_OF_BOUNDS",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 592,
                        "src": "4841:19:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_string_memory",
                          "typeString": "string memory"
                        }
                      ],
                      "id": 733,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        1439,
                        1440
                      ],
                      "referencedDeclaration": 1440,
                      "src": "4779:7:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 739,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4779:91:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 740,
                  "nodeType": "ExpressionStatement",
                  "src": "4779:91:3"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "id": 746,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 742,
                            "name": "authorities",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 602,
                            "src": "4976:11:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_address_$dyn_storage",
                              "typeString": "address[] storage ref"
                            }
                          },
                          "id": 744,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 743,
                            "name": "_index",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 728,
                            "src": "4988:6:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "4976:19:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "argumentTypes": null,
                          "id": 745,
                          "name": "_authTarget",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 726,
                          "src": "4999:11:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "4976:34:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 747,
                        "name": "INDEX_ADDRESS_MISMATCH",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 595,
                        "src": "5024:22:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_string_memory",
                          "typeString": "string memory"
                        }
                      ],
                      "id": 741,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        1439,
                        1440
                      ],
                      "referencedDeclaration": 1440,
                      "src": "4955:7:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 748,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4955:101:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 749,
                  "nodeType": "ExpressionStatement",
                  "src": "4955:101:3"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 753,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "delete",
                    "prefix": true,
                    "src": "5117:30:3",
                    "subExpression": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 750,
                        "name": "authorized",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 599,
                        "src": "5124:10:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                          "typeString": "mapping(address => bool)"
                        }
                      },
                      "id": 752,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 751,
                        "name": "_authTarget",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 726,
                        "src": "5135:11:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "5124:23:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 754,
                  "nodeType": "ExpressionStatement",
                  "src": "5117:30:3"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 764,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 755,
                        "name": "authorities",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 602,
                        "src": "5223:11:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_address_$dyn_storage",
                          "typeString": "address[] storage ref"
                        }
                      },
                      "id": 757,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 756,
                        "name": "_index",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 728,
                        "src": "5235:6:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "5223:19:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 758,
                        "name": "authorities",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 602,
                        "src": "5245:11:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_address_$dyn_storage",
                          "typeString": "address[] storage ref"
                        }
                      },
                      "id": 763,
                      "indexExpression": {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 762,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 759,
                            "name": "authorities",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 602,
                            "src": "5257:11:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_address_$dyn_storage",
                              "typeString": "address[] storage ref"
                            }
                          },
                          "id": 760,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "length",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "5257:18:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "-",
                        "rightExpression": {
                          "argumentTypes": null,
                          "hexValue": "31",
                          "id": 761,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "5278:1:3",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_1_by_1",
                            "typeString": "int_const 1"
                          },
                          "value": "1"
                        },
                        "src": "5257:22:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "IndexAccess",
                      "src": "5245:35:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "5223:57:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 765,
                  "nodeType": "ExpressionStatement",
                  "src": "5223:57:3"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 770,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 766,
                        "name": "authorities",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 602,
                        "src": "5333:11:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_address_$dyn_storage",
                          "typeString": "address[] storage ref"
                        }
                      },
                      "id": 768,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "5333:18:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "-=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "hexValue": "31",
                      "id": 769,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "5355:1:3",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_1_by_1",
                        "typeString": "int_const 1"
                      },
                      "value": "1"
                    },
                    "src": "5333:23:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 771,
                  "nodeType": "ExpressionStatement",
                  "src": "5333:23:3"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 773,
                        "name": "_authTarget",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 726,
                        "src": "5458:11:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 774,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1436,
                          "src": "5483:3:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 775,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "5483:10:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 772,
                      "name": "AuthorizedAddressRemoved",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 626,
                      "src": "5420:24:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$returns$__$",
                        "typeString": "function (address,address)"
                      }
                    },
                    "id": 776,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5420:83:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 777,
                  "nodeType": "EmitStatement",
                  "src": "5415:88:3"
                }
              ]
            },
            "documentation": "More efficiently remove authorized address from contract. Can only be set by owner.\n     * @param  _authTarget   The address to be de-permissioned\n@param _index           The index of the _authTarget address in authorities",
            "id": 779,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 731,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 730,
                  "name": "onlyOwner",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 917,
                  "src": "4695:9:3",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "4695:9:3"
              }
            ],
            "name": "removeAuthorizedAddressAtIndex",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 729,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 726,
                  "name": "_authTarget",
                  "nodeType": "VariableDeclaration",
                  "scope": 779,
                  "src": "4620:19:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 725,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "4620:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 728,
                  "name": "_index",
                  "nodeType": "VariableDeclaration",
                  "scope": 779,
                  "src": "4649:14:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 727,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4649:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "4610:59:3"
            },
            "payable": false,
            "returnParameters": {
              "id": 732,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "4709:0:3"
            },
            "scope": 789,
            "src": "4571:939:3",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": {
              "id": 787,
              "nodeType": "Block",
              "src": "5723:83:3",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 785,
                    "name": "authorities",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 602,
                    "src": "5788:11:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_storage",
                      "typeString": "address[] storage ref"
                    }
                  },
                  "functionReturnParameters": 784,
                  "id": 786,
                  "nodeType": "Return",
                  "src": "5781:18:3"
                }
              ]
            },
            "documentation": "Get array of authorized addresses.",
            "id": 788,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getAuthorizedAddresses",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 780,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "5651:2:3"
            },
            "payable": false,
            "returnParameters": {
              "id": 784,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 783,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 788,
                  "src": "5701:9:3",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                    "typeString": "address[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 781,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "5701:7:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 782,
                    "length": null,
                    "nodeType": "ArrayTypeName",
                    "src": "5701:9:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                      "typeString": "address[]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "5700:18:3"
            },
            "scope": 789,
            "src": "5620:186:3",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 790,
        "src": "963:4845:3"
      }
    ],
    "src": "597:5212:3"
  },
  "legacyAST": {
    "absolutePath": "/Users/justinkchen/workspace/set-protocol-contracts/contracts/lib/Authorizable.sol",
    "exportedSymbols": {
      "Authorizable": [
        789
      ]
    },
    "id": 790,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 576,
        "literals": [
          "solidity",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "597:23:3"
      },
      {
        "absolutePath": "zeppelin-solidity/contracts/ownership/Ownable.sol",
        "file": "zeppelin-solidity/contracts/ownership/Ownable.sol",
        "id": 578,
        "nodeType": "ImportDirective",
        "scope": 790,
        "sourceUnit": 970,
        "src": "622:76:3",
        "symbolAliases": [
          {
            "foreign": 577,
            "local": null
          }
        ],
        "unitAlias": ""
      },
      {
        "baseContracts": [
          {
            "arguments": null,
            "baseName": {
              "contractScope": null,
              "id": 579,
              "name": "Ownable",
              "nodeType": "UserDefinedTypeName",
              "referencedDeclaration": 969,
              "src": "992:7:3",
              "typeDescriptions": {
                "typeIdentifier": "t_contract$_Ownable_$969",
                "typeString": "contract Ownable"
              }
            },
            "id": 580,
            "nodeType": "InheritanceSpecifier",
            "src": "992:7:3"
          }
        ],
        "contractDependencies": [
          969
        ],
        "contractKind": "contract",
        "documentation": "@title Authorizable\n@author Set Protocol\n * The Authorizable contract is an inherited contract that sets permissions on certain function calls\nthrough the onlyAuthorized modifier. Permissions can be managed only by the Owner of the contract.",
        "fullyImplemented": true,
        "id": 789,
        "linearizedBaseContracts": [
          789,
          969
        ],
        "name": "Authorizable",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": true,
            "id": 583,
            "name": "SENDER_NOT_AUTHORIZED",
            "nodeType": "VariableDeclaration",
            "scope": 789,
            "src": "1076:84:3",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_string_memory",
              "typeString": "string"
            },
            "typeName": {
              "id": 581,
              "name": "string",
              "nodeType": "ElementaryTypeName",
              "src": "1076:6:3",
              "typeDescriptions": {
                "typeIdentifier": "t_string_storage_ptr",
                "typeString": "string"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "53656e646572206e6f7420617574686f72697a656420746f2063616c6c2074686973206d6574686f642e",
              "id": 582,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "string",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "1116:44:3",
              "subdenomination": null,
              "typeDescriptions": {
                "typeIdentifier": "t_stringliteral_10199b21ebf84935aea33a882c0275c251121b4f5714541946187192f7438169",
                "typeString": "literal_string \"Sender not authorized to call this method.\""
              },
              "value": "Sender not authorized to call this method."
            },
            "visibility": "internal"
          },
          {
            "constant": true,
            "id": 586,
            "name": "TARGET_NOT_AUTHORIZED",
            "nodeType": "VariableDeclaration",
            "scope": 789,
            "src": "1166:76:3",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_string_memory",
              "typeString": "string"
            },
            "typeName": {
              "id": 584,
              "name": "string",
              "nodeType": "ElementaryTypeName",
              "src": "1166:6:3",
              "typeDescriptions": {
                "typeIdentifier": "t_string_storage_ptr",
                "typeString": "string"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "5461726765742061646472657373206d75737420626520617574686f72697a65642e",
              "id": 585,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "string",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "1206:36:3",
              "subdenomination": null,
              "typeDescriptions": {
                "typeIdentifier": "t_stringliteral_366140ba62d6876f8f5ac81ce449a05cc217fd70a2a6c4fe20968a2c9a7459fa",
                "typeString": "literal_string \"Target address must be authorized.\""
              },
              "value": "Target address must be authorized."
            },
            "visibility": "internal"
          },
          {
            "constant": true,
            "id": 589,
            "name": "TARGET_ALREADY_AUTHORIZED",
            "nodeType": "VariableDeclaration",
            "scope": 789,
            "src": "1248:84:3",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_string_memory",
              "typeString": "string"
            },
            "typeName": {
              "id": 587,
              "name": "string",
              "nodeType": "ElementaryTypeName",
              "src": "1248:6:3",
              "typeDescriptions": {
                "typeIdentifier": "t_string_storage_ptr",
                "typeString": "string"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "546172676574206d757374206e6f7420616c726561647920626520617574686f72697a65642e",
              "id": 588,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "string",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "1292:40:3",
              "subdenomination": null,
              "typeDescriptions": {
                "typeIdentifier": "t_stringliteral_a33a2795a8a1f2c72bcb412f76b44eb9cb4c52e6a307350a3f6ddaeb1809efd7",
                "typeString": "literal_string \"Target must not already be authorized.\""
              },
              "value": "Target must not already be authorized."
            },
            "visibility": "internal"
          },
          {
            "constant": true,
            "id": 592,
            "name": "INDEX_OUT_OF_BOUNDS",
            "nodeType": "VariableDeclaration",
            "scope": 789,
            "src": "1338:79:3",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_string_memory",
              "typeString": "string"
            },
            "typeName": {
              "id": 590,
              "name": "string",
              "nodeType": "ElementaryTypeName",
              "src": "1338:6:3",
              "typeDescriptions": {
                "typeIdentifier": "t_string_storage_ptr",
                "typeString": "string"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "53706563696669656420617272617920696e646578206973206f7574206f6620626f756e64732e",
              "id": 591,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "string",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "1376:41:3",
              "subdenomination": null,
              "typeDescriptions": {
                "typeIdentifier": "t_stringliteral_1638541c6ab382534775b3e33e4efa6ebe87533c9f35a0f2f538e2ab60ef9410",
                "typeString": "literal_string \"Specified array index is out of bounds.\""
              },
              "value": "Specified array index is out of bounds."
            },
            "visibility": "internal"
          },
          {
            "constant": true,
            "id": 595,
            "name": "INDEX_ADDRESS_MISMATCH",
            "nodeType": "VariableDeclaration",
            "scope": 789,
            "src": "1423:88:3",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_string_memory",
              "typeString": "string"
            },
            "typeName": {
              "id": 593,
              "name": "string",
              "nodeType": "ElementaryTypeName",
              "src": "1423:6:3",
              "typeDescriptions": {
                "typeIdentifier": "t_string_storage_ptr",
                "typeString": "string"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "4164647265737320666f756e6420617420696e64657820646f6573206e6f74206d61746368207461726765742e",
              "id": 594,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "string",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "1464:47:3",
              "subdenomination": null,
              "typeDescriptions": {
                "typeIdentifier": "t_stringliteral_8c3cba7e3f322cab1ee42269305798e851a629466be226218b19fcb7d615b25c",
                "typeString": "literal_string \"Address found at index does not match target.\""
              },
              "value": "Address found at index does not match target."
            },
            "visibility": "internal"
          },
          {
            "constant": false,
            "id": 599,
            "name": "authorized",
            "nodeType": "VariableDeclaration",
            "scope": 789,
            "src": "1634:43:3",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
              "typeString": "mapping(address => bool)"
            },
            "typeName": {
              "id": 598,
              "keyType": {
                "id": 596,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "1643:7:3",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "nodeType": "Mapping",
              "src": "1634:25:3",
              "typeDescriptions": {
                "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                "typeString": "mapping(address => bool)"
              },
              "valueType": {
                "id": 597,
                "name": "bool",
                "nodeType": "ElementaryTypeName",
                "src": "1654:4:3",
                "typeDescriptions": {
                  "typeIdentifier": "t_bool",
                  "typeString": "bool"
                }
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 602,
            "name": "authorities",
            "nodeType": "VariableDeclaration",
            "scope": 789,
            "src": "1721:28:3",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_array$_t_address_$dyn_storage",
              "typeString": "address[]"
            },
            "typeName": {
              "baseType": {
                "id": 600,
                "name": "address",
                "nodeType": "ElementaryTypeName",
                "src": "1721:7:3",
                "typeDescriptions": {
                  "typeIdentifier": "t_address",
                  "typeString": "address"
                }
              },
              "id": 601,
              "length": null,
              "nodeType": "ArrayTypeName",
              "src": "1721:9:3",
              "typeDescriptions": {
                "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                "typeString": "address[]"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 613,
              "nodeType": "Block",
              "src": "1901:116:3",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 605,
                          "name": "authorized",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 599,
                          "src": "1932:10:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                            "typeString": "mapping(address => bool)"
                          }
                        },
                        "id": 608,
                        "indexExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 606,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 1436,
                            "src": "1943:3:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 607,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "1943:10:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "1932:22:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 609,
                        "name": "SENDER_NOT_AUTHORIZED",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 583,
                        "src": "1968:21:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_string_memory",
                          "typeString": "string memory"
                        }
                      ],
                      "id": 604,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        1439,
                        1440
                      ],
                      "referencedDeclaration": 1440,
                      "src": "1911:7:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 610,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1911:88:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 611,
                  "nodeType": "ExpressionStatement",
                  "src": "1911:88:3"
                },
                {
                  "id": 612,
                  "nodeType": "PlaceholderStatement",
                  "src": "2009:1:3"
                }
              ]
            },
            "documentation": null,
            "id": 614,
            "name": "onlyAuthorized",
            "nodeType": "ModifierDefinition",
            "parameters": {
              "id": 603,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1901:0:3"
            },
            "src": "1877:140:3",
            "visibility": "internal"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 620,
            "name": "AddressAuthorized",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 619,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 616,
                  "indexed": true,
                  "name": "authAddress",
                  "nodeType": "VariableDeclaration",
                  "scope": 620,
                  "src": "2154:27:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 615,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2154:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 618,
                  "indexed": false,
                  "name": "authorizedBy",
                  "nodeType": "VariableDeclaration",
                  "scope": 620,
                  "src": "2191:20:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 617,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2191:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2144:73:3"
            },
            "src": "2120:98:3"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 626,
            "name": "AuthorizedAddressRemoved",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 625,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 622,
                  "indexed": true,
                  "name": "addressRemoved",
                  "nodeType": "VariableDeclaration",
                  "scope": 626,
                  "src": "2316:30:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 621,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2316:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 624,
                  "indexed": false,
                  "name": "authorizedBy",
                  "nodeType": "VariableDeclaration",
                  "scope": 626,
                  "src": "2356:20:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 623,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2356:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2306:76:3"
            },
            "src": "2275:108:3"
          },
          {
            "body": {
              "id": 659,
              "nodeType": "Block",
              "src": "2689:468:3",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 637,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "UnaryOperation",
                        "operator": "!",
                        "prefix": true,
                        "src": "2778:24:3",
                        "subExpression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 634,
                            "name": "authorized",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 599,
                            "src": "2779:10:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                              "typeString": "mapping(address => bool)"
                            }
                          },
                          "id": 636,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 635,
                            "name": "_authTarget",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 628,
                            "src": "2790:11:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "2779:23:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 638,
                        "name": "TARGET_ALREADY_AUTHORIZED",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 589,
                        "src": "2816:25:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_string_memory",
                          "typeString": "string memory"
                        }
                      ],
                      "id": 633,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        1439,
                        1440
                      ],
                      "referencedDeclaration": 1440,
                      "src": "2757:7:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 639,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2757:94:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 640,
                  "nodeType": "ExpressionStatement",
                  "src": "2757:94:3"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 645,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 641,
                        "name": "authorized",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 599,
                        "src": "2903:10:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                          "typeString": "mapping(address => bool)"
                        }
                      },
                      "id": 643,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 642,
                        "name": "_authTarget",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 628,
                        "src": "2914:11:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "2903:23:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "hexValue": "74727565",
                      "id": 644,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "bool",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "2929:4:3",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      },
                      "value": "true"
                    },
                    "src": "2903:30:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 646,
                  "nodeType": "ExpressionStatement",
                  "src": "2903:30:3"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 650,
                        "name": "_authTarget",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 628,
                        "src": "3005:11:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "expression": {
                        "argumentTypes": null,
                        "id": 647,
                        "name": "authorities",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 602,
                        "src": "2988:11:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_address_$dyn_storage",
                          "typeString": "address[] storage ref"
                        }
                      },
                      "id": 649,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "push",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "2988:16:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_arraypush_nonpayable$_t_address_$returns$_t_uint256_$",
                        "typeString": "function (address) returns (uint256)"
                      }
                    },
                    "id": 651,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "2988:29:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 652,
                  "nodeType": "ExpressionStatement",
                  "src": "2988:29:3"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 654,
                        "name": "_authTarget",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 628,
                        "src": "3105:11:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 655,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1436,
                          "src": "3130:3:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 656,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "3130:10:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 653,
                      "name": "AddressAuthorized",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 620,
                      "src": "3074:17:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$returns$__$",
                        "typeString": "function (address,address)"
                      }
                    },
                    "id": 657,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3074:76:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 658,
                  "nodeType": "EmitStatement",
                  "src": "3069:81:3"
                }
              ]
            },
            "documentation": "Add authorized address to contract. Can only be set by owner.\n     * @param  _authTarget   The address of the new authorized contract",
            "id": 660,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 631,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 630,
                  "name": "onlyOwner",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 917,
                  "src": "2675:9:3",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "2675:9:3"
              }
            ],
            "name": "addAuthorizedAddress",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 629,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 628,
                  "name": "_authTarget",
                  "nodeType": "VariableDeclaration",
                  "scope": 660,
                  "src": "2629:19:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 627,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "2629:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "2628:21:3"
            },
            "payable": false,
            "returnParameters": {
              "id": 632,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "2689:0:3"
            },
            "scope": 789,
            "src": "2599:558:3",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": {
              "id": 723,
              "nodeType": "Block",
              "src": "3417:887:3",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "baseExpression": {
                          "argumentTypes": null,
                          "id": 668,
                          "name": "authorized",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 599,
                          "src": "3489:10:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                            "typeString": "mapping(address => bool)"
                          }
                        },
                        "id": 670,
                        "indexExpression": {
                          "argumentTypes": null,
                          "id": 669,
                          "name": "_authTarget",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 662,
                          "src": "3500:11:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "isConstant": false,
                        "isLValue": true,
                        "isPure": false,
                        "lValueRequested": false,
                        "nodeType": "IndexAccess",
                        "src": "3489:23:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 671,
                        "name": "TARGET_NOT_AUTHORIZED",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 586,
                        "src": "3526:21:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_string_memory",
                          "typeString": "string memory"
                        }
                      ],
                      "id": 667,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        1439,
                        1440
                      ],
                      "referencedDeclaration": 1440,
                      "src": "3468:7:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 672,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "3468:89:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 673,
                  "nodeType": "ExpressionStatement",
                  "src": "3468:89:3"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 677,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "delete",
                    "prefix": true,
                    "src": "3618:30:3",
                    "subExpression": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 674,
                        "name": "authorized",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 599,
                        "src": "3625:10:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                          "typeString": "mapping(address => bool)"
                        }
                      },
                      "id": 676,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 675,
                        "name": "_authTarget",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 662,
                        "src": "3636:11:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "3625:23:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 678,
                  "nodeType": "ExpressionStatement",
                  "src": "3618:30:3"
                },
                {
                  "body": {
                    "id": 721,
                    "nodeType": "Block",
                    "src": "3705:593:3",
                    "statements": [
                      {
                        "condition": {
                          "argumentTypes": null,
                          "commonType": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          },
                          "id": 694,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "leftExpression": {
                            "argumentTypes": null,
                            "baseExpression": {
                              "argumentTypes": null,
                              "id": 690,
                              "name": "authorities",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 602,
                              "src": "3794:11:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_array$_t_address_$dyn_storage",
                                "typeString": "address[] storage ref"
                              }
                            },
                            "id": 692,
                            "indexExpression": {
                              "argumentTypes": null,
                              "id": 691,
                              "name": "i",
                              "nodeType": "Identifier",
                              "overloadedDeclarations": [],
                              "referencedDeclaration": 680,
                              "src": "3806:1:3",
                              "typeDescriptions": {
                                "typeIdentifier": "t_uint256",
                                "typeString": "uint256"
                              }
                            },
                            "isConstant": false,
                            "isLValue": true,
                            "isPure": false,
                            "lValueRequested": false,
                            "nodeType": "IndexAccess",
                            "src": "3794:14:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "nodeType": "BinaryOperation",
                          "operator": "==",
                          "rightExpression": {
                            "argumentTypes": null,
                            "id": 693,
                            "name": "_authTarget",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 662,
                            "src": "3812:11:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_address",
                              "typeString": "address"
                            }
                          },
                          "src": "3794:29:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_bool",
                            "typeString": "bool"
                          }
                        },
                        "falseBody": null,
                        "id": 720,
                        "nodeType": "IfStatement",
                        "src": "3790:498:3",
                        "trueBody": {
                          "id": 719,
                          "nodeType": "Block",
                          "src": "3825:463:3",
                          "statements": [
                            {
                              "expression": {
                                "argumentTypes": null,
                                "id": 704,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftHandSide": {
                                  "argumentTypes": null,
                                  "baseExpression": {
                                    "argumentTypes": null,
                                    "id": 695,
                                    "name": "authorities",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 602,
                                    "src": "3921:11:3",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_array$_t_address_$dyn_storage",
                                      "typeString": "address[] storage ref"
                                    }
                                  },
                                  "id": 697,
                                  "indexExpression": {
                                    "argumentTypes": null,
                                    "id": 696,
                                    "name": "i",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 680,
                                    "src": "3933:1:3",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": true,
                                  "nodeType": "IndexAccess",
                                  "src": "3921:14:3",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                },
                                "nodeType": "Assignment",
                                "operator": "=",
                                "rightHandSide": {
                                  "argumentTypes": null,
                                  "baseExpression": {
                                    "argumentTypes": null,
                                    "id": 698,
                                    "name": "authorities",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 602,
                                    "src": "3938:11:3",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_array$_t_address_$dyn_storage",
                                      "typeString": "address[] storage ref"
                                    }
                                  },
                                  "id": 703,
                                  "indexExpression": {
                                    "argumentTypes": null,
                                    "commonType": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    },
                                    "id": 702,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "leftExpression": {
                                      "argumentTypes": null,
                                      "expression": {
                                        "argumentTypes": null,
                                        "id": 699,
                                        "name": "authorities",
                                        "nodeType": "Identifier",
                                        "overloadedDeclarations": [],
                                        "referencedDeclaration": 602,
                                        "src": "3950:11:3",
                                        "typeDescriptions": {
                                          "typeIdentifier": "t_array$_t_address_$dyn_storage",
                                          "typeString": "address[] storage ref"
                                        }
                                      },
                                      "id": 700,
                                      "isConstant": false,
                                      "isLValue": true,
                                      "isPure": false,
                                      "lValueRequested": false,
                                      "memberName": "length",
                                      "nodeType": "MemberAccess",
                                      "referencedDeclaration": null,
                                      "src": "3950:18:3",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_uint256",
                                        "typeString": "uint256"
                                      }
                                    },
                                    "nodeType": "BinaryOperation",
                                    "operator": "-",
                                    "rightExpression": {
                                      "argumentTypes": null,
                                      "hexValue": "31",
                                      "id": 701,
                                      "isConstant": false,
                                      "isLValue": false,
                                      "isPure": true,
                                      "kind": "number",
                                      "lValueRequested": false,
                                      "nodeType": "Literal",
                                      "src": "3971:1:3",
                                      "subdenomination": null,
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_rational_1_by_1",
                                        "typeString": "int_const 1"
                                      },
                                      "value": "1"
                                    },
                                    "src": "3950:22:3",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_uint256",
                                      "typeString": "uint256"
                                    }
                                  },
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": false,
                                  "nodeType": "IndexAccess",
                                  "src": "3938:35:3",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_address",
                                    "typeString": "address"
                                  }
                                },
                                "src": "3921:52:3",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_address",
                                  "typeString": "address"
                                }
                              },
                              "id": 705,
                              "nodeType": "ExpressionStatement",
                              "src": "3921:52:3"
                            },
                            {
                              "expression": {
                                "argumentTypes": null,
                                "id": 710,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "lValueRequested": false,
                                "leftHandSide": {
                                  "argumentTypes": null,
                                  "expression": {
                                    "argumentTypes": null,
                                    "id": 706,
                                    "name": "authorities",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 602,
                                    "src": "4040:11:3",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_array$_t_address_$dyn_storage",
                                      "typeString": "address[] storage ref"
                                    }
                                  },
                                  "id": 708,
                                  "isConstant": false,
                                  "isLValue": true,
                                  "isPure": false,
                                  "lValueRequested": true,
                                  "memberName": "length",
                                  "nodeType": "MemberAccess",
                                  "referencedDeclaration": null,
                                  "src": "4040:18:3",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_uint256",
                                    "typeString": "uint256"
                                  }
                                },
                                "nodeType": "Assignment",
                                "operator": "-=",
                                "rightHandSide": {
                                  "argumentTypes": null,
                                  "hexValue": "31",
                                  "id": 709,
                                  "isConstant": false,
                                  "isLValue": false,
                                  "isPure": true,
                                  "kind": "number",
                                  "lValueRequested": false,
                                  "nodeType": "Literal",
                                  "src": "4062:1:3",
                                  "subdenomination": null,
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_rational_1_by_1",
                                    "typeString": "int_const 1"
                                  },
                                  "value": "1"
                                },
                                "src": "4040:23:3",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_uint256",
                                  "typeString": "uint256"
                                }
                              },
                              "id": 711,
                              "nodeType": "ExpressionStatement",
                              "src": "4040:23:3"
                            },
                            {
                              "eventCall": {
                                "argumentTypes": null,
                                "arguments": [
                                  {
                                    "argumentTypes": null,
                                    "id": 713,
                                    "name": "_authTarget",
                                    "nodeType": "Identifier",
                                    "overloadedDeclarations": [],
                                    "referencedDeclaration": 662,
                                    "src": "4189:11:3",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  },
                                  {
                                    "argumentTypes": null,
                                    "expression": {
                                      "argumentTypes": null,
                                      "id": 714,
                                      "name": "msg",
                                      "nodeType": "Identifier",
                                      "overloadedDeclarations": [],
                                      "referencedDeclaration": 1436,
                                      "src": "4222:3:3",
                                      "typeDescriptions": {
                                        "typeIdentifier": "t_magic_message",
                                        "typeString": "msg"
                                      }
                                    },
                                    "id": 715,
                                    "isConstant": false,
                                    "isLValue": false,
                                    "isPure": false,
                                    "lValueRequested": false,
                                    "memberName": "sender",
                                    "nodeType": "MemberAccess",
                                    "referencedDeclaration": null,
                                    "src": "4222:10:3",
                                    "typeDescriptions": {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  }
                                ],
                                "expression": {
                                  "argumentTypes": [
                                    {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    },
                                    {
                                      "typeIdentifier": "t_address",
                                      "typeString": "address"
                                    }
                                  ],
                                  "id": 712,
                                  "name": "AuthorizedAddressRemoved",
                                  "nodeType": "Identifier",
                                  "overloadedDeclarations": [],
                                  "referencedDeclaration": 626,
                                  "src": "4143:24:3",
                                  "typeDescriptions": {
                                    "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$returns$__$",
                                    "typeString": "function (address,address)"
                                  }
                                },
                                "id": 716,
                                "isConstant": false,
                                "isLValue": false,
                                "isPure": false,
                                "kind": "functionCall",
                                "lValueRequested": false,
                                "names": [],
                                "nodeType": "FunctionCall",
                                "src": "4143:107:3",
                                "typeDescriptions": {
                                  "typeIdentifier": "t_tuple$__$",
                                  "typeString": "tuple()"
                                }
                              },
                              "id": 717,
                              "nodeType": "EmitStatement",
                              "src": "4138:112:3"
                            },
                            {
                              "id": 718,
                              "nodeType": "Break",
                              "src": "4268:5:3"
                            }
                          ]
                        }
                      }
                    ]
                  },
                  "condition": {
                    "argumentTypes": null,
                    "commonType": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    },
                    "id": 686,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftExpression": {
                      "argumentTypes": null,
                      "id": 683,
                      "name": "i",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 680,
                      "src": "3676:1:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "BinaryOperation",
                    "operator": "<",
                    "rightExpression": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 684,
                        "name": "authorities",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 602,
                        "src": "3680:11:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_address_$dyn_storage",
                          "typeString": "address[] storage ref"
                        }
                      },
                      "id": 685,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "3680:18:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "src": "3676:22:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_bool",
                      "typeString": "bool"
                    }
                  },
                  "id": 722,
                  "initializationExpression": {
                    "assignments": [
                      680
                    ],
                    "declarations": [
                      {
                        "constant": false,
                        "id": 680,
                        "name": "i",
                        "nodeType": "VariableDeclaration",
                        "scope": 724,
                        "src": "3664:6:3",
                        "stateVariable": false,
                        "storageLocation": "default",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "typeName": {
                          "id": 679,
                          "name": "uint",
                          "nodeType": "ElementaryTypeName",
                          "src": "3664:4:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "value": null,
                        "visibility": "internal"
                      }
                    ],
                    "id": 682,
                    "initialValue": {
                      "argumentTypes": null,
                      "hexValue": "30",
                      "id": 681,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "3673:1:3",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_0_by_1",
                        "typeString": "int_const 0"
                      },
                      "value": "0"
                    },
                    "nodeType": "VariableDeclarationStatement",
                    "src": "3664:10:3"
                  },
                  "loopExpression": {
                    "expression": {
                      "argumentTypes": null,
                      "id": 688,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "UnaryOperation",
                      "operator": "++",
                      "prefix": false,
                      "src": "3700:3:3",
                      "subExpression": {
                        "argumentTypes": null,
                        "id": 687,
                        "name": "i",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 680,
                        "src": "3700:1:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "id": 689,
                    "nodeType": "ExpressionStatement",
                    "src": "3700:3:3"
                  },
                  "nodeType": "ForStatement",
                  "src": "3659:639:3"
                }
              ]
            },
            "documentation": "Remove authorized address from contract. Can only be set by owner.\n     * @param  _authTarget   The address to be de-permissioned",
            "id": 724,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 665,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 664,
                  "name": "onlyOwner",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 917,
                  "src": "3403:9:3",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "3403:9:3"
              }
            ],
            "name": "removeAuthorizedAddress",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 663,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 662,
                  "name": "_authTarget",
                  "nodeType": "VariableDeclaration",
                  "scope": 724,
                  "src": "3357:19:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 661,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "3357:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "3356:21:3"
            },
            "payable": false,
            "returnParameters": {
              "id": 666,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "3417:0:3"
            },
            "scope": 789,
            "src": "3324:980:3",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": {
              "id": 778,
              "nodeType": "Block",
              "src": "4709:801:3",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 737,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 734,
                          "name": "_index",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 728,
                          "src": "4800:6:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "<",
                        "rightExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 735,
                            "name": "authorities",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 602,
                            "src": "4809:11:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_address_$dyn_storage",
                              "typeString": "address[] storage ref"
                            }
                          },
                          "id": 736,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "length",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "4809:18:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "src": "4800:27:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 738,
                        "name": "INDEX_OUT_OF_BOUNDS",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 592,
                        "src": "4841:19:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_string_memory",
                          "typeString": "string memory"
                        }
                      ],
                      "id": 733,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        1439,
                        1440
                      ],
                      "referencedDeclaration": 1440,
                      "src": "4779:7:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 739,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4779:91:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 740,
                  "nodeType": "ExpressionStatement",
                  "src": "4779:91:3"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        "id": 746,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "baseExpression": {
                            "argumentTypes": null,
                            "id": 742,
                            "name": "authorities",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 602,
                            "src": "4976:11:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_address_$dyn_storage",
                              "typeString": "address[] storage ref"
                            }
                          },
                          "id": 744,
                          "indexExpression": {
                            "argumentTypes": null,
                            "id": 743,
                            "name": "_index",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 728,
                            "src": "4988:6:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_uint256",
                              "typeString": "uint256"
                            }
                          },
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "nodeType": "IndexAccess",
                          "src": "4976:19:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "argumentTypes": null,
                          "id": 745,
                          "name": "_authTarget",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 726,
                          "src": "4999:11:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "4976:34:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 747,
                        "name": "INDEX_ADDRESS_MISMATCH",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 595,
                        "src": "5024:22:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_string_memory",
                          "typeString": "string memory"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        },
                        {
                          "typeIdentifier": "t_string_memory",
                          "typeString": "string memory"
                        }
                      ],
                      "id": 741,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        1439,
                        1440
                      ],
                      "referencedDeclaration": 1440,
                      "src": "4955:7:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$_t_string_memory_ptr_$returns$__$",
                        "typeString": "function (bool,string memory) pure"
                      }
                    },
                    "id": 748,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "4955:101:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 749,
                  "nodeType": "ExpressionStatement",
                  "src": "4955:101:3"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 753,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "nodeType": "UnaryOperation",
                    "operator": "delete",
                    "prefix": true,
                    "src": "5117:30:3",
                    "subExpression": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 750,
                        "name": "authorized",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 599,
                        "src": "5124:10:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_mapping$_t_address_$_t_bool_$",
                          "typeString": "mapping(address => bool)"
                        }
                      },
                      "id": 752,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 751,
                        "name": "_authTarget",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 726,
                        "src": "5135:11:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "5124:23:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_bool",
                        "typeString": "bool"
                      }
                    },
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 754,
                  "nodeType": "ExpressionStatement",
                  "src": "5117:30:3"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 764,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 755,
                        "name": "authorities",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 602,
                        "src": "5223:11:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_address_$dyn_storage",
                          "typeString": "address[] storage ref"
                        }
                      },
                      "id": 757,
                      "indexExpression": {
                        "argumentTypes": null,
                        "id": 756,
                        "name": "_index",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 728,
                        "src": "5235:6:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "nodeType": "IndexAccess",
                      "src": "5223:19:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "baseExpression": {
                        "argumentTypes": null,
                        "id": 758,
                        "name": "authorities",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 602,
                        "src": "5245:11:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_address_$dyn_storage",
                          "typeString": "address[] storage ref"
                        }
                      },
                      "id": 763,
                      "indexExpression": {
                        "argumentTypes": null,
                        "commonType": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        },
                        "id": 762,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 759,
                            "name": "authorities",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 602,
                            "src": "5257:11:3",
                            "typeDescriptions": {
                              "typeIdentifier": "t_array$_t_address_$dyn_storage",
                              "typeString": "address[] storage ref"
                            }
                          },
                          "id": 760,
                          "isConstant": false,
                          "isLValue": true,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "length",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "5257:18:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_uint256",
                            "typeString": "uint256"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "-",
                        "rightExpression": {
                          "argumentTypes": null,
                          "hexValue": "31",
                          "id": 761,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "5278:1:3",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_1_by_1",
                            "typeString": "int_const 1"
                          },
                          "value": "1"
                        },
                        "src": "5257:22:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_uint256",
                          "typeString": "uint256"
                        }
                      },
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": false,
                      "nodeType": "IndexAccess",
                      "src": "5245:35:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "5223:57:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 765,
                  "nodeType": "ExpressionStatement",
                  "src": "5223:57:3"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 770,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 766,
                        "name": "authorities",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 602,
                        "src": "5333:11:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_array$_t_address_$dyn_storage",
                          "typeString": "address[] storage ref"
                        }
                      },
                      "id": 768,
                      "isConstant": false,
                      "isLValue": true,
                      "isPure": false,
                      "lValueRequested": true,
                      "memberName": "length",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "5333:18:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_uint256",
                        "typeString": "uint256"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "-=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "hexValue": "31",
                      "id": 769,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "number",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "5355:1:3",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_rational_1_by_1",
                        "typeString": "int_const 1"
                      },
                      "value": "1"
                    },
                    "src": "5333:23:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "id": 771,
                  "nodeType": "ExpressionStatement",
                  "src": "5333:23:3"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 773,
                        "name": "_authTarget",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 726,
                        "src": "5458:11:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "expression": {
                          "argumentTypes": null,
                          "id": 774,
                          "name": "msg",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 1436,
                          "src": "5483:3:3",
                          "typeDescriptions": {
                            "typeIdentifier": "t_magic_message",
                            "typeString": "msg"
                          }
                        },
                        "id": 775,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "memberName": "sender",
                        "nodeType": "MemberAccess",
                        "referencedDeclaration": null,
                        "src": "5483:10:3",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        },
                        {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      ],
                      "id": 772,
                      "name": "AuthorizedAddressRemoved",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 626,
                      "src": "5420:24:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$returns$__$",
                        "typeString": "function (address,address)"
                      }
                    },
                    "id": 776,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "5420:83:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 777,
                  "nodeType": "EmitStatement",
                  "src": "5415:88:3"
                }
              ]
            },
            "documentation": "More efficiently remove authorized address from contract. Can only be set by owner.\n     * @param  _authTarget   The address to be de-permissioned\n@param _index           The index of the _authTarget address in authorities",
            "id": 779,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 731,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 730,
                  "name": "onlyOwner",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 917,
                  "src": "4695:9:3",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "4695:9:3"
              }
            ],
            "name": "removeAuthorizedAddressAtIndex",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 729,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 726,
                  "name": "_authTarget",
                  "nodeType": "VariableDeclaration",
                  "scope": 779,
                  "src": "4620:19:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 725,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "4620:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                },
                {
                  "constant": false,
                  "id": 728,
                  "name": "_index",
                  "nodeType": "VariableDeclaration",
                  "scope": 779,
                  "src": "4649:14:3",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_uint256",
                    "typeString": "uint256"
                  },
                  "typeName": {
                    "id": 727,
                    "name": "uint256",
                    "nodeType": "ElementaryTypeName",
                    "src": "4649:7:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_uint256",
                      "typeString": "uint256"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "4610:59:3"
            },
            "payable": false,
            "returnParameters": {
              "id": 732,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "4709:0:3"
            },
            "scope": 789,
            "src": "4571:939:3",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "external"
          },
          {
            "body": {
              "id": 787,
              "nodeType": "Block",
              "src": "5723:83:3",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 785,
                    "name": "authorities",
                    "nodeType": "Identifier",
                    "overloadedDeclarations": [],
                    "referencedDeclaration": 602,
                    "src": "5788:11:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_storage",
                      "typeString": "address[] storage ref"
                    }
                  },
                  "functionReturnParameters": 784,
                  "id": 786,
                  "nodeType": "Return",
                  "src": "5781:18:3"
                }
              ]
            },
            "documentation": "Get array of authorized addresses.",
            "id": 788,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": true,
            "modifiers": [],
            "name": "getAuthorizedAddresses",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 780,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "5651:2:3"
            },
            "payable": false,
            "returnParameters": {
              "id": 784,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 783,
                  "name": "",
                  "nodeType": "VariableDeclaration",
                  "scope": 788,
                  "src": "5701:9:3",
                  "stateVariable": false,
                  "storageLocation": "memory",
                  "typeDescriptions": {
                    "typeIdentifier": "t_array$_t_address_$dyn_memory_ptr",
                    "typeString": "address[]"
                  },
                  "typeName": {
                    "baseType": {
                      "id": 781,
                      "name": "address",
                      "nodeType": "ElementaryTypeName",
                      "src": "5701:7:3",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "id": 782,
                    "length": null,
                    "nodeType": "ArrayTypeName",
                    "src": "5701:9:3",
                    "typeDescriptions": {
                      "typeIdentifier": "t_array$_t_address_$dyn_storage_ptr",
                      "typeString": "address[]"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "5700:18:3"
            },
            "scope": 789,
            "src": "5620:186:3",
            "stateMutability": "view",
            "superFunction": null,
            "visibility": "external"
          }
        ],
        "scope": 790,
        "src": "963:4845:3"
      }
    ],
    "src": "597:5212:3"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.24+commit.e67f0147.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "2.0.0",
  "updatedAt": "2018-07-07T15:28:53.737Z"
}