const { assert, expect } = require("chai")
const { ethers } = require("hardhat")

//can run only this file by running on shell the command:
//yarn mocha test/unit-test.js

describe("testing title", async () => {
  let TDMContract

  beforeEach(async () => {
    TDMContractFactory = await ethers.getContractFactory(
      "TokenDistrubutionMechanism"
    )

    TDMContract = await TDMContractFactory.deploy()
  })

  it("check name", async () => {
    const name = await TDMContract.name()
    assert.equal(name, "TokenDistrubutionMechanism")
  })
})
