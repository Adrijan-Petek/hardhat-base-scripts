const hre = require("hardhat");

async function main() {
  const tokenAddr = process.env.TOKEN_ADDRESS;
  const account = process.env.USER;
  const ERC20 = await hre.ethers.getContractAt("IERC20", tokenAddr);
  const bal = await ERC20.balanceOf(account);
  console.log("Balance of", account, "is", bal.toString());
}

main().catch((err) => {console.error(err); process.exitCode = 1;});