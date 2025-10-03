const hre = require("hardhat");

async function main() {
  const nftAddr = process.env.NFT_ADDRESS;
  const to = process.env.TO;
  const id = process.env.ID;
  const ERC721 = await hre.ethers.getContractAt("MyNFT", nftAddr);
  const [from] = await hre.ethers.getSigners();
  const tx = await ERC721.transferFrom(from.address, to, id);
  await tx.wait();
  console.log("Transferred NFT", id, "to", to);
}

main().catch((err) => {console.error(err); process.exitCode = 1;});