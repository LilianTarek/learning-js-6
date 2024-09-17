// videos from 40 to 47
// task1
let myFriends = ["Ahmed", "Elham", "Osama", "Gamal"];
let num = 3;

// Method 1
// myFriends.pop();
// console.log(myFriends); // ["Ahmed", "Elham", "Osama"];

// Method 2
myFriends.length = num;

console.log(myFriends); // ["Ahmed", "Elham", "Osama"];
// --------------------------
// task2
let friends = ["Ahmed", "Eman", "Osama", "Gamal"];
friends.pop();
friends.shift();

console.log(friends); // ["Eman", "Osama"]

// -----------------
// task3
let arrOne = ["C", "D", "X"];
let arrTwo = ["A", "B", "Z"];
let finalArr = [];
finalArr = arrOne.concat(arrTwo).sort().reverse();
console.log(finalArr); // ["Z", "X", "D", "C", "B", "A"]
// ------------------------------
// task4
let website = "Go";
let words = [`${website}ogle`, "Facebook", ["Elzero", "Web", "School"]];

console.log(words[website.length][0].slice(website.length).toUpperCase()); // ZERO
// ---------------------
// task5
let needle = "JS";
let haystack = ["PHP", "JS", "Python"];

// Write 3 Solutions
if (haystack.includes(needle))
{
    console.log("Found");
}
if (haystack.indexOf(needle) !== -1) {
  console.log("Found");
}
if (haystack.lastIndexOf(needle) !== -1) {
  console.log("Found");
}

 // --------------
// task6
let arr1 = ["A", "C", "X"];
let arr2 = ["D", "E", "F", "Y"];
let allArrs = [];
allArrs=arr1.concat(arr2).sort().join("").slice(arr2.length).toLowerCase();
console.log(allArrs); // fxy


// videos from 48-53
// task 1
let start = 10;
let end = 100;
let exclude = 40;

// Output
for (let i = start; i <= end; i += start)
{
if(i===exclude) continue;

  console.log(i);
}
// task2
let start2 = 10;
let end2 = 0;
let stop2 = 3;
for (let i = start2; i >= stop2; i--) {
  if (i < start2)
  {
    console.log(`${end2}${i}`);
  }
else {
    console.log(i);
  }
}
// task3
let start3 = 1;
let end3 = 6;
let breaker3 = 2;
for (let i = start3; i <= end3;i++)
{
  console.log(i);
  for (let j = breaker3; j < end3; j+=breaker3)
  {
     console.log(`-- ${	j}`);	
  }
}
// Output
// 1
// -- 2
// -- 4
// 2
// -- 2
// -- 4
// 3
// -- 2
// -- 4
// 4
// -- 2
// -- 4
// 5
// -- 2
// -- 4
// 6
// -- 2
// -- 4

// task4
let index = 10;
let jump = 2;

for (;;) {
  console.log(index);
  if (index == jump + jump) break;
  index -= jump;
  
}

// Output
// 10;
// 8;
// 6;
// 4;

// task5
let friends5 = ["Ahmed", "Sayed", "Eman", "Mahmoud", "Ameer", "Osama", "Sameh"];
let letter = "a";
let num5 = letter.length++;
for (let i = letter.length - letter.length; i < friends5.length; i++) {
  if (friends5[i].toLowerCase().startsWith(letter)) {
    continue;
  }
  console.log(`${num5} => ${friends5[i]}`);
  num5++;
}
// Output
// ("1 => Sayed");
// ("2 => Eman");
// ("3 => Mahmoud");
// ("4 => Osama");
// ("5 => Sameh");
// task6
let start6 = 0;
let swappedName = "elZerO";
let result = "";

for (let i = start6; i < swappedName.length; i++) {
  if (swappedName[i] === swappedName[i].toLowerCase()) {
    result += swappedName[i].toUpperCase();
  } else {
    result += swappedName[i].toLowerCase();
  }
}

console.log(result);
// Output
// ("ELzERo");

// task 7
let start7 = 0;
let mix = [1, 2, 3, "A", "B", "C", 4];
for (let i = start7 + mix[start7]; i < mix.length; i++) {
  if (typeof mix[i] === "number")
    console.log(mix[i]);
}

// Output
// 2;
// 3;
// 4;
// videos from 54-56
let friends8 = ["Ahmed", "Sayed", "Ali", 1, 2, "Mahmoud", "Amany"];
let index8 = 0;
let counter8 = 0;
while (index8 < friends8.length) {
  if (
    typeof friends8[index8] === "string" &&
    friends8[index8][index8-index8].toLowerCase() !== "a"
  ) {
    counter8++;
    console.log(`${counter8} => ${friends8[index8]}`);
  }

  index8++;
}

// Output
// ("1 => Sayed");
// ("2 => Mahmoud");