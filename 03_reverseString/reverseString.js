const reverseString = function(string) {
    let words_arr = string.split(' ').reverse();

    for (let i in words_arr) {
        i.split('').reverse().join();
        console.log(i);
    }

    return words_arr;
};

// Do not edit below this line
module.exports = reverseString;
