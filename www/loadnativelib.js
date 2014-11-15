var exec = require('cordova/exec');

exports.loadnativelib = function(arg0, success, error) {
    exec(success, error, "loadnativelib", "loadnativelib", [arg0]);
};
