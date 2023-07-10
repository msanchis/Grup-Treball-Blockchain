#!/bin/bash
set -e

cd WETH
npx truffle migrate --network jgc --reset
cat ./asdf.txt >../contract_addresses.txt
rm ./asdf.txt

cd ../USDC
npx truffle migrate --network jgc --reset
cat ./asdf.txt >>../contract_addresses.txt
rm ./asdf.txt

cd ../uniswap/v2-core
npx truffle migrate --network jgc --reset
cat ./asdf.txt >>../../contract_addresses.txt
rm ./asdf.txt

cd ../v2-periphery
npx truffle migrate --network jgc --reset
cat ./asdf.txt >>../../contract_addresses.txt
rm ./asdf.txt

cd ../v3-core
npx truffle migrate --network jgc --reset
cat ./asdf.txt >>../../contract_addresses.txt
rm ./asdf.txt

cd ../v3-periphery
npx truffle migrate --network jgc --reset
cat ./asdf.txt >>../../contract_addresses.txt
rm ./asdf.txt

cd ../smart-router-ctr
npx truffle migrate --network jgc --reset
cat ./asdf.txt >>../../contract_addresses.txt
rm ./asdf.txt

cd ../../USDT
npx truffle migrate --network jgc --reset
cat ./asdf.txt >>../contract_addresses.txt
rm ./asdf.txt

cd ../DAI
npx truffle migrate --network jgc --reset
cat ./asdf.txt >>../contract_addresses.txt
rm ./asdf.txt

cat ../contract_addresses.txt
