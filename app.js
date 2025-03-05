//Create an array with five fruit names and print the second element.

let fruits = ['apple' , 'banana' , 'peach' , 'graps' , 'plum'];
console.log(fruits[1]);

//Replace the third element of an array with "Mango" and print the updated array.

fruits[2] = 'mango';
console.log(fruits);

//Create an empty array and add three colors to it using push(). Print the array.

let colors = [];

colors.push('red' , 'blue' , 'purple');
console.log(colors);

//Remove the last element of an array using pop() and print the removed element

let colorsvalue = colors.pop();
console.log(colors);

// Add two numbers at the beginning of an array using unshift() and print the array.

colors.unshift(1,2)
console.log(colors);

// Remove the first element of an array using shift() and print the updated array.

let newvalue = colors.shift();
console.log(colors);

// Print the length of an array containing four elements.

let cars = ['toyota' , 'bmw' , 'mercedese' , 'bugatti'];
console.log('The length of array is : ' , cars.length);

// Extract the last two elements from an array using slice() and print them.

let newcars = cars.slice(2);
console.log(newcars);

// Extract the middle element(s) of an array with an even number of elements using
// slice().

let students = ['salman' , 'hamza' , 'khalid' , 'khizer' , 'furqan' , 'shehreyar'];
console.log(students)

let middleStudents = students.slice(2 , 4);
console.log(middleStudents)

// Replace two middle elements in an array using splice() and print the updated array.

let mobiles = ['iphone' , 'nokia' , 'redmi' , 'infinix' , 'tecno' , 'oppo'];
console.log(mobiles);

mobiles.splice(2 ,2 , 'huwavi' , 'sony');
console.log(mobiles);


/////////////////Push, Pop, Shift, and Unshift/////////////////////

// Create an array of three cities and add a new city at the end using push().

let cities = ['peshawar' , 'islamabad', 'lahore'];
cities.push('mardan');
console.log(cities);

// Remove the last city from an array using pop() and print the updated array.

cities.pop();
console.log(cities);

// Add two new colors to the beginning of an array using unshift() and print the array.

cities.unshift('red' , 'blue');
console.log(cities);

// Remove the first color from an array using shift() and print the removed color.

cities.shift();
console.log(cities);

// Use push() twice to add two new names to an array and print the array.

cities.push('swat' , 'chakdara');
console.log(cities);

// Use pop() on an array of five elements and check if the length is now four.

let vovels = ['a', 'e' , 'i' ,'o' , 'u'];
vovels.pop();
console.log(vovels);
console.log("the length of array" , vovels.length);

// Use shift() on an array with three elements and print the updated array.

let arr = [3,4,5];
arr.shift(arr);
console.log(arr);

// Use unshift() to add a new number at the beginning of an array and print it.

arr.unshift('22');
console.log('updated array : ' ,arr);

// Create an array of three numbers, remove the last one using pop(), and print the
// remaining array.

let oddNumbers = [1,3,5];
console.log(oddNumbers);
oddNumbers.pop();
console.log('the remainnig array : ' , oddNumbers);

// Create an array with three elements, remove the first using shift(), and print the
// updated array.

let evenNumbers = [2,4,6];
console.log(evenNumbers);

evenNumbers.shift();
console.log("the remaing array :" , evenNumbers);
