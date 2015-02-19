exports.examine = function(shell, options, done) {
  var args = ['-p', '"' + options.include + '"'];

  if (options.settings !== "" && options.settings !== undefined) {
    args.push('-s');
    args.push('"' + options.settings + '"');
  }

  return shell.exec(options.path, args, done);
};