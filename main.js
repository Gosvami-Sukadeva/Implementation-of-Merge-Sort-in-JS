function merge(left, right) {
  var result = [];
  var lLen = left.length;
  var rLen = right.length;
  var l = 0;
  var r = 0;
  while (l < lLen && r < rLen) {
    if (left[l] < right[r]) {
      result.push(left[l++]);
    } else {
      result.push(right[r++]);
    }
  }
  console.log(result.concat(left.slice(l).concat(right.slice(r))));
  // remaining part needs to be added to the result
  return result.concat(left.slice(l).concat(right.slice(r)));
}

function mergeSort(arr) {
  var len = arr.length;
  if (len < 2) {
    return arr;
  }
  var mid = Math.floor(len / 2);
  var left = arr.slice(0, mid);
  var right = arr.slice(mid);
  //send left and right to the mergeSort to broke it down into pieces
  //then merge those
  console.log(mid);
  console.log(left);
  console.log(right);

  return merge(mergeSort(left), mergeSort(right));
}

var arr = [6, 5, 3, 1, 8, 7, 2, 4];
console.log(arr);
mergeSort(arr);
