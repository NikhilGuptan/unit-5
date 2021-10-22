
// create a type name with a string
let muName: string = "nikhil";

// create a type age with a number
let age: number = 24;

// create a type isFetching with boolean
let isFetching :boolean = false;

// create an array of numbers
let arr:  number[];

// create an array of strings (using array constructor generic type)
let string:  string[];

// create a tuple , which keeps a string as the first value, and boolean as the second
var employee: [string, boolean] = ["Steve",false];

// create an enum
enum Direction {
    User,
    SuperUser,
    Admin,
    SuperAdmin,
  }

//create a function that takes 2 arguments, x ,y both numbers,
  function devide(x: number, y: number): number {
    return x/y;
  }
  
// create a function that takes a name and prints it without returning anything
  function namePrint(n:string): void {
    console.log(n);
  }
