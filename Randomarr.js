function Randomarr()
{
    let numbers=[];
    while(numbers.length<7)
    {
    let num = Math.floor(Math.random()*10);
    if(!numbers.includes(num))
    {
        numbers.push(num);
    }
    }
    return numbers;

}
console.log(Randomarr());
