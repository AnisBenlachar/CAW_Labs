//1
const setOne = (arr) => {
    return arr.filter((value, index, self) => self.indexOf(value) === index);
};
console.log(setOne([4, 5, 6, 1, 2, 4, 3, 1, 5, 2])); 

//2
const getRidOf = (tab, ...val) => {
    return tab.filter(element => !val.includes(element));
};
console.log(getRidOf(['a', 'm', 'c', 'l', 'e', 'f', 'g'], 'b', 'e', 'x'));
  
