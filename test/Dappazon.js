const { expect } = require("chai")

const tokens = (n) => {
  return ethers.parseUnits(n.toString(), 'ether');
}

describe('Dappazon', () => {
  let deployer, buyer;
  let dappazon;

  beforeEach(async ()=> {
    // Setup Accounts
    [ deployer, buyer ] = await ethers.getSigners();

    // Deploy contract
    const DappazonFactory = await ethers.getContractFactory('Dappazon');
    dappazon = await DappazonFactory.deploy();
  })

  describe('Deployment', () => {
    it('Sets the owner', async () => {
      expect(await dappazon.owner()).to.equal(deployer.address);
    })
  })
})
