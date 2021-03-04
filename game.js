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
function myCountryfun(){
    let myCountry=prompt("I am from Jordan ! ");
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
    myCountryfun();

//Second question
function myStudyfun(){
    let myStudy=prompt("I studied Languages !");
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
myStudyfun();

//Third question
function myUniversityfun(){
    let myUniversity=prompt("I graduated from Turkish universities !");
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
myUniversityfun();

// Forth question
function myHobbyfun(){
    let myHobby=prompt("Painting is my hobby !");
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
myHobbyfun();

// Fifth question
function myCoursefun(){
    let myCourse=prompt("Now I am a student in LTUC - ASAC !");
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
myCoursefun();

// Guess the number, this is sixth question , is about my age, the user try four times to guess
function guessfun(){
    let guess=prompt("Enter my age if you can guess, is between 25 and 30")
    console.log(guess)
    
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
}
guessfun();
    // Seventh question , Array, the user try 6 times to guess
function carsfun(){
    let cars = ["mercedes", "bmw", "ford", "jeep", "honda", "land cruiser"];
    let carsUser=prompt("Can you guess what my favorite car is ?")
    console.log(carsUser)
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
}
 carsfun();

function countingfun(){
    let counting=7;
    counting=counting-sum;
    alert("Welcome my friend "+" "+userName+" , " + "I'm so glad you tried to find out some information about me. Let me show you who I am .");
    alert("Hello"+" "+userName+" ,"+"Your result of this game is:"+" "+ sum+"."+"So You answered"+" "+sum+" questions, and you didn't answered"+" "+counting+" questions."+" "+"Thank you to play this game with me.");
}
countingfun();
