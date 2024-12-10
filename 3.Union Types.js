var stringify = function (parameter) {
    return "\"".concat(parameter, "\"");
};
console.log(stringify(123));
console.log(stringify("hello"));
