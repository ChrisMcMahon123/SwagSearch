const twitter = require('../custom_modules/twitter')
const bodyParser = require('body-parser')
const express = require('express')
const models = require('../models/tweet')
const geocoder = require('geocoder')
const router = express.Router()




router.use(bodyParser.json())


router.post("/twitter/", function(req, res){
    
    console.log('twitter path')


    const param = {
        q: "%23"+req.body.hashtag,
        geo: req.body.latitude + "," + req.body.longitude + ",50km",
        count: '20'
    }

    twitter.get('search/tweets', param, function(err, tweets, response){
        if(err){
            res.status(204)
        } else{
            var tweetsArray = tweets.statuses
            console.log(tweetsArray)
            

            for(index=0; index<tweetsArray.length; index++){
                const geoCoordinate = tweetsArray[index]['geo']
                const location = tweetsArray[index]['user']
                
                if(geoCoordinate != null){
                    console.log(geoCoordinate['coordinates'])
                } else if(location!= null){
                    console.log(geocoder.geocode (location['location'], function(err, data){
                        if(!err){
                            console.log(data)
                        }
                    }))
                    
                }
            }
            
            
        }
    })
})

module.exports = router
