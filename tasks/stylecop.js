exports.examine = function(shell, options, done) {
  var arguments = ['-p', '"' + options.include + '"'];

  if(options.settings !== "") {
    arguments[arguments.length] = '-s';
    arguments[arguments.length] = options.settings;
  }

  return shell.exec(options.path, arguments, done);
};