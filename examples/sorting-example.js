var credentials = require('credentials.js')
var humble = require('../index.js')(credentials)
//Get list of albums
humble.albums.get()
.then(function(res){
	console.log('albums().get then()')
	console.log(res.Albums.length)
})
.catch(function(error){
	console.log("Caught the error")
	console.error(error);
});