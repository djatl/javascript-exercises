const fibonacci = function(index) {
    if (index<0) {
        return 'OOPS';
    } 

    let prev1 = 1;
    let prev2 = 1;
    let next = prev2;

    for (let i=2; i<index; i++) {
        next = prev1 + prev2;
        prev1 = prev2;
        prev2 = next;
    }

    return next;

};

// Do not edit below this line
module.exports = fibonacci;
