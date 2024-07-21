function find(arr,num){
    let low=0;
    let high=arr.length-1;
    let n = arr.length;
    let lastIndex=-1;
    debugger
    while(low<=high){
        let mid = Math.floor((low+high)/2)
        let next = (mid+1+n)%n
        if(arr[mid]===num || arr[mid]<num){
            if(arr[next]!==num && arr[next]>num){
                lastIndex=mid
                break
            }
            else{
                low=mid+1;
            }
        }
        else if(arr[mid]<num){
            low=mid+1;
        }
        else{
            high=mid-1;
        }
    }
    if(lastIndex===-1) return n;
    return lastIndex+1;
}

const ans = find([ 2 ],1)
console.log(ans)