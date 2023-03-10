function countWords(paragraph, text1, text2)
{
    let lovecount=0;
    let youcount=0;
    let paragraph1= paragraph.split(" ");
    for(let str of paragraph1)
    {
        if(str === text1)
        {
lovecount++;
        }
        if(str=== text2)
        {
            youcount++;
        }

    }
console.log(lovecount);
console.log(youcount);
    if(lovecount>youcount)
    {
        return "The word love more frequently occurred than you.";
    }
    else{
        return "The word you more frequently occurred than love.";
    }
}

const paragraph = 'I love teaching. If you do not love teaching what else can you love I love JavaScript if you do not love something which can give life to your application what else can you love .';
console.log(countWords(paragraph,'love', 'you'));
// The word love more frequently occurred than you.