function countEvenOdd() {
  let even = 0, odd = 0;
  for (let i = 1; i <= 50; i++) {
    if (i % 2 === 0) even++;
    else odd++;
  }
  document.getElementById("result1").innerHTML =
    "Чётных: " + even + "<br>Нечётных: " + odd;
}

function calcFactorial() {
  let n = Number(document.getElementById("num1").value);
  let fact = 1;
  for (let i = 1; i <= n; i++) {
    fact *= i;
  }
  document.getElementById("result2").innerHTML = "Факториал: " + fact;
}

function countMult() {
let num = Number(document.getElementById("num2").value);
let text="";
for (let i=1;i<=10;i++)
  { text += num + " * " + i + " = " + (num * i) + "<br>";}
 document.getElementById("result3").innerHTML = text
}

function countSUM() {
let num = Number(document.getElementById("num3").value);
let sum=0,i=0;
while (i<=num) {sum=sum+i;i++;}
document.getElementById("result4").innerHTML = sum;
}

function countNUM() {

let text="";
for (let i=1;i<=100;i++)
{
if (i % 15 === 0) {text+="FizzBuff" + "<br>"}
else if (i % 5 === 0) {text+="Buzz" + "<br>"}
else if (i % 3 === 0) {text+="Fizz" + "<br>"}
else text+=i + "<br>";
}
document.getElementById("result5").innerHTML = text

}

function countFIB(){
let num = Number(document.getElementById("num6").value);
let start=0,gaz=1,sum;
let text = ""
 for (let i = 0; i < num; i++) {
    text += start + (i < num - 1 ? ", " : "."); 
    sum = start + gaz;
    start = gaz;
    gaz = sum;
  }
document.getElementById("result6").innerHTML = text
}