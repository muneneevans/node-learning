setTimeout(() => {
  console.log("Two seconds are up");
}, 2000);

const names = ["evans", "munene", "overmars", "Jen", "Jess"];

const shortNames = names.filter((name) => {
  return name.length <= 4;
});

const geocode = (address, callback) => {
  setTimeout(() => {
    const data = {
      latitude: 0,
      longitude: 0,
    };
    callback(data);
  }, 2000);
};

geocode("Nairobi", (data) => {
  console.log(data);
});
