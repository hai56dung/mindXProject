// //bai 1

// let shopList = ['Jeans','T-Shirt','Socks'];
//     while (true){
//         let userInput = prompt('Hi there, welcome to the panel shop, what do you want (C,R,U.D)?');
//         let input = userInput.toLowerCase();
//      if (input =='c'){
//         let newInput = prompt('Enter the name of the new item:');
//         shopList.push(newInput);
//         alert('Done!')
//      } else if (input =='r'){
//         console.log('The current items are:');
//         for (let x=0;x<shopList.length;x++){
//             console.log(`${x+1}. `+shopList[x]);
//         }
//      } else if (input =='u'){
//          let position = Number(prompt('Enter the position you want to update'));
//          let newItem = prompt('Enter a new name');
//          shopList[position-1]=newItem;
//          alert('Done!')
//      } else if (input =='d'){
//          let positionDelete = Number(prompt('Enter the position you want to delete:'))
//          shopList.splice(positionDelete-1,positionDelete-1);
//          alert('Done!')
//      } else{
//         alert('This command is not supported');
//         break;
//     }

// }

// //bai 2.1
// let sum = 0;
// let arr = [3, 4, 6, -9, 10, -88, 2];

// for (let x=0;x<arr.length;x++){
//     sum += arr[x]

// } console.log(sum);
// // 2.2
// let positivearray =[];
// for (let x=0;x<arr.length;x++){
//     if (arr[x]>0){
//         positivearray.push(arr[x]);
//     } 
    
// } console.log(positivearray);

// //sai de bai nhe
// /*
// let count =0;
// for (let i=0;i<arr.length;i++){
//     if (arr[i]>0){
//         count++
//     }
// } console.log(count);
// */

// 2.3
// let searchNumber = Number(prompt('Enter a number:'));
// let i = arr.indexOf(searchNumber);
// if (i<0){
//     alert(`${searchNumber} is not found on my array`);
// } else {
//     alert(`${searchNumber} is found in my array at index ${i}`);
// }

// /*
// let foundNumber = Number(prompt());
// let foundIndex = -1;
// for (let i=0;i<arr.length;i++){
//     let number = arr[i];
//     if (number === foundNumber){
//         alert(`${foundNumber} is found at index ${i}`);
//         foundIndex++;
//         break;
//     }
// }
// if (foundIndex === -1){
//     alert("ko tim thay")
// }

// */

// //bai 3
// {
// let userStr = prompt("Please input numbers");
// let userArray = userStr.split(" ");
// console.log(userArray);
// }
// //bai 4
// let userStr = prompt("Please input numbers");
// let userArray = userStr.split(",");
// let min = Math.min.apply(Math, userArray)
// alert (`The smallesr number of the array is ${min}`)
//bai 5
let list = prompt("Nhap danh sach:");
let newNames =[];
let listOne = list.split(",");
for (let i = 0; i < listOne.length; i++) {
    let listTwo = listOne[i].toUpperCase();
    newNames.push(listTwo);
} alert(newNames.join(', '));
//6
// let numbers = prompt(`Nhap day so:`);
// let arrNumbers = numbers.split(',').map(Number);
// console.log(arrNumbers);
// for (let i = 0; i < arrNumbers.length; i++) {
//     if (arrNumbers[i] % 2 == 1) {
//         arrNumbers.splice(i, 1);
//     }
// }
// alert(arrNumbers);
