//Cofirm a message , Var sum , Check about username if empty or not , Greeting user
"use strict";

confirm("This is a guessing game, be ready my friend");
alert("You should write Yes Or No and maybe Y Or N,"+" "+"be ready");
let sum=0;
let userName=prompt("Please provide your name");
console.log(userName)

alert("Hello"+" "+userName+ ","+"I hope you are fine, and welcome you in my guessing game.");
 
// Ask 4 questions , Check the questions if empty,yes,no,y or n , Add the total

function myCountryFun(){
    let myCountry=prompt("I am from Jordan ! "+"  "+"(yes/no)");
    console.log(myCountry)
    if(myCountry.toUpperCase()=='YES' || myCountry.toUpperCase()=='Y'){
        alert("Yes, this is true.");
        sum=sum+1;
    }else if(myCountry.toUpperCase()=='NO' || myCountry.toUpperCase()=='N'){
        alert("No, this is false. I am really from Jordan.");
    }else{
        alert("You lost the point ! because you should answer with yes or no.")
        alert("Actually to know; I am from Jordan.")
    }
    }
    myCountryFun();
  

//Second question
function myStudyFun(){
    let myStudy=prompt("I studied Languages !"+"  "+"(yes/no)");
    console.log(myStudy)
    if(myStudy.toUpperCase()=='YES' || myStudy.toUpperCase()=='Y'){
        alert("No, this is fals. I studied Software engineering.");
    }else if( myStudy.toUpperCase()=='NO' || myStudy.toUpperCase()=='N' ){
        alert("Yes, this is true. I am studied Software engineering.");
        sum=sum+1;
    }else{
        alert("You lost the point ! because you should answer with yes or no.")
        alert("Actually to know; I studied Software engineering.")
    }
}
myStudyFun();


//Third question
function myUniversityFun(){
    let myUniversity=prompt("I graduated from Turkish universities !"+"  "+"(yes/no)");
    console.log(myUniversity)
    if(myUniversity.toUpperCase()=='YES' || myUniversity.toUpperCase()=='Y'){
        alert("No, this is false. Actullay I graduated from Jordanian universities");
    }else if( myUniversity.toUpperCase()=='NO' || myUniversity.toUpperCase()=='N' ){
        alert("Yes, actullay I graduated from Jordanian universities.");
        sum=sum+1;
    }else{
        alert("You lost the point ! because you should answer with yes or no.")
        alert("Actually to know; I graduated from Jordanian universities.")
    }
}

myUniversityFun();

// Forth question
function myHobbyFun(){
    let myHobby=prompt("Painting is my hobby !"+"  "+"(yes/no)");
    console.log(myHobby)
    if(myHobby.toUpperCase()=='YES' || myHobby.toUpperCase()=='Y'){
        alert("No, this is false. I have a lot of hobbies but not painting.");
    }else if( myHobby.toUpperCase()=='NO' || myHobby.toUpperCase()=='N' ){
        alert("Yes, this is true. I have a lot of hobbies but not painting.");
        sum=sum+1;
    }else{
        alert("You lost the point ! because you should answer with yes or no.")
        alert("Actually to know; I have a lot of hobbies but not painting.")
    }
}
myHobbyFun();


// Fifth question
function myCourseFun(){
    let myCourse=prompt("Now I am a student in LTUC - ASAC !"+"  "+"(yes/no)");
    console.log(myCourse)
    if(myCourse.toUpperCase()=='YES' || myCourse.toUpperCase()=='Y'){
        alert("Yes, this is true. Now I am a student in LTUC - ASAC.");
        sum=sum+1;
    }else if( myCourse.toUpperCase()=='NO' || myCourse.toUpperCase()=='N' ){
        alert("No, this is false. I am a student now in LTUC - ASAC.");
    }else{
        alert("You lost the point ! because you should answer with yes or no.")
        alert("Actually to know; I am a student now in LTUC - ASAC.")
    }
}
myCourseFun();

// Guess the number, this is sixth question , is about my age, the user try four times to guess
function guessFun(){
    
   
    for(let count=1 ; count < 5 ; count++){
        let guess=prompt("Enter my age if you can guess, is between 25 and 30")
        console.log(guess)
        if(parseInt(guess)!=29){
                alert("No, Please try again !");
                //guess=prompt("Enter my age if you can guess, is between 25 and 30");
                console.log(guess)
        } else if(parseInt(guess)==29){
                    alert("Yes, this is true, my age is 29 years old.");
                    sum=sum+1;
                    count=4;
                }
        }  
}
guessFun();
    // Seventh question , Array, the user try 6 times to guess

// Seventh question , Array, the user try 6 times to guess
function carsFun(){
    let cars = ["mercedes", "bmw", "ford", "jeep", "honda", "land cruiser"];
    let carsUser=prompt("Can you guess what my favorite car is ?")
    console.log(carsUser)
    for(let count2=1 ; count2<cars.length ; count2++){
        if (carsUser.toLowerCase()!==cars[count2]){
            alert("No, Please try again !");
            let carsUser=prompt("Can you guess what my favorite cars are again ?")
            console.log(carsUser)
    }else if(carsUser.toLowerCase()==cars[count2]){
                alert("Yes, this is true. Actually My favorite cars are: mercedes, bmw, ford, jeep, honda and land cruiser.");
                sum=sum+1;
                count2=6;
            }
    }
}

 carsFun();


function countingFun(){
    let counting=7;
    counting=counting-sum;
    alert("Welcome my friend "+" "+userName+" , " + "    I'm so glad you tried to find out some information about me. Let me show you who I am .");
    alert("Hello"+"   "+userName+" ,"+"   Your result of this game is: "+"   "+ sum+"  ."+"    So You answered"+"   "+sum+"  questions, and you didn't answered"+"   "+counting+"   questions."+" "+"   Thank you to play this game with me.");    
}
countingFun();
