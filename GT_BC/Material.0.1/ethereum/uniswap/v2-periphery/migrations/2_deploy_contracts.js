var UniswapV2Router02 = artifacts.require("UniswapV2Router02");
var TransferHelper = artifacts.require("TransferHelper");
var SafeMath = artifacts.require("SafeMath");
var UniswapV2Library = artifacts.require("UniswapV2Library");

const FactoryAddress = "0x514Fe3fB02b309138F80B5f2B0ecC47722AE61c3";
const WETHAddress = "0x2d0805ae0676Dc16b6DeB0ABFD24DbC4B2AA459F"

module.exports = (deployer)  => {
  return deployer.deploy(TransferHelper).then(()=>{
    return deployer.link(TransferHelper, UniswapV2Router02).then(()=>{
      return deployer.deploy(SafeMath).then(()=>{
        return deployer.link(SafeMath, UniswapV2Router02).then(()=>{
          return deployer.deploy(UniswapV2Library).then(()=>{
            return deployer.link(UniswapV2Library, UniswapV2Router02).then(()=>{
              return deployer.deploy(UniswapV2Router02, FactoryAddress, WETHAddress ).then(()=>{
                fs = require('fs')
                addrLine = "RouterV2Address= \'" + UniswapV2Router02.address + "\'\n";
                fs.writeFileSync('./asdf.txt', addrLine);
              })
            })
          })
        })
      })
    })
  })
}
