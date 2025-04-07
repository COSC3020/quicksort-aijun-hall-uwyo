const fs = require('fs');
const jsc = require('jsverify');

eval(fs.readFileSync('code.js')+'');

// Test 1: Output of quicksort should match javascript built in sort
const testSort =
    jsc.forall("array nat", function(arr) {
        var a1 = JSON.parse(JSON.stringify(arr));
        var a2 = JSON.parse(JSON.stringify(arr));
        return JSON.stringify(quicksort(a1)) ==
            JSON.stringify(a2.sort(function(a, b)
                { return a - b; }));
    });

// Test 2: Check that elements in the output of quicksort are in ASCENDING order
const testAscendingOrder =
    jsc.forall("array nat", function(arr) {
        var sortedArray = quicksort(arr.slice());
        for (let i = 1; i < sortedArray.length; i++) {
            if (sortedArray[i - 1] > sortedArray[i]) {
                return false;
            }
        }
        return true;
    });

// Test 3: Hardcoded value test
const testHardcoded =
    jsc.forall(jsc.constant([5, 2, 9, 1, 5, 6]), function(arr) {
        var a1 = JSON.parse(JSON.stringify(arr));
        var a2 = [1, 2, 5, 5, 6, 9];
        return JSON.stringify(quicksort(a1)) === JSON.stringify(a2);
    });

// Test 4: Hardcoded value test with duplicates
const testHardcodedDuplicates =
    jsc.forall(jsc.constant([1, 1, 2, 2, 3, 3]), function(arr) {
        var a1 = JSON.parse(JSON.stringify(arr));
        var a2 = [1, 1, 2, 2, 3, 3];
        return JSON.stringify(quicksort(a1)) === JSON.stringify(a2);
    });

jsc.assert(testSort);
console.log('passed testSort')
jsc.assert(testAscendingOrder);
console.log('passed testAscendingOrder')
jsc.assert(testHardcoded);
console.log('passed testHardcoded')
jsc.assert(testHardcodedDuplicates)
console.log('passed testHardcodedDuplicates')
