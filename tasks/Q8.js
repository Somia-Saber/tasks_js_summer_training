
//Q8

let num1=Number(prompt("enter num1:")),
num2=Number(prompt("enter num2:")),
num3=Number(prompt("enter num3:")),
largest;
if(num1>=num2 && num1>=num3){
    largest==num1;
}
else if(num2 >= num1 && num2 >= num3){
    largest=num2;
}
else{
    largest=num3;
}
console.log(largest);

