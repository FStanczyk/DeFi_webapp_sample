let deployer
let SAMPLE

async function init(){
    [deployer] = await ethers.getSigners();
    console.log("Deploying contracts with the account:", deployer.address);
    const sample = await ethers.getContractFactory("SAMPLE");
    SAMPLE = await sample.deploy();
    console.log("Address:", SAMPLE.address);
}

init()
  