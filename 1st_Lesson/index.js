function recursiveIteration(array, index = 0) {
    if (index >= array.length) {
        return
    }
    console.log(array[index]);
    recursiveIteration(array, index+1);
}
recursiveIteration([1, 2, 3]);