const reverseString = function(user_input) {
    let words_arr = user_input.split(' ').reverse();

    for (let i = 0; i < words_arr.length; i++) {
        words_arr[i] = words_arr[i].split('').reverse().join().replaceAll(',', '');
    }
    
    words_arr = words_arr.join(' ');

    return words_arr;
};

// Do not edit below this line
module.exports = reverseString;


