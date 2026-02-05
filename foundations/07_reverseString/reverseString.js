const reverseString = function(input) {
    let final = "";
    let arr = [];
    for (let i = 0; i < input.length; i++) {
        arr.push(input[i]);
    }

    for (let a = 0; a < input.length; a++) {
        final += arr.pop();
    }
    return final;
};

// Do not edit below this line
module.exports = reverseString;
