"use strict";
let expecteduser1 = document.getElementById("user1");
let expecteduser2 = document.getElementById("user2");
let expecteduser3 = document.getElementById("user3");
let expecteduser4 = document.getElementById("user4");
let achieveduswer1 = document.getElementById("auser1");
let achieveduswer2 = document.getElementById("auser2");
let achieveduswer3 = document.getElementById("auser3");
let achieveduswer4 = document.getElementById("auser4");
  
const userNames = document.querySelectorAll(
    '.usersnamess input[type="text"]'
  );


let username1 =document.querySelector('#user1name');
let username2 = document.querySelector("#user2name");
let username3 = document.querySelector("#user3name");
let username4 = document.querySelector("#user4name");

let usernameform = document.querySelector(".usersnamess");
let usernamebutton = document.querySelector("#username-button");
let overlay = document.querySelector('.overlay');

let user1 = document.querySelector(".user1-p1");
let user2 = document.querySelector(".user2-p1");
let user3 = document.querySelector(".user3-p1");
let user4 = document.querySelector(".user4-p1");

let fixedBtn = document.querySelector(".fixed-input-btn");
let fixedEle = document.getElementsByClassName("fixed");
let unFixedEle = document.getElementsByClassName("unfixed");
let state = "unfixed";
const popupEl = document.querySelector(".popup");

let user1points = [];
let user2points = [];
let user3points = [];
let user4points = [];
let achievedpoint = [];
let achievedpointSum;
let playerName = [];
let gamenumber = 0;
let winner = [];

const clearInputField = function () {
  expecteduser1.value = "";
  expecteduser2.value = "";
  expecteduser3.value = "";
  expecteduser4.value = "";
  achieveduswer1.value = "";
  achieveduswer2.value = "";
  achieveduswer3.value = "";
  achieveduswer4.value = "";
};

const cheackFormValidation = function () {
  achievedpoint.push(achieveduswer1.value);
  achievedpoint.push(achieveduswer2.value);
  achievedpoint.push(achieveduswer3.value);
  achievedpoint.push(achieveduswer4.value);

  achievedpointSum = achievedpoint.reduce(
    (acc, point) => acc + Number(point),
    0
  );
  if (achievedpointSum === 13) return true;
  return false;
};

const handelFixed = function (fixed = true) {
  if (fixed) {
    state = "fixed";
    expecteduser1.classList.add("fixed");
    expecteduser2.classList.add("fixed");
    expecteduser3.classList.add("fixed");
    expecteduser4.classList.add("fixed");
    fixedBtn.classList.add("fixedbtn");
    fixedBtn.textContent = "Unfixed";

    Array.from(fixedEle).forEach((element) => {
      element.disabled = true;
    });
  } else {
    state = "unfixed";
    expecteduser1.classList.replace("fixed", "unfixed");
    expecteduser2.classList.replace("fixed", "unfixed");
    expecteduser3.classList.replace("fixed", "unfixed");
    expecteduser4.classList.replace("fixed", "unfixed");
    fixedBtn.classList.remove("fixedbtn");
    fixedBtn.textContent = "fixed";

    Array.from(unFixedEle).forEach((element) => {
      element.disabled = false;
    });
  }
};

