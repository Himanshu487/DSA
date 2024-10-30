function slidewindow(k,arr){

    let sumVal =0;
    
    for(let i=0 ; i<k;i++){
    sumVal += arr[i];
    }
    
    console.log(sumVal,"sumVal");
    
    let valCheck = 0;
    
    valCheck = sumVal;
    
    for(let i=k; i<arr.length;i++){
    
     sumVal += arr[i] - arr[i-k];
    
     newVal = Math.max(sumVal,valCheck);
    
    }
    
    return console.log(newVal,"newVal");
    
    }
    
    let arr = [3,4,5,6,7,7,7,8,10];
    slidewindow(4,arr);