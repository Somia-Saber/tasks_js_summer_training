
function reverse(arr) {
	let a = [];
	for (let i = arr.length-1; i >=0 ; i--) {
        let num =arr[i];
		a.push(arr[i]);
	}
	return a;
};

console.log(reverse([1, 2, 3, 4]));