let arr = [
    [0, 0, 0, 0],
    [1, 1, 1, 1],
    [2, 2, 2, 2],
    [3, 3, 3, 3],
    // [4, 4, 4, 4],
];

for (let i = 0; i < arr.length; i++) {
    for (let j = i+1; j < arr.length; j++) {
        var temp = arr[i][j]
        arr[i][j] = arr[j][i]
        arr[j][i] = temp;
        console.log(arr);
    }
}