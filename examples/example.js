var userName = ""
var apiKey = ""
var humble = require('../index.js')({username: userName, api_key: apiKey})

humble.albums.get()
.then(function(res){
	console.log('albums().get then()')
	console.log(res.Albums.length)
})
.catch(function(error){
	console.log("Caught the error")
	console.error(error);
});