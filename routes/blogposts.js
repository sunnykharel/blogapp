const router = require('express').Router();
let Blogpost = require('../models/blogpost.model');

router.route('/').get((req, res) => {
    Blogpost.find()
        .then(blogposts => res.json(blogposts))
        .catch(err => res.status(400).json('Error: '+ err));
});


router.route('/add').post((req, res) => {
    const email = req.body.email;
    const date = req.body.date;
    const post = req.body.post;

    const newBlogpost = new Blogpost({
        email,
        date,
        post,
    });

    newBlogpost.save()
    .then(()=> res.json('Post added!'))
    .catch(err => res.status(400).json('Error: '+err));
});

module.exports = router;