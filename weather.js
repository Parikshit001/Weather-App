const { log } = require('console');
const express = require('express');
const app = express();


const bodyparser = require("body-parser");
app.use(bodyparser.urlencoded({extended:true}));

const https = require('https');


app.listen(3000, function(){

    console.log("The server has started at port 3000");
});





app.get('/',function(request, response){
    
    response.sendFile(__dirname + "/index.html")
    
    // https.get(url,function(res){
    //     res.on("data", function(data){
    //         const apikey = "3f7a5a2567b483cd1fc2940be0db25ae";
    //         const url = "https://api.openweathermap.org/data/2.5/weather?q=nagpur&appid=" + apikey +"&units=metric";
    //         var weatherinfo = JSON.parse(data);
    //         var sky = weatherinfo.weather[0].main;
    //         var temp = weatherinfo.main.temp;

    //         // Create a var for displaying image of weather
    //         // var icon = weatherinfo.weather[0].icon;
    //         // var imgURL = "http://openweathermap.org/img/wn/"+icon+"@2x.png"

    //         response.write("The weather in NAGPUR is " + sky+ " and the temperature is "+ temp +" degree Celcius.");
    //         response.send();

    //         // console.log(sky);
    //         // console.log(temp);
            
    //     });
    
    //  });

    // response.send("Thanks for visiting our weather app");
});

app.post("/",function(request,response){

    const apikey = "3f7a5a2567b483cd1fc2940be0db25ae";
    var cityName = request.body.cityname;
    const url = "https://api.openweathermap.org/data/2.5/weather?q="+ cityName +"&appid=" + apikey +"&units=metric";

        https.get(url,function(res){

            res.on("data", function(data){
                
                
                var weatherinfo = JSON.parse(data);
                var sky = weatherinfo.weather[0].main;
                var temp = weatherinfo.main.temp;

                // Create a var for displaying image of weather
                // var icon = weatherinfo.weather[0].icon;
                // var imgURL = "http://openweathermap.org/img/wn/"+icon+"@2x.png"

                response.write("The weather in " +cityName+ " is " + sky+ " and the temperature is "+ temp +" degree Celcius.");
                response.send();

                // console.log(sky);
                // console.log(temp);
            
        });
    
    });

    // response.send("Thanks for visiting our weather app");

});
    