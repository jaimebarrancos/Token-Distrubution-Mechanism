const { assert, expect } = require("chai")
const { ethers } = require("hardhat")
const { INNITIAL_SUPPLY } = require("../hardhat.config")

//yarn hardhat test
//yarn hardhat test --grep "assert message example"

describe("Distrubution Mechanism unit tests", async () => {
  let DistrubutionContract, accounts
  beforeEach(async () => {
    accounts = await ethers.getSigners()
    DistrubutionContractFactory = await ethers.getContractFactory("Distrubution")
    DistrubutionContract = await DistrubutionContractFactory.deploy(accounts[0].address)
  })
  describe("user creation", async () => {
    //TODO: not enough fee / no fee
    // contract gained new tokens
    it("new user has 5 points", async () => {
      await DistrubutionContract.createUser(accounts[2].address, {
        value: (10 ** 18).toString(),
      })
      assert.equal(await DistrubutionContract.pointsOf(accounts[2].address), 5)
    })
  })
})

describe("Distrubution Mechanism Token unit tests", async () => {
  let TDMContract

  beforeEach(async () => {
    TDMContractFactory = await ethers.getContractFactory("TokenDistrubutionMechanism")
    TDMContract = await TDMContractFactory.deploy()
  })

  describe("constructor", async () => {
    it("owner has right amount of funds", async () => {
      accounts = await ethers.getSigners()
      assert.equal(await TDMContract.balanceOf(accounts[0].address), INNITIAL_SUPPLY)
    })
  })

  describe("transfers", async () => {
    it("receiving account gets amount sent", async () => {
      accounts = await ethers.getSigners()

      amount = (INNITIAL_SUPPLY / 10).toString()
      await TDMContract.transfer(accounts[1].address, amount)
      assert.equal(await TDMContract.balanceOf(accounts[1].address), amount)
    })
    it("emits an transfer event, when an transfer occurs", async () => {})
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
