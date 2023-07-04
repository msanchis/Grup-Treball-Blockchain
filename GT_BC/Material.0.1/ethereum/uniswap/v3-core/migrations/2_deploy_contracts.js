var UniswapV3Pool = artifacts.require("UniswapV3Pool");
var UniswapV3PoolDeployer = artifacts.require('UniswapV3PoolDeployer');
var UniswapV3Factory = artifacts.require("UniswapV3Factory");

var Tick = artifacts.require("Tick");
var TickMath = artifacts.require("TickMath");
var BitMath = artifacts.require("BitMath");
var SwapMath = artifacts.require("SwapMath");
var FixedPoint96 = artifacts.require("FixedPoint96");
var FixedPoint128 = artifacts.require("FixedPoint128");
var SqrtPriceMath = artifacts.require("SqrtPriceMath");
var LowGasSafeMath = artifacts.require('LowGasSafeMath');
var LiquidityMath = artifacts.require('LiquidityMath')
var Oracle = artifacts.require("Oracle");
var Position = artifacts.require('Position');
var SafeCast = artifacts.require('SafeCast');
var TickBitmap = artifacts.require("TickBitmap");
var TransferHelper = artifacts.require('TransferHelper');
var UnsafeMath = artifacts.require("UnsafeMath");
var FullMath = artifacts.require('FullMath');
var NoDelegateCall = artifacts.require('NoDelegateCall');
var Multicall = artifacts.require('Multicall');

module.exports = (deployer)  => {
  deployer.deploy(Oracle).then( ()=>{
    return deployer.link(Oracle,UniswapV3Pool).then(()=>{
        return deployer.deploy(Position).then(()=>{
          return deployer.link(Position, UniswapV3Pool).then(()=>{
            return deployer.deploy(LowGasSafeMath).then(()=>{
              return deployer.link( LowGasSafeMath , UniswapV3Pool).then(()=>{
                return deployer.deploy(SqrtPriceMath).then(()=>{
                  return deployer.link(SqrtPriceMath, UniswapV3Pool).then(()=>{
                    return deployer.deploy(Tick).then(()=>{
                      return deployer.link(Tick, UniswapV3Pool).then(()=>{
                        return deployer.deploy(TickMath).then(()=>{
                          return deployer.link(TickMath, UniswapV3Pool).then(()=>{
                            return deployer.deploy(TickBitmap).then(()=>{
                              return deployer.link(TickBitmap, UniswapV3Pool).then(()=>{
                                return deployer.deploy(SafeCast).then(()=>{
                                  return deployer.link(SafeCast, UniswapV3Pool).then(()=>{
                                    return deployer.deploy(FixedPoint96).then(()=>{
                                      return deployer.link(FixedPoint96, UniswapV3Pool).then(()=>{
                                        return deployer.deploy(FixedPoint128).then(()=>{
                                          return deployer.link(FixedPoint128, UniswapV3Pool).then(()=>{
                                            return deployer.deploy(LiquidityMath).then(()=>{
                                              return deployer.link(LiquidityMath, UniswapV3Pool).then(()=>{
                                                return deployer.deploy(SwapMath).then(()=>{
                                                  return deployer.link(SwapMath, UniswapV3Pool).then(()=>{
                                                    return deployer.deploy(FullMath).then(()=>{
                                                      return deployer.link(FullMath, UniswapV3Pool).then(() =>{
                                                        return deployer.deploy(TransferHelper).then(()=>{
                                                          return deployer.link(TransferHelper, UniswapV3Pool).then(()=>{
                                                            return deployer.deploy(UniswapV3PoolDeployer).then(()=>{
                                                              return deployer.link(UniswapV3PoolDeployer, UniswapV3Factory).then(()=>{
                                                                return deployer.deploy(UniswapV3Factory).then(()=>{
                                                                  fs = require('fs')
                                                                  addrLine = "UniswapV3Factory:= \'" + UniswapV3Factory.address + "\'\n";
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
