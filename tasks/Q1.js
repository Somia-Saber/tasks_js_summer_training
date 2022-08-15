// //Q1
// let number=Number(prompt("please enter number:"));
// if(number%2==0){
// console.log("even");
// }
// else{
//     console.log("odd");
// }

// let check=number%2==0?"the number is even":"the number is odd";
// console.log(check);


// //Q2

// function fizzbuzz(num){
//     for(let i=1;i<=num;i++){
//         if(i%3==0 && i%5==0){
//             console.log("fizzbuzz");
//         }
//         else if(i%3==0){
//             console.log("fizz");
//         }
//         else if(i%5==0){
//             console.log("buzz");
//         }
//         else{
//             console.log(i);
//         }

//     }
// }
// let numfizz=prompt("enter numfizzbuzz:");
// fizzbuzz(numfizz)


// //Q3

// function Reverse(str){
//     let newstr = "";
//     for(let i= str.length - 1; i >=0; i--){
//         newstr += str[i];
//     }
//     return newstr;
// }

// const string=prompt("enter string:");
// const result=Reverse(string);
// console.log(result);

// //Q4

// let radius=prompt("enter radius:"),
// Area=Math.PI*radius*radius,
// Circumference=2*Math.PI*radius;

// console.log(`Area: ${Area} Circumference: ${Circumference}`);


// //Q5

// let num1=Number(prompt("enter number1: ")),
//  num2=Number(prompt("enter number2: ")),
//  sum=num1+num2;
// if(num1==50 || num2==50||sum==50){
//     console.log("true");
// }
// else{
//     console.log(false);
// }


// //Q6

// function posneg(x,y){
//     if((x>0 && y<0) || (x<0 && y>0)){
//         console.log("true")
//     }
//     else{
//         console.log("false")

//     }

// }
// let x=Number(prompt("enter num1:")),
// y=Number(prompt("enter num2:")),
// result=posneg(x,y);
// consol.log(result);


// //Q7

// function multiple(x){
//    if(x%5==0 ||x%8==0){
//      console.log("true")
//     }
//    else{
//       console.log("false")
    
//     }

// }
// let x=Number(prompt("enter number:")),
// res=multiple(x);
// consol.log(res);


// //Q8

// let num1=Number(prompt("enter num1:")),
// num2=Number(prompt("enter num2:")),
// num3=Number(prompt("enter num3:")),
// largest;
// if(num1>=num2 && num1>=num3){
//     largest==num1;
// }
// else if(num2 >= num1 && num2 >= num3){
//     largest=num2;
// }
// else{
//     largest=num3;
// }
// console.log(largest);



// //Q9

// let res=0;
// for(let i=1;i<=10;i++){
// res+=i;
// }
// console.log(res);

// //Q10

// for(let i=1;i<=5;i++){
//     for(let j=1;j<=i;j++){
//         console.log("*");
//     }
//     console.log("\n");
// }

// //Q11
// let num=Number(prompt("enter number:"));
// if(num<0){
//     console.log("negativ");
// }
// else if(num>0){
//     console.log("positive");
// }


// //Q12
// let arr=[10];
// for(let i =0; i<= 9; i++){
// let num = prompt("Please enter 10 numbers");
//     arr[i]=arr;
//     console.log("arr[i]");
// }

console.log('Welcome')


// //Q13
// let num1=Number(prompt("enter number1:")),
//  num2=Number(prompt("enter number2:")),
//  sum=num1+num2;

// //Q14
// let num=parseInt(prompt("enter number:")),
// fact=1;
// for(let i=1;i<=num;i++){
//     fact*=i;
// }
// console.log(`factorial: ${fact}`);

// //Q15
// let num1=Number(prompt("enter your num1:")),
//  num2=parseInt(prompt("enter your num2:")),
//  add =num1+num2,
//  sub=num1-num2,
//  mul=num1*num2,
//  div=num1/num2;

// console.log("sum: "+add +"sub: "+sub+"mul: "+mul+"div: "+div);



// let op=prompt("enter operation"),
// numm1=Number(prompt("enter num1")),
// numm2=Number(prompt("enter num2"));

// switch(op){
// case '+':console.log(`sum ${numm1+numm2}`);
// break;
// case '-':console.log(`sub ${numm1-numm2}`);
// break;
// case '*':console.log(`mul ${numm1*numm2}`);
// break;
// case '/':console.log(`div ${numm1/numm2}`);
// break;
// default:console.log("invalid");
// break;


// }




