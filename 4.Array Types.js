var doubleArray = function (numberArray) {
    var ans = numberArray.map(function (element) { return element * 2; });
    return ans;
};
console.log(doubleArray([1, 2, 3]));
