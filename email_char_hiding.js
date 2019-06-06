function email(inputEmail){
    var before_at = inputEmail.split('@')[0] || [];
    var after_at = inputEmail.split('@')[1] || [];
    var textLength = before_at.length;
    //error handling
    if(textLength<=5){
        textLength -= 2
    } 
    if(textLength>=5 && textLength<=8){
        textLength -= 3
    }
    else{
        textLength -= 4
    }
    return before_at.replace(
        before_at.slice(0, textLength), "X".repeat(textLength)
    ) + "@" + after_at;
}

//email


