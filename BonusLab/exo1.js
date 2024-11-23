function swap(a,b){
    b = [a, a = b][0];
}

function arrayConcat(arr1,arr2,arr3){
    const arr4 = arr1.concat(arr2,arr3)
    console.log(arr4);
}
function arrspread (str){
    const str1= [...str]
    console.log(str1)
}
// case 1 : args = [3, 'A', 'B', 'C']
// case 2 : args = []
// case 3 : args = ['c', 'd']
