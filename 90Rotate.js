let arr = [
  [1, 2, 3, 4],
  [5, 6, 7, 8],
  [1, 2, 3, 4],
  [5, 6, 7, 8],
];

for (let i = 0; i < arr.length; i++) {
  for (let j = i + 1; j < arr.length; j++) {
    var temp = arr[i][j];
    arr[i][j] = arr[j][i];
    arr[j][i] = temp;
    // console.log(arr);
  }
}

for (let i = 0; i < arr.length / 2; i++) {
  for (let j = 0; j < arr.length; j++) {
    let temp = arr[i][j];
    arr[i][j] = arr[arr.length - i - 1][j];
    arr[arr.length - i - 1][j] = temp;
    console.log(arr);
  }
}
console.log(arr);
