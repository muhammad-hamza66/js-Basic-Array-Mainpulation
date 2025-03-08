//Create an array with five fruit names and print the second element.

let fruits = ['apple', 'banana', 'peach', 'graps', 'plum'];
console.log(fruits[1]);

//Replace the third element of an array with "Mango" and print the updated array.

fruits[2] = 'mango';
console.log(fruits);

//Create an empty array and add three colors to it using push(). Print the array.

let colors = [];

colors.push('red', 'blue', 'purple');
console.log(colors);

//Remove the last element of an array using pop() and print the removed element

let colorsvalue = colors.pop();
console.log(colors);

// Add two numbers at the beginning of an array using unshift() and print the array.

colors.unshift(1, 2)
console.log(colors);

// Remove the first element of an array using shift() and print the updated array.

let newvalue = colors.shift();
console.log(colors);

// Print the length of an array containing four elements.

let cars = ['toyota', 'bmw', 'mercedese', 'bugatti'];
console.log('The length of array is : ', cars.length);

// Extract the last two elements from an array using slice() and print them.

let newcars = cars.slice(2);
console.log(newcars);

// Extract the middle element(s) of an array with an even number of elements using
// slice().

let students = ['salman', 'hamza', 'khalid', 'khizer', 'furqan', 'shehreyar'];
console.log(students)

let middleStudents = students.slice(2, 4);
console.log(middleStudents)

// Replace two middle elements in an array using splice() and print the updated array.

let mobiles = ['iphone', 'nokia', 'redmi', 'infinix', 'tecno', 'oppo'];
console.log(mobiles);

mobiles.splice(2, 2, 'huwavi', 'sony');
console.log(mobiles);


/////////////////Push, Pop, Shift, and Unshift/////////////////////

// Create an array of three cities and add a new city at the end using push().

let cities = ['peshawar', 'islamabad', 'lahore'];
cities.push('mardan');
console.log(cities);

// Remove the last city from an array using pop() and print the updated array.

cities.pop();
console.log(cities);

// Add two new colors to the beginning of an array using unshift() and print the array.

cities.unshift('red', 'blue');
console.log(cities);

// Remove the first color from an array using shift() and print the removed color.

cities.shift();
console.log(cities);

// Use push() twice to add two new names to an array and print the array.

cities.push('swat', 'chakdara');
console.log(cities);

// Use pop() on an array of five elements and check if the length is now four.

let vovels = ['a', 'e', 'i', 'o', 'u'];
vovels.pop();
console.log(vovels);
console.log("the length of array", vovels.length);

// Use shift() on an array with three elements and print the updated array.

let arr = [3, 4, 5];
arr.shift(arr);
console.log(arr);

// Use unshift() to add a new number at the beginning of an array and print it.

arr.unshift('22');
console.log('updated array : ', arr);

// Create an array of three numbers, remove the last one using pop(), and print the
// remaining array.

let oddNumbers = [1, 3, 5];
console.log(oddNumbers);
oddNumbers.pop();
console.log('the remainnig array : ', oddNumbers);

// Create an array with three elements, remove the first using shift(), and print the
// updated array.

let evenNumbers = [2, 4, 6];
console.log(evenNumbers);

evenNumbers.shift();
console.log("the remaing array :", evenNumbers);


///////////////////Slice and Splice//////////////////////////////////

//21. Extract the first three elements from an array using slice() and print them.

let laptop = ["hp", "lenovo", "macbook", "dell", "asus", "dell xps"];

let slicedlaptop = laptop.slice(0, 3);
console.log("the first three elements :" + slicedlaptop);

//22. Extract elements from index 2 to 4 using slice() and print them.

let slicedlaptop2 = laptop.slice(2, 5);
console.log(slicedlaptop2);

//23. Remove two elements from an array starting from index 1 using splice().

let splicedlaptop3 = laptop.splice(1, 2);
console.log(splicedlaptop3);

//24. Insert "Lemon" and "Orange" at index 2 in an array using splice() and print the
// updated array.

