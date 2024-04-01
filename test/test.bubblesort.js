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
// const sinon = require('sinon');

// // Import the function to be tested
// const bucketSort = require('./bucketSort');

// describe('Bucket Sort', () => {
//     // Test cases for array lengths from 10 to 10000
//     for (let length = 10; length <= 10000; length *= 10) {
//         describe(`Array length ${length}`, () => {
//             let nums;

//             // Generate random array for each test
//             beforeEach(() => {
//                 nums = Array.from({ length }, () => Math.floor(Math.random() * 1000));
//             });

//             it(`should sort an array of length ${length}`, () => {
//                 const sortedNums = bucketSort(nums);
//                 expect(sortedNums).to.eql(nums.sort((a, b) => a - b));
//             });

//             it(`should call Math.min and Math.max only once for array of length ${length}`, () => {
//                 const minSpy = sinon.spy(Math, 'min');
//                 const maxSpy = sinon.spy(Math, 'max');

//                 bucketSort(nums);

//                 expect(minSpy.calledOnce).to.be.true;
//                 expect(maxSpy.calledOnce).to.be.true;

//                 minSpy.restore();
//                 maxSpy.restore();
//             });
//         });
//     }
// });
