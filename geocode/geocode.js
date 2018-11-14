const request = require('request');

var geocodeaddress = (address,callback) =>{
    var str = encodeURIComponent(address);
   // console.log(str);
     
    request({
      url:`https://maps.googleapis.com/maps/api/geocode/json?address=${str}`,
      json:true
    }, (error,response,body) => {
      if(error)
      {
        callback("unable to connect to server"); 
      }
      else if(body.status=='ZERO_RESULTS')
      {
        callback("unable to get address");
      }
      else if(body.status=='OK')
      { callback(undefined,{
        address :body.results[0].formatted_address,
        latitude :body.results[0].geometry.location.lat,
        longitude :body.results[0].geometry.location.lng  
      });
      }
});
};
module.exports.geocodeaddress = geocodeaddress;
