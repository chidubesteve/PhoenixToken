const { assert, expect } = require("chai");
const { network, getNamedAccounts, deployments, ethers } = require("hardhat");
const { developmentChains, INITIAL_SUPPLY } = require("../helper-hardhat-config");

!developmentChains.includes(network.name)
  ? describe.skip
  : describe("MyToken Unit Test", function () {
      const multiplier = 10 ** 18;
      let MyToken, deployer, user1;

      beforeEach(async function () {
        const accounts = await getNamedAccounts();
        deployer =  accounts.deployer
        user1 = accounts.user1;
        await deployments.fixture(["all"]); // reloads the deployment fixture to reset state before each
        MyToken = await ethers.getContract("MyToken", deployer);
        console.log(deployer);
      });

      it("was deployed", async () => {
        assert(MyToken.address);
      });

      describe("constructor", () => {
        it("Should have correct INITIAL_SUPPLY of token ", async () => {
            const totalSupply = await ourToken.totalSupply()
            assert.equal(totalSupply.toString(), INITIAL_SUPPLY)
      });
    })

    
    });
