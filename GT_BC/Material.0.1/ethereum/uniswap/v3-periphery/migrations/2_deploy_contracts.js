var SafeMath = artifacts.require("SafeMath")
var TickMath = artifacts.require('TickMath')
var BitMath = artifacts.require('BitMath')
var FullMath = artifacts.require('FullMath')
var SignedSafeMath = artifacts.require('SignedSafeMath')
var FixedPoint128 = artifacts.require('FixedPoint128')
var NFTDescriptor = artifacts.require('NFTDescriptor')

var NonfungiblePositionManager = artifacts.require("NonfungiblePositionManager")
var NonfungibleTokenPositionDescriptor = artifacts.require("NonfungibleTokenPositionDescriptor")

var PoolAddress = artifacts.require("PoolAddress")
var Path = artifacts.require("Path")
var CallbackValidation = artifacts.require("CallbackValidation")

var SwapRouter = artifacts.require("SwapRouter")

var Quoter = artifacts.require("Quoter");

var V3Migrator = artifacts.require("V3Migrator")

var UniswapInterfaceMulticall = artifacts.require("UniswapInterfaceMulticall")

var QuoterV2 = artifacts.require("QuoterV2");
var TickLens = artifacts.require("TickLens");

const FactoryV3Address = '0x84Eb6ef3E7Eb9A127A62166CECADF9B2AbA509Dc'
const WETHAddress = '0x2d0805ae0676Dc16b6DeB0ABFD24DbC4B2AA459F'


module.exports = (deployer)  => {
  deployer.deploy(SafeMath).then(()=>{
    return deployer.link(SafeMath,NFTDescriptor).then(()=>{
      return deployer.deploy(TickMath).then(()=>{
        return deployer.link(TickMath,[NFTDescriptor, SwapRouter, Quoter]).then(()=>{
          return deployer.deploy(NFTDescriptor).then(()=>{
            return deployer.link(NFTDescriptor, NonfungibleTokenPositionDescriptor).then(()=>{
              return deployer.deploy(
                NonfungibleTokenPositionDescriptor,
                WETHAddress,
                '0x0000000000000000000000000000000000000000000000000000000000455448'
              ).then(()=>{
                return deployer.deploy(
                  NonfungiblePositionManager,
                  FactoryV3Address,
                  WETHAddress,
                  NonfungibleTokenPositionDescriptor.address
                ).then(()=>{
                  return deployer.deploy(PoolAddress).then(()=>{
                    return deployer.link(PoolAddress, [SwapRouter,Quoter]).then(()=>{
                      return deployer.deploy(Path).then(()=>{
                        return deployer.link(Path,[SwapRouter,Quoter]).then(()=>{
                          return deployer.deploy(CallbackValidation).then(()=>{
                            return deployer.link(CallbackValidation, [SwapRouter,Quoter]).then(()=>{
                              return deployer.deploy(Quoter, FactoryV3Address, WETHAddress).then(()=>{
                                return deployer.deploy(SwapRouter, FactoryV3Address, WETHAddress).then(()=>{
                                  return deployer.deploy(
                                    V3Migrator,
                                    FactoryV3Address,
                                    WETHAddress,
                                    NonfungiblePositionManager.address
                                  ).then(()=>{
                                    return deployer.deploy(UniswapInterfaceMulticall).then(()=>{
                                      return deployer.deploy(QuoterV2, FactoryV3Address, WETHAddress).then(()=>{
                                        return deployer.deploy(TickLens).then(()=>{
                                            addrLine = "\nNFTPositionDescriptorAddress= \'" + NonfungibleTokenPositionDescriptor.address + "\'\n"
                                            addrLine += "NFTPositionManagerAddress= \'" + NonfungiblePositionManager.address + "\'\n"
                                            addrLine += "\nQuoter: Address= \'" + Quoter.address + "\'\n"
                                            addrLine += "\nSwapRouterAddress= \'" + SwapRouter.address + "\'\n"
                                            addrLine += "\nV3MigratorAddress= \'" + V3Migrator.address + "\'\n"
                                            addrLine += "UniswapMulticallAddress= \'" + UniswapInterfaceMulticall.address + "\'\n"
                                            addrLine += "\nQuoterV2Address= \'" + QuoterV2.address + "\'\n"
                                            addrLine += "TickLensAddress= \'" + TickLens.address + "\'\n"
                                            fs = require('fs')
                                            fs.writeFileSync('./asdf.txt', addrLine)
                                        })
                                      })
                                    })
                                  })
                                })
                              })
                            })
                          })
                        })
                      })
                    })
                  })
                })
              })
            })
          })
        })
      })
    })
  })
}
