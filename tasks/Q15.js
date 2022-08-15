
//Q15
let num1=Number(prompt("enter your num1:")),
 num2=parseInt(prompt("enter your num2:")),
 add =num1+num2,
 sub=num1-num2,
 mul=num1*num2,
 div=num1/num2;

console.log("sum: "+add +"sub: "+sub+"mul: "+mul+"div: "+div);



let op=prompt("enter operation"),
numm1=Number(prompt("enter num1")),
numm2=Number(prompt("enter num2"));

switch(op){
case '+':console.log(`sum ${numm1+numm2}`);
break;
case '-':console.log(`sub ${numm1-numm2}`);
break;
case '*':console.log(`mul ${numm1*numm2}`);
break;
case '/':console.log(`div ${numm1/numm2}`);
break;
default:console.log("invalid");
break;


}
