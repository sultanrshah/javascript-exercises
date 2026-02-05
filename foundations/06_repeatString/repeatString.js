const repeatString = function(word, amount) {
    let string = "";
    if (amount < 0) {
        return "ERROR";
    } else {
        for (let i = 0; i < amount; i++) {
            string += word;
        }
    }
};

// Do not edit below this line
module.exports = repeatString;