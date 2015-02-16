module.exports = function(grunt) {
  var files = [ 'tasks/**/*.js', 'test/**/*.js' ];

  grunt.initConfig({
    pkg: grunt.file.readJSON('package.json'),
    jshint: { files: files },
    mochaTest: {
      test: {
        options: { reporter: 'spec' },
        src: files
      }
    }
  });

  grunt.loadTasks('tasks');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-mocha-test');

  grunt.registerTask('default', [ 'jshint', 'mochaTest' ]);
}