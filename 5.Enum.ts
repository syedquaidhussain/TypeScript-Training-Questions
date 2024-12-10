// Define an enum Direction with values Up, Down, Left, and Right. Then, create a function that takes a Direction value and returns a string representing the direction.

// Complete Below Method

// console.log(getDirection(Direction.Up)); // Output: "Up"

enum Direction{
        Up = "Up",
        Down= "Down",
        Left = "Left",
        Right="Right"
}

function getDirection( direction:Direction ):string{
    return direction;
  
}

console.log(getDirection(Direction.Up));
