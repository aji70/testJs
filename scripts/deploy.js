// We require the Hardhat Runtime Environment explicitly here. This is optional
// but useful for running the script in a standalone fashion through `node <script>`.
//
// You can also run a script with `npx hardhat run <script>`. If you do that, Hardhat
// will compile your contracts, add the Hardhat Runtime Environment's members to the
// global scope, and execute the script.
const hre = require("hardhat");

async function main() {
  const test = await ethers.deployContract("Test");

  console.log(
      `Test sucessfully deployed to ${test.target} with name set to ${test.getFunction("name")}`
  );  await inec.waitForDeployment();
  await test.waitForDeployment();

}

// We recommend this pattern to be able to use async/await everywhere
// and properly handle errors.
main().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});

const { ethers } = require("hardhat");

async function main() {
  // Deploy the Test contract
  const Test = await ethers.getContractFactory("Test");
  const testContract = await Test.deploy();

  await testContract.deployed();

  console.log("Test contract deployed to:", testContract.address);

  // Interact with the contract
  const initialName = await testContract.name();
  console.log("Initial name:", initialName);

  const newName = "NewName";
  await testContract.changeName(newName);
  console.log("Name changed to:", newName);

  const ageChange = 5;
  const initialAge = await testContract.age();
  await testContract.changeAge(ageChange);
  console.log("Age changed to:", initialAge.toNumber() + ageChange);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
