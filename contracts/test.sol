// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.9;

contract Test {
    
    string public name = "Aji";
    uint8 public age = 0 ;


function changeName(string memory _name) public {
        name = _name;
    }
    function changeAge(uint8 _age) public returns(uint8){
        age += _age;
        return age;

    }
}