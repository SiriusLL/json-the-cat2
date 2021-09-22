const request = require("request");

// const breedName = process.argv[2];

const fetchBreedDescription = function (breedName, callback) {
  const url = `https://api.thecatapi.com/v1/breeds/search?q=${breedName}`;

  request(url, (error, response, body) => {
    // console.log("body", body);
    // console.log("body", typeof body);
    if (error) {
      // console.log("Failed to request details: ", error);
      return callback(error, null);
    }

    const data = JSON.parse(body);
    // console.log("data", data);
    // console.log(typeof data);

    const breed = data[0];
    if (breed) {
      callback(null, breed.description);
    } else {
      callback(`Breed name ${breedName} not found`);
    }
  });
};

module.exports = { fetchBreedDescription };
