function find(A,B){
    let low=0;
    let high=A.length-1;
    let firstIndex=-1;
    let lastIndex=-1;
    while(low<=high){
        let mid = Math.floor((low+high)/2)
        if(A[mid]===B){
            if(A[mid-1]!==B){
                firstIndex=mid
                break;
            }
            else{
                high=mid-1;
            }
        }
        else if(A[mid]<B){
            low=mid+1
        }
        else{
            high=mid-1
        }
    }

    low=0;
    high=A.length-1;

    while(low<=high){
        let mid = Math.floor((low+high)/2)
        if(A[mid]===B){
            if(A[mid+1]!==B){
                lastIndex=mid
                break
            }
            else{
                low=mid+1;
            }
        }
        else if(A[mid]<B){
            low=mid+1
        }
        else{
            high=mid-1
        }
    }
    if(lastIndex===-1 || firstIndex===-1)
        return 0
    return lastIndex+1-firstIndex
} 

const ans = find([1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3, 4, 4, 5, 5, 5, 5, 5, 6, 6, 6, 7, 7, 8, 8, 8, 8, 9, 9, 10, 10, 10],1)
console.log(ans)