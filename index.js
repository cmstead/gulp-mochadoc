'use strict';

const mochadocRunner = require('mochadoc-runner');

const first = (values) => values[0];
const rest = (values) => Array.prototype.slice.call(values, 1);


function gulpMochadoc (options) {

    function runNext(runnerOptions, done) {
        const nextOptions = first(runnerOptions);
    
        if(runnerOptions.length > 0) {
            console.log('Running Mochadoc for ' + nextOptions.name);
    
            mochadocRunner(nextOptions.options, function (error) {
                if(error) {
                    console.log('An error occurred while attempting to build docs: ', nextOptions.name);
                }
    
                runNext(rest(runnerOptions), done);
            });
        } else if(typeof done === 'function') {
            console.log('Calling done');
            done();
        }
    }
    
    return function(done) {
        const runnerOptions = Object.keys(options).map(function(key) {
            return {
                name: key,
                options: options[key]
            };
        });
    
        runNext(runnerOptions, done);
    }
}

module.exports = gulpMochadoc;