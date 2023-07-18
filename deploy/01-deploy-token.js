import { network, ethers } from "hardhat";
import { developmentChains, INITIAL_SUPPLY } from "../helper-hardhat-config";
import { verify } from "../verify";


module.exports = async ({getNamedAccounts, deployments}) => {
    const {deploy, log} = await deployments 
    const {deployer} = await getNamedAccounts()

    log("Deploying MyToken contract...")
    const MyToken = await ethers.getContract("MyToken")
    await deploy("MyToken",  {
        args: [INITIAL_SUPPLY],
        from: deployer,
        log: true,
        // we need to wait for block confirmation if we are on a life 
        waitConfirmations: network.config.blockConfirmations || 1
    })

    log(`MyToken deployed at ${MyToken.address}`)
    
    if(!developmentChains.includes(network.name) && process.env.ETHERSCAN_API_KEY) {
        try {
            await verify(MyToken.address, [INITIAL_SUPPLY]) 
        } catch (error) {
            console.log(error)
        }
        
    }
}
module.exports.tags = ["all", "token"]