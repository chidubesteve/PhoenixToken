const { assert, expect } = require("chai");
const { network, getNamedAccounts, deployments, ethers } = require("hardhat");
const {
  developmentChains,
  INITIAL_SUPPLY,
} = require("../helper-hardhat-config");

!developmentChains.includes(network.name)
  ? describe.skip
  : describe("MyToken Unit Test", function () {
      const multiplier = 10 ** 18;
      let MyToken, deployer, user1;

      beforeEach(async function () {
        const accounts = await getNamedAccounts();
        deployer = accounts.deployer;
        user1 = accounts.user1;
        await deployments.fixture(["all"]); // reloads the deployment fixture to reset state before each
        MyToken = await ethers.getContract("MyToken", deployer);
        console.log(`Accounts: ${await accounts}`);
        console.log(`deployer is ${deployer}`);
      });

      it("was deployed", async () => {
        assert(MyToken.address);
      });

      describe("constructor", () => {
        it("Should have correct INITIAL_SUPPLY of token ", async () => {
          const totalSupply = await MyToken.totalSupply();
          assert.equal(totalSupply.toString(), INITIAL_SUPPLY);
        });
        it("initializes the token with the right name and symbol", async () => {
          const name = (await MyToken.name()).toString();
          const symbol = (await MyToken.symbol()).toString();
          assert.equal(name, "MyToken");
          assert.equal(symbol, "PHNX");
        });
      });
      describe("Transfers", () => {
        it("should transfer tokens to an address", async () => {
          const transferAmount = ethers.utils.parseEther("10");
          await MyToken.transfer(user1, transferAmount);
          expect(await MyToken.balanceOf(user1)).to.equal(transferAmount);
        });
        it("emits an event on transfers of tokens", async () => {
          expect(Number(MyToken.transfer(user1, 10 * multiplier))).to.emit(
            MyToken,
            "Transfer"
          );
        });
      });
      describe("Allowance", () => {
        const amount = (20 * multiplier).toString();
        beforeEach(async () => {
          user1Token = await ethers.getContract("MyToken", user1);
        });
        it("allows a spender to spend token", async () => {
          const amtToSpend = await ethers.utils.parseEther("5");
          //Deployer is approving that user1 can spend 5 of their precious PHNX
          await MyToken.approve(user1, amtToSpend);
          await user1Token.transferFrom(deployer, user1, amtToSpend);
          expect(await user1Token.balanceOf(user1)).to.equal(amtToSpend);
        });
        it("does not allow unapproved addresses to spend token", async () => {
          await expect(
            MyToken.transferFrom(deployer, user1, amount)
          ).to.be.revertedWith("ERC20: insufficient allowance");
        });
        it("emits an approval event, when an approval occurs", async () => {
          await expect(MyToken.approve(user1, amount)).to.emit(
            MyToken,
            "Approval"
          );
        });
        it("the allowance being set is accurate", async () => {
          await MyToken.approve(user1, amount);
          const allowance = await MyToken.allowance(deployer, user1);
          assert.equal(allowance.toString(), amount);
        });
        it("won't allow a user to go over the allowance", async () => {
          await MyToken.approve(user1, amount)
          await expect(
              user1Token.transferFrom(deployer, user1, (40 * multiplier).toString())
          ).to.be.revertedWith("ERC20: insufficient allowance")
      })

      });
    });
