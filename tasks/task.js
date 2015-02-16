var shell = require('./shell'),
    styleCop = require('./stylecop');

module.exports = function (grunt) {

  grunt.registerMultiTask('stylecop', 'Runs static code analysis with StyleCop.', function() {
    var options = this.options({});
    if(stylecop.examine(shell, options) !== 0) {
      grunt.fail.warn('');
    }
  });

};