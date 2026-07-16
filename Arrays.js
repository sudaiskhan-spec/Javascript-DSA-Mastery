/*
=============================================================================================================================================

                                                 level 1 ==> ( ARRAYS ) by sudaiskhan

==============================================================================================================================================
*/
/*
Q) what are arrays ?
An array is a data structure that stores multiple values in a single variable.

Instead of creating many variables:

let student1 = "Ali";
let student2 = "Ahmed";
let student3 = "Sara";


We store them together:

let students = ["Ali", "Ahmed", "Sara"];

Each element has an index.

Index

0      1       2       3       4

+------+------+------+------+------+
| 10   | 20   | 30   | 40   | 50   |
+------+------+------+------+------+
===========================================================================================================

Q2 Why do we use arrays?

Without arrays:

let a = 10;
let b = 20;
let c = 30;
let d = 40;

Imagine storing 10,000 numbers.

Impossible to manage.

Arrays let us store them in one variable.
========================================================================================================

*/
let numbers = [10,20,30,40]; 


let fruits = [
    "Apple",
    "Banana",
    "Orange",
    "Mango"
];
/*
=========================================================================
// now how to access a element in  array | here we access the 1st element
========================================================================= 
which is applw but we write [0] because the indexing od an array satrts with 0 just how we mentioned above  
since the 1st element is apple the apple will be our output 
*/
console.log(fruits[0]); // output Apple

/*
Index

0      1       2       3       4

+------+------+------+------+------+
| 10   | 20   | 30   | 40   | 50   |
+------+---------------------------


=========================================================================
// now how toupdate a element in  array | here we update the 1st element
========================================================================= 
*/   

let numbers = [10,20,30,40]; 

numbers[2] = 200;

console.log(numbers); // output  [10,20,200,40]; the 2 index which is 30 is updated to 200
/*
=========================================================================
// now how to findout a length of  an  array | mean the total elements in an array
========================================================================= 
*/  
let numbers = [10,20,30,40];

console.log(numbers.length); // output 4
/*
=========================================================================
                          Traversing in an array
========================================================================= 
Traversing an array means accessing every element in the array exactly once, sequentially
 from the first element to the last. It is a fundamental operation in programming used to print all items, 
 search for a specific value, or update data
*/
let arr = [10,20,30,40];

for(let i=0;i<arr.length;i++){
    console.log(arr[i]);
}
/*output
10
20
30
40*/

/*

=========================================================================
                         Important Question
========================================================================= 
Why is array access O(1)?

Because arrays store elements in contiguous memory (conceptually), so the address of any element can be calculated directly:

address = baseAddress + (index × elementSize)

For example, if:

Base address = 1000
Element size = 4 bytes
Index = 3

Then:

address = 1000 + (3 × 4)
        = 1012

The computer jumps directly to the element without checking the previous ones.

Note: JavaScript arrays are more flexible internally than low-level arrays in languages like C, but you can still think of them as arrays for learning DSA.
*/

/*
=========================================================================
                       Mini Challenge (No Built-in Methods)
========================================================================= 


Try solving these before our next lesson:

let arr = [12, 25, 7, 90, 15];
Print the sum of all elements.
Find the largest element.
Find the smallest element.
Count how many elements are even.
Count how many elements are odd.

Rules:

❌ Don't use Math.max(), Math.min(), reduce(), filter(), or any other built-in array methods.
✅ Use only loops, variables, if statements, and comparison operators.
*/

/*
=========================================================================
                       Mini Challenge (No Built-in Methods)
========================================================================= 
*/

let arr = [12, 25, 7, 90, 15];
let sum = 0; // Start our counter at 0

// Traverse through every single number
for (let i = 0; i < arr.length; i++) {
    sum += arr[i]; // Add the current number to our total
}

console.log(sum); // Output: 149

/*
 Breakdownlet arr = [12, 25, 7, 90, 15];This initializes an array containing five numbers.
 let sum = 0;This creates a variable named sum and initializes it to 0. 
 It acts as a bucket that will hold the accumulated total.
 for (let i = 0; i < arr.length; i++)This is a standard for loop that starts at
  index 0 (i = 0) and runs as long as i is less than the length of the array (i < 5). 
  i++ increases the index by 1 on every step.sum += arr[i];
  This is the shorthand version of writing sum = sum + arr[i]. 
  It takes the current number at index i and adds it directly into the sum variable.console.log(sum);
  After the loop finishes visiting all elements, it prints the final accumulated total (149) to the console.
*/
;

let max = arr[0];
for (var i =  1; i < arr.length; i++) {
    if (arr[i] > max) {
        max = arr[i]
    }
}
console.log(max);



let min = arr[0];
for (var i =  1; i < arr.length; i++) {
    if (arr[i] < min) {
        min = arr[i]
    }
}
console.log(min);



let evenCount = 0; // Our even scoreboard
let oddCount = 0;  // Our odd scoreboard

// Traverse (visit) every number
for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
        evenCount++; // Add 1 point to evens
    } else {
        oddCount++;  // Add 1 point to odds
    }
}

console.log("Even numbers:", evenCount); // Output: 2
console.log("Odd numbers:", oddCount);   // Output: 3