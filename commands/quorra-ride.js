#!/usr/bin/env node

/**
 * quorra-ride.js
 *
 * @author: Harish Anchu <harishanchu@gmail.com>
 * @copyright Copyright (c) 2015-2016, QuorraJS.
 * @license See LICENSE.txt
 */

var path = require('path');
var logger = require('../util/logger');
var helper = require('../util/helper');

function quorraRide() {
    var appPath = process.cwd();

    logger.info('\r\nStarting app...');

    helper.verifyApplicationDoesExist(appPath);

    ride(appPath);
}

function ride(appPath) {
    require(path.join(appPath, 'index.js'));
}

module.exports = quorraRide;
