const reverseString = function(str) {
    let strArr=new Array();
    let res='';
    for(let i=0;i<str.length;i++){
        strArr.push(str[i]);
    }
    for(let i=strArr.length-1; i>=0;i--){
        res+=strArr[i];
    }
    return res;

    //way better solution;
    //return string.split('').reverse().join('');
};

// Do not edit below this line
module.exports = reverseString;
