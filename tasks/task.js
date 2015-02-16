var shell = require('shelljs');

//.\\bin\\stylecop\\StyleCop.Console.exe

module.exports = function (grunt) {

  function run_stylecop(options) {
    if(shell.exec(options.path + ' -p "'+ options.include +'"') !== 0) {
      grunt.fail.warn('');
    };  
  }

  grunt.registerMultiTask('stylecop', 'Runs static code analysis with StyleCop.', function() {
    var options = this.options({});
    run_stylecop(options);
  });

};