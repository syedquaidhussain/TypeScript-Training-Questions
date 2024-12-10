// Define an enum Direction with values Up, Down, Left, and Right. Then, create a function that takes a Direction value and returns a string representing the direction.
// Complete Below Method
// console.log(getDirection(Direction.Up)); // Output: "Up"
var Direction;
(function (Direction) {
    Direction["Up"] = "Up";
    Direction["Down"] = "Down";
    Direction["Left"] = "Left";
    Direction["Right"] = "Right";
})(Direction || (Direction = {}));
function getDirection(direction) {
    return direction;
}
console.log(getDirection(Direction.Up));
