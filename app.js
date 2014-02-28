var _ = require('underscore'),
    conf = require('./config/config.js'),
    async = require('async'),
    costManager = require('./CostCalculator');

var getCost = function(costOptions) {
  return _.reduce(costOptions, function(memo, costOption) { return memo + costOption.cost; }, 0);
};

var getCostGroups = function() {
  return _.map(costManager.costMatrix, function(costOptions, origin) {
    return { origin: origin, cost: getCost(costOptions) };    
  });
};

var getMinimumCost = function() {
  console.log("\n==========================================\n");
  console.log("Computing candidate with minor cost...");
  var minCost = _.min(getCostGroups(), function(costs) { return costs.cost });
  console.log("The origin with minor cost is: ", minCost.origin);
};

async.series([costManager.computeCosts, getMinimumCost ]);
   
