const express = require('express');
const app = express();
const https = require('https');
const apikey = "3f7a5a2567b483cd1fc2940be0db25ae" ;
const url = "https://api.openweathermap.org/data/2.5/weather?q=nagpur&appid=" + apikey

app.listen(3000, function(){

    console.log("The server has started at port 3000");
});

https.get(url,function(res){
    console.log(res)
})

app.get('/',function(request, response){
    
    response.send("Thanks for visiting our weather app");
});