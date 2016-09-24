var input = document.getElementById('input');
var operator = document.querySelectorAll('#operator div');
var numbers = document.querySelectorAll('.numbers div');
var result = document.getElementById('result');
var currentval;
var showresults = false

var math_it_up = {
    '÷':function(x,y){return x/y},
    '×':function(x,y){return x*y},
    '+':function(x,y){return x+y},
    '-':function(x,y){return x-y}
  };


function calculate(array) {
  var oper = ["÷","×","+","-"];
  for(var i=0;i< oper.length;i++) {
    for(var j =1;j< array.length;j = j+2) {

      if(oper[i] === array[j]){
         array.splice(j-1,3,math_it_up[oper[i]](Number(array[j-1]),Number(array[j+1])).toString());
         if(array.length === 1) {
           showresults = true;
           input.innerHTML = array[0];
         }
      }
       else {
         continue;
       }
    }
  }

  if(array.length > 1){
    calculate(array);
  }
}

for(var i= 0;i <numbers.length;i++) {
  numbers[i].addEventListener('click',function(e){
    current_val = input.innerHTML;

    last_elem = current_val[current_val.length -2];

    if(e.target.innerHTML === "C"){
      input.innerHTML = "";
    }
    else {
    if(showresults === false) {
      input.innerHTML += e.target.innerHTML;
    }
    else if(showresults === true && (last_elem === "+" || last_elem === "-" || last_elem === "×" || last_elem === "÷" || last_elem === "e")) {
      showresults = false;
      input.innerHTML += e.target.innerHTML;
    }
    else {
      showresults = false;
      input.innerHTML = "";
      input.innerHTML += e.target.innerHTML;
    }
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
      input.innerHTML += " "+e.target.innerHTML+" ";
    }
  });
}

result.addEventListener('click',function() {
  var inputString = input.innerHTML;
  var array = inputString.split(" ");
  calculate(array);
});
