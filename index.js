var Promise = require("bluebird");
var request = require("request");
module.exports = function (options) {
	'use strict';
	var config = {
		base_url: 'http://www.smugmug.com/api/v2/user/',
		album_url: 'http://www.smugmug.com/api/v2/album/',
		image_url: 'http://www.smugmug.com/api/v2/image/',
		username: '',
		api_key: '',
		albums_string: '!albums',
		images_string: '!images',
		image_string: '/image/'
	}
	if(options.username){
		config.username = options.username
	}
	if(options.api_key){
		config.api_key = options.api_key
	}

	var connect = function(){
		var connectOptions = {
			url: config.base_url+config.username+"?APIKey="+config.api_key,
			headers: {
				'User-Agent': 'request',
				'Accept': ' application/json',
				'Response' : ' application/json'
			},
			json: true			
		};
		return new Promise(function(resolve, reject) {	
			request.get(connectOptions, function(error, response, body){
				if(error){
					reject(error)
				}else{
					if(response.statusCode==401){
						reject(response.body);
					}
					if(response.statusCode==200){
						resolve({response: response, body: res.body})
					}
				}
			})
		})
	}
	var albums = function(){
		return {
			get: function(opts){
				var count = 200, start=1;
				if(opts){
					if(opts.count){
						count = opts.count;
					}
					if(opts.start){
						start = opts.start
					}					
				}
				var albumsOptions = {
					url: config.base_url+config.username+config.albums_string+"?APIKey="+config.api_key+"&count="+count+"&start="+start,
					headers: {
						'User-Agent': 'request',
						'Accept': ' application/json',
						'Response' : ' application/json'
					},
					json: true	
				};				
				return new Promise(function(resolve, reject) {	
					request.get(albumsOptions, function(error, response, body){
						if(error){
							reject(error)
						}else{
							if(response.statusCode==401){
								reject(response.body);
							}
							if(response.statusCode==200){
								resolve({Albums: body.Response.Album , response: response, body: body})
							}
						}
					})
				})
			},
			list: function(opts){
				var count = 200, start=1;
				if(opts){
					if(opts.count){
						count = opts.count;
					}
					if(opts.start){
						start = opts.start
					}					
				}
				var albumsOptions = {
					url: config.base_url+config.username+config.albums_string+"?APIKey="+config.api_key+"&count="+count+"&start="+start,
					headers: {
						'User-Agent': 'request',
						'Accept': ' application/json',
						'Response' : ' application/json'
					},
					json: true	
				};				
				return new Promise(function(resolve, reject) {	
					request.get(albumsOptions, function(error, response, body){
						if(error){
							reject(error)
						}else{
							if(response.statusCode==401){
								reject(response.body);
							}
							if(response.statusCode==200){
								var list = []
								for(var i = 0; i<body.Response.Album.length; i++){
									var tmpAlbum = body.Response.Album[i];
									tmpAlbum.key = body.Response.Album[i].Uri.split("/album/")[1];
									list.push(tmpAlbum)
								}
								// console.log(list)
								resolve({Albums: list, response: response, body: body})
							}
						}
					})
				})				
			}
		}
	}
	var images = function(){
		return {
			get: function(album_id){
				var imagesOptions = {
					url: "http://www.smugmug.com/api/v2/album/hNHXmr!images"+"?APIKey="+config.api_key,
					headers: {
						'User-Agent': 'request',
						'Accept': ' application/json',
						'Response' : ' application/json'
					},
					json: true	
				};

				return new Promise(function(resolve, reject) {	
					request.get(imagesOptions, function(error, response, body){
						if(error){
							reject(error)
						}else{
							if(response.statusCode==401){
								reject(response.body);
							}
							if(response.statusCode==200){
								resolve({Images: body.Response.AlbumImage, response: response, body: body})
							}
						}
					})
				})
			}
		}		
	}
	var image = function(opts){
		return {
			get: function(){
				var image_key = '';
				if(opts){
					if(opts.key){
						image_key = opts.key
					}
				}
				var imagesOptions = {
					url: "http://www.smugmug.com/api/v2/image/"+image_key+"?APIKey="+config.api_key,
					headers: {
						'User-Agent': 'request',
						'Accept': ' application/json',
						'Response' : ' application/json'
					},
					json: true	
				};
				return new Promise(function(resolve, reject) {	
					// console.log(imagesOptions.url);
					request.get(imagesOptions, function(error, response, body){
						if(error){
							reject(error)
						}else{
							if(response.statusCode==401){
								reject(response.body);
							}
							if(response.statusCode==200){
								resolve({Image: body.Response.Image, response: response, body: body})
							}
						}
					})
				})			
			},
			sizes: function(){
				var image_key = '';
				if(opts){
					if(opts.key){
						image_key = opts.key
					}
				}
				var imagesOptions = {
					url: "http://www.smugmug.com/api/v2/image/"+image_key+"!sizes?APIKey="+config.api_key,
					headers: {
						'User-Agent': 'request',
						'Accept': ' application/json',
						'Response' : ' application/json'
					},
					json: true	
				};
				return new Promise(function(resolve, reject) {	
					// console.log(imagesOptions.url);
					request.get(imagesOptions, function(error, response, body){
						if(error){
							reject(error)
						}else{
							if(response.statusCode==401){
								reject(response.body);
							}
							if(response.statusCode==200){
								resolve({Sizes: body.Response.ImageSizes, response: response, body: body})
							}
						}
					})
				})
			}
		}
	}
	var album = function(album_opts){
		return {
			images: function(){
				//album
				return {
					get: function(images_opts){
						var album_key = '';
						if(album_opts){
							if(album_opts.key){
								album_key = album_opts.key;
							}			
						}
						//images
						var count = 200, start=1;
						if(images_opts){
							if(images_opts.count){
								count = images_opts.count;
							}
							if(images_opts.start){
								start = images_opts.start
							}						
						}
						var imagesOptions = {
							url: "http://www.smugmug.com/api/v2/album/"+album_key+"!images"+"?APIKey="+config.api_key+"&count="+count+"&start="+start,
							headers: {
								'User-Agent': 'request',
								'Accept': ' application/json',
								'Response' : ' application/json'
							},
							json: true	
						};
						return new Promise(function(resolve, reject) {	
							// console.log(imagesOptions.url);
							request.get(imagesOptions, function(error, response, body){
								if(error){
									reject(error)
								}else{
									if(response.statusCode==401){
										reject(response.body);
									}
									if(response.statusCode==200){
										resolve({Images: body.Response.AlbumImage, response: response, body: body})
									}
								}
							})
						})	
					},
					list: function(images_opts){
						var album_key = '';
						if(album_opts){
							if(album_opts.key){
								album_key = album_opts.key;
							}			
						}
						//images
						var count = 200, start=1;
						if(images_opts){
							if(images_opts.count){
								count = images_opts.count;
							}
							if(images_opts.start){
								start = images_opts.start
							}						
						}
						var imageListOptions = {
							url: "http://www.smugmug.com/api/v2/album/"+album_key+"!images"+"?APIKey="+config.api_key+"&count="+count+"&start="+start,
							headers: {
								'User-Agent': 'request',
								'Accept': ' application/json',
								'Response' : ' application/json'
							},
							json: true	
						};

						return new Promise(function(resolve, reject) {	
							// console.log(imagesOptions.url);
							request.get(imageListOptions, function(error, response, body){
								if(error){
									reject(error)
								}else{
									if(response.statusCode==401){
										reject(response.body);
									}
									if(response.statusCode==200){
										var AlbumImageArr = body.Response.AlbumImage;
										var tmpImagesArr = [];
										if(body.Response.AlbumImage){
											for(var i=0; i<body.Response.AlbumImage.length; i++){
												//Request image uris
												var tmpImage = body.Response.AlbumImage[i];
												var tmpKey = tmpImage.Uri.split("/image/")[1];
												// console.log("Getting sizes for: "+tmpKey)
												image({key:tmpKey}).sizes()
												.then(function(res){
													// console.log("res: "+res.Sizes.MediumImageUrl)
													var resImage = AlbumImageArr[tmpImagesArr.length]
													resImage.Sizes = res.Sizes
													tmpImagesArr.push(resImage)
													if(tmpImagesArr.length==body.Response.AlbumImage.length){
														resolve({Images: tmpImagesArr, response: response, body: body})
													}
												})
											}
										}else{
											resolve({Images: tmpImagesArr, response: response, body: body})
											console.error(body)
										}
									}
								}
							})
						})						
					}
				}
		
			},
			image: {
				get: function(image_opts){
					//Example
					//http://www.smugmug.com/api/v2/album/PnQrdv/image/hVL2W9V-0
				}
			}
		}
	}

	return {
		connect: function(options){
			return connect(options);
		},
		albums: albums(),
		album: function(options){
			return album(options)
		},
		images: images(),
		image: function(options){
			return image(options)
		}
	}
}
