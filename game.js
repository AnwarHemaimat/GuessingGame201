//Cofirm a message , Var sum , Check about username if empty or not , Greeting user
confirm("This is a guessing game, be ready my friend");
alert("You should write Yes Or No and maybe Y Or N,"+" "+"be ready");
let sum=0;
let userName=prompt("Please provide your name");
console.log(userName)
//while(userName==null || userName==""){
  //  alert("Please don't left your name empty !")
    //let userName=prompt("Please provide your name");
//     console.log(userName)
// }
alert("Hello"+" "+userName+ ","+"I hope you are fine, and welcome you in my guessing game.");
 
// Ask 4 questions , Check the questions if empty,yes,no,y or n , Add the total
let myCountry=prompt("I am from Jordan ! ");
console.log(myCountry)
//first question
//console.log(myCountry)
//while(myCountry==null || myCountry==""){
  //  alert("Please enter (Yes) Or (No) or (Y) Or (N) ,"+" "+"try again");
    //let myCountry=prompt("I am from Jordan ! ");
    //console.log(myCountry)
//}

if(myCountry.toUpperCase()=='YAS' || myCountry.toUpperCase()=='Y'){
    alert("Yes, this is true.");
    sum=sum+1;
}else if(myCountry.toUpperCase()=='NO' || myCountry.toUpperCase()=='N'){
    alert("No, this is false. I am really from Jordan.");
}else{
    alert("You lost the point ! because you should answer with yes or no.")
    alert("Actually to know; I am from Jordan.")
}

//Second question
let myStudy=prompt("I studied Languages !");
console.log(myStudy)
//while(myStudy==null || myStudy==""){
  //  alert("Please enter (Yes) Or (No) or (Y) Or (N) ,"+" "+"try again");
   // let myStudy=prompt("I studied Languages !");
    //console.log(myStudy)
//}
if(myStudy.toUpperCase()=='YAS' || myStudy.toUpperCase()=='Y'){
    alert("No, this is fals. I studied Software engineering.");
}else if( myStudy.toUpperCase()=='NO' || myStudy.toUpperCase()=='N' ){
    alert("Yes, this is true. I am studied Software engineering.");
    sum=sum+1;
}else{
    alert("You lost the point ! because you should answer with yes or no.")
    alert("Actually to know; I studied Software engineering.")
}
//Third question
let myUniversity=prompt("I graduated from Turkish universities !");
console.log(myStudy)
//while(myUniversity==null || myUniversity==""){
  //  alert("Please enter (Yes) Or (No) or (Y) Or (N) ,"+" "+"try again");
   // let myUniversity=prompt("I graduated from Turkish universities !");
    //console.log(myUniversity)
//}
if(myUniversity.toUpperCase()=='YAS' || myUniversity.toUpperCase()=='Y'){
    alert("No, this is false. Actullay I graduated from Jordanian universities");
}else if( myUniversity.toUpperCase()=='NO' || myUniversity.toUpperCase()=='N' ){
    alert("Yes, actullay I graduated from Jordanian universities.");
    sum=sum+1;
}else{
    alert("You lost the point ! because you should answer with yes or no.")
    alert("Actually to know; I graduated from Jordanian universities.")
}

// Forth question
let myHobby=prompt("Painting is my hobby !");
console.log(myHobby)
//while(myHobby==null || myHobby==""){
    //alert("Please enter (Yes) Or (No) or (Y) Or (N) ,"+" "+"try again");
    //let myHobby=prompt("Painting is my hobby !");
  //  console.log(myHobby)
//}
if(myHobby.toUpperCase()=='YAS' || myHobby.toUpperCase()=='Y'){
    alert("No, this is false. I have a lot of hobbies but not painting.");
}else if( myHobby.toUpperCase()=='NO' || myHobby.toUpperCase()=='N' ){
    alert("Yes, this is true. I have a lot of hobbies but not painting.");
    sum=sum+1;
}else{
    alert("You lost the point ! because you should answer with yes or no.")
    alert("Actually to know; I have a lot of hobbies but not painting.")
}

// Fifth question
let myCourse=prompt("Now I am a student in LTUC - ASAC !");
console.log(myCourse)
//while(myCourse==null || myCourse==""){
  //  alert("Please enter (Yes) Or (No) or (Y) Or (N) ,"+" "+"try again");
    //let myCourse=prompt("Now I am a student in LTUC - ASAC !");
    //console.log(myCourse)
//}
if(myCourse.toUpperCase()=='YAS' || myCourse.toUpperCase()=='Y'){
    alert("Yes, this is true. Now I am a student in LTUC - ASAC.");
    sum=sum+1;
}else if( myCourse.toUpperCase()=='NO' || myCourse.toUpperCase()=='N' ){
    alert("No, this is false. I am a student now in LTUC - ASAC.");
}else{
    alert("You lost the point ! because you should answer with yes or no.")
    alert("Actually to know; I am a student now in LTUC - ASAC.")
}

// Guess the number, this is sixth question , is about my age, the user try four times to guess
let guess=prompt("Enter my age if you can guess, is between 25 and 30")
console.log(guess)
//while(guess==null || guess==""){
  //  alert("please answer with integer number about my age");
    //let guess=prompt("Enter my age if you can guess again , is between 25 and 30")
    //console.log(guess)
//}
for(let count=1 ; count < 5 ; count++){
    if (parseInt(guess)!=29){
            alert("No, Please try again !");
            let guess=prompt("Enter my age if you can guess, is between 25 and 30")
            console.log(guess)
    }
            if(parseInt(guess)==29){
                alert("Yes, this is true, my age is 29 years old.");
                sum=sum+1;
                count=4;
            }
    }

    // Seventh question , Array, the user try 6 times to guess
let cars = ["mercedes", "bmw", "ford", "jeep", "honda", "land cruiser"];
let carsUser=prompt("Can you guess what my favorite car is ?")
console.log(carsUser)
//while(carsUser==null || carsUser==""){
  //  alert("please answer with integer number about my age");
    //let carsUser=prompt("Can you guess what my favorite cars are ?");
    //console.log(carsUser)
//}

for(let count2=1 ; count2<cars.length ; count2++){
    if (carsUser.toLowerCase()!==cars[count2]){
        alert("No, Please try again !");
        let carsUser=prompt("Can you guess what my favorite cars are again ?")
        console.log(carsUser)
}       
        if(carsUser.toLowerCase()==cars[count2]){
            alert("Yes, this is true. Actually My favorite cars are: mercedes, bmw, ford, jeep, honda and land cruiser.");
            sum=sum+1;
            count2=6;
        }
}

let counting=7;
counting=counting-sum;
alert("Welcome my friend "+" "+userName+" , " + "I'm so glad you tried to find out some information about me. Let me show you who I am .");
alert("Hello"+" "+userName+" ,"+"Your result of this game is:"+" "+ sum+"."+"So You answered"+" "+sum+" questions, and you didn't answered"+" "+counting+" questions."+" "+"Thank you to play this game with me.");

