function onPageLoaded(event)
{
    const web3header = document.getElementById('web3header_div');

    try {
        if(typeof window.ethereum == "undefined" && typeof window.web3 == "undefined") {
            web3header.style.display = 'none';
            return;
        }

        const web3provider = window.ethereum || window.web3.currentProvider;
        const metamask = web3provider.isMetaMask;

        if(metamask) {
            console.log("MetaMask is turned on.");
            web3header.style.display = '';
        }
    } catch(error) {
        console.error(`[*] Cannot open web3 header :P`);
        console.error(error);
        web3header.style.display = 'none';
    }
}

function onWeb3Close(event)
{
    event.preventDefault();
    const web3header = document.getElementById('web3header_div');
    web3header.style.display = 'none';
}

document.getElementById('closeweb3_btn').addEventListener('click', onWeb3Close);
window.addEventListener('DOMContentLoaded', onPageLoaded);