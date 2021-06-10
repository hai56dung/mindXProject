
// //bai 1

// for (let i=0;i<=6;i++){
//     console.log(i);
// }

// //bai 1.2

// let n = Number(prompt('Hãy nhập số'));

// for (let i=0;i<n;i++){
//     console.log(i);
// }

// //bai 1.3

// let m = Number(prompt('Hãy nhập số'));
// for (let i=3;i<m;i++){
//       console.log(i);
// }

// //bai 1.4


// let q = Number(prompt('Hãy nhập n'));

// for (let i = Number(prompt('Hãy nhập c'));i<q;i++){
//     console.log(i);
// }



// //bai 1.5

// let w = Number(prompt('Hãy nhập n'));
// let i=Number(prompt('Hãy nhập c'))
// let b = Number(prompt('Hãy nhập s'))
// for(i ;i<w;i=i+b){
//     console.log(i)
// }



// //bai 2

// let number = Number(prompt('Hãy nhập n'));
// let fact=1;

// if (number<0){
//    alert(`Số dương bạn nhé`);
// }

// else if (number===0){
//    console.log('Giai thừa của 0 là 1');

// }

// else{
// for(let i=1;i<=number;i++){
//     fact=fact*i;
// }

// console.log(`Giai thừa của ${number} là ${fact}`);
// }

// //bai 3

// let yourAge = Number(prompt('Bạn bao nhiêu tuổi rồi?'));
// if (yourAge>=14){
//     alert('ngon');

// }
// else{
//     alert('no');
// }

// //bai 4

// let x = Number(prompt('x ='));

// if (x%2 == 0){
//     alert('x là số chẵn');
// }
// else {
//     alert('x là số lẻ');
// }

//bai 5

myUsername = prompt('Username:');

myPassword = prompt('Password:');

if (myUsername !='mindx'){
    alert('Wrong username');
}
else if (myPassword !='codethechange'){
    alert('Wrong password');
}
else{
    alert('Login success!')
}

