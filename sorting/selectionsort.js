// let arr = [9,4,6,2,5];
// let n = arr.length;

// for(let i = 0; i<n-1; i++){
//     let mini = i;
//     for( let j=i; j<n; j++){
//         if(arr[j] < arr[mini]){
//             mini=j;
//         }
//     }   
//     temp= arr[i];
//     arr[i]=arr[mini];
//     arr[mini]=temp;
// }

// console.log(arr);


let arr = [5,1,3,2,10];
let n = arr.length;

for(i=0; i<n-1; i++){
    let mini = i;
    for(j=i; j<n; j++){
        if(arr[j] < arr[mini]){
            mini=j;
        }

    }
    temp= arr[i];
    arr[i]=arr[mini];
    arr[mini]=temp;
}

console.log(arr);