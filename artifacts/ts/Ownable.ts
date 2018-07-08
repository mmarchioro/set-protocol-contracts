export const Ownable = 
{
  "contractName": "Ownable",
  "abi": [
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
      "inputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
      "type": "constructor"
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
      "inputs": [],
      "name": "renounceOwnership",
      "outputs": [],
      "payable": false,
      "stateMutability": "nonpayable",
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
    }
  ],
  "bytecode": "0x608060405234801561001057600080fd5b5060008054600160a060020a0319163317905561020b806100326000396000f3006080604052600436106100565763ffffffff7c0100000000000000000000000000000000000000000000000000000000600035041663715018a6811461005b5780638da5cb5b14610072578063f2fde38b146100a3575b600080fd5b34801561006757600080fd5b506100706100c4565b005b34801561007e57600080fd5b50610087610130565b60408051600160a060020a039092168252519081900360200190f35b3480156100af57600080fd5b50610070600160a060020a036004351661013f565b600054600160a060020a031633146100db57600080fd5b60008054604051600160a060020a03909116917ff8df31144d9c2f0f6b59d69b8b98abd5459d07f2742c4df920b25aae33c6482091a26000805473ffffffffffffffffffffffffffffffffffffffff19169055565b600054600160a060020a031681565b600054600160a060020a0316331461015657600080fd5b61015f81610162565b50565b600160a060020a038116151561017757600080fd5b60008054604051600160a060020a03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a36000805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a03929092169190911790555600a165627a7a723058206474fa75408ce628b17840b37bdc3de518790a221f5b66331f3b64a1dfb89aa40029",
  "deployedBytecode": "0x6080604052600436106100565763ffffffff7c0100000000000000000000000000000000000000000000000000000000600035041663715018a6811461005b5780638da5cb5b14610072578063f2fde38b146100a3575b600080fd5b34801561006757600080fd5b506100706100c4565b005b34801561007e57600080fd5b50610087610130565b60408051600160a060020a039092168252519081900360200190f35b3480156100af57600080fd5b50610070600160a060020a036004351661013f565b600054600160a060020a031633146100db57600080fd5b60008054604051600160a060020a03909116917ff8df31144d9c2f0f6b59d69b8b98abd5459d07f2742c4df920b25aae33c6482091a26000805473ffffffffffffffffffffffffffffffffffffffff19169055565b600054600160a060020a031681565b600054600160a060020a0316331461015657600080fd5b61015f81610162565b50565b600160a060020a038116151561017757600080fd5b60008054604051600160a060020a03808516939216917f8be0079c531659141344cd1fd0a4f28419497f9722a3daafe3b4186f6b6457e091a36000805473ffffffffffffffffffffffffffffffffffffffff1916600160a060020a03929092169190911790555600a165627a7a723058206474fa75408ce628b17840b37bdc3de518790a221f5b66331f3b64a1dfb89aa40029",
  "sourceMap": "217:1294:59:-;;;540:50;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;567:5:59;:18;;-1:-1:-1;;;;;;567:18:59;575:10;567:18;;;217:1294;;;;;;",
  "deployedSourceMap": "217:1294:59:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;827:111;;8:9:-1;5:2;;;30:1;27;20:12;5:2;827:111:59;;;;;;238:20;;8:9:-1;5:2;;;30:1;27;20:12;5:2;238:20:59;;;;;;;;-1:-1:-1;;;;;238:20:59;;;;;;;;;;;;;;1100:103;;8:9:-1;5:2;;;30:1;27;20:12;5:2;-1:-1;1100:103:59;-1:-1:-1;;;;;1100:103:59;;;;;827:111;719:5;;-1:-1:-1;;;;;719:5:59;705:10;:19;697:28;;;;;;903:5;;;884:25;;-1:-1:-1;;;;;903:5:59;;;;884:25;;;931:1;915:18;;-1:-1:-1;;915:18:59;;;827:111::o;238:20::-;;;-1:-1:-1;;;;;238:20:59;;:::o;1100:103::-;719:5;;-1:-1:-1;;;;;719:5:59;705:10;:19;697:28;;;;;;1169:29;1188:9;1169:18;:29::i;:::-;1100:103;:::o;1338:171::-;-1:-1:-1;;;;;1408:23:59;;;;1400:32;;;;;;1464:5;;;1443:38;;-1:-1:-1;;;;;1443:38:59;;;;1464:5;;;1443:38;;;1487:5;:17;;-1:-1:-1;;1487:17:59;-1:-1:-1;;;;;1487:17:59;;;;;;;;;;1338:171::o",
  "source": "pragma solidity ^0.4.23;\n\n\n/**\n * @title Ownable\n * @dev The Ownable contract has an owner address, and provides basic authorization control\n * functions, this simplifies the implementation of \"user permissions\".\n */\ncontract Ownable {\n  address public owner;\n\n\n  event OwnershipRenounced(address indexed previousOwner);\n  event OwnershipTransferred(\n    address indexed previousOwner,\n    address indexed newOwner\n  );\n\n\n  /**\n   * @dev The Ownable constructor sets the original `owner` of the contract to the sender\n   * account.\n   */\n  constructor() public {\n    owner = msg.sender;\n  }\n\n  /**\n   * @dev Throws if called by any account other than the owner.\n   */\n  modifier onlyOwner() {\n    require(msg.sender == owner);\n    _;\n  }\n\n  /**\n   * @dev Allows the current owner to relinquish control of the contract.\n   */\n  function renounceOwnership() public onlyOwner {\n    emit OwnershipRenounced(owner);\n    owner = address(0);\n  }\n\n  /**\n   * @dev Allows the current owner to transfer control of the contract to a newOwner.\n   * @param _newOwner The address to transfer ownership to.\n   */\n  function transferOwnership(address _newOwner) public onlyOwner {\n    _transferOwnership(_newOwner);\n  }\n\n  /**\n   * @dev Transfers control of the contract to a newOwner.\n   * @param _newOwner The address to transfer ownership to.\n   */\n  function _transferOwnership(address _newOwner) internal {\n    require(_newOwner != address(0));\n    emit OwnershipTransferred(owner, _newOwner);\n    owner = _newOwner;\n  }\n}\n",
  "sourcePath": "zeppelin-solidity/contracts/ownership/Ownable.sol",
  "ast": {
    "absolutePath": "zeppelin-solidity/contracts/ownership/Ownable.sol",
    "exportedSymbols": {
      "Ownable": [
        5889
      ]
    },
    "id": 5890,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 5805,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".23"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:59"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": "@title Ownable\n@dev The Ownable contract has an owner address, and provides basic authorization control\nfunctions, this simplifies the implementation of \"user permissions\".",
        "fullyImplemented": true,
        "id": 5889,
        "linearizedBaseContracts": [
          5889
        ],
        "name": "Ownable",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 5807,
            "name": "owner",
            "nodeType": "VariableDeclaration",
            "scope": 5889,
            "src": "238:20:59",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address",
              "typeString": "address"
            },
            "typeName": {
              "id": 5806,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "238:7:59",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 5811,
            "name": "OwnershipRenounced",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 5810,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5809,
                  "indexed": true,
                  "name": "previousOwner",
                  "nodeType": "VariableDeclaration",
                  "scope": 5811,
                  "src": "289:29:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5808,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "289:7:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "288:31:59"
            },
            "src": "264:56:59"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 5817,
            "name": "OwnershipTransferred",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 5816,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5813,
                  "indexed": true,
                  "name": "previousOwner",
                  "nodeType": "VariableDeclaration",
                  "scope": 5817,
                  "src": "355:29:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5812,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "355:7:59",
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
                  "id": 5815,
                  "indexed": true,
                  "name": "newOwner",
                  "nodeType": "VariableDeclaration",
                  "scope": 5817,
                  "src": "390:24:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5814,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "390:7:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "349:69:59"
            },
            "src": "323:96:59"
          },
          {
            "body": {
              "id": 5825,
              "nodeType": "Block",
              "src": "561:29:59",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 5823,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 5820,
                      "name": "owner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5807,
                      "src": "567:5:59",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 5821,
                        "name": "msg",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 6356,
                        "src": "575:3:59",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_message",
                          "typeString": "msg"
                        }
                      },
                      "id": 5822,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "sender",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "575:10:59",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "567:18:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 5824,
                  "nodeType": "ExpressionStatement",
                  "src": "567:18:59"
                }
              ]
            },
            "documentation": "@dev The Ownable constructor sets the original `owner` of the contract to the sender\naccount.",
            "id": 5826,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 5818,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "551:2:59"
            },
            "payable": false,
            "returnParameters": {
              "id": 5819,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "561:0:59"
            },
            "scope": 5889,
            "src": "540:50:59",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 5836,
              "nodeType": "Block",
              "src": "691:46:59",
              "statements": [
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
                        "id": 5832,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 5829,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 6356,
                            "src": "705:3:59",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 5830,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "705:10:59",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "argumentTypes": null,
                          "id": 5831,
                          "name": "owner",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 5807,
                          "src": "719:5:59",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "705:19:59",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 5828,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        6359,
                        6360
                      ],
                      "referencedDeclaration": 6359,
                      "src": "697:7:59",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 5833,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "697:28:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 5834,
                  "nodeType": "ExpressionStatement",
                  "src": "697:28:59"
                },
                {
                  "id": 5835,
                  "nodeType": "PlaceholderStatement",
                  "src": "731:1:59"
                }
              ]
            },
            "documentation": "@dev Throws if called by any account other than the owner.",
            "id": 5837,
            "name": "onlyOwner",
            "nodeType": "ModifierDefinition",
            "parameters": {
              "id": 5827,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "688:2:59"
            },
            "src": "670:67:59",
            "visibility": "internal"
          },
          {
            "body": {
              "id": 5852,
              "nodeType": "Block",
              "src": "873:65:59",
              "statements": [
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 5843,
                        "name": "owner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5807,
                        "src": "903:5:59",
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
                      "id": 5842,
                      "name": "OwnershipRenounced",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5811,
                      "src": "884:18:59",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$returns$__$",
                        "typeString": "function (address)"
                      }
                    },
                    "id": 5844,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "884:25:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 5845,
                  "nodeType": "EmitStatement",
                  "src": "879:30:59"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 5850,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 5846,
                      "name": "owner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5807,
                      "src": "915:5:59",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "hexValue": "30",
                          "id": 5848,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "931:1:59",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          }
                        ],
                        "id": 5847,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "923:7:59",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_address_$",
                          "typeString": "type(address)"
                        },
                        "typeName": "address"
                      },
                      "id": 5849,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "923:10:59",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "915:18:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 5851,
                  "nodeType": "ExpressionStatement",
                  "src": "915:18:59"
                }
              ]
            },
            "documentation": "@dev Allows the current owner to relinquish control of the contract.",
            "id": 5853,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 5840,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 5839,
                  "name": "onlyOwner",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 5837,
                  "src": "863:9:59",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "863:9:59"
              }
            ],
            "name": "renounceOwnership",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 5838,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "853:2:59"
            },
            "payable": false,
            "returnParameters": {
              "id": 5841,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "873:0:59"
            },
            "scope": 5889,
            "src": "827:111:59",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 5864,
              "nodeType": "Block",
              "src": "1163:40:59",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 5861,
                        "name": "_newOwner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5855,
                        "src": "1188:9:59",
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
                      "id": 5860,
                      "name": "_transferOwnership",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5888,
                      "src": "1169:18:59",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$returns$__$",
                        "typeString": "function (address)"
                      }
                    },
                    "id": 5862,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1169:29:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 5863,
                  "nodeType": "ExpressionStatement",
                  "src": "1169:29:59"
                }
              ]
            },
            "documentation": "@dev Allows the current owner to transfer control of the contract to a newOwner.\n@param _newOwner The address to transfer ownership to.",
            "id": 5865,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 5858,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 5857,
                  "name": "onlyOwner",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 5837,
                  "src": "1153:9:59",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1153:9:59"
              }
            ],
            "name": "transferOwnership",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 5856,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5855,
                  "name": "_newOwner",
                  "nodeType": "VariableDeclaration",
                  "scope": 5865,
                  "src": "1127:17:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5854,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1127:7:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1126:19:59"
            },
            "payable": false,
            "returnParameters": {
              "id": 5859,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1163:0:59"
            },
            "scope": 5889,
            "src": "1100:103:59",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 5887,
              "nodeType": "Block",
              "src": "1394:115:59",
              "statements": [
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
                        "id": 5875,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 5871,
                          "name": "_newOwner",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 5867,
                          "src": "1408:9:59",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "!=",
                        "rightExpression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "hexValue": "30",
                              "id": 5873,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "1429:1:59",
                              "subdenomination": null,
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              },
                              "value": "0"
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              }
                            ],
                            "id": 5872,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "1421:7:59",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": "address"
                          },
                          "id": 5874,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1421:10:59",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "1408:23:59",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 5870,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        6359,
                        6360
                      ],
                      "referencedDeclaration": 6359,
                      "src": "1400:7:59",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 5876,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1400:32:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 5877,
                  "nodeType": "ExpressionStatement",
                  "src": "1400:32:59"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 5879,
                        "name": "owner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5807,
                        "src": "1464:5:59",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 5880,
                        "name": "_newOwner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5867,
                        "src": "1471:9:59",
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
                      "id": 5878,
                      "name": "OwnershipTransferred",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5817,
                      "src": "1443:20:59",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$returns$__$",
                        "typeString": "function (address,address)"
                      }
                    },
                    "id": 5881,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1443:38:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 5882,
                  "nodeType": "EmitStatement",
                  "src": "1438:43:59"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 5885,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 5883,
                      "name": "owner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5807,
                      "src": "1487:5:59",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 5884,
                      "name": "_newOwner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5867,
                      "src": "1495:9:59",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "1487:17:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 5886,
                  "nodeType": "ExpressionStatement",
                  "src": "1487:17:59"
                }
              ]
            },
            "documentation": "@dev Transfers control of the contract to a newOwner.\n@param _newOwner The address to transfer ownership to.",
            "id": 5888,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "_transferOwnership",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 5868,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5867,
                  "name": "_newOwner",
                  "nodeType": "VariableDeclaration",
                  "scope": 5888,
                  "src": "1366:17:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5866,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1366:7:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1365:19:59"
            },
            "payable": false,
            "returnParameters": {
              "id": 5869,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1394:0:59"
            },
            "scope": 5889,
            "src": "1338:171:59",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "internal"
          }
        ],
        "scope": 5890,
        "src": "217:1294:59"
      }
    ],
    "src": "0:1512:59"
  },
  "legacyAST": {
    "absolutePath": "zeppelin-solidity/contracts/ownership/Ownable.sol",
    "exportedSymbols": {
      "Ownable": [
        5889
      ]
    },
    "id": 5890,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 5805,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".23"
        ],
        "nodeType": "PragmaDirective",
        "src": "0:24:59"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": "@title Ownable\n@dev The Ownable contract has an owner address, and provides basic authorization control\nfunctions, this simplifies the implementation of \"user permissions\".",
        "fullyImplemented": true,
        "id": 5889,
        "linearizedBaseContracts": [
          5889
        ],
        "name": "Ownable",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": false,
            "id": 5807,
            "name": "owner",
            "nodeType": "VariableDeclaration",
            "scope": 5889,
            "src": "238:20:59",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_address",
              "typeString": "address"
            },
            "typeName": {
              "id": 5806,
              "name": "address",
              "nodeType": "ElementaryTypeName",
              "src": "238:7:59",
              "typeDescriptions": {
                "typeIdentifier": "t_address",
                "typeString": "address"
              }
            },
            "value": null,
            "visibility": "public"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 5811,
            "name": "OwnershipRenounced",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 5810,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5809,
                  "indexed": true,
                  "name": "previousOwner",
                  "nodeType": "VariableDeclaration",
                  "scope": 5811,
                  "src": "289:29:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5808,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "289:7:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "288:31:59"
            },
            "src": "264:56:59"
          },
          {
            "anonymous": false,
            "documentation": null,
            "id": 5817,
            "name": "OwnershipTransferred",
            "nodeType": "EventDefinition",
            "parameters": {
              "id": 5816,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5813,
                  "indexed": true,
                  "name": "previousOwner",
                  "nodeType": "VariableDeclaration",
                  "scope": 5817,
                  "src": "355:29:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5812,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "355:7:59",
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
                  "id": 5815,
                  "indexed": true,
                  "name": "newOwner",
                  "nodeType": "VariableDeclaration",
                  "scope": 5817,
                  "src": "390:24:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5814,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "390:7:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "349:69:59"
            },
            "src": "323:96:59"
          },
          {
            "body": {
              "id": 5825,
              "nodeType": "Block",
              "src": "561:29:59",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 5823,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 5820,
                      "name": "owner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5807,
                      "src": "567:5:59",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "expression": {
                        "argumentTypes": null,
                        "id": 5821,
                        "name": "msg",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 6356,
                        "src": "575:3:59",
                        "typeDescriptions": {
                          "typeIdentifier": "t_magic_message",
                          "typeString": "msg"
                        }
                      },
                      "id": 5822,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": false,
                      "lValueRequested": false,
                      "memberName": "sender",
                      "nodeType": "MemberAccess",
                      "referencedDeclaration": null,
                      "src": "575:10:59",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "567:18:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 5824,
                  "nodeType": "ExpressionStatement",
                  "src": "567:18:59"
                }
              ]
            },
            "documentation": "@dev The Ownable constructor sets the original `owner` of the contract to the sender\naccount.",
            "id": 5826,
            "implemented": true,
            "isConstructor": true,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 5818,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "551:2:59"
            },
            "payable": false,
            "returnParameters": {
              "id": 5819,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "561:0:59"
            },
            "scope": 5889,
            "src": "540:50:59",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 5836,
              "nodeType": "Block",
              "src": "691:46:59",
              "statements": [
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
                        "id": 5832,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "expression": {
                            "argumentTypes": null,
                            "id": 5829,
                            "name": "msg",
                            "nodeType": "Identifier",
                            "overloadedDeclarations": [],
                            "referencedDeclaration": 6356,
                            "src": "705:3:59",
                            "typeDescriptions": {
                              "typeIdentifier": "t_magic_message",
                              "typeString": "msg"
                            }
                          },
                          "id": 5830,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": false,
                          "lValueRequested": false,
                          "memberName": "sender",
                          "nodeType": "MemberAccess",
                          "referencedDeclaration": null,
                          "src": "705:10:59",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "==",
                        "rightExpression": {
                          "argumentTypes": null,
                          "id": 5831,
                          "name": "owner",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 5807,
                          "src": "719:5:59",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "705:19:59",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 5828,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        6359,
                        6360
                      ],
                      "referencedDeclaration": 6359,
                      "src": "697:7:59",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 5833,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "697:28:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 5834,
                  "nodeType": "ExpressionStatement",
                  "src": "697:28:59"
                },
                {
                  "id": 5835,
                  "nodeType": "PlaceholderStatement",
                  "src": "731:1:59"
                }
              ]
            },
            "documentation": "@dev Throws if called by any account other than the owner.",
            "id": 5837,
            "name": "onlyOwner",
            "nodeType": "ModifierDefinition",
            "parameters": {
              "id": 5827,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "688:2:59"
            },
            "src": "670:67:59",
            "visibility": "internal"
          },
          {
            "body": {
              "id": 5852,
              "nodeType": "Block",
              "src": "873:65:59",
              "statements": [
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 5843,
                        "name": "owner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5807,
                        "src": "903:5:59",
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
                      "id": 5842,
                      "name": "OwnershipRenounced",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5811,
                      "src": "884:18:59",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$returns$__$",
                        "typeString": "function (address)"
                      }
                    },
                    "id": 5844,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "884:25:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 5845,
                  "nodeType": "EmitStatement",
                  "src": "879:30:59"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 5850,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 5846,
                      "name": "owner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5807,
                      "src": "915:5:59",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "arguments": [
                        {
                          "argumentTypes": null,
                          "hexValue": "30",
                          "id": 5848,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "number",
                          "lValueRequested": false,
                          "nodeType": "Literal",
                          "src": "931:1:59",
                          "subdenomination": null,
                          "typeDescriptions": {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          },
                          "value": "0"
                        }
                      ],
                      "expression": {
                        "argumentTypes": [
                          {
                            "typeIdentifier": "t_rational_0_by_1",
                            "typeString": "int_const 0"
                          }
                        ],
                        "id": 5847,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": true,
                        "lValueRequested": false,
                        "nodeType": "ElementaryTypeNameExpression",
                        "src": "923:7:59",
                        "typeDescriptions": {
                          "typeIdentifier": "t_type$_t_address_$",
                          "typeString": "type(address)"
                        },
                        "typeName": "address"
                      },
                      "id": 5849,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "typeConversion",
                      "lValueRequested": false,
                      "names": [],
                      "nodeType": "FunctionCall",
                      "src": "923:10:59",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "915:18:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 5851,
                  "nodeType": "ExpressionStatement",
                  "src": "915:18:59"
                }
              ]
            },
            "documentation": "@dev Allows the current owner to relinquish control of the contract.",
            "id": 5853,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 5840,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 5839,
                  "name": "onlyOwner",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 5837,
                  "src": "863:9:59",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "863:9:59"
              }
            ],
            "name": "renounceOwnership",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 5838,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "853:2:59"
            },
            "payable": false,
            "returnParameters": {
              "id": 5841,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "873:0:59"
            },
            "scope": 5889,
            "src": "827:111:59",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 5864,
              "nodeType": "Block",
              "src": "1163:40:59",
              "statements": [
                {
                  "expression": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 5861,
                        "name": "_newOwner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5855,
                        "src": "1188:9:59",
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
                      "id": 5860,
                      "name": "_transferOwnership",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5888,
                      "src": "1169:18:59",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_internal_nonpayable$_t_address_$returns$__$",
                        "typeString": "function (address)"
                      }
                    },
                    "id": 5862,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1169:29:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 5863,
                  "nodeType": "ExpressionStatement",
                  "src": "1169:29:59"
                }
              ]
            },
            "documentation": "@dev Allows the current owner to transfer control of the contract to a newOwner.\n@param _newOwner The address to transfer ownership to.",
            "id": 5865,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [
              {
                "arguments": null,
                "id": 5858,
                "modifierName": {
                  "argumentTypes": null,
                  "id": 5857,
                  "name": "onlyOwner",
                  "nodeType": "Identifier",
                  "overloadedDeclarations": [],
                  "referencedDeclaration": 5837,
                  "src": "1153:9:59",
                  "typeDescriptions": {
                    "typeIdentifier": "t_modifier$__$",
                    "typeString": "modifier ()"
                  }
                },
                "nodeType": "ModifierInvocation",
                "src": "1153:9:59"
              }
            ],
            "name": "transferOwnership",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 5856,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5855,
                  "name": "_newOwner",
                  "nodeType": "VariableDeclaration",
                  "scope": 5865,
                  "src": "1127:17:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5854,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1127:7:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1126:19:59"
            },
            "payable": false,
            "returnParameters": {
              "id": 5859,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1163:0:59"
            },
            "scope": 5889,
            "src": "1100:103:59",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "public"
          },
          {
            "body": {
              "id": 5887,
              "nodeType": "Block",
              "src": "1394:115:59",
              "statements": [
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
                        "id": 5875,
                        "isConstant": false,
                        "isLValue": false,
                        "isPure": false,
                        "lValueRequested": false,
                        "leftExpression": {
                          "argumentTypes": null,
                          "id": 5871,
                          "name": "_newOwner",
                          "nodeType": "Identifier",
                          "overloadedDeclarations": [],
                          "referencedDeclaration": 5867,
                          "src": "1408:9:59",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "nodeType": "BinaryOperation",
                        "operator": "!=",
                        "rightExpression": {
                          "argumentTypes": null,
                          "arguments": [
                            {
                              "argumentTypes": null,
                              "hexValue": "30",
                              "id": 5873,
                              "isConstant": false,
                              "isLValue": false,
                              "isPure": true,
                              "kind": "number",
                              "lValueRequested": false,
                              "nodeType": "Literal",
                              "src": "1429:1:59",
                              "subdenomination": null,
                              "typeDescriptions": {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              },
                              "value": "0"
                            }
                          ],
                          "expression": {
                            "argumentTypes": [
                              {
                                "typeIdentifier": "t_rational_0_by_1",
                                "typeString": "int_const 0"
                              }
                            ],
                            "id": 5872,
                            "isConstant": false,
                            "isLValue": false,
                            "isPure": true,
                            "lValueRequested": false,
                            "nodeType": "ElementaryTypeNameExpression",
                            "src": "1421:7:59",
                            "typeDescriptions": {
                              "typeIdentifier": "t_type$_t_address_$",
                              "typeString": "type(address)"
                            },
                            "typeName": "address"
                          },
                          "id": 5874,
                          "isConstant": false,
                          "isLValue": false,
                          "isPure": true,
                          "kind": "typeConversion",
                          "lValueRequested": false,
                          "names": [],
                          "nodeType": "FunctionCall",
                          "src": "1421:10:59",
                          "typeDescriptions": {
                            "typeIdentifier": "t_address",
                            "typeString": "address"
                          }
                        },
                        "src": "1408:23:59",
                        "typeDescriptions": {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      }
                    ],
                    "expression": {
                      "argumentTypes": [
                        {
                          "typeIdentifier": "t_bool",
                          "typeString": "bool"
                        }
                      ],
                      "id": 5870,
                      "name": "require",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [
                        6359,
                        6360
                      ],
                      "referencedDeclaration": 6359,
                      "src": "1400:7:59",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_require_pure$_t_bool_$returns$__$",
                        "typeString": "function (bool) pure"
                      }
                    },
                    "id": 5876,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1400:32:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 5877,
                  "nodeType": "ExpressionStatement",
                  "src": "1400:32:59"
                },
                {
                  "eventCall": {
                    "argumentTypes": null,
                    "arguments": [
                      {
                        "argumentTypes": null,
                        "id": 5879,
                        "name": "owner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5807,
                        "src": "1464:5:59",
                        "typeDescriptions": {
                          "typeIdentifier": "t_address",
                          "typeString": "address"
                        }
                      },
                      {
                        "argumentTypes": null,
                        "id": 5880,
                        "name": "_newOwner",
                        "nodeType": "Identifier",
                        "overloadedDeclarations": [],
                        "referencedDeclaration": 5867,
                        "src": "1471:9:59",
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
                      "id": 5878,
                      "name": "OwnershipTransferred",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5817,
                      "src": "1443:20:59",
                      "typeDescriptions": {
                        "typeIdentifier": "t_function_event_nonpayable$_t_address_$_t_address_$returns$__$",
                        "typeString": "function (address,address)"
                      }
                    },
                    "id": 5881,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "kind": "functionCall",
                    "lValueRequested": false,
                    "names": [],
                    "nodeType": "FunctionCall",
                    "src": "1443:38:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_tuple$__$",
                      "typeString": "tuple()"
                    }
                  },
                  "id": 5882,
                  "nodeType": "EmitStatement",
                  "src": "1438:43:59"
                },
                {
                  "expression": {
                    "argumentTypes": null,
                    "id": 5885,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": false,
                    "lValueRequested": false,
                    "leftHandSide": {
                      "argumentTypes": null,
                      "id": 5883,
                      "name": "owner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5807,
                      "src": "1487:5:59",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "nodeType": "Assignment",
                    "operator": "=",
                    "rightHandSide": {
                      "argumentTypes": null,
                      "id": 5884,
                      "name": "_newOwner",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 5867,
                      "src": "1495:9:59",
                      "typeDescriptions": {
                        "typeIdentifier": "t_address",
                        "typeString": "address"
                      }
                    },
                    "src": "1487:17:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "id": 5886,
                  "nodeType": "ExpressionStatement",
                  "src": "1487:17:59"
                }
              ]
            },
            "documentation": "@dev Transfers control of the contract to a newOwner.\n@param _newOwner The address to transfer ownership to.",
            "id": 5888,
            "implemented": true,
            "isConstructor": false,
            "isDeclaredConst": false,
            "modifiers": [],
            "name": "_transferOwnership",
            "nodeType": "FunctionDefinition",
            "parameters": {
              "id": 5868,
              "nodeType": "ParameterList",
              "parameters": [
                {
                  "constant": false,
                  "id": 5867,
                  "name": "_newOwner",
                  "nodeType": "VariableDeclaration",
                  "scope": 5888,
                  "src": "1366:17:59",
                  "stateVariable": false,
                  "storageLocation": "default",
                  "typeDescriptions": {
                    "typeIdentifier": "t_address",
                    "typeString": "address"
                  },
                  "typeName": {
                    "id": 5866,
                    "name": "address",
                    "nodeType": "ElementaryTypeName",
                    "src": "1366:7:59",
                    "typeDescriptions": {
                      "typeIdentifier": "t_address",
                      "typeString": "address"
                    }
                  },
                  "value": null,
                  "visibility": "internal"
                }
              ],
              "src": "1365:19:59"
            },
            "payable": false,
            "returnParameters": {
              "id": 5869,
              "nodeType": "ParameterList",
              "parameters": [],
              "src": "1394:0:59"
            },
            "scope": 5889,
            "src": "1338:171:59",
            "stateMutability": "nonpayable",
            "superFunction": null,
            "visibility": "internal"
          }
        ],
        "scope": 5890,
        "src": "217:1294:59"
      }
    ],
    "src": "0:1512:59"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.24+commit.e67f0147.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "2.0.0",
  "updatedAt": "2018-07-08T01:11:15.212Z"
}