[![Build Status](https://api.travis-ci.org/Nylle/grunt-stylecop-runner.png)](https://travis-ci.org/Nylle/grunt-stylecop-runner)
[![Built with Grunt](https://cdn.gruntjs.com/builtwith.png)](http://gruntjs.com/)
[![NPM version](https://badge.fury.io/js/grunt-stylecop-runner.svg)](http://badge.fury.io/js/grunt-stylecop-runner)
[![devDependency Status](https://david-dm.org/Nylle/grunt-stylecop-runner/dev-status.svg)](https://david-dm.org/Nylle/grunt-stylecop-runner#info=devDependencies)

# grunt-stylecop-runner

## Getting started

```bash
$ npm install grunt-stylecop-runner --save-dev
```

Next add this line to your project's Gruntfile:

```js
grunt.loadNpmTasks('grunt-stylecop-runner');
```

## Configuration

You'll find the StyleCop.Console application here: https://github.com/Nylle/StyleCop.Console

Add this to your Grunt configuration:

```js
stylecop: {
  options: {
    path: '/path/to/stylecop/StyleCop.Console.exe'
  },
  server: {
    options: {
      include: 'path-to-your-cs-files'
    }
  }
}
```
