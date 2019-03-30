// Input :  arr1[] = { 1, 3, 4, 5}  
//          arr2[] = {2, 4, 6, 8}
// Output : arr3[] = {1, 2, 3, 4, 5, 6, 7, 8}
// Siddharth Parmar 03/29/2019

var arr1 = [1, 3, 4, 5];
var arr2 = [2, 4, 6, 8] 

function sortArrays(arr1, arr2) {
  // set up our mergedArray
    var mergedArray = [];
    var currentIndexArr2 = 0;
    var currentIndexArr1   = 0;
    var currentIndexMerged = 0;
    while (currentIndexMerged < (arr1.length + arr2.length)) {
        var isArr1Exhausted = currentIndexArr1 >= arr1.length;
        var isArr2Exhausted = currentIndexArr2 >= arr2.length;
        if (!isArr1Exhausted && (isArr2Exhausted ||
                (arr1[currentIndexArr1] < arr2[currentIndexArr2]))) {
            mergedArray[currentIndexMerged] = arr1[currentIndexArr1];
            currentIndexArr1++;
        } else {
            mergedArray[currentIndexMerged] = arr2[currentIndexArr2];
            currentIndexArr2++;
        }
        currentIndexMerged++;
    }
    return mergedArray;
}
console.log(sortArrays(arr1,arr2));

//O(n) time and O(n) additional space