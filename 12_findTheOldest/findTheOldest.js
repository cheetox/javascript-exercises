const findTheOldest = function(arr){
    const oldest=arr.sort((a,b)=>{
        let aAge=0;
        let bAge=0;
        if(a.yearOfDeath===undefined){
            const currentYear=(new Date()).getFullYear();
            aAge=currentYear-a.yearOfBirth;
            if(b.yearOfBirth===undefined){
                bAge=currentYear-b.yearOfBirth;    
            }else{
                bAge=b.yearOfDeath-b.yearOfBirth;
            }
           
        }else if(b.yearOfDeath===undefined){
            const currentYear=(new Date()).getFullYear();
            bAge=currentYear-b.yearOfBirth;
            if(a.yearOfBirth===undefined){
                aAge=currentYear-a.yearOfBirth;    
            }else{
                aAge=a.yearOfDeath-a.yearOfBirth;
            }
            
        }else{
            aAge=a.yearOfDeath-a.yearOfBirth;
            bAge=b.yearOfDeath-b.yearOfBirth;
        }
        return aAge>bAge ? -1:1;
    });
    return oldest[0];
}

// Do not edit below this line
module.exports = findTheOldest;
