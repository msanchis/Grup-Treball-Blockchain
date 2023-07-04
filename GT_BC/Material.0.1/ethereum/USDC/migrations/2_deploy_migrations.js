var USDC = artifacts.require("USDC");

module.exports = ( deployer ) => {
  deployer.deploy(USDC, "10000000", "US Dollar Stable Coin", "USDC").then(()=>{
    fs = require('fs')
    addrLine = "USDCAddress= \'" + USDC.address + "\'\n";
    fs.writeFileSync('./asdf.txt', addrLine)
  })
}
