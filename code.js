function quicksort(array) {
    // Base Case: 1 or 0 elements in array, already "sorted"
    if (array.length <= 1) {
        return array;
    }

    const stack = [];
    stack.push(0);
    stack.push(array.length - 1);

    while (stack.length > 0) {
        let endIndex = stack.pop();
        let startIndex = stack.pop();

        // Base Case: 1 or 0 elements in array, already "sorted"
        if (startIndex >= endIndex) {
            continue;
        }

        // Choose pivot as last element in current subarray
        let pivot = array[endIndex];

        // Parition array with pivot included on left side
        let i = startIndex - 1;
        for (let j = startIndex; j < endIndex; j++) {
            if (array[j] <= pivot) {
                i++;

                // Swap values in array
                let temp = array[i];
                array[i] = array[j];
                array[j] = temp;
            }
        }

        // Recombine around pivot
        let temp = array[i + 1];

        array[i + 1] = array[endIndex];
        array[endIndex] = temp;

        let pivotIndex = i + 1;

        // Push right side
        stack.push(pivotIndex + 1);
        stack.push(endIndex);

        // Push left side
        stack.push(startIndex);
        stack.push(pivotIndex - 1);
    }

    return array;
}
