const CONTRACT_NAME = process.env.CONTRACT_NAME ||'greet.happybits.testnet'

function getConfig(env) {
  switch (env) {
  case 'development':
  case 'testnet':
    return {
      networkId: 'testnet',
      nodeUrl: 'https://rpc.testnet.near.org',
      contractName: CONTRACT_NAME,
      walletUrl: 'https://wallet.testnet.near.org',
      helperUrl: 'https://helper.testnet.near.org',
      explorerUrl: 'https://explorer.testnet.near.org',
    }
    case 'local':
      return {
        networkId: 'local',
        nodeUrl: 'http://localhost:3030',
        keyPath: `${process.env.HOME}/.near/validator_key.json`,
        walletUrl: 'http://localhost:4000/wallet',
        contractName: CONTRACT_NAME,
      }    
  default:
    throw Error(`Unconfigured environment '${env}'. Can be configured in src/config.js.`)
  }
}

module.exports = getConfig
