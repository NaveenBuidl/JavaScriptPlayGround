/*

console.log("\n hello Naveen, let us practice JavaScript Mental Models with Dan Abramov");

let a = 111111111;
let b = a;

console.log("BEFORE: " + "a: " + a + " b: " + b);

a = 0;

console.log("AFTER: " + "a: " + a + " b: " + b);

// code interacts with values
//  but values exist in a completely different space
// primitive values like booleans, numbers, strings etc 
// and cannot be created, destroyed or changed
console.log(2);
console.log("hello");
console.log(undefined);
// Objects and functions are also values, 
// but can be manipulated from code
console.log({});
console.log([]);
console.log(x => x * 2);

// Nine types of values in JavaScript

// undefined - unintentionally missing values
// null - intentionally missing values
// objects ({} and others), used to group related data and code
// functions ( x => x * 2 and others) to refer to code
// Numbers 
// Strings
// Symbols
// BigInts
// Booleans

// Rest are all objects
console.log(typeof([1,2]));
console.log(typeof(new Date()));
console.log(typeof(/(hello|goodbye)/));

// expression
// An expression is a question to JS to answer it
console.log(2 + 2);
if you write 2 or 'hello' then such expressions are called literals because we literally write down the values they result


let reaction1 = 'yikes';
let reaction2 = "yikes";
console.log(reaction1);
console.log(reaction2);
reaction1[0] = '1';
console.log(reaction1);
reaction3 = '1' + reaction1.substring(1);
console.log(reaction3);

// Primitive values are immutable, basically, cannot be changed
let arr = [1, 2 , 3];
let str = 'hello'; 

console.log(arr[0]);
console.log(str[0]);

// as we can access both arr and str, it feels both are changeable
// but no we cant change str
arr[0] = 999;
str[0] = 'c';
console.log(arr);
console.log(str);

let fifty = 50;
fifty.shades = 'gray';// setting properties
console.log(fifty.shades);

// Basically you cant set properties on primitive values
// Primitive values are read-only/ immutable

let pet = 'Piku';
console.log(pet);
pet = 'Tabby';
console.log(pet);

// Variables are not values
// A variable points to a value


function double1(x) {
    x = x * 2;
}
let money1 = 10;
double1(money1);
console.log(money1);
console.log(double1(money1));// no return hence undefined
// let wallet1 = double1(money1);
// console.log(wallet1);

function double2(x) {
    x = x * 2;
    return x; // missing step earlier
}
let money2 = 10;
double2(money2);
console.log(money2);
console.log(double2(money2));
// let wallet2 = double2(money2);
// console.log(wallet2);

console.log('primitive value in JS do pass by value');

let x = 10;
let y = x; // y is not point to x but is pointing to what x is pointing to then, it doesnt createa reference to x
console.log("x: " + x + " y: " + y);
x = 0;
console.log("x: " + x + " y: " + y);// x shd be 0 but y will be 10

// IMPORTANT
// primitive values are pass-by-value
// but
// objects in javascript are pass-by-reference

console.log("Objects in JS do pass by reference");
let a = {value: 10};
let b = a;
console.log("BEFORE");
console.log(a.value);
console.log(b.value);
a.value = 20;
console.log("AFTER");
console.log(a.value);
console.log(b.value);



let numberOfTentacles = 10;
numberOfTentacles = 'ten';
console.log(typeof(numberOfTentacles));

// this code won’t be able to set a property.
let answer = true; // booleans are primitibe
answer.opposite = false;
console.log(answer.opposite);



// "not defined" defined null NaN 0 ""

// let null = 10;
// console.log(null);


// 1. a variable without any declaration and no assignment
// console.log(variable); // output is "ReferenceError: variable is not defined"

// 2A. a variable declared beforehand and no assignment
// let variable;
// console.log(variable); // output is undefined

// 2B. a variable declared afterhand and no assignment
// console.log(variable); 
// output is undefined or in strict mode will give "ReferenceError: Cannot access 'variable' before initialization"
// let variable;

// 3A. a variable declared beforehand and with assignment
// let variable = 'value';
// console.log(variable); // output is value

// 3B. a variable declared afterhand and with assignment
// console.log(variable); // strict mode will give ReferenceError: Cannot access 'variable' before initialization
// let variable = 'value';

// 4A.
// let variable = null;
// console.log(variable);

// NaN
console.log(0.1 + 0.2);

console.log(Number.MAX_SAFE_INTEGER);
console.log(Number.MAX_SAFE_INTEGER + 0);
console.log(Number.MAX_SAFE_INTEGER + 1);
console.log(Number.MAX_SAFE_INTEGER + 2);
console.log(Number.MAX_SAFE_INTEGER + 3);
console.log(Number.MAX_SAFE_INTEGER + 4);
console.log(Number.MAX_SAFE_INTEGER + 5);


// NaN, Infinity, -Infinity, -0
// NaN stands for invalid math, not a valid number, but its type is a number


console.log("1/0 = "  + 1/0);
console.log("0/0 = " +  0/0);
console.log("0/1 = " +  0/1);
let c= -1/0;
console.log("-1/0 = " + c);
console.log("1/-Infinity = " + 1/c);


//  1/0 = Infinity
//  0/0 = NaN
//  0/1 = 0
// -1/0 = -Infinity
// 1/-infinity = 0


*/

// Objects and Functions
// [] Square brackets for arrays and {} braces for objects
// {object} [array]

let schoolObject = {
    name: 'Vivekanand School',
    location: 'Delhi',
    established: 1971,
    studentArray: [
        { name: 'Alice', grade: 'A' },
        { name: 'Bob', grade: 'B' },
        { name: 'Carol', grade: 'C'}
    ],
    displayInfo: function() {
        console.log(`${this.name} was established in ${this.established} at ${this.location}`);
        this.studentArray.forEach( s => {
            // console.log(`Student $(studentArray.name) has grade $(studentArray.grade).`);
            // console.log(`Student ${studentArray.name} has grade ${studentArray.grade}.`);
            console.log(`Student ${s.name} has grade ${s.grade}.`);
        })
    }
}

// console.log(schoolObject.studentArray.displayInfo);
// console.log(schoolObject.studentArray.displayInfo());
// console.log(schoolObject.displayInfo);
console.log(schoolObject.displayInfo());
// The console.log() function in JavaScript does not return a value, 
// it just outputs the value to the console. 
// So when you’re using console.log(schoolObject.displayInfo());, 
// it’s trying to log the return value of schoolObject.displayInfo(). 
// But since displayInfo() does not return a value (it just logs to the console), 
// undefined is returned, and that’s what gets logged by your console.log() statement.
// If you want to avoid seeing undefined, you can simply call the function without using console.log()
schoolObject.displayInfo();




