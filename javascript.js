var api = "https://api.openweathermap.org/data/2.5/forecast?q=";
var apiKey = "&appid=9b3d72753ebf07832128632f512c6fe0";

var citySearch = $("#citySearch");
var submit = $("#searchBtn");
var temp = $("#temp");
var humid = $("#humid");
var Wind = $("#wind");
var uv = $("#uv");




  $( document ).ready(function() {
    submit.click(function(event) {
        event.preventDefault();
        var city = $("#citySearch").val();

        //var cityHistory = localStorage.setItem("cityHistory");
        
        //document.getElementById("result").innerHTML = localStorage.getItem("citySearch");

        //Ajax function to get the current weather
        $.ajax({
            url: api + city + apiKey,
            method: "GET"
        })
        //then is a PROMISE, when data pull is done, pass the response through the function
        .then(function (response) {
            //Log the resulting
            console.log(response);

          /* var newDiv = $("<div>");
           newDiv.html("<h5>");
           $("#city").append(newDiv);
           */
           //Transfer content to HTML
            $("#city").html("<h5>" + name + " </h5>");
            $("#humid").text("Humidity: " + response.main.humidity);
            $("#wind").text("Wind Speed: " + response.wind.speed);
            $("#uv").text("UV Index: " + response.main.uv);
            
            //Convert the temp to fahrenheit
            var tempF = (response.main.temp - 273.15) * 1.80 + 32;
            //Add temp content to HTML
            $("#temp").text("Temperature (K) " + response.main.temp);
            $("#tempF").text("Temperature (F) " + tempF.toFixed(2));
           
            //Log the data in console
            console.log("Humidity: " + response.main.humidity);
            console.log("Wind Speed: " + response.wind.speed);
            console.log("UV Index: " + response.main.uv);
            console.log("Temperature (F) " + tempF);
        });

        $.ajax({
            url: api + city + apiKey,
            method: "GET"
        }).then(function (respone) {

        })




});
})