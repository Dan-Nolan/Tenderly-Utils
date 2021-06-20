const axios = require("axios");
const { forkId } = require('../common/config');

const rpcUrl = `https://rpc.tenderly.co/fork/${forkId}`;

const address = ""; // TODO: add address

(async() => {
  const response = await axios.post(rpcUrl, {
    jsonrpc: "2.0",
    method: "eth_getBalance",
    params: [address, "latest"],
    id: 1
  });

  console.log( parseInt( response.data.result ) );
})();
