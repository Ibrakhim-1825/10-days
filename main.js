// let arr = [ 1,2,5,6,7,9,40,15,4];

// let min = arr[0];
// let max = arr[0];

// const x = (a) => {
//     for(let i = 0; i<arr.length; i++ ){
//         if(a[i] < min){
//             min = a[i];
//         }else if(a[i] > max){
//             max = a[i];
//         }
//     }
//     return {
//         min,
//         max
//     }
// }
// console.log(x(arr));

// 2-masala
// let arr = [5, 3, 9, 1, 7 , 30 ,3 ,58];

// function katta2(arr) {
//     let katta1 = arr[0]; 
//     let katta2 = arr[0]; 

//     for (let i = 0; i < arr.length; i++) {
//         if (arr[i] > katta1) {
//             katta2 = katta1;  
//             katta1 = arr[i]; 
//         } else if (arr[i] > katta2 && arr[i] !== katta1) {
//             largest2 = arr[i]; 
//         }
//     }

//     return [katta1, katta2]; 
// }

// console.log( katta2(arr));

// 3-masala 

// let arr = [1, 12, 4, 3, 9, 7, 25, 14, 13]

// const toqJuft = (a) => {
//     let toq = 0;
//     let juft = 0;
//     for (let i = 0; i < arr.length; i++) {
//         if (a[i] % 2 === 0) {
//             juft += 1;
//         } else if(a[i] % 2 === 1) {
//             toq += 1;
//         }
//     }
//     return [juft, toq];
// }

// console.log(toqJuft(arr));


// // 4-masal 

// let result = sum(1, 2, 3, 4, 5);
// function sum(...nums) {
//     return nums.reduce((total, num) => total + num, 0); 
// }

// console.log( result); 

// 5-masala 
// let obj = {a: "ibrohim" , b: "xasan" , c: "sarvar"};

// function key(obj) {
//     return Object.keys(obj);
// }

// function value(obj) {
//     return Object.values(obj);
// }

// let keys = key(obj);
// let values = value(obj);

// console.log(keys); 
// console.log(values); 

// 6-masala 


// function inputNumber() {
//     const raqamlar= []; 

//     while (true) {
//         const input = prompt("Iltimos, raqam kiriting:");
//         if (isNaN(input)) {
//             break; 
//         }
//         raqamlar.push(Number(input)); 
//     }
//     return raqamlar; 
// }

// console.log(inputNumber());





// darsdagi masalalar 1

//  let arr = [ 1,2,5,6,7,9,40,15,4];

// let max = arr[0];

// const x = (a) => {
//     for(let i = 0; i<arr.length; i++ ){
//         if(a[i] > max){
//             max = a[i];
//         }
//     }
//     return max;
// }
// console.log(x(arr));


// 2-masala 
// let array = [1, 2, 3, 4, 5];

// function deletes(arr, value) {
//     const index = arr.indexOf(value); 
//     if (index !== -1) {
//         arr.splice(index, 1); 
//     }
//     return arr;
// }

// let result = deletes(array, 3);
// console.log( result); 

// 3-masala 

// const string =  " 1 ,3  ,4  ,6  ,d, f,r ,9" ;
// function x(str) {
//     const numbers = str.match(/\d+/g); 
//     return numbers ? numbers.map(Number) : [];
// }

// let result = x(string);
// console.log(result); 
// 4-masala 








