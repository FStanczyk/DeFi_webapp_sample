const ethers = require('ethers');

export const contractAddress = "...";

export const abi = [
    "function name(arguments)",
];

export let provider = new ethers.providers.Web3Provider(window.ethereum)

export async function sample_function(){
    signer = await provider.getSigner()
    let CONTRACT = new ethers.Contract(contractAddress, abi, signer)

    //await CONTRACT.name()
}