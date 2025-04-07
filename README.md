# Quicksort

Implement an iterative (no recursive calls) version of quicksort. Use the
template I've provided in `code.js`. Test your new function; I've provided some
basic testing code that uses [jsverify](https://jsverify.github.io/) in
`code.test.js`.

Hint: To make quicksort iterative, think about the part of the array each
recursive call considers.

## Runtime Analysis

Analyse the time complexity of your implementation and give a $\Theta$ bound for
its worst-case runtime. Add your answer, including your reasoning, to this
markdown file.

While Loop: For each subarray of `[startIndex, ...,  endIndex]`, a partioning operation is done that takes $O(n)$ time since we do a pass through $n$ elements.

$O(n)$

Unless we reach the base case in which we either return the array, or skip the final while loop:

$O(1)$

Inner Partition Loop (`for` loop): This loop iterates over the current subarray. In a worst case
secnario where the input is already sorted, this loop could be called for each element in the subarray since we are choosing the right most element as the pivot.

(Outer While loop * Inner for loop)
$O(n)$ * $O(n)$ = $O(n^2)$

Overall:

The lower factors go away, thus the $\Theta$ bound for this algorithms worst case scenario is:

$\Theta(n^2)$