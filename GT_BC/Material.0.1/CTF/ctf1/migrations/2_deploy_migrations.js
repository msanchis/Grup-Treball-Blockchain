var Logic = artifacts.require("Logic");

module.exports = ( deployer ) => {
  deployer.deploy(Logic).then(()=>{
    addrLine = "CTF 1 Address= \'" + Logic.address + "\'\n";
    console.log(addrLine);
  });
}
