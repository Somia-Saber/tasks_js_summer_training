
//Q6

function posneg(x,y){
    if((x>0 && y<0) || (x<0 && y>0)){
        console.log("true")
    }
    else{
        console.log("false")

    }

}
let x=Number(prompt("enter num1:")),
y=Number(prompt("enter num2:")),
result=posneg(x,y);
consol.log(result);

