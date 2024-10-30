function windowSlide(k,arr){

    let sumAll = 0;
    let checkVal = 0;
    for(let i=0; i<k; i++){
    
    sumAll += arr[i];
    
    }
    
    let avSum = sumAll/k;
    
    checkVal = avSum;
    
    let val=0;
    let finalAvg=0;
    
    for(let i =k; i<arr.length; i++){
    
    sumAll += arr[i] - arr[i - k];
    
    finalAvg = sumAll/k;
    
    val = Math.max(finalAvg,checkVal)
    
    }
    
    return console.log(val);
    
    }
    
    
    let arr = [2,3,4,5,6,6,7,8,9,10,11,22,2];
    
    windowSlide(4,arr);