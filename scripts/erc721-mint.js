const hre = require("hardhat");

async function main() {
  const nftAddr = process.env.NFT_ADDRESS;
  const to = process.env.TO;
  const ERC721 = await hre.ethers.getContractAt("MyNFT", nftAddr);
  const tx = await ERC721.safeMint(to);
  await tx.wait();
  console.log("Minted NFT to:", to);
}

main().catch((err) => {console.error(err); process.exitCode = 1;});