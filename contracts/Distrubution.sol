//SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

contract Distrubution {
    /* Type Declarations */
    enum Role {
        Owner,
        User
    }

    /* State Variables*/
    address private s_owner;

    constructor(address _owner) {
        s_owner = _owner;
    }

    function joinMechanism() external {
        //s_balances[msg.sender] = 0;
    }

    function createTokens() internal {}

    //add users with initial stake
    //create tokens --> ERC20
    //on timestamp distribute percentage of tokens (as reward for some users) --> chainlink?
    //withdraw token value
}
