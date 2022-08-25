const arr = [{ id: 1, username: 'fred' }, { id: 2, username: 'bill' }, { id: 3, username: 'ted' }];

function add(arr, name) {
  const { length } = arr;
  const id = length + 1;
  const found = arr.some(el => el.username === name);
  if (!found){
    console.log("not found")
    arr.push({ id, username: name })}
    else {
        console.log("found")
    }
  return arr;
}
console.log()
console.log(add(arr, 'John'));
