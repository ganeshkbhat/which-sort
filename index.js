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


/**
 * isBrowser
 *
 * @return {*} 
 */
function isBrowser() {
    if (typeof process === "object" && typeof require === "function") {
        return false;
    }
    if (typeof importScripts === "function") { return false; }
    if (typeof window === "object") { return true; }
}


function bucketSort(nums, bucketCount = 10) {
    if (nums.length <= 1) {
        return nums;
    }

    const minVal = Math.min(...nums);
    const maxVal = Math.max(...nums);
    const bucketSize = Math.floor((maxVal - minVal) / bucketCount);
    const buckets = Array.from({ length: bucketCount }, () => []);

    for (let num of nums) {
        const index = Math.floor((num - minVal) / bucketSize);
        buckets[index].push(num);
    }

    const sortedNums = [];
    for (let bucket of buckets) {
        sortedNums.push(...bucket.sort((a, b) => a - b));
    }

    return sortedNums;
}

// // Example usage:
// const nums = [29, 25, 3, 49, 9, 37, 21, 43, 17];
// const sortedNums = bucketSort(nums);
// console.log(sortedNums); // Output: [3, 9, 17, 21, 25, 29, 37, 43, 49]

function radixSort(nums) {
    const max_value = Math.max(...nums);
    let digit = 1;

    while (digit < max_value) {
        const buckets = Array.from({ length: 10 }, () => []);

        for (const num of nums) {
            const index = Math.floor(Math.abs(num) / digit) % 10;
            buckets[index].push(num);
        }

        let w = 0;
        for (const bucket of buckets) {
            for (const num of bucket) {
                nums[w] = num;
                w++;
            }
        }

        digit *= 10;
    }

    const positives = nums.filter(n => n >= 0);
    const negatives = nums.filter(n => n < 0).reverse();

    return negatives.concat(positives);
}

// // Example usage:
// const sortedArray = radixSort([170, 45, 75, 90, 802, 24, 2, 66]);
// console.log(sortedArray);

// Heapify function to heapify a subtree rooted at index i in arr[] of size n
function heapify(arr, n, i) {
    let largest = i; // Initialize largest as root
    const left = 2 * i + 1; // Left child
    const right = 2 * i + 2; // Right child

    // If left child is larger than root
    if (left < n && arr[left] > arr[largest]) {
        largest = left;
    }

    // If right child is larger than largest so far
    if (right < n && arr[right] > arr[largest]) {
        largest = right;
    }

    // If largest is not root
    if (largest !== i) {
        // Swap arr[i] and arr[largest]
        [arr[i], arr[largest]] = [arr[largest], arr[i]];

        // Recursively heapify the affected sub-tree
        heapify(arr, n, largest);
    }
}

// The main function to sort an array of given size
function heapSort(arr) {
    const n = arr.length;

    // Build heap (rearrange array)
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
        heapify(arr, n, i);
    }

    // One by one extract an element from heap
    for (let i = n - 1; i > 0; i--) {
        // Move current root to end
        [arr[0], arr[i]] = [arr[i], arr[0]];

        // call max heapify on the reduced heap
        heapify(arr, i, 0);
    }
    return arr;
}

// // Example usage:
// const arrays = [12, 11, 13, 5, 6, 7];
// console.log("Original Array:", arrays);
// const sortedArrays = heapSort(array);
// console.log("Sorted Array:", sortedArrays);

function mergeSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const mid = Math.floor(arr.length / 2);
    const left = arr.slice(0, mid);
    const right = arr.slice(mid);

    return merge(mergeSort(left), mergeSort(right));
}

function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
        if (left[leftIndex] < right[rightIndex]) {
            result.push(left[leftIndex]);
            leftIndex++;
        } else {
            result.push(right[rightIndex]);
            rightIndex++;
        }
    }

    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
}

// // Example usage:
// const unsortedArray = [5, 3, 9, 1, 4, 6, 8, 2, 7];
// const sorteArray = mergeSort(unsortedArray);
// console.log(sorteArray); // Output: [1, 2, 3, 4, 5, 6, 7, 8, 9]

function quickSort(arr) {
    if (arr.length <= 1) {
        return arr;
    }

    const pivot = arr[Math.floor(arr.length / 2)];
    const left = [];
    const right = [];

    for (let i = 0; i < arr.length; i++) {
        if (i === Math.floor(arr.length / 2)) {
            continue;
        }
        if (arr[i] < pivot) {
            left.push(arr[i]);
        } else {
            right.push(arr[i]);
        }
    }

    return [...quickSort(left), pivot, ...quickSort(right)];
}

// // Example usage:
// const array = [5, 3, 7, 2, 8, 4, 1, 9, 6];
// console.log("Original array:", array);
// const sortedArrayss = quickSort(array);
// console.log("Sorted array:", sortedArrayss);


if (!isBrowser()) {
    module.exports = {
        quickSort,
        mergeSort,
        heapSort,
        radixSort,
        bucketSort
    }
}
