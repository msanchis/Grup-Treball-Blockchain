var UniswapV2Factory = artifacts.require("UniswapV2Factory");

module.exports = (deployer)  => {
  deployer.deploy(UniswapV2Factory, "0x022137186821dbd52C4724ed031417575F2a3859" ).then(()=>{
    fs = require('fs')
    addrLine = "FactoryV2Address= \'" + UniswapV2Factory.address + "\'\n";
    fs.writeFileSync('./asdf.txt', addrLine)
  })
}
