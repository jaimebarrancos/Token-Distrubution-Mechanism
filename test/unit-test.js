const { assert, expect } = require("chai")
const { ethers } = require("hardhat")

//yarn hardhat test
describe("testing title", async () => {
  let TDMContract

  //creating contract should be before each test to always experiment individually
  beforeEach(async () => {
    TDMContractFactory = await ethers.getContractFactory("TokenDistrubutionMechanism")
    TDMContract = await TDMContractFactory.deploy()
    // const [owner] = await ethers.getSigners();
    // console.log('Signer 1 address: ', owner.address);
    // return { faucet, owner };
  })

  it("check name", async () => {
    const name = await TDMContract.name()
    assert.equal(name, "TokenDistrubutionMechanism")
  })

  it("check symbol", async () => {
    const symbol = await TDMContract.symbol()
    assert.equal(symbol, "TDM")
  })

  it("check total supply", async () => {
    const totalSupply = await TDMContract.totalSupply()
    assert.equal(totalSupply, 10 * 10 ** 18)
  })

  it("check decimals", async () => {
    const decimals = await TDMContract.decimals()
    assert.equal(decimals, 18)
  })
})
