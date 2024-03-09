let arr = [3, 4, 5, 6, 1, 8];

const bubble = ((arr, l) => {

    for (let i = 0; i < l - 1; i++) {
        for (let j = 0; j < l - 1; j++) {
            if(arr[j] < arr[j+1]){
                let temp  = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;   
            }
        }
    }

    console.log(arr);
})

bubble(arr, arr.length)