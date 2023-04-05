//SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "./TokenDistrubutionMechanism.sol";

// each user that deposits money triggers creating tokens for contract (mint)
// contract then rewards only some users

error notEnoughEther();

contract Distrubution is TokenDistrubutionMechanism{
    /* Type Declarations */
    enum Role {
        Owner,
        User
    }

    /* State Variables*/
    uint8 private constant NEW_USER_POINTS = 5;
    uint8 private constant NEW_USER_MINTED_TOKENS = 10; 
    address private s_owner;
    mapping(address => uint256) s_points;

    constructor(address _owner) {
        s_owner = _owner;
    }

    /// @dev user needs to pay a fee to participate
    /// @dev new tokens are created per new user
    function createUser(address newUser) public payable {
        if (newUser == address(0)) {
            revert AddressIsZero();
            }
        if (msg.value < 1 * 10 **18) {
            revert notEnoughEther();
        }
        _mint(address(this), NEW_USER_MINTED_TOKENS);
        s_points[newUser] = NEW_USER_POINTS;
    }
    

    // View / Pure functions
    function pointsOf(address userAddress) public view returns(uint256){
        return s_points[userAddress];
    }

    //on timestamp distribute percentage of tokens (as reward for some users) --> chainlink?
    //withdraw token value


}
