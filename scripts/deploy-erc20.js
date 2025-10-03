const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();
  console.log("Deploying ERC20 with:", deployer.address);
  const ERC20 = await hre.ethers.getContractFactory("MyToken");
  const token = await ERC20.deploy("MyToken", "MTK", 18, hre.ethers.parseUnits("1000000", 18));
  await token.waitForDeployment();
  console.log("ERC20 deployed to:", await token.getAddress());
}

main().catch((err) => {console.error(err); process.exitCode = 1;});