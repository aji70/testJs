// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.9;

contract AgeContract{

    uint age = 24;

    function changeAge(uint _no) public view returns(uint){
        return age + _no;
    }
}