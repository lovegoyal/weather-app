const request= require('request');

var weather = (lat,lng)=>{
    request({
  url:`https://api.darksky.net/forecast/3668149ed510af2ad79373107d07ffc4/${lat},${lng}`,
  json:true
},(error,body,results) =>{
    // if(error)
    // {
    //     console.log('unable to connect to forcast.io');
    // }
    // else if(results)
      console.log(body.body.currently); 

})
}
module.exports.weather=weather;