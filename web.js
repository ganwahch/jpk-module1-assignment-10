// task no 1: Declare an empty array using JS literal notation to store
// student names in future.
const student= ["ali","sadf","hina","asad"];
// task no 2:Declare an empty array using JS object notation to store
// student names in future.
const student= [];
const student=["lareb","maria","hafsa","iffa"];
// task no 3:Declare and initialize a strings array.
let arr = new Array ("hello","world");
console.log(arr);
// task no 4: Declare and initialize a numbers array.
var a =(1,2,3,4,5);
document.write(a);
// task no 5:Declare and initialize a boolean array.
var anyBoxesChecked = [];
var numeroPerguntas = 5;     
for (var i = 0; i < numeroPerguntas; i++) {
  anyBoxesChecked.push(false);
}
// task no 6:Declare and initialize a mixed array.
var fruits = ["Apple", "Banana"];
var tempString = "Pie,Dumpling,Cider";
var tempArray = new Array();
tempArray.push(tempString);
tempString = "Bread,Republic";
tempArray.push(tempString);
var output = {};
for (var i = 0; i < fruits.length; i++)
{
    var members = tempArray[i].split(",");
    var temp = {};
    for(var k = 0; k < members.length; k++)
    {
        temp[("" + k)] = members[k];
    }
    output[("" + fruits[i])] = temp;
}
console.log(output);
//Different ways to access the objects
console.log(output.Apple);
console.log(output["Apple"]);
console.log(output.Banana[0]);
console.log(output["Banana"]["0"]);
//  task no 7:Declare and Initialize an array and store available
// education qualifications in Pakistan (e.g. SSC, HSC, BCS,
//     BS, BCOM, MS, M. Phil., PhD). Show the listed
//     qualifications in your browser like:
var students = new Array("huma","SSC","hina","HSC","hira","BCS","iffa","BS","shazia","BCOM","aneela","MS","hafsa","M. Phil","maria","PhD");
document.write(students);
// task no 8:Write a program to store 3 student names in an array.Take
// another array to store score of these three students.
// Assume that total marks are 500 for each student, display
// the scores & percentages of students like:
var students = new Array("huma", "Ann", "hina", "sadia", "ganwa");
		Array.prototype.displayItems=function(){
			for (i=0;i<this.length;i++){
				document.write(this[i] + "<br />");
			}
        }
        document.write("students array<br />");
//     task no  9: Initialize an array with color names. Display the array
// elements in your browser.
// a. Ask the user what color he/she wants to add to the
// beginning & add that color to the beginning of the array.
// Display the updated array in your browser.
// b. Ask the user what color he/she wants to add to the end
// & add that color to the end of the array. Display the
// updated array in your browser.
// c. Add two more color to the beginning of the array.
// Display the updated array in your browser.
// d. Delete the first color in the array. Display the updated
// array in your browser.
// e. Delete the last color in the array. Display the updated
// array in your browser.
// f. Ask the user at which index he/she wants to add a color
// & color name. Then add the color to desired
// position/index. . Display the updated array in your
// browser.
// g. Ask the user at which index he/she wants to delete
// color(s) & how many colors he/she wants to delete. Then
var colors = ["pink", "red", "blue", "Orange", "green"];
 
document.write(colors[0]); 
document.write(colors[1]); 
document.write(colors[2]); 
document.write(colors[colors.length - 1]);

var colors = ["Red", "Green", "Blue"];
var first = colors.shift();
 
document.write(first); 
document.write(colors.length);

var colors = ["Red", "Green", "Blue"];
var last = colors.pop();
document.write(last); 
document.write(colors.length);

// task no 10:Write a program to store student scores in an array &
// sort the array in ascending order using Array’s sort
// method.
let stuNumbers = ["hina", 18 , "huma" ,22, "maria",  10  ];
numbers.sort((a,b) => {
    if(a > b) return 1;
    if(a < b) return -1;
    return 0;
});

console.log(stuNumbers);

// task no 11: Write a program to initialize an array with city names.
// Copy 3 array elements from cities array to selectedCities
// array.
let cities = [
    'Karachi', 'Quetta', 'Islamabad',
];
cities.sort();

console.log(cities);

// task no 12:Write a program to create a single string from the
// below mentioned array:
// var arr = [“This ”, “ is ”, “ my ”, “ cat”];
// (Use array’s join method)
var a  = ["this","is","my","cat"];
document.write(a);