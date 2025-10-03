const hre = require("hardhat");

async function main() {
  const tokenAddr = process.env.TOKEN_ADDRESS;
  const owner = process.env.OWNER;
  const spender = process.env.SPENDER;
  const ERC20 = await hre.ethers.getContractAt("IERC20", tokenAddr);
  const allowance = await ERC20.allowance(owner, spender);
  console.log("Allowance:", allowance.toString());
}

main().catch((err) => {console.error(err); process.exitCode = 1;});