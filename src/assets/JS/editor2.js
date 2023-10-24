// ---------Code-testing-script-File-----------
// Try and test new changes here
// ============================================
function sortedArray(arr){
    
    let a =[];
    let b =[];
    let rslt =[];
    let i=0,j=0;
    while (arr[i]<0){
        let val = -1*arr[i];
        a.push(val*val);
        console.log(arr[i]);
        i++;
    }
    a.reverse();
    while(i<arr.length){
        b.push(arr[i]*arr[i]);
        i++;
    }
    i=0;
    while(i<a.length && j<b.length){
        if(a[i]<b[j]){
            rslt.push(a[i]);
            i++;
        }
        else{
            rslt.push(b[j]);
            j++;
        }
    }
    while(i<a.length){
        rslt.push(a[i]);
        i++;
    }
    while(j<b.length){
        rslt.push(b[j]);
        j++;
    }
   return rslt;   
}
console.log(sortedArray([-10, -5, 0, 5, 10]))