// პირველი დავალება

let a = "3"
let b = "8"
a = b;
console.log("a არის" + " " +a );
b-=5;
console.log ("b არის" +" "+b);

//მეორე დავალება

let userName = prompt("აკრიფეთ ტექსტი");
console.log(userName.length);
let symbols = userName.length;
console.log("თქვენ აკრიფეთ"+" "+symbols+"სიმბოლო,"+"კიდევ დაგრჩათ"+ (280-symbols) +"სიმბოლო")
console.log(userName.slice(0, 280));



//მესამე დავალება

let userName = prompt("დაწერეთ თქვენი სახელი");

let message = "გამარჯობა"
console.log(userName.slice(0));
console.log(userName.toUpperCase(0));
userName.toLowerCase();
console.log(message +" "+ userName+ "!")