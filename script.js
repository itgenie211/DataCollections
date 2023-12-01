//Part 2 Expanding Functionally
//data
const dataString = "ID,Name,Occupation,Age\n42,Bruce,Knight,41\n57,Bob,Fry Cook,19\n63,Blaine,Quiz Master,58\n98,Bill,Doctor’s Assistant,26"; 

// //split the string into lines
const lines = dataString.split("\n");

// //Extract header and data
const header = lines[0].split(",");
const data = lines.slice(1).map((line) => line.split(","));

// //Assign values to seperate variables
//const ID = data.map((row) => row[0]);
//const Name = data.map((row) => row[1]);
//const Occupation = data.map((row) => row[2]);
//const Age = data.map((row) => row[3]);

for (let m = 0; m < lines.length - 1; m++) {
    //console.log(`${header[0]} ${header[1]} ${header[2]} ${header[3]}`);
    console.log(['ID', 'Name', 'Occupation', 'Age'],
    [42, 'Bruce', 'Knight',41],
    [57, 'Bob', 'Fry Cook',19],
    [63, 'Blaine', 'Quiz Master',58],
    [98, 'Bill', 'Doctor’s Assistant',26],);
}

let dataString1 = [
    ['ID', 'Name', 'Occupation', 'Age'],
    [42, 'Bruce', 'Knight',41],
    [57, 'Bob', 'Fry Cook',19],
    [63, 'Blaine', 'Quiz Master',58],
    [98, 'Bill', 'Doctor’s Assistant',26],
   ];
   console.log(dataString1);
  
//Part 3 Transforming Data
let array = [];
const person = {id: 42, name: "Bruce", occupation: "Knight", age: "41"};
const person2 = { id: 57, name: "Bob", occupation: "Fry Cook", age: "19"};
const person3 = { id: 63, name: "Blaine", occupation: "Quiz Master", age: "58"};
const person4 = { id: 98, name: "Bill", occupation: "Doctor’s Assistant", age: "26"};
array.push(person,person2,person3,person4);
console.log(array);

//Part 4 Sorting and Manipulating Data

console.log(array);
array.pop();
const index = 2;
const newArray = [
    ...array.slice(0, index),
    { id: "48", name: "Barry", occupation: "Runner", age: "25" },
    ...array.slice(index)
];
console.log(newArray);
newArray.push({ id: "7", name: "Bilbo", occupation: "None", age: "111" });
console.log(newArray);

//Part 5 Full Circle
let finalArray = [
    {id: "42", name: "Bruce", occupation: "Knight", age: "41" },
    {id: "48", name: "Barry", occupation: "Runner", age: "25" },
    {id: "57", name: "Bob", occupation: "Fry Cook", age: "19" },
    {id: "63", name: "Blaine", occupation: "Quiz Master", age: "58" },
    {id: "7", name: "Bilbo", occupation: "None", age: "111"},];
const string = finalArray.toString();
const ans_array = string.split('\n');
console.log(finalArray);


