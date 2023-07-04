var router02 = artifacts.require("SwapRouter02");
var Multicall2 = artifacts.require("Multicall2");
var MixedRouteQuoterV1 = artifacts.require('MixedRouteQuoterV1');
var TokenValidator = artifacts.require('TokenValidator')

const FactoryV2Address = "0x514Fe3fB02b309138F80B5f2B0ecC47722AE61c3"
const FactoryV3Address = "0x84Eb6ef3E7Eb9A127A62166CECADF9B2AbA509Dc"
const NFTManagerAddress = "0x2198F8190077CC179996244C3665aA351a31f0C2"
const WETHAddress = "0x2d0805ae0676Dc16b6DeB0ABFD24DbC4B2AA459F"


module.exports = ( deployer ) => {
  return deployer.deploy(router02, FactoryV2Address, FactoryV3Address, NFTManagerAddress, WETHAddress).then(()=>{
    return deployer.deploy(Multicall2).then(()=>{
      return deployer.deploy(MixedRouteQuoterV1, FactoryV3Address, FactoryV2Address, WETHAddress).then(()=>{
        return deployer.deploy(TokenValidator, FactoryV2Address, NFTManagerAddress).then(()=>{
          addrLine = "SwapRouter02Address=  \'" + router02.address + "\'\n"
          addrLine += "\nMulticall2Address=  \'" + Multicall2.address + "\'\n"
          addrLine += "\nMixedRouteQuoterV1Address=  \'" + MixedRouteQuoterV1.address + "\'\n"
          addrLine += "TokenValidatorAddress=  \'" + TokenValidator.address + "\'\n"
          fs = require('fs')
          fs.writeFileSync('./asdf.txt', addrLine)
        });
      })
    });
  })
}
