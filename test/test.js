const {
    time,
    loadFixture,
  } = require("@nomicfoundation/hardhat-toolbox/network-helpers");
  const { anyValue } = require("@nomicfoundation/hardhat-chai-matchers/withArgs");
   
  const { expect } = require("chai");
  
  describe("Test contract", function () {
    it("Deployment should assign name to Aji and age to 20", async function () {
        
      
      const nameAge = await ethers.deployContract("Test");
      const name = await ethers.deployContract("Test");
      const age = await ethers.deployContract("Test");
  
      
      expect(await nameAge.name).to.equal("Aji");
      expect(await nameAge.age).to.equal(20);

    });
  });