const { assert, expect } = require("chai")
const { ethers } = require("hardhat")
const { INNITIAL_SUPPLY } = require("../hardhat.config")
const BigNumber = require("bignumber.js")

///for virtual test in hardhat network
//yarn hardhat test
//yarn hardhat test --grep "assert message example"

///for testing other network (like goerli or localhost)
//yarn hardhat --network goerli test
//yarn hardhat --network goerli test --grep "assert message example"

describe("Distrubution Mechanism unit tests", async () => {
  let DistrubutionContract, accounts, CoordinatorMockContract

  describe("test mock VRFCoordinatorV2Mock", async () => {
    beforeEach(async () => {
      accounts = await ethers.getSigners()
      let DistrubutionContractFactory = await ethers.getContractFactory("Distrubution")
      DistrubutionContract = await DistrubutionContractFactory.deploy()
      CoordinatorMockFactory = await ethers.getContractFactory("VRFCoordinatorV2Mock")
      CoordinatorMockContract = await CoordinatorMockFactory.deploy(
        (100000000000000000).toString(),
        (1000000000).toString()
      )
    })

    it("subscription is created, funded and a consumer is added", async () => {
      await CoordinatorMockContract.createSubscription()
      await new Promise(async (resolve, reject) => {
        try {
          CoordinatorMockContract.once("SubscriptionCreated", async (subId, owner) => {
            console.log("SubscriptionCreated event fired!")
            await CoordinatorMockContract.fundSubscription(subId, ethers.utils.parseUnits("5", 5), {
              gasLimit: (30000000).toString(),
            })

            await new Promise(async (resolve, reject) => {
              CoordinatorMockContract.once("SubscriptionFunded", async () => {
                console.log("SubscriptionFunded event fired!")
                await CoordinatorMockContract.addConsumer(subId, accounts[1].address)
                resolve()
              })
            })
            await new Promise(async (resolve, reject) => {
              CoordinatorMockContract.once("ConsumerAdded", async () => {
                console.log("ConsumerAdded event fired!")
                resolve()
              })
            })
            resolve()
          })
        } catch (e) {
          reject(e)
        }
      })
    })
  })

  ////////////////////////////////////////////////////////////////////////
  //////////////////////   Unit tests for ERC20 token   //////////////////
  ////////////////////////////////////////////////////////////////////////
  /*
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
  */
})
