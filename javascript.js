var api = "https://api.openweathermap.org/data/2.5/forecast?q=";
var city = "London";
var apiKey = "&appid=9b3d72753ebf07832128632f512c6fe0";

var input;

function setup() {

    var button = select("#submit");
    button.mousePressed(weatherAsk);

    input = select("#city");
}
    function weatherAsk() {
        var url = api + input.value() + apiKey;
}

function gotData(data) {
    weather = data;
}