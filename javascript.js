var api = "https://api.openweathermap.org/data/2.5/weather?q=";
var apiKey = "&appid=9b3d72753ebf07832128632f512c6fe0";


var citySearch = $("#citySearch");
var submit = $("#searchBtn");
var temp = $("#temp");
var humid = $("#humid");
var Wind = $("#wind");
var uv = $("#uv");
var daily = $("#dailyForecast");

var date = new Date();


 $( document ).ready(function() {
            
      //what I'm getting from local storage under the ID of 'history'
      var history = JSON.parse(window.localStorage.getItem("history")) || [];  
     
      for (var i = 0; i < history.length; i++) {
        console.log(history[i]);
        $("#cityStorage").append('<button class="saveCity">' + history[i] + '</button>');
    }

    $(".saveCity").on("click", function() {
        //only occurs when clicked
        event.preventDefault();
        console.log($(this));
        console.log($(this)[0].innerText);
    })
});  

        $(".saveCity").on("click", function() {
            //only occurs when clicked
            event.preventDefault();
            console.log($(this));
        })
        
        $("#searchBtn").on("click", function() {
            event.preventDefault();
            $("#daily").addClass("show");
            
            //Value from input
            citySearch = $("#citySearch").val();
          
            
            //To clear input box
            $("#citySearch").empty(daily);
        
            //console.log(api + citySearch + apiKey);
            //Ajax function to get the current weather
            $.ajax({
                url: api + citySearch + apiKey,
            
                method: "GET"
            })
            //then is a PROMISE, when data pull is done, pass the response through the function
            .then(function (response) {
                //Log the resulting
                //console.log(response);
                
                //what I'm getting from local storage under the ID of 'history'
                var history = JSON.parse(window.localStorage.getItem("history")) || [];
                //adding citySearch to the 'history' array
                history.push(citySearch);
                //goin to localStorage hsitory and overwriting the array that was there witha a new one
                //now the new city is being added to the array that's in localstorage
                window.localStorage.setItem("history", JSON.stringify(history));
                console.log(history);

                
                
     
                //Transfer content to HTML
                var searchHistory = $("<div>").addClass("searchHistory");
                $("#city").html("<h5>" + name + " </h5>");
                $("#humid").text("Humidity: " + response.main.humidity);
                $("#wind").text("Wind Speed: " + response.wind.speed);
                $("#uvIndex").text("UV Index: " + response.main.uv);
                
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
                $("#citySearch").append();
            });

         
            api = "https://api.openweathermap.org/data/2.5/forecast?q=";

            $.ajax({
            url: api + citySearch + apiKey,
            method: "GET"
        })
        .then(function (response) {
            //console.log(response);
            

            var results = response.list;
            console.log(results);

            $("#Day1").text(moment().add(1, "day").format("L"));
            
            $("#icon1").attr("src", "https://openweathermap.org/img/wn/" + response.list[6].weather[0].icon + "@2x.png");
            var tempF1 = (response.list[6].main.temp - 273.15) * 1.80 + 32;
            $("#temp1").text("Temp: " + tempF1.toFixed(2) + " &8457");
            $("#humidity1").text("Humidity: " + response.list[6].main.humidity + "%");
           
            $("#Day2").text(moment().add(2, "day").format("L"));
            $("#icon2").attr("src", "https://openweathermap.org/img/wn/" + response.list[14].weather[0].icon + "@2x.png");
            var tempF1 = (response.list[14].main.temp - 273.15) * 1.80 + 32;
            $("#temp2").text("Temp: " + tempF1.toFixed(2) + " &8457");
            $("#humidity2").text("Humidity: " + response.list[14].main.humidity + "%");

            $("#Day3").text(moment().add(3, "day").format("L"));
            $("#icon3").attr("src", "https://openweathermap.org/img/wn/" + response.list[22].weather[0].icon + "@2x.png");
            var tempF1 = (response.list[22].main.temp - 273.15) * 1.80 + 32;
            $("#temp3").text("Temp: " + tempF1.toFixed(2) + " &8457");
            $("#humidity3").text("Humidity: " + response.list[22].main.humidity + "%");

            $("#Day4").text(moment().add(4, "day").format("L"));
            $("#icon4").attr("src", "https://openweathermap.org/img/wn/" + response.list[30].weather[0].icon + "@2x.png");
            var tempF1 = (response.list[30].main.temp - 273.15) * 1.80 + 32;
            $("#temp4").text("Temp: " + tempF1.toFixed(2) + " &8457");
            $("#humidity4").text("Humidity: " + response.list[30].main.humidity + "%");

            $("#Day5").text(moment().add(5, "day").format("L"));
            $("#icon5").attr("src", "https://openweathermap.org/img/wn/" + response.list[38].weather[0].icon + "@2x.png");
            var tempF1 = (response.list[38].main.temp - 273.15) * 1.80 + 32;
            $("#temp5").text("Temp: " + tempF1.toFixed(2) + " &8457");
            $("#humidity5").text("Humidity: " + response.list[38].main.humidity + "%");
           
            $.ajax({
            url: api + citySearch + apiKey,
            method: "GET"
        })
        .then(function (response) {
            //console.log(response);
            var uvIndex = response[0].value;
            if (uvIndex <= 3) {
                var uvIndexSpan = $("<span>").attr("id", "uvIndexLow").addClass("box").html(uvIndex);
                $("#uvIndex").html("Current UV Index: ").append(uvIndexSpan);
            }
            else if (uvIndex > 3 && unIndex <= 6) {
                var uvIndexSpan = $("<span>").attr("id", "uvIndexModerate").addClass("box").html(uvIndex);
                $("#uvIndex").html("Current UV Index: ").append(uvIndexSpan);
            }
            else if (uvIndex > 6 && unIndex <= 8) {
                var uvIndexSpan = $("<span>").attr("id", "uvIndexHigh").addClass("box").html(uvIndex);
                $("#uvIndex").html("Current UV Index: ").append(uvIndexSpan);
            }
            else if (uvIndex > 8 && unIndex <= 10) {
                var uvIndexSpan = $("<span>").attr("id", "uvIndexVeryHigh").addClass("box").html(uvIndex);
                $("#uvIndex").html("Current UV Index: ").append(uvIndexSpan); 
            }
            else if (uvIndex > 10) {
                var uvIndexSpan = $("<span>").attr("id", "uvIndexExtreme").addClass("box").html(uvIndex);
                $("#uvIndex").html("Current UV Index: ").append(uvIndexSpan);
            }
            console.log(uvIndex);
            console.log(uvIndexSpan);

            var results = response.list;
            console.log(results);
           })

           })


            /* var i = 1;

            for (var r = 0; r < response.list.length; r++) {
                console.log("loop, round " + r)
                if (response.list[r].dt_txt.includes("12:00:00")) {
                    console.log("loop?");
                    console.log(i);
                    console.log(r);

                    $("<h6>").html(moment().add(i + 1, "days").format("M" + "/" + "D" + "/" + "YYYY")).appendTo("#day" + i);
                    
                    //Convert the temp to fahrenheit
                   var tempF = (response.main.temp - 273.15) * 1.80 + 32;
                    //Add temp content to HTML
                    $("#temp").text("Temperature (K) " + response.main.temp);
                    $("#tempF").text("Temperature (F) " + tempF.toFixed(2));

                   weatherImg = 'https://openweathermap.org/img/wn/' + response.list[r].weather[0].icon + '@2x.png'
                    var forecastImg = $("#<img>").attr("src", weatherImg);

                    var forecastTemp = $("<p>").html("Temp: " + parseFloat(response.list[r].main.temp).toFixed(2) + "<span>&deg</span> F");


                    var forecastHumid = $("<p>").html("Humidty " + parseInt(response.list[r].main.humidity) + "%");

                    $("#day" + i).append(forecastImg, forecastTemp, forecastHumid);
                   // card.append($("#day"));
                    $("#day" + i).append("Testing!");

                    i++; */
                })

                
                   

        
    

    function renderBtns() {
        for (var i = 0; i < searchHistory.length; i++) {
            var newCityDiv = $("<div>");
            var newCityBtn = $("<button>").addClass("cities").text(searchHistory[i]).appendTo(newCityBtn);
            $("#cityStorage").prepend(newCityBtn);
        }
    };
