var credentials = require('./credentials.js')()
var smugshot = require('../index.js')(credentials)
//Get list of albums
smugshot.albums.list()
.then(function(res){
	var album = res.Albums[0];
	console.log(album)
	//Request photos for a given album.
    smugshot
    .album({key: album.key})
    .images()
    .list({count:200, start:1})
    .then(function(res){
    	console.log("IMAGES!")
    	console.log(res.Images);
    })
    .catch(function(error){
      console.error(error);
    })
    .done(function(){
	  console.log("DONE!");
	});
})
.catch(function(error){
	console.log("Caught the error")
	console.error(error);
});
