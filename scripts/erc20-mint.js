const hre = require("hardhat");

async function main() {
  const tokenAddr = process.env.TOKEN_ADDRESS;
  const to = process.env.TO;
  const amount = hre.ethers.parseUnits(process.env.AMOUNT || "1000", 18);
  const ERC20 = await hre.ethers.getContractAt("MyToken", tokenAddr);
  const tx = await ERC20.mint(to, amount);
  await tx.wait();
  console.log("Minted", amount.toString(), "to", to);
}

main().catch((err) => {console.error(err); process.exitCode = 1;});