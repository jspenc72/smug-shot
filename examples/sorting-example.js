var credentials = require('./credentials.js')()
var smugshot = require('../index.js')(credentials)
var _ = require('lodash');
//Get list of albums
smugshot
.albums
.list()
.then(function(res){
	var albums = res.Albums;
    var album = res.Albums[8]
	// console.log(album)
	//Request photos for a given album.
    smugshot
    .album({key: album.key})
    .images()
    .list({count:200, start:1})
    .then(function(res1){
        if(res1.Images.length>0){
            console.log("IMAGES!")
            console.log(res1.Images);
        }
    })
    .catch(function(error){
      console.error(error);
    })
    .done(function(){
      console.log("DONE!");
    });
    _.forEach(albums, function(album, key) {
        if(album.ImageCount > 1 ){
            console.log(key)

        }else{

        }
    });
})
.catch(function(error){
	console.log("Caught the error")
	console.error(error);
});
