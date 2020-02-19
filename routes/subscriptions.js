const router = require('express').Router();
let Subscription = require('../models/subscription.model');

router.route('/').get((req, res)=> {
    Subscription.find()
        .then(subscriptions=>res.json(subscriptions))
        .catch(err=> res.status(400).json('Error: '+err));
});

router.route('/add').post((req,res)=>{
    const email = req.body.email;
    const newSubscription = new Subscription({email});

    newSubscription.save()
        .then(() => res.json("Subscription added! "))
        .catch(() => res.status(400).json('Error: '+err));
});

module.exports = router;