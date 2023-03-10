function cleanText(data)
{
let sentence = data.replace(/[^a-zA-Z. ]/g, "");
console.log(sentence);
let words= sentence.split(' ');
console.log(words.length);

// for(let i =0; i<words.length; i++)
// {
//     if(words[i].length > 1)
//     {
//         count++;
//       }
// }
let count = words.reduce((Acc, word)=>{if(word.length>1) return Acc+1; return Acc;},0);

console.log(`Total number of words excluding single character ${count}`);

}

const sentence = `%I $am@% a %tea@cher%, &and& I lo%#ve %tea@ching%;. There $is nothing; &as& mo@re rewarding as educa@ting &and& @emp%o@wering peo@ple. ;I found tea@ching m%o@re interesting tha@n any other %jo@bs. %Do@es thi%s mo@tivate yo@u to be a tea@cher!?`;
    cleanText(sentence);