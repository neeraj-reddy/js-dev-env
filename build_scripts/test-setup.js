// This file isn't transpiled, so must use ES5

// Register babel to compile before our test runs
require('babel-register')();

// Disable webpack features that Mocha doesn't understand
require.extensions['.css'] = function() {};

