'use strict';

module.exports = function(app) {
	var journey = require('../../app/controllers/journey.server.controller');

    app.route('/journeys/add-journey').post(journey.postJourney);
};

