//sunny followed a tutorial and was driving while aaskar was navigating


const router = require('express').Router();
let Subscription = require('../models/subscription.model');

router.route('/').get((req, res)=> {
    
    Subscription.find()
        .then(subscriptions=>res.json(subscriptions))
        .catch(err=> res.status(400).json('Error: '+err));
});




router.route('/add').post((req,res)=>{
    const _email = req.body.email;

    Subscription.count({email: _email}, function (err, count){ 
    if(count==0){
        const newSubscription = new Subscription({email});
        newSubscription.save()
        .then(() => res.json("all good"))
        .catch(() => res.status(400).json('Error: '+err));
    } else{
        res.json("user already in database")
    }
    });

});

router.route('/delete').post((req,res)=> {
    const _email = req.body.email;  
    Subscription.findOneAndRemove({
        email: _email 
    })
    .then(response => {
        res.json("User removed from subscriptions");
    })
    .catch(err => {
        res.json('User not in here');
    })
});

module.exports = router;