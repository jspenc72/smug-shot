var OAuth = require("client-oauth")
var example = new OAuth[1.0]({
  base: 'http://www.smugmug.com/api/v2/',
  key: 'ZtSlKZsCRfKwMkwrM6CC2uICr2AKygOg',
  secret: '9d0c6e562460972ffaf88698d1d71578'
})

var user = new example.Client()

user.get(
  'http://api.smugmug.com/services/oauth/1.0a/getRequestToken', null,
  function( error, data, response ) {
    if( response && response.statusCode ) {
      console.log( response.statusCode )
      // console.log( data )
    } else {
      console.log( error )
    }
  }
)