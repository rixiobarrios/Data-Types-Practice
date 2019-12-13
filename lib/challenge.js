/*
 * Before you begin working on the prompts, open up index.html and add a script
 * tag to import this JavaScript file. You'll know it's working when you see the
 * console.log below in the console of your browser.
 */

console.log('challenge.js has been included!');

/*
 * Prompt 1:
 *
 * Declare a variable called myFavoriteNumber on one line; assign it a value on
 * the next line.
 */
let myFavoriteNumbver;
myFavoriteNumber = 8;
console.log(myFavoriteNumber);
/*
 * Prompt 2:
 *
 * Declare 3 variables using each of let, const, and var.
 */
let myFirstVariable = 1;
const mySecondVariable = 2;
var myThirdVariable = 3;

console.log(myFirstVariable);
console.log(mySecondVariable);
console.log(myThirdVariable);
/*
 * Prompt 3:
 *
 * Create a variable and assign a number to it. On a separate line for each:
 *   - add a number to your variable
 *   - subtract a number from your variable
 *   - multiply your variable by 3
 *   - divide your variable by 7
 *   - calculate the remainder of dividing your variable by 2
 */
let myNumber = 1;
myNumber += 2;
myNumber - 1;
myNumber * 3;
myNumber / 7;
myNumber % 2;

console.log(myNunber);

/*
 * Prompt 4:
 *
 * Create a variable called firstName and assign it to a string of your first
 * name. Create a variable called lastName and assign it to a string of your
 * last name.
 *
 * Create a variable called fullName and use addition to combine your firstName
 * and lastName variables.
 */
let firstName = ['myFirstName'];
let lastName = ['myLastName'];
let fullName = (firstName + lastname);

console.log(fullName)
/*
 * Prompt 5:
 *
 * Create a variable called hello and assign it the string 'hello'; create
 * a variable called world and assign it the string 'world'.
 *
 * Create a variable called message and use string interpolation to assign it
 * the value 'hello world!'.
 */
const hello = 'Hello';
const world = 'World';
const greeting = `${hello} + ${world}`

console.log(greeting);
/*
 * Prompt 6:
 *
 * Write some code that solves each sub-prompt below.
 */
// A. Use loose-equals (==) to create a statement that is false
// B. Use strict equals (===) to create a statement that is true
// C. Use strict unequal (!==) to create a statement that is true
// D. Use less than (<) to create a statement that is false
// E. Use greater than (>) to create a statement that is false
// F. Use less than or equals (<=) to create a statemetn that is true
// G. Use greater than or equals (>=) to create a statemetn that is false
let equalsFalse = 1 == 2;
console.log(equalFalse);

1 == 2;
1 === 1;
1 !== '1';
1 < 0;
1 > 0;
1 <= 1;
1 >= 0;
/*
 * Prompt 7:
 *
 * Using the variables defined below, replace the underscores in each subprompt so that the statement evaluates to true
 */

let a = 4;
let b = 53;
let c = 57;
let d = 16;
let e = 'Kevin';

a < b;

c >= d;

'Name' === 'Name';

a + b === c;

a * a === d;

e === 'Kevin';

48 == '48';

/*
 * Prompt 8:
 *
 * Using the variables defined below, replace the underscores in each subprompt so that the statement evaluates to false
 */

a = 6;
b = 100;
c = -5;
d = 3000;
e = 'Jelly Bean';

a >= b;

c == d;

'Peanut' !=== 'Peanut';

a / b === c;

a * a >= d;

e !== 'Jelly Bean';

48 !== '48';

/*
 * Prompt 9:
 *
 * Retrieve "Marty McFly" from each of the arrays below.
 */

let array1 = ['Marty Marion', 'Marty Feldman', 'Marty McFly', 'Marty Marion'];
array1[2];
let array2 = [
  ['Marty Feldman', 'Marty Marion'],
  ['Marty Stuart', 'Marty McFly'],
  ['Marty Jannetty', 'Marty Robbins']
];
array2[1],[1];
let array3 = [
  ['Marty Feldman', ['Marty Marion']],
  ['Marty Stuart', ['Marty Janetty', ['Marty McFly'], 'Marty Robbins']]
];
array3[1][0];

console.log(array1[2])
console.log(array2[1][1])
console.log(array3[1][0])

/*
 * Prompt 10:
 *
 * Use the length of the array below to retrieve the second to last item.
 */

let array4 = ['a', 'b', 'c', 'd', 'e'];
var secondToLastItem = array4[array4.length - 2];
console.log(secondToLastItem)
/*
 * Prompt 11:
 *
 * Use the following arrays to answer the subprompts below.
 */

let thom = ['Thom', 1000, 'Christchurch'];
let karolin = ['Karolin', 16, 'New York'];
let kristyn = ['Kristyn', 5, 'Pittsburgh'];
let cathleen = ['Cathleen', 186, 'New York'];

// Cathleen decides that Thom can't be named "Thom" anymore. Remove "Thom" from
// the thom array and replace it with "Gameboy".
thom[0] = 'Gameboy';
console.log(thom);

// Karolin just had her birthday; change Karolin's array to reflect her being
// a year older.
karolin[1] = 17;
console.log(karolin);

// Change Cathleen's hometown from New York to "Gotham City".
cathleen[2] = 'Gotham City';
console.log(cathlee);

// Remove "Pittsburgh" from Kristyn's array and add "Oakland".
kristyn[2] = "Oakland"
console.log(kristyn)
