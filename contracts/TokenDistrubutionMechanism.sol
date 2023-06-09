//SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";


error AddressIsZero();
error NotEnoughBalance();

contract TokenDistrubutionMechanism is ERC20 {
    /* State Variables */
    uint constant INNITIAL_SUPPLY = 10 * (10 ** 18);

    constructor() ERC20("TokenDistrubutionMechanism", "TDM") {
        _mint(msg.sender, INNITIAL_SUPPLY);
    }
/*
    uint256 private _totalSupply;

    string private _name = "TokenDistrubutionMechanism";
    string private _symbol = "TDM";
    uint8 private immutable _decimals = 18;

    function balanceOf(address account) public view override returns (uint) {
        return s_balances[account];
    }
    
    ///View an allowance
    ///@dev anyone can view anyone's allowance
    ///@dev spender needs to call transferFrom
    function allowance(
        address owner,
        address spender
    ) public view override returns (uint) {
        return s_allowances[owner][spender];
    }

    ///approves an amount of tokens that the spender can control over the caller's tokens
    function approve(
        address spender,
        uint amount
    ) public override returns (bool) {
        if (spender == address(0)) {
            revert AddressIsZero();
        }

        emit Approval(msg.sender, spender, amount);

        return true;
    }

    ///transfer tokens
    ///@dev from account who calls the function to recipient
    function transfer(
        address recipient,
        uint256 amount
    ) public override returns (bool) {
        if (recipient == address(0)) {
            revert AddressIsZero();
        }
        if (s_balances[msg.sender] < amount) {
            revert NotEnoughBalance();
        }

        s_balances[msg.sender] = s_balances[msg.sender] - amount;
        s_balances[recipient] = s_balances[recipient] + amount;

        return true;
    }


    // view/pure functions

    function name() override public view returns (string memory) {
        return _name;
    }

    function symbol() override view public returns(string memory) {
        return _symbol;
    }

    //why decimals pure but totalsupply view?
    function decimals() public pure override returns(uint8) {
        return _decimals;
    }

    function totalSupply() public view override returns (uint256) {
        return _totalSupply;
    }
    */

}
