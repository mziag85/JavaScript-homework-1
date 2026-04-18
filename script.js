//პირველი დავალება

let a = "3"
let b = "8"
let c = "3"
a = b;
b = c;
console.log("a არის" + " " +a );
console.log ("b არის" +" "+b);

// //მეორე დავალება

 let userName = prompt("აკრიფეთ ტექსტი");
 console.log(userName.length);
 let symbols = userName.length;
 let message = "თქვენ აკრიფეთ"+" "+symbols+"სიმბოლო,"+"კიდევ დაგრჩათ"+ (280-symbols) +"სიმბოლო";
 console.log(message);



// //მესამე დავალება

let userName = prompt("დაწერეთ თქვენი სახელი");
let firstSlice = userName.slice(0,1);
let upperCase = firstSlice.toUpperCase();
let nextSlice = userName.slice(1);
let lowerCase = nextSlice.toLowerCase();
let message = "გამარჯობა"
console.log(message +" "+upperCase+lowerCase+ "!")
