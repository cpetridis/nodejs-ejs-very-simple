const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const router = express.Router();
var urlencodedParser = bodyParser.urlencoded({ extended: false })

const rootDir = require('../util/path');

const users = [];

router.get('/add-new', (req, res, next) => {
  res.render('add-user', {pageTitle: 'Add a new user'});
});

router.get('/removeuser',(req,res,next) => {
  res.render('remove', {pageTitle: 'Remove user'});
})

router.get('/showall', (req, res, next) => {
  res.render('showall', {pageTitle: 'Usernames', myusers: users});
});

router.post('/showall', urlencodedParser, (req, res, next) => {
	// console.log(req.body);
  users.push({ name: req.body.username });
  res.render('showall', {pageTitle: 'Usernames', myusers: users});
});

router.post('/removeuser', urlencodedParser, (req, res, next) => {
	const nameToRemove = req.body.username;
	for( var i = 0; i < users.length; i++){ 
		console.log(users[i].name + " and nameToRemove :  " + nameToRemove);
		if ( users[i].name === nameToRemove) {
			users.splice(i, 1); 
		}
	}
  res.render('showall', {pageTitle: 'Usernames', myusers: users});
});

module.exports = router;