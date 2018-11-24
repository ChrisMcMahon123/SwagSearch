var express = require('express')
var router = express.Router();
var bodyParser = require('body-parser')
var isImage = require('is-image-url')
const Clarifai = require('clarifai')

var clarifai = new Clarifai.App({
    apiKey: 'b39c1f5611054c72a7803938e9342769'
})

router.use(bodyParser.json())
router.post('/search/fashion_brand/', function(req, res){

    var predictions = [];
    const imageUrl = req.body.url

    if(isImage(imageUrl)){
       getPrediction(imageUrl, function(response){
            for(index = 0; index<response.length && index<10; index++){
             predictions.push({name: response[index].name})
            }
            res.send(predictions)

        })
    }

    else(res.send('Invalid url'))
})

function getPrediction(url,callback){
    clarifai.models.initModel("Fashion-Brand")
    .then(generalModel => {
      return generalModel.predict(url);
    })
    .then(response => {
      return concepts = response['outputs'][0]['data']['concepts']
    }).then(function(response){
        callback(response)
    })
}

module.exports = router