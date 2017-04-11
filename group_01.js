var atticus = ["Atticus", "2405", "47000", 3];
var jem = ["Jem", "62347", "63500", 4];
var boo = ["Boo", "11435", "54000", 3];
var scout = ["Scout", "6243", "74750", 5];
var robert = ["Robert", "26835", "66000", 1];
var mayella = ["Mayella", "89068", "35000", 2];

var employees = [atticus, jem, boo, scout, robert, mayella];

// var new array [name, bonus%, slary+bonus, bonusRounded]

var newArray = [];

function calcBonus (name, employeeNumber, salary, rating){
  var bonus = 0;

  if(rating <= 2){
      bonus += 0;
  }else if(rating === 3) {
      bonus += 0.04;
  }else if(rating === 4) {
      bonus += 0.06;
  }else{
    bonus += 0.10;
  }
  if(employeeNumber.length === 4){
      bonus += 0.05;
  } // currently calculating passed 13%. We are not sure why?!?
  // if(salary >= '65000'){
  //   bonus -= 0.01;
  // }
  // if(bonus > 0.13){
  //   bonus += 0.13;
  // } else if(bonus < 0.00){
  //   bonus += 0.00;
  // }
  console.log(salary*bonus);
// console.log(name, employeeNumber, salary, rating);
  // return name;
}
calcBonus(scout[0], scout[1], scout[2], scout[3]);
console.log(calcBonus(scout[0], scout[1], scout[2], scout[3]));




console.log ("test");
