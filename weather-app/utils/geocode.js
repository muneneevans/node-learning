
const request = require("request");

const geocode = (address, callback) => {
  const mapBoxUrl = `https://api.mapbox.com/geocoding/v5/mapbox.places/${address}.json?access_token=pk.eyJ1IjoibXVuZW5lZXZhbnMiLCJhIjoiY2prbWpxOXVuMjV5dTNwbXphaDl6Y3JyMiJ9.l5DITXs52AzGgSs4AxpsNA&limit=1`;
  request(
    {
      url: mapBoxUrl,
      json: true,
    },
    (error, response) => {
      if (error) {
        callback("Unable to connect to weather service", undefined, undefined);
      } else {
        debugger;
        if (response.body.features.length === 0) {
          callback("Unable to find your city", undefined, undefined);
        } else {
          callback(undefined, {
            latitude: response.body.features[0].geometry.coordinates[0],
            longitude: response.body.features[0].geometry.coordinates[1],
          });
        }
      }
    }
  );
};

module.exports = geocode;
