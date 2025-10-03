const hre = require("hardhat");

async function main() {
  const tokenAddr = process.env.TOKEN_ADDRESS;
  const spender = process.env.SPENDER;
  const amount = hre.ethers.parseUnits(process.env.AMOUNT || "100", 18);
  const ERC20 = await hre.ethers.getContractAt("IERC20", tokenAddr);
  const tx = await ERC20.approve(spender, amount);
  await tx.wait();
  console.log("Approved", spender, "to spend", amount.toString());
}

main().catch((err) => {console.error(err); process.exitCode = 1;});