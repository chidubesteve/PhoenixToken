const networkConfig = {
    31337: {
        name:"localhost",
    },
    11155111: {
        name: "sepolia",
        ethUsdPriceFeed: "0x694AA1769357215DE4FAC081bf1f309aDC325306",
      },
}

const  developmentChains = ["localhost", "hardhat"]
const INITIAL_SUPPLY = "1000000000000000000000000"

module.exports = {
    networkConfig,
    developmentChains,
    INITIAL_SUPPLY
}