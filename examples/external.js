var aUserId  = 'conservatoryballetp'
var aAPIKey  = 'flvzaVwCXcEvA5B7xTO21rv00YFyExQx'

var tlUser = "teerlinkcabinet"

var tlKey = "zE89IKhzCkTWIgU03nP6V0nX5IYcrxVX"

var smugshot = require('../index.js')({username: aUserId, api_key: aAPIKey});
var request = require("request");


var albumsOptions = {
	url: "http://www.smugmug.com/api/v2/user/?APIKey="+aAPIKey,
	headers: {
		'User-Agent': 'request',
		'Accept': ' application/json',
		'Response' : ' application/json'
	},
	json: true	
};	


