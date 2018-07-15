export const LibEIP712 = 
{
  "contractName": "LibEIP712",
  "abi": [
    {
      "constant": true,
      "inputs": [],
      "name": "EIP712_DOMAIN_SEPARATOR_SCHEMA_HASH",
      "outputs": [
        {
          "name": "",
          "type": "bytes32"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    },
    {
      "constant": true,
      "inputs": [],
      "name": "EIP712_DOMAIN_HASH",
      "outputs": [
        {
          "name": "",
          "type": "bytes32"
        }
      ],
      "payable": false,
      "stateMutability": "view",
      "type": "function"
    }
  ],
  "bytecode": "0x608060405234801561001057600080fd5b506101f4806100206000396000f30060806040526004361061004b5763ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416632624b2d98114610050578063e306f77914610077575b600080fd5b34801561005c57600080fd5b5061006561008c565b60408051918252519081900360200190f35b34801561008357600080fd5b506100656101c2565b604080517f454950373132446f6d61696e28000000000000000000000000000000000000006020808301919091527f737472696e67206e616d652c0000000000000000000000000000000000000000602d8301527f737472696e672076657273696f6e2c000000000000000000000000000000000060398301527f6164647265737320766572696679696e67436f6e74726163740000000000000060488301527f2900000000000000000000000000000000000000000000000000000000000000606183015282516042818403018152606290920192839052815191929182918401908083835b602083106101925780518252601f199092019160209182019101610173565b6001836020036101000a038019825116818451168082178552505050505050905001915050604051809103902081565b600054815600a165627a7a723058208de653a7d4c51c2ee221daa09de6eda0f1fb52fcc87d38c4d4329572397351af0029",
  "deployedBytecode": "0x60806040526004361061004b5763ffffffff7c01000000000000000000000000000000000000000000000000000000006000350416632624b2d98114610050578063e306f77914610077575b600080fd5b34801561005c57600080fd5b5061006561008c565b60408051918252519081900360200190f35b34801561008357600080fd5b506100656101c2565b604080517f454950373132446f6d61696e28000000000000000000000000000000000000006020808301919091527f737472696e67206e616d652c0000000000000000000000000000000000000000602d8301527f737472696e672076657273696f6e2c000000000000000000000000000000000060398301527f6164647265737320766572696679696e67436f6e74726163740000000000000060488301527f2900000000000000000000000000000000000000000000000000000000000000606183015282516042818403018152606290920192839052815191929182918401908083835b602083106101925780518252601f199092019160209182019101610173565b6001836020036101000a038019825116818451168082178552505050505050905001915050604051809103902081565b600054815600a165627a7a723058208de653a7d4c51c2ee221daa09de6eda0f1fb52fcc87d38c4d4329572397351af0029",
  "sourceMap": "606:649:40:-;;;;8:9:-1;5:2;;;30:1;27;20:12;5:2;606:649:40;;;;;;;",
  "deployedSourceMap": "606:649:40:-;;;;;;;;;;;;;;;;;;;;;;;;;;;;943:221;;8:9:-1;5:2;;;30:1;27;20:12;5:2;943:221:40;;;;;;;;;;;;;;;;;;;;1219:33;;8:9:-1;5:2;;;30:1;27;20:12;5:2;1219:33:40;;;;943:221;1015:148;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;22:32:-1;26:21;;;22:32;6:49;;1015:148:40;;;;;;;;1005:159;;1015:148;;;;;1005:159;;;;1015:148;1005:159;36:153:-1;66:2;58:11;;36:153;;176:10;;164:23;;-1:-1;;139:12;;;;98:2;89:12;;;;114;36:153;;;274:1;267:3;263:2;259:12;254:3;250:22;246:30;315:4;311:9;305:3;299:10;295:26;356:4;350:3;344:10;340:21;389:7;380;377:20;372:3;365:33;3:399;;;1005:159:40;;;;;;;;;;;;;;;;943:221;:::o;1219:33::-;;;;:::o",
  "source": "/*\n\n  Copyright 2018 ZeroEx Intl.\n\n  Licensed under the Apache License, Version 2.0 (the \"License\");\n  you may not use this file except in compliance with the License.\n  You may obtain a copy of the License at\n\n    http://www.apache.org/licenses/LICENSE-2.0\n\n  Unless required by applicable law or agreed to in writing, software\n  distributed under the License is distributed on an \"AS IS\" BASIS,\n  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n  See the License for the specific language governing permissions and\n  limitations under the License.\n\n*/\n\npragma solidity ^0.4.24;\n\ncontract LibEIP712 {\n    // EIP191 header for EIP712 prefix\n    string constant EIP191_HEADER = \"\\x19\\x01\";\n\n    // EIP712 Domain Name value\n    string constant EIP712_DOMAIN_NAME = \"0x Protocol\";\n\n    // EIP712 Domain Version value\n    string constant EIP712_DOMAIN_VERSION = \"2\";\n\n    // Hash of the EIP712 Domain Separator Schema\n    bytes32 public constant EIP712_DOMAIN_SEPARATOR_SCHEMA_HASH = keccak256(abi.encodePacked(\n        \"EIP712Domain(\",\n        \"string name,\",\n        \"string version,\",\n        \"address verifyingContract\",\n        \")\"\n    ));\n\n    // Hash of the EIP712 Domain Separator data\n    bytes32 public EIP712_DOMAIN_HASH;\n}\n",
  "sourcePath": "/Users/justinkchen/workspace/set-protocol-contracts/contracts/external/0x/Exchange/libs/LibEIP712.sol",
  "ast": {
    "absolutePath": "/Users/justinkchen/workspace/set-protocol-contracts/contracts/external/0x/Exchange/libs/LibEIP712.sol",
    "exportedSymbols": {
      "LibEIP712": [
        3830
      ]
    },
    "id": 3831,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 3806,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "580:24:40"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 3830,
        "linearizedBaseContracts": [
          3830
        ],
        "name": "LibEIP712",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": true,
            "id": 3809,
            "name": "EIP191_HEADER",
            "nodeType": "VariableDeclaration",
            "scope": 3830,
            "src": "670:42:40",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_string_memory",
              "typeString": "string"
            },
            "typeName": {
              "id": 3807,
              "name": "string",
              "nodeType": "ElementaryTypeName",
              "src": "670:6:40",
              "typeDescriptions": {
                "typeIdentifier": "t_string_storage_ptr",
                "typeString": "string"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "1901",
              "id": 3808,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "string",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "702:10:40",
              "subdenomination": null,
              "typeDescriptions": {
                "typeIdentifier": "t_stringliteral_301a50b291d33ce1e8e9064e3f6a6c51d902ec22892b50d58abf6357c6a45541",
                "typeString": "literal_string \"\u0019\u0001\""
              },
              "value": "\u0019\u0001"
            },
            "visibility": "internal"
          },
          {
            "constant": true,
            "id": 3812,
            "name": "EIP712_DOMAIN_NAME",
            "nodeType": "VariableDeclaration",
            "scope": 3830,
            "src": "751:50:40",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_string_memory",
              "typeString": "string"
            },
            "typeName": {
              "id": 3810,
              "name": "string",
              "nodeType": "ElementaryTypeName",
              "src": "751:6:40",
              "typeDescriptions": {
                "typeIdentifier": "t_string_storage_ptr",
                "typeString": "string"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "30782050726f746f636f6c",
              "id": 3811,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "string",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "788:13:40",
              "subdenomination": null,
              "typeDescriptions": {
                "typeIdentifier": "t_stringliteral_f0f24618f4c4be1e62e026fb039a20ef96f4495294817d1027ffaa6d1f70e61e",
                "typeString": "literal_string \"0x Protocol\""
              },
              "value": "0x Protocol"
            },
            "visibility": "internal"
          },
          {
            "constant": true,
            "id": 3815,
            "name": "EIP712_DOMAIN_VERSION",
            "nodeType": "VariableDeclaration",
            "scope": 3830,
            "src": "843:43:40",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_string_memory",
              "typeString": "string"
            },
            "typeName": {
              "id": 3813,
              "name": "string",
              "nodeType": "ElementaryTypeName",
              "src": "843:6:40",
              "typeDescriptions": {
                "typeIdentifier": "t_string_storage_ptr",
                "typeString": "string"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "32",
              "id": 3814,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "string",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "883:3:40",
              "subdenomination": null,
              "typeDescriptions": {
                "typeIdentifier": "t_stringliteral_ad7c5bef027816a800da1736444fb58a807ef4c9603b7848673f7e3a68eb14a5",
                "typeString": "literal_string \"2\""
              },
              "value": "2"
            },
            "visibility": "internal"
          },
          {
            "constant": true,
            "id": 3827,
            "name": "EIP712_DOMAIN_SEPARATOR_SCHEMA_HASH",
            "nodeType": "VariableDeclaration",
            "scope": 3830,
            "src": "943:221:40",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_bytes32",
              "typeString": "bytes32"
            },
            "typeName": {
              "id": 3816,
              "name": "bytes32",
              "nodeType": "ElementaryTypeName",
              "src": "943:7:40",
              "typeDescriptions": {
                "typeIdentifier": "t_bytes32",
                "typeString": "bytes32"
              }
            },
            "value": {
              "argumentTypes": null,
              "arguments": [
                {
                  "argumentTypes": null,
                  "arguments": [
                    {
                      "argumentTypes": null,
                      "hexValue": "454950373132446f6d61696e28",
                      "id": 3820,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "string",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1041:15:40",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_stringliteral_de06c25f21a371a1bc92887b399d179e16db7e78ff9780730d4f2f1217f0227a",
                        "typeString": "literal_string \"EIP712Domain(\""
                      },
                      "value": "EIP712Domain("
                    },
                    {
                      "argumentTypes": null,
                      "hexValue": "737472696e67206e616d652c",
                      "id": 3821,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "string",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1066:14:40",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_stringliteral_0376df606842aeeddf95ba5db6e827bf40e254b68db9531357ede6679d404597",
                        "typeString": "literal_string \"string name,\""
                      },
                      "value": "string name,"
                    },
                    {
                      "argumentTypes": null,
                      "hexValue": "737472696e672076657273696f6e2c",
                      "id": 3822,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "string",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1090:17:40",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_stringliteral_59f8a695163fe72b45680abd680645bb66c8df0e236a50c4f8a610af2d5a606c",
                        "typeString": "literal_string \"string version,\""
                      },
                      "value": "string version,"
                    },
                    {
                      "argumentTypes": null,
                      "hexValue": "6164647265737320766572696679696e67436f6e7472616374",
                      "id": 3823,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "string",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1117:27:40",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_stringliteral_40ab939a78baf41674810042aff4b66e1c8507c1fbb0af0c7e28dc4250f2dd9b",
                        "typeString": "literal_string \"address verifyingContract\""
                      },
                      "value": "address verifyingContract"
                    },
                    {
                      "argumentTypes": null,
                      "hexValue": "29",
                      "id": 3824,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "string",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1154:3:40",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_stringliteral_59d76dc3b33357eda30db1508968fbb18f21b9cd2442f1559b20154ddaa4d7ed",
                        "typeString": "literal_string \")\""
                      },
                      "value": ")"
                    }
                  ],
                  "expression": {
                    "argumentTypes": [
                      {
                        "typeIdentifier": "t_stringliteral_de06c25f21a371a1bc92887b399d179e16db7e78ff9780730d4f2f1217f0227a",
                        "typeString": "literal_string \"EIP712Domain(\""
                      },
                      {
                        "typeIdentifier": "t_stringliteral_0376df606842aeeddf95ba5db6e827bf40e254b68db9531357ede6679d404597",
                        "typeString": "literal_string \"string name,\""
                      },
                      {
                        "typeIdentifier": "t_stringliteral_59f8a695163fe72b45680abd680645bb66c8df0e236a50c4f8a610af2d5a606c",
                        "typeString": "literal_string \"string version,\""
                      },
                      {
                        "typeIdentifier": "t_stringliteral_40ab939a78baf41674810042aff4b66e1c8507c1fbb0af0c7e28dc4250f2dd9b",
                        "typeString": "literal_string \"address verifyingContract\""
                      },
                      {
                        "typeIdentifier": "t_stringliteral_59d76dc3b33357eda30db1508968fbb18f21b9cd2442f1559b20154ddaa4d7ed",
                        "typeString": "literal_string \")\""
                      }
                    ],
                    "expression": {
                      "argumentTypes": null,
                      "id": 3818,
                      "name": "abi",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 6343,
                      "src": "1015:3:40",
                      "typeDescriptions": {
                        "typeIdentifier": "t_magic_abi",
                        "typeString": "abi"
                      }
                    },
                    "id": 3819,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "lValueRequested": false,
                    "memberName": "encodePacked",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": null,
                    "src": "1015:16:40",
                    "typeDescriptions": {
                      "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                      "typeString": "function () pure returns (bytes memory)"
                    }
                  },
                  "id": 3825,
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": true,
                  "kind": "functionCall",
                  "lValueRequested": false,
                  "names": [],
                  "nodeType": "FunctionCall",
                  "src": "1015:148:40",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes memory"
                  }
                }
              ],
              "expression": {
                "argumentTypes": [
                  {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes memory"
                  }
                ],
                "id": 3817,
                "name": "keccak256",
                "nodeType": "Identifier",
                "overloadedDeclarations": [],
                "referencedDeclaration": 6350,
                "src": "1005:9:40",
                "typeDescriptions": {
                  "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                  "typeString": "function () pure returns (bytes32)"
                }
              },
              "id": 3826,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "functionCall",
              "lValueRequested": false,
              "names": [],
              "nodeType": "FunctionCall",
              "src": "1005:159:40",
              "typeDescriptions": {
                "typeIdentifier": "t_bytes32",
                "typeString": "bytes32"
              }
            },
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 3829,
            "name": "EIP712_DOMAIN_HASH",
            "nodeType": "VariableDeclaration",
            "scope": 3830,
            "src": "1219:33:40",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_bytes32",
              "typeString": "bytes32"
            },
            "typeName": {
              "id": 3828,
              "name": "bytes32",
              "nodeType": "ElementaryTypeName",
              "src": "1219:7:40",
              "typeDescriptions": {
                "typeIdentifier": "t_bytes32",
                "typeString": "bytes32"
              }
            },
            "value": null,
            "visibility": "public"
          }
        ],
        "scope": 3831,
        "src": "606:649:40"
      }
    ],
    "src": "580:676:40"
  },
  "legacyAST": {
    "absolutePath": "/Users/justinkchen/workspace/set-protocol-contracts/contracts/external/0x/Exchange/libs/LibEIP712.sol",
    "exportedSymbols": {
      "LibEIP712": [
        3830
      ]
    },
    "id": 3831,
    "nodeType": "SourceUnit",
    "nodes": [
      {
        "id": 3806,
        "literals": [
          "solidity",
          "^",
          "0.4",
          ".24"
        ],
        "nodeType": "PragmaDirective",
        "src": "580:24:40"
      },
      {
        "baseContracts": [],
        "contractDependencies": [],
        "contractKind": "contract",
        "documentation": null,
        "fullyImplemented": true,
        "id": 3830,
        "linearizedBaseContracts": [
          3830
        ],
        "name": "LibEIP712",
        "nodeType": "ContractDefinition",
        "nodes": [
          {
            "constant": true,
            "id": 3809,
            "name": "EIP191_HEADER",
            "nodeType": "VariableDeclaration",
            "scope": 3830,
            "src": "670:42:40",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_string_memory",
              "typeString": "string"
            },
            "typeName": {
              "id": 3807,
              "name": "string",
              "nodeType": "ElementaryTypeName",
              "src": "670:6:40",
              "typeDescriptions": {
                "typeIdentifier": "t_string_storage_ptr",
                "typeString": "string"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "1901",
              "id": 3808,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "string",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "702:10:40",
              "subdenomination": null,
              "typeDescriptions": {
                "typeIdentifier": "t_stringliteral_301a50b291d33ce1e8e9064e3f6a6c51d902ec22892b50d58abf6357c6a45541",
                "typeString": "literal_string \"\u0019\u0001\""
              },
              "value": "\u0019\u0001"
            },
            "visibility": "internal"
          },
          {
            "constant": true,
            "id": 3812,
            "name": "EIP712_DOMAIN_NAME",
            "nodeType": "VariableDeclaration",
            "scope": 3830,
            "src": "751:50:40",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_string_memory",
              "typeString": "string"
            },
            "typeName": {
              "id": 3810,
              "name": "string",
              "nodeType": "ElementaryTypeName",
              "src": "751:6:40",
              "typeDescriptions": {
                "typeIdentifier": "t_string_storage_ptr",
                "typeString": "string"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "30782050726f746f636f6c",
              "id": 3811,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "string",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "788:13:40",
              "subdenomination": null,
              "typeDescriptions": {
                "typeIdentifier": "t_stringliteral_f0f24618f4c4be1e62e026fb039a20ef96f4495294817d1027ffaa6d1f70e61e",
                "typeString": "literal_string \"0x Protocol\""
              },
              "value": "0x Protocol"
            },
            "visibility": "internal"
          },
          {
            "constant": true,
            "id": 3815,
            "name": "EIP712_DOMAIN_VERSION",
            "nodeType": "VariableDeclaration",
            "scope": 3830,
            "src": "843:43:40",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_string_memory",
              "typeString": "string"
            },
            "typeName": {
              "id": 3813,
              "name": "string",
              "nodeType": "ElementaryTypeName",
              "src": "843:6:40",
              "typeDescriptions": {
                "typeIdentifier": "t_string_storage_ptr",
                "typeString": "string"
              }
            },
            "value": {
              "argumentTypes": null,
              "hexValue": "32",
              "id": 3814,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "string",
              "lValueRequested": false,
              "nodeType": "Literal",
              "src": "883:3:40",
              "subdenomination": null,
              "typeDescriptions": {
                "typeIdentifier": "t_stringliteral_ad7c5bef027816a800da1736444fb58a807ef4c9603b7848673f7e3a68eb14a5",
                "typeString": "literal_string \"2\""
              },
              "value": "2"
            },
            "visibility": "internal"
          },
          {
            "constant": true,
            "id": 3827,
            "name": "EIP712_DOMAIN_SEPARATOR_SCHEMA_HASH",
            "nodeType": "VariableDeclaration",
            "scope": 3830,
            "src": "943:221:40",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_bytes32",
              "typeString": "bytes32"
            },
            "typeName": {
              "id": 3816,
              "name": "bytes32",
              "nodeType": "ElementaryTypeName",
              "src": "943:7:40",
              "typeDescriptions": {
                "typeIdentifier": "t_bytes32",
                "typeString": "bytes32"
              }
            },
            "value": {
              "argumentTypes": null,
              "arguments": [
                {
                  "argumentTypes": null,
                  "arguments": [
                    {
                      "argumentTypes": null,
                      "hexValue": "454950373132446f6d61696e28",
                      "id": 3820,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "string",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1041:15:40",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_stringliteral_de06c25f21a371a1bc92887b399d179e16db7e78ff9780730d4f2f1217f0227a",
                        "typeString": "literal_string \"EIP712Domain(\""
                      },
                      "value": "EIP712Domain("
                    },
                    {
                      "argumentTypes": null,
                      "hexValue": "737472696e67206e616d652c",
                      "id": 3821,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "string",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1066:14:40",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_stringliteral_0376df606842aeeddf95ba5db6e827bf40e254b68db9531357ede6679d404597",
                        "typeString": "literal_string \"string name,\""
                      },
                      "value": "string name,"
                    },
                    {
                      "argumentTypes": null,
                      "hexValue": "737472696e672076657273696f6e2c",
                      "id": 3822,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "string",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1090:17:40",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_stringliteral_59f8a695163fe72b45680abd680645bb66c8df0e236a50c4f8a610af2d5a606c",
                        "typeString": "literal_string \"string version,\""
                      },
                      "value": "string version,"
                    },
                    {
                      "argumentTypes": null,
                      "hexValue": "6164647265737320766572696679696e67436f6e7472616374",
                      "id": 3823,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "string",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1117:27:40",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_stringliteral_40ab939a78baf41674810042aff4b66e1c8507c1fbb0af0c7e28dc4250f2dd9b",
                        "typeString": "literal_string \"address verifyingContract\""
                      },
                      "value": "address verifyingContract"
                    },
                    {
                      "argumentTypes": null,
                      "hexValue": "29",
                      "id": 3824,
                      "isConstant": false,
                      "isLValue": false,
                      "isPure": true,
                      "kind": "string",
                      "lValueRequested": false,
                      "nodeType": "Literal",
                      "src": "1154:3:40",
                      "subdenomination": null,
                      "typeDescriptions": {
                        "typeIdentifier": "t_stringliteral_59d76dc3b33357eda30db1508968fbb18f21b9cd2442f1559b20154ddaa4d7ed",
                        "typeString": "literal_string \")\""
                      },
                      "value": ")"
                    }
                  ],
                  "expression": {
                    "argumentTypes": [
                      {
                        "typeIdentifier": "t_stringliteral_de06c25f21a371a1bc92887b399d179e16db7e78ff9780730d4f2f1217f0227a",
                        "typeString": "literal_string \"EIP712Domain(\""
                      },
                      {
                        "typeIdentifier": "t_stringliteral_0376df606842aeeddf95ba5db6e827bf40e254b68db9531357ede6679d404597",
                        "typeString": "literal_string \"string name,\""
                      },
                      {
                        "typeIdentifier": "t_stringliteral_59f8a695163fe72b45680abd680645bb66c8df0e236a50c4f8a610af2d5a606c",
                        "typeString": "literal_string \"string version,\""
                      },
                      {
                        "typeIdentifier": "t_stringliteral_40ab939a78baf41674810042aff4b66e1c8507c1fbb0af0c7e28dc4250f2dd9b",
                        "typeString": "literal_string \"address verifyingContract\""
                      },
                      {
                        "typeIdentifier": "t_stringliteral_59d76dc3b33357eda30db1508968fbb18f21b9cd2442f1559b20154ddaa4d7ed",
                        "typeString": "literal_string \")\""
                      }
                    ],
                    "expression": {
                      "argumentTypes": null,
                      "id": 3818,
                      "name": "abi",
                      "nodeType": "Identifier",
                      "overloadedDeclarations": [],
                      "referencedDeclaration": 6343,
                      "src": "1015:3:40",
                      "typeDescriptions": {
                        "typeIdentifier": "t_magic_abi",
                        "typeString": "abi"
                      }
                    },
                    "id": 3819,
                    "isConstant": false,
                    "isLValue": false,
                    "isPure": true,
                    "lValueRequested": false,
                    "memberName": "encodePacked",
                    "nodeType": "MemberAccess",
                    "referencedDeclaration": null,
                    "src": "1015:16:40",
                    "typeDescriptions": {
                      "typeIdentifier": "t_function_abiencodepacked_pure$__$returns$_t_bytes_memory_ptr_$",
                      "typeString": "function () pure returns (bytes memory)"
                    }
                  },
                  "id": 3825,
                  "isConstant": false,
                  "isLValue": false,
                  "isPure": true,
                  "kind": "functionCall",
                  "lValueRequested": false,
                  "names": [],
                  "nodeType": "FunctionCall",
                  "src": "1015:148:40",
                  "typeDescriptions": {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes memory"
                  }
                }
              ],
              "expression": {
                "argumentTypes": [
                  {
                    "typeIdentifier": "t_bytes_memory_ptr",
                    "typeString": "bytes memory"
                  }
                ],
                "id": 3817,
                "name": "keccak256",
                "nodeType": "Identifier",
                "overloadedDeclarations": [],
                "referencedDeclaration": 6350,
                "src": "1005:9:40",
                "typeDescriptions": {
                  "typeIdentifier": "t_function_sha3_pure$__$returns$_t_bytes32_$",
                  "typeString": "function () pure returns (bytes32)"
                }
              },
              "id": 3826,
              "isConstant": false,
              "isLValue": false,
              "isPure": true,
              "kind": "functionCall",
              "lValueRequested": false,
              "names": [],
              "nodeType": "FunctionCall",
              "src": "1005:159:40",
              "typeDescriptions": {
                "typeIdentifier": "t_bytes32",
                "typeString": "bytes32"
              }
            },
            "visibility": "public"
          },
          {
            "constant": false,
            "id": 3829,
            "name": "EIP712_DOMAIN_HASH",
            "nodeType": "VariableDeclaration",
            "scope": 3830,
            "src": "1219:33:40",
            "stateVariable": true,
            "storageLocation": "default",
            "typeDescriptions": {
              "typeIdentifier": "t_bytes32",
              "typeString": "bytes32"
            },
            "typeName": {
              "id": 3828,
              "name": "bytes32",
              "nodeType": "ElementaryTypeName",
              "src": "1219:7:40",
              "typeDescriptions": {
                "typeIdentifier": "t_bytes32",
                "typeString": "bytes32"
              }
            },
            "value": null,
            "visibility": "public"
          }
        ],
        "scope": 3831,
        "src": "606:649:40"
      }
    ],
    "src": "580:676:40"
  },
  "compiler": {
    "name": "solc",
    "version": "0.4.24+commit.e67f0147.Emscripten.clang"
  },
  "networks": {},
  "schemaVersion": "2.0.0",
  "updatedAt": "2018-07-08T01:11:15.201Z"
}