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

// const assert = require('chai').assert;
// const { heapSort } = require('./heapSort'); // Assuming your heapSort function is in a separate file

// describe('Heap Sort', function() {
//     // Test for array lengths from 10 to 10000
//     for (let length = 10; length <= 10000; length *= 10) {
//         it(`should sort an array of length ${length}`, function() {
//             // Generate a random array of given length
//             const array = generateRandomArray(length);

//             // Copy the array for later comparison
//             const sortedArray = [...array].sort((a, b) => a - b);

//             // Apply heap sort to the generated array
//             const result = heapSort(array);

//             // Assert that the sorted array matches the expected result
//             assert.deepEqual(result, sortedArray);
//         });
//     }
// });

// // Helper function to generate a random array
// function generateRandomArray(length) {
//     const array = [];
//     for (let i = 0; i < length; i++) {
//         array.push(Math.floor(Math.random() * 1000)); // Random numbers from 0 to 999
//     }
//     return array;
// }
