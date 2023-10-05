const customer = require('./api/customer');
const expressApp = async (app) => {

    customer(app);
    
}

module.exports = expressApp;