const request = require("request");

const url =
  "http://samples.openweathermap.org/data/2.5/weather?lat=35&lon=139&appid=439d4b804bc8187953eb36d2a8c26a02";

request(
  {
    url: url,
  },
  (error, response) => {
    const data = JSON.parse(response.body);
    console.log(data);
  }
);
