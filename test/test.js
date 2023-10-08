// SPDX-License-Identifier: UNLICENSED

const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Test contract", function () {
  let Test;
  let testContract;
  let owner;

  beforeEach(async function () {
    const Test = await ethers.getContractFactory("Test");
    testContract = await Test.deploy();

    [owner] = await ethers.getSigners();
  });

  

  it("should initialize age to zero", async function () {
    const initialAge = await testContract.age();
    expect(Number(initialAge)).to.equal(0);
  });

  it("should change the age", async function () {
    const initialAge = await testContract.age();
    const newAge = 25;

    await testContract.changeAge(newAge);

    const updatedAge = await testContract.age();
    expect(Number(updatedAge)).to.equal(Number(initialAge) + newAge);
  });

  it("should return the correct name", async function () {
    const expectedName = "Aji";

    // Call the contract's public name function
    const name = await testContract.name();

    // Check if the returned name matches the expected name
    expect(name).to.equal(expectedName);
  });

  it("should change the name", async function () {
    const newName = "NewName";

    // Call the contract's changeName function as the owner
    await testContract.connect(owner).changeName(newName);

    // Check if the name has been updated
    const updatedName = await testContract.name();
    expect(updatedName).to.equal(newName);
  });

  
});
