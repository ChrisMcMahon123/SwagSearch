const twitter = require('../custom_modules/twitter')
const bodyParser = require('body-parser')
const express = require('express')
const models = require('../models')
const router = express.Router()

var googleMapsClient = require('@google/maps').createClient({
    key: 'AIzaSyDFGmdUmtD00M2yF3EpW83MVZ9D15RopEo'
  });

router.use(bodyParser.json())


router.post("/twitter/", function(req, res){
    
    console.log('twitter path')

    //Parameter for twitter query search

    //Generate Geocode from params city name
    const param = {
        q: "%23"+req.body.hashtag,
        geo: req.body.latitude + "," + req.body.longitude + ",50km",
        count: '30',
        result_type: 'recent'
    }

    twitter.get('search/tweets', param, function(err, tweets, response){
        if(err){
            res.status(204)
        } 
        else{            
            var tweetsArray = tweets.statuses

            for(index=0; index<tweetsArray.length; index++){

                const geoCoordinate = tweetsArray[index]['geo']
                const location = tweetsArray[index]['user']

                if(geoCoordinate != null){
                   // console.log(index)
                    //create model and insert into database
                    // models.Tweet.create({
                    //     id_str: tweetsArray[index]['id_str'],
                    //     hash: req.body.hashtag,
                    //     latitude: geoCoordinate['coordinates'][0],
                    //     longitude: geoCoordinate['coordinates'][1]
                    // })
                    // .then(function(){
                    //     console.log('no mistake')
                    // }).catch(function(err){
                    //     console.log(err)
                    // })


                } 
                else if(location != null && location!=''){  
                    console.log(index)
                    
                    //Calling Google map api
                    googleMapsClient.geocode({
                        address: location['location']
                      }, function(err, response) {
                        if (!err) {
                       // create model and insert into database
                        // models.Tweet.create({
                        //     id_str: tweetsArray[index]['id_str'],
                        //     hash: req.body.hashtag,
                        //     latitude: response.json.results[0]['geometry']['location']['lat'],
                        //     longitude:response.json.results[0]['geometry']['location']['lng']
                    // })
                    // .then(function(){
                       
                    //     return res.status(200)
                    // }).catch(function(err){
                    //     return res.status(500)
                    // })
                    //

                
                }
            });


                }
            }
        }
    })
    models.Tweet.findAll({where: {hash: req.body.hashtag}})
    .then(function(response){
        console.log(response)
    })
})

module.exports = router
