[![SmugMug Logo](https://cdn.smugmug.com/img/spacer.gif)](https://www.smugmug.com)

# smug-shot
- **Unofficial** NodeJS SDK for [SmugMug](https://www.smugmug.com)
- "Stunning Photo Websites. For You, Your Family, Or Your Business

## Quick Start

  Create the app:

```bash
$ mkdir newApp
$ cd newApp
$ npm init 
```
  Install smug-shot as a dependency:

```
$ npm install --save smug-shot
```

  Example Use

```js
//index.js
var username = "" //Your SmugMug App Username
var apiKey = "" //Your SmugMug App API Key
var humble = require('smug-shot')({username: username, api_key: apiKey})

humble.albums.get()
.then(function(res){
	console.log('albums().get then()')
	console.log(res.Albums.length)
})
.catch(function(error){
	console.log("Caught the error")
	console.error(error);
});

```
* [Smug Mug API](https://api.smugmug.com/api/v2/doc/index.html)


## Installation

```bash
$ npm install smug-shot --save
```

## Features

  * Fast, easy configuration


## Docs & Community

  * [Website and Documentation](https://www.smugmug.com) - [[github repo](https://github.com/jspenc72/smug-shot)]
  * [NPM](https://www.npmjs.com/package/smug-shot)

## Goals
  * 100% Smug Mug End Point Coverage (Currently Much Less)

## Dependencies
  * [bluebird](https://www.npmjs.com/package/bluebird)
  * [request](https://www.npmjs.com/package/request)

## Examples

  To view the examples, clone the 

```bash
$ git clone git://github.com/jspenc72/smug-shot.git --depth 1
$ cd smug-shot
$ npm install
```

  Then run whichever example you want:

```bash
$ node examples/example.js
```

## Tests

  To run the test suite, first install the dependencies, then run `npm test`:

```bash
$ npm install
$ npm test
```

## People

The original author of SmugShot is [@Jspenc72](https://github.com/jspenc72)
## License

  [MIT](LICENSE)
