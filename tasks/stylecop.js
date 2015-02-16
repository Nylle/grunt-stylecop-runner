exports.examine = function(shell, options, done) {
  return shell.exec(options.path, ['-p', '"' + options.include + '"'], done);
};