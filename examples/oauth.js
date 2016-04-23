  var OAuth = require('oauth');
var oauth = new OAuth.OAuth(
  'http://api.smugmug.com/services/oauth/1.0a/getRequestToken',
  'http://api.smugmug.com/services/oauth/1.0a/getAccessToken',
  'ZtSlKZsCRfKwMkwrM6CC2uICr2AKygOg',
  '9d0c6e562460972ffaf88698d1d71578',
  '1.0A',
  null,
  'HMAC-SHA1'
);
oauth.get(
  'http://api.smugmug.com/services/oauth/1.0a/authorize',
  'your user token for this app', //test user token
  'your user secret for this app', //test user secret            
  function (e, data, res){
    if (e) console.error(e);        
    console.log(require('util').inspect(data));
  }); 