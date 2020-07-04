const request = require("request");
const yargs = require("yargs");

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
    const mapBoxUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${argv.city}.json?access_token=pk.eyJ1IjoibXVuZW5lZXZhbnMiLCJhIjoiY2prbWpxOXVuMjV5dTNwbXphaDl6Y3JyMiJ9.l5DITXs52AzGgSs4AxpsNA&limit=1`;
    request(
      {
        url: mapBoxUrl,
        json: true,
      },
      (error, response) => {
        if (error) {
          console.log("Unable to connect to weather service");
        } else {
          debugger;
          if (response.body.features.length === 0) {
            console.log("Unable to find your city");
          } else {
            console.log(
              "lattitide: " + response.body.features[0].geometry.coordinates[0]
            );
            console.log(
              "longitude: " + response.body.features[0].geometry.coordinates[1]
            );
          }
        }
      }
    );
  },
});

yargs.parse();
