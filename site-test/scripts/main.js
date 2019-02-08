let clickMe = document.querySelector('h1').onclick = function() {
   alert('The rabbit hole')
}
let myButton = document.querySelector('button')
let myHeading = document.querySelector('h1')
let myImage = document.querySelector('img');

myImage.onclick = function() {
  var mySrc = myImage.getAttribute('src');
  if (mySrc === "images/front-img-leaves.jpg") {
    myImage.setAttribute('src', 'images/palm-leaves2.jpg')
  } else {
    myImage.setAttribute('src', 'images/front-img-leaves.jpg' )
  }
}

function setUserName() {
  let myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = `${myName} photography`
}

if (!localStorage.getItem('name')) {
  setUserName
} else {
  let storedName = localStorage.getItem('name');
  myHeading.textContent = `${storedName} photography`
}

myButton.onclick = function() {
  setUserName();
}
