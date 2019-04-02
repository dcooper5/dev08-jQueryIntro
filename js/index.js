$(document).ready(function () {
  $('#content').hide().fadeIn(3000); 
function resetSign01() {
  welcome = '';
  setSign();
  sign = '';
  calcSign();
 }

function resetSign02(event) {
  var signData = ['greeting', 'userSign', 'tiles', 'subTotal', 'shipping', 'grandTotal'];
  
  for (i=0; i<signData.length; i++){
    setTextContextById(signData[i], '');
  }
  event.preventDefault();
}

//Create variables for the welcome message
var greeting = '[not initialized]' ; 
var name = '[not initialized]';
var message = '[not initialized]';
// Concatenate the three variables above to create the welcome message
var welcome;
var sign = '[not initialized]'; 
var tiles, subTotal, shipping, grandTotal;


function calcSign() {
  tiles = sign.length;
  subTotal = tiles * 5;
  shipping = 7;
  grandTotal = subTotal + shipping;
}

function initiateVars() {
  greeting = 'Howdy'; 
  name = 'Dillon';
  message = 'please check your order:';
  sign = 'JavaScript';
  welcome = greeting + '! ' + name + ', ' + message;
  calcSign();
}



function setTextContextById(getId, setMsg) {
  // Get the element that has an id of greeting
  var el = document.getElementById(getId);
  // Replace the content of that element with the     personalized welcome message
  el.textContent = setMsg;
}

function setSign(){
  setTextContextById('greeting', welcome);
  setTextContextById('userSign', sign);
  setTextContextById('tiles', tiles);
  setTextContextById('subTotal', '$' + subTotal);
  setTextContextById('shipping', '$' + shipping);
  setTextContextById('grandTotal', '$' +             grandTotal);
}

initiateVars(); 
setSign();
//resetSign02();

var el= document.getElementById('resetButton');
el.addEventListener('click', resetSign02, false);
})