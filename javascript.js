var api = "https://api.openweathermap.org/data/2.5/forecast?q=";
var apiKey = "&appid=9b3d72753ebf07832128632f512c6fe0";


var citySearch = $("#citySearch");
var submit = $("#searchBtn");
var temp = $("#temp");
var humid = $("#humid");
var Wind = $("#wind");
var uv = $("#uv");
var daily = $("#5DayForecast");

var date = new Date();


 /*$( document ).ready(function() {
    submit.click(function(event) {
        //Gives value from what the user inputs
        */
       
     /*  $("#citySearch").on("click", function(event) {
               event.preventDefault();
               $("#searchBtn").click();
       */ 
            
        

        
        $("#searchBtn").on("click", function() {
            event.preventDefault();
            $("#daily").addClass("show");
            
            //Value from input
            citySearch = $("#citySearch").val();
            
            //To clear input box
            $("#citySearch").empty();
        
        
            //Ajax function to get the current weather
            $.ajax({
                url: api + city + apiKey,
                method: "GET"
            })
            //then is a PROMISE, when data pull is done, pass the response through the function
            .then(function (response) {
                //Log the resulting
                console.log(response);
     
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

                //Add content to page
                citySearch.append()
            });

         

            $.ajax({
            url: api + city + apiKey,
            method: "GET"
        }).then(function (response) {
            console.log(response.list.length);

            var i = 0;

            for (var r = 0; r <= response.list.length; r++) {

                if (response.list[r].dt_txt.includes("12:00:00")) {

                    console.log(i);
                    console.log(r);

                    $("<h6>").html(moment().add(i + 1, "days").format("M" + "/" + "D" + "/" + "YYYY")).appendTO("#day" + i);

                    weatherImg = 'https://openweathermap.org/img/wn/' + response.list[r].weather[0].icon + '@2x.png'
                    var forecastImg = $("#<img>").attr("src", weatherImg);

                    var forecastTemp = $("<p>").html("Temp: " + parseFloat(response.list[r].main.temp).toFixed(2) + "<span>&deg</span> F");

                    var forecastHumid = $("<p>").html("Humidty " + parseInt(response.list[r].main.humidity) + "%");

                    $("#day" + i).append(forecastImg, forecastTemp, forecastHumid);

                    i++
                }

                
            }
            

        })
    

    function renderBtns() {
        for (var i = 0; i < searchHistory.length; i++) {
            var newCityDiv = $("<div>");
            var newCityBtn = $("<button>").addClass("cities").text(searchHistory[i]).appendTo(newCityBtn);
            $("#cityStorage").prepend(newCityBtn);
        }
    }

    



});
