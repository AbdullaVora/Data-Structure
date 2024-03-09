let arr = [80, 50, 10, 30, 20, 40];

const ArrDivide = ((arr, start, end) => {

    if (start < end) {
        let mid = Math.floor((start + end) / 2);

        ArrDivide(arr, start, mid);
        ArrDivide(arr, mid + 1, end);
        MergeArr(arr, start, mid, end);
        // console.log('start = ' + start + ' ', 'end = ' + end + ' ', 'mid = ' + mid);
    }

});

const MergeArr = ((arr, startpoint, midle, endpoint) => {

    console.log('start = ' + startpoint + ' ', 'mid = ' + midle + ' ', 'end = ' + endpoint);

    let mergeArr = [];
    let si = startpoint;
    let ei = midle + 1;
    let index = startpoint;


    console.log(si, ei);
    while (si <= midle && ei <= endpoint)
        if (arr[si] < arr[ei]) {
            mergeArr[index++] = arr[si++];
            console.log(mergeArr);
        }
        else {
            mergeArr[index++] = arr[ei++];
            console.log(mergeArr);
        }



    while (si <= midle) {
        mergeArr[index++] = arr[si++];
        console.log(mergeArr);

    }

    while (ei <= endpoint) {
        mergeArr[index++] = arr[ei++];
        console.log(mergeArr);

    }

    for (let i = startpoint; i <= endpoint; i++) {
        arr[i] = mergeArr[i];
    }

    console.log(arr);
});

console.log(arr);
ArrDivide(arr, 0, arr.length - 1);