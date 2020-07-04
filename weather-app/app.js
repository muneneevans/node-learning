const request = require("request");

const url =
  "https://samples.openweathermap.org/data/2.5/forecast/hourly?id=524901&appid=439d4b804bc8187953eb36d2a8c26a02";

request(
  {
    url: url,
    json: true,
  },
  (error, response) => {
    console.log("it is currently " + response.body.);
    console.log(response.body);
  }
);
