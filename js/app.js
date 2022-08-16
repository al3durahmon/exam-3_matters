// 1-masala:
const reverseWords = (sentence) => {
  const words = sentence.split(' ')
  console.log(words)
  const revWords =  words.reverse()
  console.log(revWords)
  return revWords.join(" ")
}
console.log(reverseWords("Alisher Qodirov"));


// 2-masala:
mixedNumber([2,4,9,3,5]);

function mixedNumber(numbers){
    let arr = [];

    for(let element of numbers) {
        if(Math.sqrt(element) %1 === 0){
            arr.push(Math.sqrt(element));
        }
        else{
            arr.push(element*element);
        }
    }
    return console.log(arr);

}



// 3-masala: 
doubleLetter("Hello"); 

function doubleLetter(text) {
    let word = text.split("")
    for(let i = 0; i < word.length; i+=2) {
        word.splice(i,0,word[i])
    }
    let result = word.join("")
    return console.log(result);;
}



