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

- Referenced https://www.geeksforgeeks.org/quick-sort-algorithm/ for quick sort algorithm analysis
- Referenced https://www.geeksforgeeks.org/iterative-quick-sort/ for quick sort algorithm code for *iterative version*. Specifically referenced and adapted the for loop and array swapping since I was struggling with figuring that out myself.
- Copied tests from mergesort repo

"I certify that I have listed all sources used to complete this exercise, including the use of any Large Language Models. All of the work is my own, except where stated otherwise. I am aware that plagiarism carries severe penalties and that if plagiarism is suspected, charges may be filed against me without prior notice."
