const keysDev = require('./development')
const keysPrd = require('./production')
const keysHml = require('./homolog')
const keysLocal = require('./staging')

const key = () => {
  if (process.env.NODE_ENV === 'PRD') {
    return keysPrd;
  }
  if (process.env.NODE_ENV === 'HML') {
    return keysHml;
  }
  if (process.env.NODE_ENV === 'DEV') {
    return keysDev;
  }
  
  return keysLocal;
};

module.exports = key();