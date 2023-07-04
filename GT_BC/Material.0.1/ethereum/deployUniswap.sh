#!/bin/bash
set -e

cd WETH
truffle migrate --network jgc --reset
cat ./asdf.txt >./contract_addresses.txt
rm ./asdf.txt

cd ../USDC
truffle migrate --network jgc --reset
cat ./asdf.txt >>./contract_addresses.txt
rm ./asdf.txt

cd ../uniswap/v2-core
truffle migrate --network jgc --reset
cat ./asdf.txt >>./contract_addresses.txt
rm ./asdf.txt

cd ../v2-periphery
truffle migrate --network jgc --reset
cat ./asdf.txt >>./contract_addresses.txt
rm ./asdf.txt

cd ../v3-core
truffle migrate --network jgc --reset
cat ./asdf.txt >>./contract_addresses.txt
rm ./asdf.txt

cd ../v3-periphery
truffle migrate --network jgc --reset
cat ./asdf.txt >>./contract_addresses.txt
rm ./asdf.txt

cd ../smart-router-ctr
truffle migrate --network jgc --reset
cat ./asdf.txt >>./contract_addresses.txt
rm ./asdf.txt

cd ../../USDT
truffle migrate --network jgc --reset
cat ./asdf.txt >>./contract_addresses.txt
rm ./asdf.txt

cd ../DAI
truffle migrate --network jgc --reset
cat ./asdf.txt >>./contract_addresses.txt
rm ./asdf.txt

cd ../CurveTk
truffle migrate --network jgc --reset
cat ./asdf.txt >>./contract_addresses.txt
rm ./asdf.txt


cat ./contract_addresses.txt
