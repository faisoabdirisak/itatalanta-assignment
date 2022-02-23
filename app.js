// let number ='10'+10;
// console.log(number)

// let number2 =+"10"+10;
// console.log(number2)

// let number3=10
// number3++;
// console.log(++number3)


// 4. Reverse String
// Step 1 ----Reverse a String With Built-In Functions
function reverseString(str) {
    // Step 1. Use the split() method to return a new array
    var splitString = str.split(""); // var splitString = "hello".split("");
    // ["h", "e", "l", "l", "o"]
 
    // Step 2. Use the reverse() method to reverse the new created array
    var reverseArray = splitString.reverse(); // var reverseArray = ["h", "e", "l", "l", "o"].reverse();
    // ["o", "l", "l", "e", "h"]
 
    // Step 3. Use the join() method to join all elements of the array into a string
    var joinArray = reverseArray.join(""); // var joinArray = ["o", "l", "l", "e", "h"].join("");
    // "olleh"
    
    //Step 4. Return the reversed string
    return joinArray; // "olleh"
}
 
console.log(reverseString("lion"));


// function reverseString(str) {
//     return str.split("").reverse().join("");
// }
// console.log(reverseString("lion"));

//step 2----Reverse a String With a Decrementing For Loop



function reverseString(str) {
    // Step 1. Create an empty string that will host the new created string
    var newString = "";
 
    // Step 2. Create the FOR loop
    /* The starting point of the loop will be (str.length - 1) which corresponds to the 
       last character of the string, "o"
       As long as i is greater than or equals 0, the loop will go on
       We decrement i after each iteration */
    for (var i = str.length - 1; i >= 0; i--) { 
        newString += str[i]; // or newString = newString + str[i];
    }
    /* Here hello's length equals 5
        For each iteration: i = str.length - 1 and newString = newString + str[i]
        First iteration:    i = 5 - 1 = 4,         newString = "" + "o" = "o"
        Second iteration:   i = 4 - 1 = 3,         newString = "o" + "l" = "ol"
        Third iteration:    i = 3 - 1 = 2,         newString = "ol" + "l" = "oll"
        Fourth iteration:   i = 2 - 1 = 1,         newString = "oll" + "e" = "olle"
        Fifth iteration:    i = 1 - 1 = 0,         newString = "olle" + "h" = "olleh"
    End of the FOR Loop*/
 
    // Step 3. Return the reversed string
    return newString; // "olleh"
}
 
reverseString('hello');

function reverseString(str) {
    var newString = "";
    for (var i = str.length - 1; i >= 0; i--) {
        newString += str[i];
    }
    return newString;
}
reverseString('hello');

//5.

// const carTwo={
//     color:'green',
//     status:{
//         running:'yes',
//         passengers:'2',
//         fuelTank:'empty'
//     },
//     value:9000
// }

// const combinedCar={
//   carOne,
//   carTwo
// }

// console.log(combinedCar);



//6. 
// const myMoney ={
//     quarters:4,
//     dimes:10,
//     nickels:20,
//     pennies:100
// }

// for(const coin of myMoney){
//     console.log(`${coin}:${myMoney[coin]}`);
// }


//7.

// const myArr =[1,2,3];
// const arrTwo=myArr.splice(0,4).slice(0,2);
// arrTwo[0]=9;
// console.log(arrTwo)

//9. 
// function truthy(x){
//     if(5===x){
//         return true;
//     }
//     else{
//         return false;
//     }
// }

// console.log(truthy(6))

// 10. 



//11.
// program to pass a function as a parameter

function greet() {
    return 'Hello';
}

// passing function greet() as a parameter
function name(user, func)
{

    // accessing passed function
    const message = greet();

    console.log(`${message} ${user}`);
}

name('John', greet);
name('Jack', greet);
name('Sara', greet);


// 13
let ab=()=>{console.log('problem?');}
console.log(ab())

// 14.
let mydinner =[
    {id:"qwe234dfh",name:"Burger",price:500},
    {id:"qwe234dfh",name:"meet",price:600},
    {id:"qwe234dfh",name:"chicken",price:500}
]

const totalprice=mydinner.reduce((acc,cur)=>acc+cur.price,0);
console.log(totalprice)