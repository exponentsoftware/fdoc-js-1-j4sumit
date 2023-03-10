function checkUniqueness(arr)
{
for(let i=0; i<=arr.length; i++)
{
for (let j=i+1; j<=arr.length; j++)
{
    if(arr[i]== arr[j])
    {
        return "not unique";
    }
 
}
}
return "unique";

}

console.log(checkUniqueness([1, 4, 6, 2, 10]));
console.log(checkUniqueness([1, 4, 6, 7, 3]));
