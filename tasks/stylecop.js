exports.examine = function(shell, options) {
  return shell.exec(options.path + ' -p "'+ options.include +'"');
};