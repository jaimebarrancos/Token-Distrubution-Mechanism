//SPDX-License-Identifier: MIT
pragma solidity ^0.8.7;

import "@openzeppelin/contracts/token/ERC20/ERC20.sol";

contract TDM_Token is ERC20 {
    /* State Variables */
    uint constant INNITIAL_SUPPLY = 10 * (10 ** 18);

    constructor() ERC20("TokenDistrubutionMechanism", "TDM") {
        _mint(msg.sender, INNITIAL_SUPPLY);
    }

    function totalSupply() public view override returns (uint256) {}

    function balanceOf(
        address tokenOwner
    ) public view override returns (uint) {}

    function allowance(
        address tokenOwner,
        address spender
    ) public view override returns (uint) {}

    function transfer(address to, uint tokens) public override returns (bool) {}

    function approve(
        address spender,
        uint tokens
    ) public override returns (bool) {}

    function transferFrom(
        address from,
        address to,
        uint tokens
    ) public override returns (bool) {}
}
