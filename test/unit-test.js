const { assert, expect } = require("chai")
const { ethers } = require("hardhat")

//yarn hardhat test
//yarn hardhat test --grep "assert message example"
describe("Token Distrubution Mechanism unit tests", async () => {
  let TDMContract

  beforeEach(async () => {
    TDMContractFactory = await ethers.getContractFactory("TokenDistrubutionMechanism")
    TDMContract = await TDMContractFactory.deploy()
  })

  describe("constructor", async () => {
    it("owner has right amount of funds", async () => {
      accounts = await ethers.getSigners()
      assert.equal(await TDMContract.balanceOf(accounts[0].address), 10 * 10 ** 18)
    })
  })

  describe("transfers", async () => {
    it("receiving account gets amount sent", async () => {
      accounts = await ethers.getSigners()

      amount = (10 ** 18).toString()
      await TDMContract.transfer(accounts[1].address, amount)
      assert.equal(await TDMContract.balanceOf(accounts[1].address), amount)
    })
  })

  describe("View/Pure methods", async () => {
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
})
