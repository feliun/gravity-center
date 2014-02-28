module.exports = (function() {
    return {
        "unitCost": 1, //TODO calculate unit cost

        "origin": [
            {
                "name": "Bellevue",
                "area": "Bellevue, WA",
                "latitude": 47.626600,
                "longitude": -122.174064
            },
            {
                "name": "Seattle Metropolitan Area",
                "area": "Seattle, WA",
                "latitude": 47.611145,
                "longitude": -122.342623
            },
            {
                "name": "Kennewick",
                "area": "North West",
                "latitude": 46.215931,
                "longitude": -119.162339
            },
            {
                "name": "Redding",
                "area": "Middle West",
                "latitude": 40.585272,
                "longitude": -122.396139
            },
            {
                "name": "Tulare",
                "area": "South California",
                "latitude": 36.205060,
                "longitude": -119.348677
            }
        ],

        "destination": [
            {
                "name": "Hemet",
                "area": "South California",
                "volume": 0.8,
                "latitude": 33.744204,
                "longitude": -116.975010
            },
            {
                "name": "Bellingham",
                "area": "North West",
                "volume": 0.15,
                "latitude": 48.756983,
                "longitude": -122.487831
            },
            {
                "name": "Roseburg",
                "area": "Middle West",
                "volume": 0.05,
                "latitude": 43.215682,
                "longitude": -123.340094
            }
        ]
    };

})()