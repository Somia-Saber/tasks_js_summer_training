let index = 0,
largest;
const arr = [3, 5, 8, 100, 20, 100];
for ( let i = 1; i < arr.length; i++ )
{
if ( arr[i] > arr[index] ) {
index = i;
largest=arr[i];}
}
console.log(`index:${index} largest:${largest}`); 
