let arr = [
    [11, 12, 13, 14],
    [15, 16, 17, 18],
    [19, 20, 21, 22],
    [23, 24, 25, 26]
]

var result = [
    [],[]
]

let l = arr.length / 2;

for (let i = 1; i <= l; i++) {
    for (let j = 1; j <= l; j++) {
        result[i-1][j-1] = arr[i][j];
    }
}
console.log(result);