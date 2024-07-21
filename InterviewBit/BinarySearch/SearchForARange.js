const arr =[ 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 3, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 4, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 5, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 6, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 7, 8, 8, 8, 8, 8, 8, 8, 8, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 9, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10, 10 ]

function search(arr,num){
    let low=0;
    let high=arr.length-1;
    let n=arr.length;
    let firstIndex=-1;
    let lastIndex=-1;
    const result = [-1,-1]
    if(n<2){
        if(arr[0]===num) return [0,0]
        else return result
    }
    while(low<=high){
        let mid = Math.floor((low+high)/2);
        if(arr[mid]<=num){
            low=mid+1;
        }
        else {
            high=mid-1;
        }
        if(arr[mid]===num){
            lastIndex=mid;
        }
    }
    low=0;
    high=arr.length-1;
    
    while(low<=high){
        let mid = Math.floor((low+high)/2);
        if(arr[mid]>=num){
            high=mid-1;
        }
        else {
            low=mid+1;
        }

        if(arr[mid]===num){
            firstIndex=mid;
        }
    }
    result[0]=firstIndex;
    result[1]=lastIndex;
    return result;
}

const ans = search(arr,10)
console.log(ans)