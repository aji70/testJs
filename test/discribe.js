const {
    time,
    loadFixture,
  } = require( "@nomicfoundation/hardhat-toolbox/network-helpers");
  const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Age contract test", function(){
    async function deployAgeContract(){
        const AgeContract = await ethers.getContractFactory("AgeContract"); //assigning our contract to a variable
        const ageContract = await AgeContract.deploy(); //deploying  age contract from the top and save it in ageContract so we can access it

        return {ageContract}; //returning age contract as an object        
    }

    describe("function to check age", function(){
        it("should return age plus number", 
        async function(){
            const { ageContract } = await loadFixture(deployAgeContract);    //destructuring the object to get the load fixture accepts function deployage conmtract
            await expect(ageContract.changeAge());
        })
    })
})