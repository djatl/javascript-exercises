const reverseString = function(myString) {
    let stringArray = myString.split('');
    let newString="";
    for (i=stringArray.length; i>0; i--){
        newString += stringArray[i-1];
    }
    return newString;
};

// Do not edit below this line
module.exports = reverseString;