const push = function (gn) {
  user1 = document.querySelector(`.user1-p${gn}`);
  user2 = document.querySelector(`.user2-p${gn}`);
  user3 = document.querySelector(`.user3-p${gn}`);
  user4 = document.querySelector(`.user4-p${gn}`);
  if (gn <= 4 || gn === 6) {
    user1.textContent = converted(expecteduser1.value, achieveduswer1.value);
    user1points.push(converted(expecteduser1.value, achieveduswer1.value));

    user2.textContent = converted(expecteduser2.value, achieveduswer2.value);
    user2points.push(converted(expecteduser2.value, achieveduswer2.value));

    user3.textContent = converted(expecteduser3.value, achieveduswer3.value);
    user3points.push(converted(expecteduser3.value, achieveduswer3.value));

    user4.textContent = converted(expecteduser4.value, achieveduswer4.value);
    user4points.push(converted(expecteduser4.value, achieveduswer4.value));

    if (gn === 4 || gn === 6) {
      gamenumber++;
      push(gamenumber);
    }
  }
  if (gn === 5 || gn === 7) {
    setTimeout(() => {
      user1.textContent = sum(user1points);
      user2.textContent = sum(user2points);
      user3.textContent = sum(user3points);
      user4.textContent = sum(user4points);
      if (gn === 7) {
        winner.push(user1.textContent);
        winner.push(user2.textContent);
        winner.push(user3.textContent);
        winner.push(user4.textContent);
        gamenumber++;
        push(gamenumber);
      }
    }, 400);
  }
  if (gn === 8) {
    const result = findPositions(winner);
    finalwinner(result);
  }
};

const finalwinner = function (data) {
  let winnerName = "";
  popupEl.firstElementChild.textContent = "";
  for (let i = 0; i < data.length; i++) {
    document.querySelector(`.user${i + 1}-pp`).textContent = data[i];
    if (data[i] === "winner") {
      if (!playerName[i]) {
        playerName[i] = `User${i + 1} `;
      }
      winnerName += `${playerName[i]}`;
    }
  }
  popupEl.firstElementChild.textContent = `${winnerName} Won The Game`;
  popupEl.style.top = "90%";
  setTimeout(() => {
    popupEl.style.position = "relative";
    document.querySelector(".message").style.display = "block";
  }, 1500);
};

function findPositions(array) {
  let sortedArray = array.slice().sort(function (a, b) {
    return b - a;
  });
  let positions = [];

  for (let i = 0; i < array.length; i++) {
    let position = sortedArray.indexOf(array[i]) + 1;
    if (position === 1) {
      positions.push("winner");
    } else if (position === 2) {
      positions.push("second");
    } else if (position === 3) {
      positions.push("third");
    } else {
      positions.push("forth");
    }
  }

  return positions;
}

const sum = function (data) {
  let sum = 0;
  for (let i = 0; i < data.length; i++) {
    sum = sum + data[i];
  }
  return parseFloat(sum.toFixed(2));
};

const converted = function (expected, achieved) {
  expected = Number(expected);
  achieved = Number(achieved);
  if (expected > achieved) {
    let ans = -expected;
    return ans;
  } else {
    let ans = expected + (achieved - expected) / 10;
    return ans;
  }
};

const form = document.querySelector(".form1");
form.addEventListener("submit", (event) => {
  event.preventDefault();

  if (gamenumber >= 8) return 0;
  if (cheackFormValidation()) {
    gamenumber++;
    push(gamenumber);
    clearInputField();
    handelFixed(false);
    achievedpoint = [];
  } else {
    achievedpoint = [];
    alert(`Achieved points sum is only ${achievedpointSum} , It must be 13.`);
  }
});

fixedBtn.addEventListener("click", function () {
  if (state === "unfixed") {
    handelFixed();
  } else {
    handelFixed(false);
  }
});

const displayInUi = function (playerName) {
  const labels = Array.from(document.getElementsByTagName("label"));
  const headerLabels = document.querySelectorAll(".Thead th:not(:first-child)");

  labels.forEach((label, index) => {
    if (index <= 3) {
      label.textContent = playerName[index];
    } else {
      label.textContent = playerName[index - 4];
    }
  });
  headerLabels.forEach((headerLabel, index) => {
    headerLabel.textContent = playerName[index];
  });
};

const askPlayerName = function () { 
  usernamebutton.addEventListener("click", function (e) {
    e.preventDefault()

    setTimeout(function(){ overlay.classList.add("hidden");
    usernameform.classList.add("hidden"),1000})
     
      playerName = [
        username1.value,
        username2.value,
        username3.value,
        username4.value
      ];
      playerName=
        playerName.map(
          (playername) =>
            playername.charAt(0).toUpperCase()+ playername.slice(1)
        )
      displayInUi(playerName);
});
 

};

askPlayerName();
