'use strict'
let expecteduser1 =   document.getElementById("user1");
let expecteduser2 =   document.getElementById("user2");
let expecteduser3 =   document.getElementById("user3");
let expecteduser4 =   document.getElementById("user4");
let achieveduswer1=   document.getElementById('auser1');
let achieveduswer2 =   document.getElementById("auser2");
let achieveduswer3 =   document.getElementById("auser3");
let achieveduswer4 =   document.getElementById("auser4");

  let user1 = document.querySelector(".user1-p1");
  let user2 = document.querySelector(".user2-p1");
  let user3 = document.querySelector(".user3-p1");
  let user4 = document.querySelector(".user4-p1");


let user1points = [];
let user2points = [];
let user3points = [];
let user4points = [];
let gamenumber = 1;
let winner =[];

const push =function(gamenumber){
  user1 = document.querySelector(`.user1-p${gamenumber}`);
  user2 = document.querySelector(`.user2-p${gamenumber}`);
  user3 = document.querySelector(`.user3-p${gamenumber}`);
  user4 = document.querySelector(`.user4-p${gamenumber}`);
 if (gamenumber<=4){
  user1.textContent = converted(expecteduser1.value, achieveduswer1.value);
  user1points.push(converted(expecteduser1.value, achieveduswer1.value));

  user2.textContent = converted(expecteduser2.value, achieveduswer2.value);
  user2points.push(converted(expecteduser2.value, achieveduswer2.value));

  user3.textContent = converted(expecteduser3.value, achieveduswer3.value);
  user3points.push(converted(expecteduser3.value, achieveduswer3.value));

  user4.textContent = converted(expecteduser4.value, achieveduswer4.value);
  user4points.push(converted(expecteduser4.value, achieveduswer4.value));
  }
else if(gamenumber==5){
  user1.textContent =  sum (user1points);
   user2.textContent = sum(user2points);
    user3.textContent = sum(user3points);
     user4.textContent = sum(user4points);
}
else if (gamenumber===6){
 user1.textContent =
  sum(user1points) + converted(expecteduser1.value, achieveduswer1.value);
  winner.push( sum(user1points) + converted(expecteduser1.value, achieveduswer1.value))

 user2.textContent =
  sum(user2points)+converted(expecteduser2.value, achieveduswer2.value) ; 
winner.push( sum(user2points)+converted(expecteduser2.value, achieveduswer2.value))

 user3.textContent =
   sum(user3points) + converted(expecteduser3.value, achieveduswer3.value);
winner.push(sum(user3points) + converted(expecteduser3.value, achieveduswer3.value))

 user4.textContent =
   sum(user4points) + converted(expecteduser4.value, achieveduswer4.value); 
  winner.push( sum(user4points) + converted(expecteduser4.value, achieveduswer4.value) )
  
let result = findPositions(winner);
finalwinner(result)

}
}
const finalwinner =function(data){
for ( let i=0 ;i<data.length;i++){
     document.querySelector(`.user${i+1}-pp`).textContent= data[i]
     if(data[i]===1){
      
     }
}
}

 function findPositions(array) {
  let sortedArray = array.slice().sort(function (a, b) {
    return b - a;
  });
  let positions = [];

  for (let i = 0; i < array.length; i++) {
    let position = sortedArray.indexOf(array[i]) + 1;
    positions.push(position);
  }

  return positions;
}


const sum= function(data){
   let sum =0;
  for(let i =0; i<data.length; i++){
   sum= sum + data[i]
  }
  return sum;
}

const converted =function(expected,achieved)
{
  expected = Number(expected)
    achieved = Number(achieved);
  if(expected > achieved){
let ans = expected - (expected * 2)
 return ans; 
}
else if(expected <= achieved) {
  let ans = expected + (achieved - expected) / 10; 
return ans ;  
}
}
const form= document.querySelector('form');
form.addEventListener("submit", (event) => {
 push(gamenumber);
  event.preventDefault();
  gamenumber++;
});