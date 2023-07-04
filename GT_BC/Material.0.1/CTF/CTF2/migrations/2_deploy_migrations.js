var Reverse = artifacts.require("Reverse");

module.exports = ( deployer ) => {
  deployer.deploy(Reverse, "1000000", "Reversible Token", "RVRS").then(()=>{
    fs = require('fs')
    var addrLine = "RVRSAddress= \'" + Reverse.address + "\'\n";
    console.log(addrLine)
  });
}
