var shell = require('./shell'),
    styleCop = require('./stylecop');

module.exports = function (grunt) {

  grunt.registerMultiTask('stylecop', 'Runs static code analysis with StyleCop.', function() {
    var options = this.options({});
    styleCop.examine(shell, options, this.async());
  });

};