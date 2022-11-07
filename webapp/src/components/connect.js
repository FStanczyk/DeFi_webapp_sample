
export default function connect(){
    window.ethereum.request({method:'eth_requestAccounts'})
}
