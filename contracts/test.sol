// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.9;

contract Test {
    uint public age = 20;
    string public name = "Aji";

    function changeName(string memory _name) public {
        name = _name;
    }

    function changeAge(uint _age) public returns(uint){
        age += _age;
        return age;

    }
}