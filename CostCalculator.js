var conf = require('./config/config.js'),
    gm = require('googlemaps'),
    async = require('async');

module.exports = (function() {

    var costMatrix = {};

    var saveDistance = function(origin, destination, distance) {
        if (!costMatrix[origin.name]) costMatrix[origin.name] = [];
        costMatrix[origin.name].push({ destination: destination.name, distance: distance, cost: destination.volume * conf.unitCost * distance });
    };

    var computeDistancesFromOrigin = function(origin, next) {
      async.eachSeries(conf.destination, computeDistance, function() {
        next();
      });

      function computeDistance (destination, callback) {
        gm.distance(origin.latitude + ',' + origin.longitude, 
                    destination.latitude + ',' + destination.longitude, function(err, response) {
                      var distance = response.rows[0].elements[0].distance.value;
                      console.log('Distance from ', origin.name, ' to: ', destination.name, ' : ', distance);
                      saveDistance(origin, destination, distance);
                      callback();
                    });
      };
    };

    var computeCosts = function(next) {
      console.log('Computing distances from different origins...');
      async.eachSeries(conf.origin, computeDistancesFromOrigin, function() {
        next();
      });
    };

    return { computeCosts: computeCosts,
             costMatrix: costMatrix };

})()