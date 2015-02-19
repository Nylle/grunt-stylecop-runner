var expect = require('expect.js'),
    stylecop = require('../tasks/stylecop.js'),
    shell;

describe('stylecop', function() {

  beforeEach(function() {
    shell = {exec: require('sinon').spy()};
  });

  it('is called normally', function() {
    var result = stylecop.examine(shell, {include: 'path/to/folder', path: 's', settings: 'path/to/settings'});
    expect(shell.exec.calledWith('s', ['-p', '"path/to/folder"', '-s', '"path/to/settings"'])).to.be(true);
  });

  it('can deal with undefined settings', function() {
    var result = stylecop.examine(shell, {include: 'path/to/folder', path: 's'});
    expect(shell.exec.calledWith('s', ['-p', '"path/to/folder"'])).to.be(true);
  });

  it('can deal with empty settings', function() {
    var result = stylecop.examine(shell, {include: 'path/to/folder', path: 's', settings: ''});
    expect(shell.exec.calledWith('s', ['-p', '"path/to/folder"'])).to.be(true);
  });
});