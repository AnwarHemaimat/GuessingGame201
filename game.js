confirm("This is a guessing game, be ready my frinde");
alert("You should write Yes Or No and maybe Y Or N"+" "+"be ready")
let userName=prompt("Please provide your name")
console.log(userName)

let myCountry=prompt("I am from Jordan ! ");
console.log(myCountry)
let myStudy=prompt("I studied Languages !");
console.log(myStudy)
let myAge=prompt("My age is over than 25 !");
console.log(myAge)
let myHobby=prompt("Riding horse is my hobby !");
console.log(myHobby)
let myCourse=prompt("Now I am a student in LTUC - ASAC !");
console.log(myCourse)

while (myCountry==null || myStudy==null || myAge==null || myHobby==null || myCourse==null || myCountry=="" || myStudy=="" || myAge=="" || myHobby=="" || myCourse=="" ){
    alert("Please sure if you answer all the questions");
let myCountry=prompt("I am from Jordan ! ");
console.log(myCountry)
let myStudy=prompt("I studied Languages !");
console.log(myStudy)
let myAge=prompt("My age is over than 25 !");
console.log(myAge)
let myHobby=prompt("Riding horse is my hobby !");
console.log(myHobby)
let myCourse=prompt("Now I am a student in LTUC - ASAC !");
console.log(myCourse)
}

if(myCountry.toUpperCase=='Yes' || myStudy.toUpperCase=='Yes' || myAge.toUpperCase=='Yes' || myHobby.toUpperCase=='Yes' || myCourse.toUpperCase=='Yes'){
    alert("Welcome"+"  "+userName+" I'm so glad you tried to find out some information about me. Let me show you who I am ." );
}
if(myCountry.toUpperCase=='No' || myStudy.toUpperCase=='No' || myAge.toUpperCase=='No' || myHobby.toUpperCase=='No' || myCourse.toUpperCase=='No'){
    alert("Welcome"+"  "+userName+" I'm so glad you tried to find out some information about me. Let me show you who I am ." );
}

if(myCountry.toUpperCase=='Y' || myStudy.toUpperCase=='Y' || myAge.toUpperCase=='Y' || myHobby.toUpperCase=='Y' || myCourse.toUpperCase=='Y'){
    alert("Welcome"+"  "+userName+" I'm so glad you tried to find out some information about me. Let me show you who I am ." );
}

if(myCountry.toUpperCase=='N' || myStudy.toUpperCase=='N' || myAge.toUpperCase=='N' || myHobby.toUpperCase=='N' || myCourse.toUpperCase=='N'{
    alert("Welcome"+"  "+userName+" I'm so glad you tried to find out some information about me. Let me show you who I am ." );
}
