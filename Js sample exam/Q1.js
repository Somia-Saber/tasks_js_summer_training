var objs={
    a:2,
    b:4,
    c:6
};
sum=0;
for(let i in objs){
    if(objs.hasOwnProperty(i)){
        sum=sum+objs[i];
    }
}
console.log(sum);