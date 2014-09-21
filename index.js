/*!
 * has-any-deep <https://github.com/jonschlinkert/has-any-deep>
 *
 * Copyright (c) 2014 Jon Schlinkert, contributors.
 * Licensed under the MIT License
 */

'use strict';

var reduce = require('reduce-object');

/**
 * ```js
 * hasAnyDeep({a: 'b', {b: 'b', c: 'c'}}, ['b', 'foo']);
 * //=> 'true'
 * ```
 *
 * @param  {Object} `obj` the object to inspect.
 * @param  {Array}  `keys` Nested keys to look for on `obj`.
 * @return {Boolean} True if one of the given `keys` exists deeply.
 */

module.exports = function hasAnyDeep(o, props) {
  props = !Array.isArray(props) ? [props] : props;
  var len = props.length;
  var val = false;

  function hasDeep(o, prop) {
    if (!isObject(o)) {
      return false;
    }

    return reduce(o, function (acc, value, key) {
      if (prop === key) {
        return true;
      }

      if (isObject(value)) {
        return hasDeep(value, prop);
      }
      return false;
    }, {});
  }

  for (var i = 0; i < len; ++i) {
    val = hasDeep(o, props[i]);
    if (val === true) {
      break;
    }
  }
  return val;
};


function isObject(val) {
  return {}.toString.call(val).toLowerCase()
    .replace(/\[object ([\S]+)\]/, '$1') === 'object';
}
