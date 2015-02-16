module.exports = function(grunt) {
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-mocha-test');

  var files = [ 'tasks/**/*.js', 'test/**/*.js' ];

  grunt.initConfig({
    jshint: { files: files },
    mochaTest: {
      test: {
        options: { reporter: 'spec' },
        src: files
      }
    }
  });

  grunt.registerTask('default', [ 'jshint', 'mochaTest' ]);
}