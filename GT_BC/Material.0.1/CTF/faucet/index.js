file:///home/batoisc/ethereum/faucet/faucetWeb/index.js {"mtime":1678124578144,"ctime":1678119810757,"size":2454,"etag":"3a866robh2h5","orphaned":false,"typeId":""}
module.exports= () =>{
    const express = require('express');
    var web3;

    function connectWeb3(){
        const Web3 = require('web3');
        const fs=require('fs');

        const dotEnv = require('dotenv')
        dotEnv.config();
            
        const mnemonicFile = process.env.MNEMONIC_FILE;

        console.log("Trying mnemonic at" + mnemonicFile)

        const mnemonic = fs.readFileSync(mnemonicFile).toString().trim();

        const rpc_address = process.env.RPC_ADDRESS;
        HDWP = require("@truffle/hdwallet-provider");

        provider = new HDWP({
            mnemonic: {
              phrase: mnemonic
            },
            providerOrUrl: `http://${rpc_address}:8545`,
            pollingInterval: 8000
        });
          
        // HDWalletProvider is compatible with Web3. Use it at Web3 constructor, just like any other Web3 Provider
        web3 = new Web3(provider);             

        if ( web3 ) console.log("Connected.");
        else process.exit()
    };

    const app = express();

    app.use(express.urlencoded());

    app.get('/', (request, response, next) => {
        response.send(`
            <div>
            <h1> Batoi Smart Chain Faucet</h1>
            <p> Just 0.01 Ether per public address. </p>
            <form method="POST" action="/">
                <div>
                    <input type="address" name="address" id="email_address" class="form-control" />
                </div>
                <div>
                    <input type="submit" name="submit_button" class="btn btn-primary" value="Add" />
                </div>
            </form>
            </div>
        `);

    });

    app.post( '/', (request, response, next) => {
        connectWeb3();

        faucetAddress = '0xb23b0C78b822085d921997768dEAa267035F3609';

        const fs=require('fs');
        const parsed = JSON.parse ( fs.readFileSync('./Faucet.json')  );
        const ctrABI = parsed.abi;
        
        const ctr = new web3.eth.Contract(ctrABI, faucetAddress);

        ctr.methods.getBTOIS(request.body.address).send()
        .on('confirmation', ()=> {
            //guyAddress = web3.utils.
            console.log("Funding " + request.body.address)
            response.send(`<h3>Address ${request.body.address} succesfully funded</h3>`);
        })
        .on('error', ()=>{
            response.send(`<h3>Something went wrong</h3>`);
        })
    });

    app.listen(2000);
}
