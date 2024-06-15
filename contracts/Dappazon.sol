// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

contract Dappazon {
    address public owner;

    constructor() {
        owner = msg.sender;
    }
}
