const fs = require('fs');

const logDirectory = '../logs/';

function info(message) {
    log('INFO', message);
};

function debug(message) {
    log('DEBUG', message);
};

function warn(message) {
    log('WARN', message);
};

function error(message) {
    log('ERROR', message);
};

// Internal, called by the various loglevel functions
function log(level, message) {
    let timestamp = Date.now();
    let logMessage = level + ' | ' + timestamp.toString() + ' | ' + JSON.stringify(message);

    let today = new Date();
    let logFileName = 'log_' + today.toLocaleDateString("en-US") + '.txt';

    try {
        // Write to console anyway just in case
        console.log(logMessage);

        // Try to write to our file
        fs.writeFileSync(logDirectory + logFileName, logMessage);
    }
    catch {
        console.log('Could not write log message to file: ' + logMessage);
    }
};

module.exports = {
    info: info,
    debug: debug,
    warn: warn,
    error: error
};