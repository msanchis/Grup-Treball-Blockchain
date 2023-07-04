var USDT = artifacts.require("USDT");

module.exports = ( deployer ) => {
  deployer.deploy(USDT, "10000000", "Thether Stable Coin", "USDT").then(()=>{
    fs = require('fs')
    addrLine = "USDTAddress= \'" + USDT.address + "\'\n";
    fs.writeFileSync('./asdf.txt', addrLine)
  })
}
