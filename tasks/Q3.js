//Q3

function Reverse(str){
    let newstr = "";
    for(let i= str.length - 1; i >=0; i--){
        newstr += str[i];
    }
    return newstr;
}

const string=prompt("enter string:");
const result=Reverse(string);
console.log(result);
