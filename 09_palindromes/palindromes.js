const palindromes = function (str) {
    const wordsClear=str.toLowerCase().replace(/[.,\/#!$%\^&\*;:{}=\-_`~()]/g,"").split(' ').join('');
    return wordsClear.split('').reverse().join('')===wordsClear ? true:false;
     
};

// Do not edit below this line
module.exports = palindromes;
