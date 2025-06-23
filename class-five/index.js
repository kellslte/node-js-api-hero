// Arrays
let fruits = ["apple", "banana", "cherry"];
let numbers = [];
for(let i = 0; i < 10; i++)
{
    numbers.push(i);
}

let car = {
    model: "Toyota",
    year: 2020,
    color: "red",
    mileage: 10000,
    isElectric: false,
    isHybrid: false,
    isGasoline: true,
    isDiesel: false,
    isElectric: false,
    isHybrid: false,
    isGasoline: true,
    isDiesel: false,
    drive: function()
    {
        console.log("Driving the car");
    }
};

// Array Loop Methods
// 1. forEach
// 2. map
// 3. filter
// 4. reduce
// 5. find
// 6. some
// 7. every
// 8. sort
// 9. reverse

// 1. forEach
numbers.forEach( ( item, index ) =>
{
    console.log( item, index );
} );

// 2. map
let doubledNumbers = numbers.map( ( item ) =>
{
    return item * 2;
} );

// 3. filter
let evenNumbers = numbers.filter( ( item ) =>
{
    return item % 2 === 0;
} );

// 4. reduce
let sum = numbers.reduce( ( accumulator, item ) =>
{
    return accumulator + item;
} );

// 5. find
let firstEvenNumber = numbers.find( ( item ) =>
{
    return item % 2 === 0;
} );

// 6. some
let hasEvenNumber = numbers.some( ( item ) =>
{
    return item % 2 === 0;
} );

// 7. every
let allEvenNumbers = numbers.every( ( item ) =>
{
    return item % 2 === 0;
} );

// 8. sort
let sortedNumbers = numbers.sort( ( a, b ) =>
{
    return a - b;
} );

// 9. reverse
let reversedNumbers = numbers.reverse();

// 10. concat
let combinedNumbers = numbers.concat( [ 11, 12, 13 ] );

// 11. slice
let slicedNumbers = numbers.slice( 0, 5 );

// Function with return value
function add(a, b) {
    return a + b;
}
const sumTwo = add(5, 10);
console.log( "Sum:", sum ); // Output: Sum: 15

const multiply = (a, b) => ([a * b]);
const sumThree = multiply(5, 10);
console.log( "Sum:", sumThree ); // Output: Sum: 50

const multiplyTwo = (a, b) => {
    return a * b;
}
const sumFour = multiplyTwo(5, 10);
console.log( "Sum:", sumFour ); // Output: Sum: 50

// Function with rest parameters
function sumAll(...numbers) {
    return numbers.reduce((total, num) => total + num, 0);
}
const total = sumAll(1, 2, 3, 4, 5);
console.log( "Total:", total ); // Output: Total: 15

// JS Function arguments
function sumAllTwo(...numbers)
{
    return numbers.reduce( ( total, num ) => total + num, 0 );
}
const totalTwo = sumAllTwo( 1, 2, 3, 4, 5 );
console.log("Total:", sumAllTwo(1, 2, 3, 4, 5)); // Output: Total: 15
