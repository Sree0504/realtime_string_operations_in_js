function atm(cardNum){
    return cardNum.toString()
                  .replace(cardNum.toString().slice(0, cardNum.toString().length-4), "X".repeat(cardNum.toString().length-4))
                  .match(/.{1,4}/g)
                  .join("-");
}


// stringname.replace(currentString, replacingString) in our case we are selecting except last four digits in string
// stringname.slice() ---> cutting the string into selected range of indexes
// stringname.match(/.{4}/g)  ---> in our case match is used for splitting string into multiple substrings into an array with length
// array.join("-") ---> joining the array