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
const sinon = require('sinon');

const { mergeSort } = require('../index'); // Assuming your merge sort implementation is in a separate file


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


// describe('Merge Sort', function() {
//     // Test cases for input array lengths from 10 to 10000
//     for (let length = 10; length <= 10000; length *= 10) {
//         it(`should correctly sort an array of length ${length}`, function() {
//             // Generate a random unsorted array
//             const unsortedArray = Array.from({ length }, () => Math.floor(Math.random() * 1000));

//             // Sort the array using Merge Sort
//             const sortedArray = mergeSort([...unsortedArray]);

//             // Assert that the sorted array is in ascending order
//             expect(sortedArray).to.be.an('array');
//             expect(sortedArray).to.have.lengthOf(length);
//             for (let i = 0; i < sortedArray.length - 1; i++) {
//                 expect(sortedArray[i]).to.be.at.most(sortedArray[i + 1]);
//             }
//         });
//     }
// });
