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

  const [clothing, setCothing] = useState(null);
  const [electronics, setElectronics] = useState(null);
  const [toys, setToys] = useState(null);

  const togglePop = () => {
    console.log("Toggle Pop");
  }

  const loadBlockchainData = async () => {
    const provider = new ethers.BrowserProvider(window.ethereum);
    setProvider(provider);

    const network = await provider.getNetwork();

    const dappazon = new ethers.Contract(config[network.chainId].dappazon.address, Dappazon, provider);
    setDappazon(dappazon);

    // Load products
    const items = [];

    // OPTIMIZE: Should add get product amount function on the contract for the loop
    for (let i = 1; i <= 9; i++) {
      const item = await dappazon.items(i);
      items.push(item);
    }
    
    const clothing = items.filter((item) => item.category === 'clothing');
    const electronics = items.filter((item) => item.category === 'electronics');
    const toys = items.filter((item) => item.category === 'toys');

    setCothing(clothing);
    setElectronics(electronics);
    setToys(toys);
  }

  useEffect(() => {
    loadBlockchainData();
  }, []);

  return (
    <div>
      <Navigation account={account} setAccount={setAccount} />

      <h2>Dappazon Best Sellers</h2>
      
      {electronics && clothing && toys && (
        <>
          <Section title={"Clothing & Jewelry"} items={clothing} togglePop={togglePop} />
          <Section title={"Electronics & Gadgets"} items={electronics} togglePop={togglePop} />
          <Section title={"Toys & Gaming"} items={toys} togglePop={togglePop} />
        </>
      )}

    </div>
  );
}

export default App;
