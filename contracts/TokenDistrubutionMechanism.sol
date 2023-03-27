//SPDX-License-Identifier: MIT
pragma solidity ^0.8.19;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

//TODO: using SafeMath for uint256;

contract TokenDistrubutionMechanism is ERC20 {
    /* State Variables */
    uint constant INNITIAL_SUPPLY = 10 * (10 ** 18);
    mapping(address => uint) private _balances;
    mapping(address => mapping(address => uint256)) private _allowances;

    uint256 private _totalSupply;

    string private _name = "TokenDistrubutionMechanism";
    string private _symbol = "TDM";
    uint8 private immutable _decimals = 18;

    constructor() ERC20("TokenDistrubutionMechanism", "TDM") {
        _mint(msg.sender, INNITIAL_SUPPLY);
    }

    function totalSupply() public view override returns (uint256) {}

    function balanceOf(address tokenOwner) public view override returns (uint) {
        return _balances[tokenOwner];
    }

    function allowance(
        address tokenOwner,
        address spender
    ) public view override returns (uint) {}

    function approve(
        address spender,
        uint tokens
    ) public override returns (bool) {}

    ///@dev transfer between accounts
    function _transfer(
        address sender,
        address recipient,
        uint256 amount
    ) internal override {
        transferFrom(sender, recipient, amount);
    }

    ///@dev transfer from contract balance to account

    function transfer(
        address recipient,
        uint256 amount
    ) public override returns (bool) {
        _balances[msg.sender] = _balances[msg.sender] - amount;
        _balances[recipient] = _balances[recipient] + amount;

        return true;
    }
}
