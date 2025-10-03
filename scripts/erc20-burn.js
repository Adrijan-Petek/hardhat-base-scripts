const hre = require("hardhat");

async function main() {
  const tokenAddr = process.env.TOKEN_ADDRESS;
  const amount = hre.ethers.parseUnits(process.env.AMOUNT || "10", 18);
  const ERC20 = await hre.ethers.getContractAt("MyToken", tokenAddr);
  const tx = await ERC20.burn(amount);
  await tx.wait();
  console.log("Burned", amount.toString());
}

main().catch((err) => {console.error(err); process.exitCode = 1;});