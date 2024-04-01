/**
 * 
 * Package: 
 * Author: Ganesh B
 * Description: 
 * Install: npm i  --save
 * Github: https://github.com/ganeshkbhat/
 * npmjs Link: https://www.npmjs.com/package/
 * File: index.js
 * File Description: 
 * 
 * 
*/

/* eslint no-console: 0 */

'use strict';

const { expect } = require('chai');


describe('[ tests] Tests to ', () => {
  let tst, written;
  before(() => {
    
  });

  after(() => { });

  it('should ', () => {
    let actual = true;
    let expected = true;
    expect(actual).to.equal(expected);
  });

  it('should ', () => {
    let actual = true;
    let expected = true;
    expect(actual).to.equal(expected);
  });

});

// const { expect } = require('chai');
// const { quickSort } = require('./quicksort'); // Assuming quickSort function is exported from quicksort.js

// describe('Quicksort', () => {
//     it('should correctly sort arrays of various lengths', () => {
//         for (let length = 10; length <= 10000; length *= 10) {
//             const unsortedArray = generateRandomArray(length);
//             const sortedArray = quickSort([...unsortedArray]);
//             expect(sortedArray).to.deep.equal([...unsortedArray].sort((a, b) => a - b));
//         }
//     });
// });

// function generateRandomArray(length) {
//     const arr = [];
//     for (let i = 0; i < length; i++) {
//         arr.push(Math.floor(Math.random() * 1000)); // Generating random numbers between 0 to 999
//     }
//     return arr;
// }
