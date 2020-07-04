const request = require("request");
const yargs = require("yargs");
const geocode = require("./utils/geocode")

// // customize yargs argumen
yargs.version("1.1.0");

// const url =
//   "https://samples.openweathermap.org/data/2.5/forecast/hourly?id=524901&appid=439d4b804bc8187953eb36d2a8c26a02";

// request(
//   {
//     url: url,
//     json: true,
//   },
//   (error, response) => {
//     console.log("it is currently " + response.body);
//     console.log(response.body);
//   }
// );

// Create add command
yargs.command({
  command: "locate",
  describe: "Enter your city",
  builder: {
    city: {
      describe: "City",
      demandOption: true,
      type: "string",
    },
  },
  handler: (argv) => {
    geocode(argv.city, (error, { latitude, longitude }) => {
      if (error) {
        console.log(error);
      } else {
        console.log("latitude: " + latitude);
        console.log("longitude: " + longitude);
      }
    });
  },
});

yargs.parse();
