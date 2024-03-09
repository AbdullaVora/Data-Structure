let arr = [3, 4, 5, 2, 3, 4, 5, 6];
let temp = []

for (let i = 0; i < arr.length; i++) {

    let flag = false;

    for (let j = 0; j < temp.length; j++) {
        if(arr[i] === temp[j]){
            flag = true;
            break;
        }
    }

    if(!flag){
        // temp[i] = arr[i];
        temp.push(arr[i])
    }
}

console.log(temp);