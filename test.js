/*!
 * has-any-deep <https://github.com/jonschlinkert/has-any-deep>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT License
 */

'use strict';

var should = require('should');
var assert = require('assert');
var hasAnyDeep = require('./');

describe('.hasAnyDeep()', function () {
  it('should return `true` when the specified nested property exists.', function () {
    hasAnyDeep({a: {b: {c: 'foo'}}}, 'a').should.be.true;
    hasAnyDeep({a: {b: {c: 'foo'}}}, 'b').should.be.true;
    hasAnyDeep({a: {b: {c: 'foo'}}}, 'c').should.be.true;
    hasAnyDeep({a: {b: {c: 'foo'}}}, 'd').should.be.false;
    hasAnyDeep({a: {b: {c: 'foo', d: {e: {}}}}}, 'd').should.be.true;
    hasAnyDeep({a: {b: {c: 'foo', d: {e: {}}}}}, 'e').should.be.true;
  });

  it('should work with an array of props.', function () {
    hasAnyDeep({a: {b: {c: 'foo'}}}, ['f', 'a']).should.be.true;
    hasAnyDeep({a: {b: {c: 'foo'}}}, ['b']).should.be.true;
    hasAnyDeep({a: {b: {c: 'foo'}}}, ['c']).should.be.true;
    hasAnyDeep({a: {b: {c: 'foo'}}}, ['d']).should.be.false;
    hasAnyDeep({a: {b: {c: 'foo', d: {e: {}}}}}, ['d']).should.be.true;
    hasAnyDeep({a: {b: {c: 'foo', d: {e: {}}}}}, ['e']).should.be.true;
  });
});
