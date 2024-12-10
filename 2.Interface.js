function describePerson(obj) {
    return "\"Name: ".concat(obj["name"], ", Age: ").concat(obj["age"], "\"");
}
console.log(describePerson({ name: 'Alice', age: 30 }));
