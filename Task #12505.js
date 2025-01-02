"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var obj = {
    name: "Alice",
    age: 30,
    address: {
        city: "Wonderland",
        zip: 12345,
        location: {
            country: "Fantasy",
        },
    },
    isActive: {
        name: "Aman",
        age: 22,
        employed: true
    }
};
function updateValuesWithPrefix(obj, prefix) {
    function update(value) {
        if (typeof value === "string") {
            return prefix + value;
        }
        else if (typeof value === "object" && value !== null) {
            if (Array.isArray(value)) {
                return value.map(update);
            }
            else {
                var result = {};
                for (var key in value) {
                    result[key] = update(value[key]);
                }
                return result;
            }
        }
        else {
            return value;
        }
    }
    return update(obj);
}
var updatedObj = updateValuesWithPrefix(obj, "Hello, ");
console.log(updatedObj);
