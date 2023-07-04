var WETH = artifacts.require("WETH9");

module.exports = ( deployer ) => {
  deployer.deploy(WETH).then(()=>{
    fs = require('fs')
    addrLine = "WETHAddress= \'" + WETH.address + "\'\n";
    fs.writeFileSync('./asdf.txt', addrLine)
  });
}
