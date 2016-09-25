//Store all the elements in javascript variable
var input = document.getElementById('input');
var operator = document.querySelectorAll('#operator div');
var numbers = document.querySelectorAll('.numbers div');
var result = document.getElementById('result');
var currentval;
var showresults = false

//math_it_up is the constructor function that takes variables and applies some
//mathematical operations to it, then return it.
var math_it_up = {
    '÷':function(x,y){return x/y},
    '×':function(x,y){return x*y},
    '+':function(x,y){return x+y},
    '-':function(x,y){return x-y},
    'e':function(x){return x * 2.71828}
  };

//calculate is the function that is called when equal to event in clicked
//It runs through the input, searching and applying all the operation in order
//of there execution.Until the input is of length one.
function calculate(array) {
  var oper = ["e","÷","×","+","-"];
  for(var i=0;i< oper.length;i++) {
    for(var j =1;j< array.length;j = j+2) {

      if(oper[i] === array[j]){
          if(oper[i] === 'e'){array.splice(j-1,2,math_it_up[oper[i]](Number(array[j-1])).toString());}
          else {array.splice(j-1,3,math_it_up[oper[i]](Number(array[j-1]),Number(array[j+1])).toString());}
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

//Gives click event handler to all the numbers.
for(var i= 0;i <numbers.length;i++) {
  numbers[i].addEventListener('click',function(e){
    current_val = input.innerHTML;
    console.log(current_val);
    last_elem = current_val[current_val.length -2];

    if(e.target.innerHTML === "C"){
      input.innerHTML = "";
    }
    else {
    if(showresults === false && last_elem != 'e') {
      input.innerHTML += e.target.innerHTML;
    }
    else if(showresults === true && (last_elem === "+" || last_elem === "-" || last_elem === "×" || last_elem === "÷")) {
      showresults = false;
      input.innerHTML += e.target.innerHTML;
    }
    else if(showresults === false && last_elem === 'e') {
      input.innerHTML += ' × ' + e.target.innerHTML;
    }
    else {
      showresults = false;
      input.innerHTML = "";
      input.innerHTML += e.target.innerHTML;
    }
  }
  });
}

//Gives click event handler to all the operators.
for(var i= 0;i <operator.length;i++) {
  operator[i].addEventListener('click',function(e){
    current_val = input.innerHTML;
    last_elem = current_val[current_val.length -2];

    if(last_elem === "+" || last_elem === "-" || last_elem === "×" || last_elem === "÷" || last_elem === "e") {
      var newString = current_val.substring(0,current_val.length-2) + e.target.innerHTML + " ";
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

//Gives click event handler to equals to.
result.addEventListener('click',function() {
  var inputString = input.innerHTML;
  var array = inputString.split(" ");
  for(var i =0 ; i < array.length ; i++) {
    if(array[i] === "")
      array.splice(i,1);
  }
  calculate(array);
});
