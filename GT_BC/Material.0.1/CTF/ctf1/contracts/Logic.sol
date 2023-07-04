// SPDX-License-Identifier: MIT
pragma solidity = 0.6.1;

contract Logic {
    address public owner;
    bytes32 private passphrase = "b4t01_5m4r7_ch41n_c7f_I";
    
    constructor() public payable {
        owner = msg.sender;  
    }

    receive() external payable{    }
    
    function withdraw() public {
        require(msg.sender == owner);
        address payable imrich = payable(msg.sender);
        imrich.transfer( address(this).balance );
    }

    function claim(bytes32 _secret) public payable {
        require(msg.value == 0.05 ether && _secret == passphrase);
        owner = msg.sender;
    }
}

