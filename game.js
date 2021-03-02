confirm("This is a guessing game, be ready my friend");
alert("You should write Yes Or No and maybe Y Or N,"+" "+"be ready");

let userName=prompt("Please provide your name");
console.log(userName)
alert("Hello"+" "+userName+ ","+"I hope you are fine, and welcome you in my guessing game.")

let myCountry=prompt("I am from Jordan ! ");
console.log(myCountry)
while(myCountry==null || myCountry==""){
    alert("Please enter (Yes) Or (No) or (Y) Or (N) ,"+" "+"try again");
    let myCountry=prompt("I am from Jordan ! ");
    console.log(myCountry)
}
if(myCountry.toUpperCase()=='YAS' || myCountry.toUpperCase()=='Y'){
    alert("Yes, this is true.")
}else if(myCountry.toUpperCase()=='NO' || myCountry.toUpperCase()=='N'){
    alert("No, this is false. I am really from Jordan.")
}


let myStudy=prompt("I studied Languages !");
console.log(myStudy)
while(myStudy==null || myStudy==""){
    alert("Please enter (Yes) Or (No) or (Y) Or (N) ,"+" "+"try again");
    let myStudy=prompt("I studied Languages !");
    console.log(myStudy)
}
if(myStudy.toUpperCase()=='YAS' || myStudy.toUpperCase()=='Y'){
    alert("No, this is fals. I studied Software engineering.")
}else if( myStudy.toUpperCase()=='NO' || myStudy.toUpperCase()=='N' ){
    alert("Yes, this is true. I am studied Software engineering.")
}

let myUniversity=prompt("I graduated from Turkish universities !");
console.log(myStudy)
while(myUniversity==null || myUniversity==""){
    alert("Please enter (Yes) Or (No) or (Y) Or (N) ,"+" "+"try again");
    let myUniversity=prompt("I graduated from Turkish universities !");
    console.log(myUniversity)
}
if(myUniversity.toUpperCase()=='YAS' || myUniversity.toUpperCase()=='Y'){
    alert("No, this is false. Actullay I graduated from Jordanian universities")
}else if( myUniversity.toUpperCase()=='NO' || myUniversity.toUpperCase()=='N' ){
    alert("Yes, actullay I graduated from Jordanian universities.")
}


let myHobby=prompt("Painting is my hobby !");
console.log(myHobby)
while(myHobby==null || myHobby==""){
    alert("Please enter (Yes) Or (No) or (Y) Or (N) ,"+" "+"try again");
    let myHobby=prompt("Painting is my hobby !");
    console.log(myHobby)
}
if(myHobby.toUpperCase()=='YAS' || myHobby.toUpperCase()=='Y'){
    alert("No, this is false. I have a lot of hobbies but not painting.")
}else if( myHobby.toUpperCase()=='NO' || myHobby.toUpperCase()=='N' ){
    alert("Yes, this is true. I have a lot of hobbies but not painting.")
}

let myCourse=prompt("Now I am a student in LTUC - ASAC !");
console.log(myCourse)
while(myCourse==null || myCourse==""){
    alert("Please enter (Yes) Or (No) or (Y) Or (N) ,"+" "+"try again");
    let myCourse=prompt("Now I am a student in LTUC - ASAC !");
    console.log(myCourse)
}
if(myCourse.toUpperCase()=='YAS' || myCourse.toUpperCase()=='Y'){
    alert("Yes, this is true. Now I am a student in LTUC - ASAC.")
}else if( myCourse.toUpperCase()=='NO' || myCourse.toUpperCase()=='N' ){
    alert("No, this is false. I am a student now in LTUC - ASAC.")
}

alert("Welcome my friend "+" "+userName+" , " + "I'm so glad you tried to find out some information about me. Let me show you who I am .");
   