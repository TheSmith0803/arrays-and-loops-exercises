const repeatString = function(string, num) {
    let count = 1;
    let arr = [];

    while (count < num) {
        arr.push(string);
        count++;
    }

    step1 = arr.join();
    final = step1.replaceAll(",", "");

    return final;
};

// Do not edit below this line
module.exports = repeatString;
