var DAI = artifacts.require("DAI");

module.exports = ( deployer ) => {
  deployer.deploy(DAI, "10000000", "DAI Stable Coin", "DAI").then(()=>{
    fs = require('fs')
    addrLine = "DAIAddress= \'" + DAI.address + "\'\n";
    fs.writeFileSync('./asdf.txt', addrLine)
  })
}
