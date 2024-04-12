// function checkarr2IsSquareOfarr1(arr1, arr2) {
//     if(arr1.length !== arr2.length) {
//         return false;
//     }
//     for(let i = 0; i < arr1.length; i++) {
//         let currentIndex = arr2.indexOf(arr1[i] ** 2);
//         if(currentIndex === -1) {
//             return false;
//         }
//         arr2.splice(currentIndex, 1)
//     }
//     return true;
// }

// Refactored
// function checkarr2IsSquareOfarr1(arr1, arr2) {
//     if(arr1.length !== arr2.length) {
//         return false;
//     }
//     let frequencyCounter1 = {};
//     let frequencyCounter2 = {};
//     for(let i of arr1) {
//         frequencyCounter1[i] = (frequencyCounter1[i] || 0) + 1;
//     }
//     for(let i of arr2) {
//         frequencyCounter2[i] = (frequencyCounter2[i] || 0) + 1;
//     }
//     for(let key in frequencyCounter1) {
//         if(!(key**2 in frequencyCounter2)) {
//             return false;
//         }
//         if(frequencyCounter1[key] !== frequencyCounter2[key**2]) {
//             return false;
//         }
//     }
//     return true;
// }

// console.log(checkarr2IsSquareOfarr1([2, 1, 9], [1, 4, 81]));

// Anagram
function anagram(str1, str2) {
    if(str1.length !== str2.length) {
        return false;
    }
    let frequencyCounter1 = {};
    let frequencyCounter2 = {};
    for(let i of str1) {
        frequencyCounter1[i] = (frequencyCounter1[i] || 0) + 1;
    }
    for(let i of str2) {
        frequencyCounter2[i] = (frequencyCounter2[i] || 0) + 1;
    }
    for(let key in frequencyCounter1) {
        if(!(key in frequencyCounter2)) {
            return false;
        }
        if(frequencyCounter1[key] !== frequencyCounter2[key]) {
            return false;
        }
    }
    return true;
}

console.log(anagram("stra", "astr"));