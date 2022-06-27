// Arrays Exercise 1: Breakfast

const breakfast = ['cereal', 'toast', 'juice'];

breakfast.push('omlette');
console.log(breakfast);

breakfast.unshift('pancakes');
console.log(breakfast);

console.log(breakfast.length);

// Arrays Exercise 2: Last Value

let array1 = [1,2,3,4,5,6,7,8];

function lastValue(array1) {
    return array1[array1.length - 1];
    
}

console.log(lastValue(array1));

// Arrays Exercise 3: Music 

const musicGenres = ['Rock', 'Rap'];

musicGenres.push('Jazz');

musicGenres.splice(1, 1, 'Classical');

musicGenres.unshift('Blues', 'Reggae');

console.log(musicGenres);

// Arrays Exercise 4: Sort 

const breakfast2 = ['cereal', 'toast', 'juice'];

breakfast2.sort();

console.log(breakfast2);

// Loops Exercise 1: Counting 

for(i=1; i<=10; i++){
    console.log(i);}

for(j=10; j>=1; j--){
    console.log(j);}
 
// Loops Exercise 2: Tasks 

const tasks = ['Cleaning', 'Laundry', 'Cooking'];

for (let i = 0; i < tasks.length; i++) {
    console.log(`Task ${i+1}: ${tasks[i]}`)
}

// Loops Exercise 3: Last Loop Value 

let value = 3;

while (value) {
    alert(value--); // Counts down from 3 on browser window
}

// Loops Exercise 4: Even is 

for (let i = 2; i <= 10; i++) {
    if (i % 2 == 0) {
      alert(i); // Outputs even numbers on browser window
    }
  }

// Loops Exercise 5: Replace “for” 

let x = 0;

while (x < 3){
    alert( `number ${x++}!` );
}

// Loops Exercise 6: Sum

function sumInput(array2) {
    let sum = 0;
    for (let i = 0; i < array2.length; i++) {
      sum += array2[i];
    }
    return sum;
  }
  
  console.log(sumInput([1, 2, 3, 4, 5]));

// Strings || exercise 1: addFullStop 

// Strings || exercise 2: Capitalize 

function capitalize(string) {

    if (typeof '' != 'string') {
        console.log("This is not a string");
      }
    else {
        return string.charAt(0).toUpperCase() + string.slice(1);
    }
}

console.log(capitalize('robert')); 

// ForEach Exercise 1: Favourite Foods

let favouriteFoods = ['Pizza', 'Pasta', 'Waffles'];

favouriteFoods.forEach(element => console.log(element));

// ForEach Exercise 2: Sum 

function numArray(sumArray) {
    let sum = 0; 
  
    sumArray.forEach(item => { sum += item; });
  
    console.log(sum); 
    return sum;
  }
  
  numArray([2, 4, 6, 8, 10]); 

// ForEach Exercise 3: Product 

function product (array3) {
    let sum=1;
    for (let i=0; i<array3.length; i++) {
        sum = sum * array3[i];
    } 
    return sum;
}
console.log(product([1,2,3,4,5]));

// ForEach Exercise 4: Student Grades 

let studentGrades = [70, 20, 53, 64, 78, 60, 32];

let passMark = 50;

let greaterThan = (studentGrades, num) => {
    const result = [];
    for(let i = 0; i < studentGrades.length; i++){
       if(studentGrades[i] < num){
          continue;
       };
       result.push(studentGrades[i]);
    }
    return result;
 };
 console.log(greaterThan(studentGrades, passMark));

// Join Exercise 1: Names 

let studentNames = ['Dan', 'Steven', 'Owen'];

let names = studentNames.join(' ');

console.log(names);

// Join Exercise 2: to CSV 

// Map Exercise 1: Miles Converter 

const kilometers = [10, 20, 30, 50, 60];

function toMiles(kilometers) {
    let conversion = kilometers.map(x => x * 0.621371);
    return conversion;
}

console.log(toMiles(kilometers));

// Map/filter Exercise 2: User input ages 

const studentAge = ["18", " 27", 19, 21, "22 ", NaN, undefined];

const onlyNumbers = studentAge.filter(element => typeof element === 'number');
console.log(onlyNumbers);

// Filter Exercise: canVote 

function canVote(value) {
    return value >= 18;
  }
  
  let voteAges = [18, 23, 17, 40, 16].filter(canVote);

  console.log(voteAges.filter(canVote));

// Objects Exercise 1: Spacecraft 

let spacecraft = {
    size: '160 feet',
    range: 100,
    model: "N/A",
    capacity: 10,
};
  
console.log(spacecraft.range);
  
for (let key in spacecraft) {
  
console.log(`Key: ${key}`);
 console.log(`Value: ${spacecraft[key]}`);
  
}
