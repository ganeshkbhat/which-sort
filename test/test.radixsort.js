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
// const { radixSort } = require('./yourRadixSortImplementation'); // Import your radixSort function

// describe('Radix Sort', () => {
//     // Test sorting for arrays of different lengths
//     for (let length = 10; length <= 10000; length *= 10) {
//         it(`should correctly sort an array of length ${length}`, () => {
//             // Generate an array of random integers
//             const unsortedArray = Array.from({ length }, () => Math.floor(Math.random() * 1000) - 500);

//             // Make a copy of the unsorted array
//             const originalArray = [...unsortedArray];

//             // Sort the array using radixSort
//             const sortedArray = radixSort(unsortedArray);

//             // Check if the array is sorted
//             expect(sortedArray).to.deep.equal(originalArray.sort((a, b) => a - b));
//         });
//     }
// });
