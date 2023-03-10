
// ["C", "B", "A"]

function reverseArray(arr)
{
    const newarr =[];
    for(let i=arr.length; i>=0; i--)
    newarr.push(arr[i]);
    return newarr;
}
console.log(reverseArray(["A", "B", "C"]));