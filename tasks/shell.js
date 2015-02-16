var process = require('child_process');

exports.exec = function (path, args, done) {
  var newProcess = process.spawn(path, args, { windowsVerbatimArguments: true, stdio: 'inherit' });
  newProcess.on('exit', function (code) { 
    done(code === 0);
  }); 
  newProcess.on('error', function (e) { 
    done(false);
  }); 
};
