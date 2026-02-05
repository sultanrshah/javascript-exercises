const sumAll = function(start, end) {
    let final = 0;
    const bigNum = Math.max(start, end);
    const smallNum = Math.min(start, end);

    if (start < 0 || end < 0) {
        return "ERROR";
    } else if (start % 1 !== 0 || end % 1 !== 0) {
        return "ERROR";
    } else if (typeof start != "number" || typeof end != "number") {
        return "ERROR";
    }

    for (let i = smallNum; i <= bigNum; i++) {
        final += i;
    }

    return final
};

// Do not edit below this line
module.exports = sumAll;
