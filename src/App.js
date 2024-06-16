import { useEffect, useState } from 'react'
import { ethers } from 'ethers'

// Components
import Navigation from './components/Navigation'
import Section from './components/Section'
import Product from './components/Product'

// ABIs
import Dappazon from './abis/Dappazon.json'

// Config
import config from './config.json'

function App() {

  const [provider, setProvider] = useState(null);
  const [dappazon, setDappazon] = useState(null);

  const [account, setAccount] = useState(null);

  const loadBlockchainData = async () => {
    const provider = new ethers.BrowserProvider(window.ethereum);
    setProvider(provider);
    const network = await provider.getNetwork();

    const dappazon = new ethers.Contract(config[network.chainId].dappazon.address, Dappazon, provider);
    setDappazon(dappazon);
  }

  useEffect(() => {
    loadBlockchainData();
  }, []);

  return (
    <div>
      <Navigation account={account} setAccount={setAccount} />

      <h2>Welcome to Dappazon</h2>

    </div>
  );
}

export default App;
