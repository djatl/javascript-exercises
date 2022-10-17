const sumAll = function(a,b) {

    if (! (typeof a == 'number') ) {
        return 'ERROR';
    }

    if (! (typeof b == 'number') ) {
        return 'ERROR';
    }

    if (isNaN(a) || isNaN(b) ) {
        return 'ERROR';
    }

    if (a<0 || b<0) {
        return 'ERROR';
    }

    if (a > b) {
        let temp = b;
        b = a;
        a = temp;
    }

    let sum=0;
    for(let i=a; i<=b; i++){
        sum += i;
    }

    return sum;
};

// Do not edit below this line
module.exports = sumAll;
