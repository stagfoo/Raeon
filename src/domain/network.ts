let Parser = require('rss-parser');

export function getCategory(callback){
  const imageList = [];
  const parser = new Parser({
    customFields: {
    item: [
      ['thumb', 'thumb'],
    ]
  }});
 const CORS_PROXY = "https://cors-anywhere.herokuapp.com/"
 parser.parseURL(CORS_PROXY + 'http://www.###.com/###', callback)
}
