geth --datadir . --networkid 31337 --http --http.addr $1  --http.port 8545 --ws --ws.addr $1 --ws.port 8546  \
      --http.api debug,eth,personal,net,web3  --ws.api debug,eth,personal,net,web3 --graphql --graphql.corsdomain "*" --ipcpath ./geth.ipc --vmdebug \
      --nodiscover  --http.corsdomain "*" --mine --miner.etherbase "022137186821dbd52C4724ed031417575F2a3859"  \
      --unlock "022137186821dbd52C4724ed031417575F2a3859" --allow-insecure-unlock
