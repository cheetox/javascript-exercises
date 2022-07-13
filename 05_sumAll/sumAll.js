const sumAll = function(start,finish) {
    let sum=0;
    if(typeof start==='number' && typeof finish==='number'){
        if(start>=0){
            if(start>finish){
                while(start>=finish){
                    sum+=start;
                    start--;
                }
            }else{
                while(start<=finish){
                    sum+=start;
                    start++
                }
            }
            return sum;
        }else{
            return'ERROR';
        }
        
    }
    else  {
        return'ERROR';
    }
    
};

// Do not edit below this line
module.exports = sumAll;
