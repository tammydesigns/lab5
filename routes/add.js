var data = require("../data.json");

exports.addFriend = function(req, res) {    
	// Your code goes here
	res.render('add');
	var name = req.query.name;
    var dscpt = req.query.description;
    var image = 'http://lorempixel.com/400/400/people';
    var newFriend = {
		"name": name,
		"description": dscpt,
		"imageURL": image
	}
	data["friends"].push(newFriend);


 }