confirm("This is a guessing game, be ready my friend");
alert("You should write Yes Or No and maybe Y Or N,"+" "+"be ready");

let userName=prompt("Please provide your name");
console.log(userName)
let myCountry=prompt("I am from Jordan ! ");
console.log(myCountry)
let myStudy=prompt("I studied Languages !");
console.log(myStudy)
let myAge=prompt("Do you think my age is less than 25 !")
console.log(myAge)
let myHobby=prompt("Painting is my hobby !");
console.log(myHobby)
let myCourse=prompt("Now I am a student in LTUC - ASAC !");
console.log(myCourse)

while(myCountry==null || myCountry=="" || myStudy==null || myStudy=="" || myAge==null || myAge=="" || myHobby==null || myHobby=="" || myCourse==null || myCourse==""){
    let userName=prompt("Please provide your name");
    console.log(userName)
    let myCountry=prompt("I am from Jordan ! ");
    console.log(myCountry)
    let myStudy=prompt("I studied Languages !");
    console.log(myStudy)
    let myAge=prompt("Do you think my age is less than 25 !")
    console.log(myAge)
    let myHobby=prompt("Painting is my hobby !");
    console.log(myHobby)
    let myCourse=prompt("Now I am a student in LTUC - ASAC !");
    console.log(myCourse)
if(myCountry=='Yes' || myStudy=='Yes' || myAge=='Yes' || myHobby=='Yes' || myCourse=='Yes' ||myCountry=='No' || myStudy=='No' || myAge=='No' || myHobby=='No' || myCourse=='No' || myCountry=='Y' || myStudy=='Y' || myAge=='Y' || myHobby=='Y' || myCourse=='Y' || myCountry=='N' || myStudy=='N' || myAge=='N' || myHobby=='N' || myCourse=='N'){
    alert("Welcome my friend "+" "+userName+" , " + "I'm so glad you tried to find out some information about me. Let me show you who I am .");
} else
    alert("Please enter (Yes) Or (No) or (Y) Or (N) ,"+" "+"try again");
}