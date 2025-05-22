//greet the user
alert('Hello. Welcome to the tip calculator!') ;

//pause for the user to input data...
button.addEventListener('click', () => {

//calculate the tip
let bill = Number(document.getElementById('bill').value);
let tip = Number(document.getElementById('tip').value);
//calculate the total per person
let total = (tip/100)*bill + bill;
let people = Number(document.getElementById('people').value);
var total_each = total/people;
var total_each = total_each.toFixed(2);

//print total per person
alert("The cost per person is $ " + total_each)
} )
