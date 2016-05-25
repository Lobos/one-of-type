'use strict';

import { PropTypes } from 'react';

const TYPES = ['array', 'bool', 'element', 'func', 'number', 'object', 'string'];

let combineTypes = [];
const oneOfType = {};

function combine (arr, num) {
  let len = arr.length;
  let list = [];

  function _ (arr, start, result, count) {
    for (let i = start; i < len + 1 - count; i++) {
      result[count - 1] = i;
      if (count - 1 === 0) {
        let sublist = [];
        for (let j = num - 1; j >= 0; j--) {
          sublist.push(arr[result[j]]);
        }
        list.push(sublist);
      } else {
        _(arr, i + 1, result, count - 1);
      }
    }
  }

  _(arr, 0, [], num, num);
  return list;
}

for (let i = 2; i <= 6; i++) {
  combineTypes = combineTypes.concat(combine(TYPES, i));
}

combineTypes.forEach((arr) => {
  oneOfType[arr.join('_')] = PropTypes.oneOfType(arr.map((key) => PropTypes[key]));
});

module.exports = oneOfType;