let fruit = ['apple', 'mango', 'graps', 'plum', 'apricot'];
fruit.splice(2, 0, "lemon", "orange");
console.log(fruit);

//25. Remove the last two elements using splice() and print the modified array.

fruit.splice(5, 2);
console.log(fruit);

//26. Use splice() to add three new numbers at the beginning of an array and print the
// array.

let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

numbers.splice(0, 0, '22', '33', '44');
console.log(numbers);

//27.Create an array with six elements, extract the last four using slice(), and print them.

let colorss = ['red', 'blue', 'green', 'black', 'voilet', 'indigo'];

let slicedcolors = colorss.slice(2, 6);
console.log(slicedcolors);

//28. Use slice() on an array and check if the original array remains unchanged.

let slicedcolors2 = colorss.slice(0, colorss.length);
console.log(slicedcolors2);

//29. Use splice() to remove one element from the middle of an array and print the
// updated array.

colorss.splice(2, 1);
console.log(colorss);

//30. Use splice() to replace two elements in an array and print the modified array.

colorss.splice(1, 3, "purple", "brown");
console.log(colorss);

////////////////Pass by Reference/////////////////////////////

// 31. Assign an array to another variable and modify the original array. Print both variables

let subjects = ['DSA', 'Automata theory', 'javascript', 'html', ' css'];
let Teachers = subjects;
console.log("new Array", Teachers);
subjects.push('software Engineering');
console.log(" modified array ", subjects);

// 32. Create a function that adds an element to an array and check if the original array
// changes.
function addElementToArray(arr, element) {
    arr.push(element);
}
let originalArray = [1, 2, 3, 4, 5];
addElementToArray(originalArray, 77);
console.log("Original Array after adding element:", originalArray);

//33.Pass an array to a function, modify its first element, and print the modified array.
 function changeFirst33(arr) {
    arr[0] = 99;
}
let modArr33 = [1, 2, 3];
changeFirst33(modArr33);
console.log("Task 33 - Updated array:", modArr33);

// 34. Create an array, pass it to another variable, modify the second variable, and print both.
let firstArray34 = [10, 20, 30];
let secondArray34 = firstArray34;
secondArray34[1] = 50;
console.log("Task 34 - firstArray:", firstArray34);
console.log("Task 34 - secondArray:", secondArray34);

// 35. Check if two variables referencing the same array are equal after modifying one.
let refArray35 = [5, 10, 15];
let anotherRef35 = refArray35;
anotherRef35[1] = 100;
console.log("Task 35 - Are they equal?", refArray35 === anotherRef35);

// 36. Create an array, pass it to a function that removes an element, and print the result.
function removeLast36(arr) {
    arr.pop();
}
let sampleArr36 = [1, 2, 3, 4];
removeLast36(sampleArr36);
console.log("Task 36 - Updated array:", sampleArr36);

// 37. Store an array in two different variables, modify one using push(), and print both.
        let arrayA37 = ["X", "Y", "Z"];
        let arrayB37 = arrayA37;
        arrayB37.push("W");
        console.log("Task 37 - arrayA:", arrayA37);
        console.log("Task 37 - arrayB:", arrayB37);

// 38. Use pop() on an array inside a function and see if the original array changes.
        function popItem38(arr) {
            arr.pop();
        }
        let arrayNumbers38 = [100, 200, 300];
        popItem38(arrayNumbers38);
        console.log("Task 38 - Updated array:", arrayNumbers38);

        // 39. Pass an array to a function that changes its length and check the effect
        function shortenArray39(arr, newLength) {
            arr.length = newLength;
        }
        let bigArray39 = [1, 2, 3, 4, 5, 6];
        shortenArray39(bigArray39, 3);
        console.log("Task 39 - Shortened array:", bigArray39);

        //40. Create two separate arrays with identical elements and check if they are strictly equal.
        let identicalArray40a = [1, 2, 3];
        let identicalArray40b = [1, 2, 3];
        console.log("Task 40 - Are they strictly equal?", identicalArray40a === identicalArray40b);