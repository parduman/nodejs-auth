const express = require('express');
const router = express.Router();
const { ensureAuthenticated } = require('../config/checkAuth')
const path = require('path');

//------------ Welcome Route ------------//
router.get('/', (req, res) => {
    res.render('welcome');
});

//------------ Dashboard Route ------------//
router.get('/dashboard', ensureAuthenticated, (req, res) => {
    res.render('dash', {
        name: req.user.name
    })
    // res.redirect('http://127.0.0.1:5500/codeBook.html')
});

module.exports = router;