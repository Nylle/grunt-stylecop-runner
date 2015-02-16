[![Build Status](https://api.travis-ci.org/nylle/grunt-stylecop-runner.png)](https://travis-ci.org/nylle/grunt-stylecop-runner)
[![Built with Grunt](https://cdn.gruntjs.com/builtwith.png)](http://gruntjs.com/)

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