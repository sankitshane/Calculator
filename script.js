var input = document.getElementById('input');
var operator = document.querySelectorAll('#operator div');
var numbers = document.querySelectorAll('.numbers div');
var currentval;
var showresults = false

for(var i= 0;i <numbers.length;i++) {
  numbers[i].addEventListener('click',function(e){
    current_val = input.innerHTML;

    last_elem = current_val[current_val.length -1];

    if(showresults === false) {
      input.innerHTML += e.target.innerHTML;
    }
    else if(showresults === true && last_elem === "+" || last_elem === "-" || last_elem === "×" || last_elem === "÷" || last_elem === "e") {
      showresults = false;
      input.innerHTML += e.target.innerHTML;
    }
    else {
      showresults = false;
      input.innerHTML = "";
      input.innerHTML += e.target.innerHTML;
    }
  });
}

for(var i= 0;i <operator.length;i++) {
  operator[i].addEventListener('click',function(e){
    current_val = input.innerHTML;

    last_elem = current_val[current_val.length -1];

    if(last_elem === "+" || last_elem === "-" || last_elem === "×" || last_elem === "÷" || last_elem === "e") {
      var newString = current_val.substring(0,current_val.length-1) + e.target.innerHTML;
      input.innerHTML = newString;
    }
    else if(current_val === ""){
      alert("Please enter a number");
    }
    else {
      input.innerHTML += e.target.innerHTML;
    }
  });
}
