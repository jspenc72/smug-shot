var humble = require('../index.js')({username: 'teerlinkcabinet', api_key: 'zE89IKhzCkTWIgU03nP6V0nX5IYcrxVX'})
humble.albums.get()
.then(function(res){
	console.log('albums().get then()')
	console.log(res.Albums.length)
})
.catch(function(error){
	console.log("Caught the error")
	console.error(error);
});

humble.albums.list()
.then(function(res){
	console.log('album.list()')
	console.log(res.Albums.length)
	for(var i=0; i<res.Albums.length; i++){
		if(res.Albums[i].ImageCount>0){
			// if(res.Albums[i].ImageCount>6){
			// 	console.log(res.Albums[i].Title)
			// }
			humble
			.album({key: res.Albums[i].key})
			.images({count:200, start:1})
			.then(function(res){
				// console.log('album().images()')
				// console.log(res.Images.length)
			})
		}else{
			continue
		}
	}
})
.catch(function(error){
	console.log("Caught the error")
	console.error(error);	
})

humble.image({key:'THQLx2X-0'}).sizes()
.then(function(res){
	console.log('image().sizes()');
	// console.log(res);
})

humble.image({key:'THQLx2X-0'}).get()
.then(function(res){
	console.log('image().get()');
	// console.log(res.Image);
})

//Step 1 Request User Info from URI
//http://www.smugmug.com/api/v2/user/teerlinkcabinet

//Step 2 Request User Albums URI
//http://www.smugmug.com/api/v2/user/teerlinkcabinet!albums

//Step 3 Request all Photos within each album

//Step 4 