const express = require("express");
const app = express();
const Contract = require("web3-eth-contract");
const port = 8080;

async function setName() {
  try {
    const abi = [
      {
        inputs: [],
        name: "getWord",
        outputs: [
          {
            internalType: "string",
            name: "name",
            type: "string",
          },
        ],
        stateMutability: "view",
        type: "function",
      },
      {
        inputs: [
          {
            internalType: "string",
            name: "_word",
            type: "string",
          },
        ],
        name: "setWord",
        outputs: [],
        stateMutability: "nonpayable",
        type: "function",
      },
    ];
    const address = "0xe1B58DEAa4590AC45024495072FC926d1EF0f3eb";
    Contract.setProvider("http://127.0.0.1:7545");
    const contract = new Contract(abi, address);
    const result = await contract.methods.setWord("프롬만?").send({
      from: "0x26A0C13889A6CF654e5073836a7e4A74496f2752",
    });

    console.log(result);
    return result;
  } catch (e) {
    console.log(e);
    return e;
  }
}

app.get("/setWord", (req, res) => {
  setName().then((result) => {
    res.send(result);
  });
});

app.listen(port, () => {
  console.log("Listening...");
});
