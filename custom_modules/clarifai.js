const Clarifai = require('clarifai')

module.exports = function(){
    return new Clarifai.App({
        apiKey:'b39c1f5611054c72a7803938e9342769'
    })
}