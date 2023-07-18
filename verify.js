import { run } from "hardhat";
const verify = async (constructorAddress, args) => {
  console.log("Verifying contract, please wait...");
  try {
    await run(`verify:verify`, {
      address: constructorAddress,
      constructorArguments: args,
    });
  } catch (e) {
    if (e.message.toLowerCase().includes("already verified")) {
      // Do nothing since the verification has already been done for this version of code and network combination
      console.log("Already Verified");
    } else {
      console.log(e);
    }
  }
};
module.exports = { verify };
