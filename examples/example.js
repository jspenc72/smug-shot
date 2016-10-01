var creds = require('./credentials.js')()
var smug = require('../index.js')(creds)

var options = {
	count: 200,
	start: 1,
	sortBy: ''
}

smug.albums.list(options)
.then(function(res){
	console.log('albums().get then()')
	console.log(res.Albums.length)
})
.catch(function(error){
	console.log("Caught the error")
	console.error(error);
});