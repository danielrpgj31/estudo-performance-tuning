module.exports = (app) => {

    /**
     * Adds two numbers.
     *
     * @param {number} a - The first number.
     * @param {number} b - The second number.
     * @returns {number} The sum of the two numbers.
     */
    function aguardarDoisSegundos(ms) {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve();
          }, ms);
        });
    }

    /**
     * Adds two numbers.
     *
     * @param {number} a - The first number.
     * @param {number} b - The second number.
     * @returns {number} The sum of the two numbers.
     */
    app.get('/whoami', (req,res,next) => {

        aguardarDoisSegundos(20000).then(() => {
            return res.status(200).json({msg: '/whoami : I am Customer Service'})
        })
    })
}