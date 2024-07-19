document.getElementById('payButton').addEventListener('click', async () => {
    // Ensure MetaMask is installed
    if (typeof window.ethereum !== 'undefined') {
        // Create an ethers provider
        const provider = new ethers.providers.Web3Provider(window.ethereum);
        
        // Request account access if needed
        await provider.send('eth_requestAccounts', []);

        // Create a signer
        const signer = provider.getSigner();

        // Define transaction parameters
        const tx = {
            to: '0xf9a53acD498d5a4c284754bd8A46fD322e52E6b1', // Replace with the recipient address
            value: ethers.utils.parseEther('0.017') // Amount in ETH
        };

        try {
            // Send transaction
            const txResponse = await signer.sendTransaction(tx);
            console.log('Transaction hash:', txResponse.hash);

            // Wait for transaction to be mined
            await txResponse.wait();
            console.log('Transaction confirmed:', txResponse.hash);

            alert('Transaction successful!');

        } catch (error) {
            console.error('Transaction failed:', error);
            alert('Transaction failed. Please check the console for details.');
        }
    } else {
        alert('MetaMask is not installed. Please install MetaMask to use this feature.');
    }
});
