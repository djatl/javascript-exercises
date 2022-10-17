const removeFromArray = function(myArray) {

    if(arguments.length===1) return myArray;

    let removeList = [];
    for (let i=1; i<arguments.length; i++) {
        removeList[i-1] = arguments[i];
    }

    let newArray = [];
    let index=0;
    outerloop:
    for (let i=0; i<myArray.length; i++) {
        for (let j=0;j<removeList.length; j++) {
            if(myArray[i] === removeList[j]) { //correct comparison?
                continue outerloop;
            }
        }
        newArray[index] = myArray[i];
        index++;
    }
    
    return newArray;
};

// Do not edit below this line
module.exports = removeFromArray;
