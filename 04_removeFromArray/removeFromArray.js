const removeFromArray = function(arr,...args) {
    args.forEach(element => {
        //more elegant !args.includes(item)
        
        for (let index = 0; index < arr.length; index++) {
            if(arr[index]===element){
                arr.splice(index,1);
                break;
            }
            
        }
    });
    
    return arr;
};

// Do not edit below this line
module.exports = removeFromArray;
