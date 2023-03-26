//SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

contract TokenDistrubution {
    /* Type Declarations */

    enum Role {
        Owner,
        User
    }

    /* State Variables*/
    address owner;

    constructor(address _owner) {
        owner = _owner;
    }

    //add users with initial stake
    //create tokens --> ERC20
    //on timestamp distribute tokens --> chainlink?
    //withdraw token value
}
