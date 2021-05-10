// var myHeading = document.querySelector('h1');
// alert("Hello World RRR ");
// myHeading.textContent = "Hello World !";

var myImage = document.querySelector('img');
myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/letter_A.jpg') {
      myImage.setAttribute ('src','images/letter_A2.jpg');
    } else {
      myImage.setAttribute ('src','images/letter_A.jpg');
    }
}

var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
    let myName = prompt('Please enter your name');
    localStorage.setItem('name', myName);
    myHeading.innerHTML = 'JS is so cool ' + myName;
}

if(!localStorage.getItem('name')) {
    setUserName();
}else{
    let loclName = localStorage.setItem('name', myName);
    myHeading.innerHTML = 'JS is so cool ' + loclName;
}

myButton.onclick = function() {
    setUserName();
}