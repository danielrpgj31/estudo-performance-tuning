module.exports = (app) => {

    /**
     * Implementação do sleep de dois segundos.
     *
     * @param {number} ms - Quantos milisegundos a função espera.
     * @returns {Promise} Retorna uma promessa.
     */
    function sleep(ms) {
        return new Promise((resolve) => {
          setTimeout(() => {
            resolve();
          }, ms);
        });
    }

    /**
     * Api Rest que retorna http status 200 e um json.
     *
     */
    app.get('/whoami', (req,res,next) => {

        sleep(20000).then(() => {
            return res.status(200).json({msg: '/whoami : I am Customer Service'})
        })
    })
}