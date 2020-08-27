const request = require('request');
const breedArg = process.argv.slice(2);

request(`https://api.thecatapi.com/v1/breeds/search?q=${breedArg[0]}`, (error, response, body) => {

  if (error) {
    console.log(error);
  }

  const data = JSON.parse(body);
 
  try {
    console.log(data[0].description);
  } catch (e) {
    console.log('Sorry, the requested breed was not found.');
  }

});