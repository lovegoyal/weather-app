const request= require('request');
const yargs = require('yargs');
const geocode= require('./geocode/geocode.js');
const weather = require('./weather/weather.js')

const argv = yargs.options({
  a:{
    demand:true,
    alias:'address',
    describe:"fetching weather for particular address",
    string:true
  }
})
.help()
.alias('help','h')
.argv;
console.log(argv.address);
geocode.geocodeaddress(argv.address,(errorMessage,results) =>{
if(errorMessage)
{
  console.log(errorMessage);
}
else {
  console.log(JSON.stringify(results,undefined,2));
}
weather.weather(results.latitude,results.longitude);
}); 



//3668149ed510af2ad79373107d07ffc4
