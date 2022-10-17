const palindromes = function (aString) {
     // convert to lowercase
    let lower = aString.toLowerCase();
   
    // strip out punctuation (only keep a-z), 
    // and create forward version
    let stringArray = lower.split(''); 
    let forward = "";
    for (let i=0; i<stringArray.length; i++) {
        if(stringArray[i].match(/[a-z]/i)) {
            forward += stringArray[i];
        }
    }

    // create backward version
    stringArray = forward.split('');
    let backward = "";
    for (i=stringArray.length; i>0; i--){
        backward += stringArray[i-1];
    }

    // compare forwards and backwards version
    return (backward === forward);

};

// Do not edit below this line
module.exports = palindromes;
