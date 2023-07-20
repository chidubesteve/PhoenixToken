const { network } = require("hardhat");
const {
  developmentChains,
  INITIAL_SUPPLY,
} = require("../helper-hardhat-config");
const { verify } = require("../verify");

module.exports = async ({ getNamedAccounts, deployments }) => {
  const { deploy, log } = await deployments;
  const { deployer } = await getNamedAccounts();

  log("Deploying MyToken contract...");
  const MyToken = await deploy("MyToken", { 
    args: [INITIAL_SUPPLY],
    from: deployer,
    log: true,
    // we need to wait for block confirmation if we are on a life
    waitConfirmations: network.config.blockConfirmations || 1,
  });

  log(`MyToken deployed at ${MyToken.address}`);

  if (
    !developmentChains.includes(network.name) &&
    process.env.ETHERSCAN_API_KEY
  ) {
    try {
      await verify(MyToken.address, [INITIAL_SUPPLY]);
    } catch (error) {
      console.log(error);
    }
  }
  log("Done!")
};
module.exports.tags = ["all", "token"];
