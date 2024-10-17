let arr = [9,1,7,6,2,4,10,5];

let n = arr.length;

for(i=1; i<n; i++){
    for(j=0; j<n-i; j++){
        if(arr[j] >  arr[j+1]){
            temp=arr[j];
            arr[j]=arr[j+1];
            arr[j+1]=temp;
        }
    }
}

console.log(arr);