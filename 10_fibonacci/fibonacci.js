const fibonacci = function(num) {

    let arr = [0,1];
   
    if(num<0){
        return "OOPS"
    }
    else if(num===0){
        return 0
    }
    else if(num===1){
        return 1
    }
    for (let index = 0; index < num; index++) {
        let nextVal = arr[arr.length - 1] + arr[arr.length - 2];
        arr.push(nextVal)
        
    }

    return arr[num]
    
};

// Do not edit below this line
module.exports = fibonacci;
