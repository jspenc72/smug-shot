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
		// console.log(i)
		if(res.Albums[i].ImageCount>0){
			// if(res.Albums[i].ImageCount>6){
			// 	console.log(res.Albums[i].Title)
			// 	console.log(res.Albums[i].key)
			// }

				humble
				.album({key: res.Albums[i].key})
				.images()
				.list({count:200, start:1})
				.then(function(res){
					// console.log(res.Images.length);
					// if(res.Images.length>1){
					// 	for(var i=0; i<res.Images.length; i++){
					// 		console.log(res.Images[i])
					// 		console.log("arr "+res.Images[i].Sizes.MediumImageUrl)
					// 	}

					// }
					// console.log('album().images().list()')
				})
				.catch(function(error){
					console.error(error);
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