const { log } = require('console');
const express = require('express');
const app = express();
const https = require('https');
const apikey = "3f7a5a2567b483cd1fc2940be0db25ae" ;
const url = "https://api.openweathermap.org/data/2.5/weather?q=nagpur&appid=" + apikey +"&units=metric";

app.listen(3000, function(){

    console.log("The server has started at port 3000");
});



app.get('/',function(request, response){
    
    https.get(url,function(res){
        res.on("data", function(data){
            var weatherinfo = JSON.parse(data);
            var sky = weatherinfo.weather[0].main;
            var temp = weatherinfo.main.temp;
            var icon = weatherinfo.weather[0].icon;
            var imgURL = "http://openweathermap.org/img/wn/"+icon+"@2x.png"

            response.write("The weather in NAGPUR is " + sky+ " and the temperature is "+ temp +" degree Celcius.");
            response.write('<img src=' +imgURL+'>');
            response.send();

            // console.log(sky);
            // console.log(temp);
            
        });
    
    })

    // response.send("Thanks for visiting our weather app");
});