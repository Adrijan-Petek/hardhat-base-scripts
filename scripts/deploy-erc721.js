const hre = require("hardhat");

async function main() {
  const [deployer] = await hre.ethers.getSigners();
  console.log("Deploying ERC721 with:", deployer.address);
  const ERC721 = await hre.ethers.getContractFactory("MyNFT");
  const nft = await ERC721.deploy("MyNFT", "MNFT");
  await nft.waitForDeployment();
  console.log("ERC721 deployed to:", await nft.getAddress());
}

main().catch((err) => {console.error(err); process.exitCode = 1;});