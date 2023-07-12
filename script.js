'use strict'
let expecteduser1 = document.getElementById("user1");
let expecteduser2 = document.getElementById("user2");
let expecteduser3 = document.getElementById("user3");
let expecteduser4 = document.getElementById("user4");
let achieveduswer1= document.getElementById('auser1');
let achieveduswer2 = document.getElementById("auser2");
let achieveduswer3 = document.getElementById("auser3");
let achieveduswer4 = document.getElementById("auser4");



const form= document.querySelector('form');
form.addEventListener("submit", (event) => {
 console.log(expecteduser1.value);
 expecteduser1.value=null;
 
  event.preventDefault();
});