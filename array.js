// Write an application that takes an array of values and determines the highest, lowest and median values
// const maxNumberArray = (array) =>{
//     let maxNumber = array[0];
//     for(let i = 1; i < array.length; i++){
//         if(array[i] > maxNumber){
//             maxNumber = array[i]
//         }    }
//     return maxNumber;
//     }                                                                                                           
// console.log(maxNumberArray([10, 15, 20]));

// const minNumberArray = (array1) =>{
//     let minNumber = array1[0];
//     for(let i = 1; i < array1.length; i++){
//         if(array1[i] < minNumber){
//             minNumber = array1[i]
//         }
//     }
//     return minNumber
// }
// console.log(minNumberArray([13, 45, 23]))



// const ages = [23, 19, 31, 41, 35, 42, 6, 90, 12];

// let highestAge = ages[0];

// for (let i = 1; i < ages.length; i++) {
//   console.log(`Comparing ages[${i}] and current highestAge: ${highestAge}`);
//   console.log(`if ${ages[i]} > ${highestAge}`);

//   if (ages[i] > highestAge) {
//     highestAge = ages[i];

//     console.log(`then: highestAge = ${ages[i]}`);
//     console.log(`\n`);
//   } else {
//     console.log(`Going to next iteration\n`);
//   }

// }

// console.log(`highestAge is ${highestAge}`);

// sum all element in an array 
// function sumArray(array){
// const ourArray = [2, 4, 6, 8, 9, 20]
// let sum = 0;

// for(let i =0; i < ourArray.length; i += 1){
//     sum += ourArray[i]
// }
// return sum;

// }
// console.log(sumArray())

// find the least number in a given array
function minNumber(array){
    let minNumber = array[0];
    for(let i = 0; i < array.length; i++){
        if(array[i] < minNumber){
            minNumber = array[i];
        }
        
    }
    return minNumber;
}
console.log(minNumber([3,6,10,50, 1]));