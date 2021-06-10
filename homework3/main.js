//bai 1
let gloss = {
    debug: "The process of figuring out why your program has a certain error and how to fix it",
    done: "When your task is completed; the only thing you have to do is to wait for users to use it (no additional codes or actions needed)",
    defect: 'The formal word for "error"',
    pm: "The abbreviated term for Project Manager, the person overseeing an entire project",
    uiux:'UI means User Interface, UX means User Experience, they are the process defining your how your product looks and feels'

}

while(true){
    alert('Hi there, welcome to the SOY_DEV dictionary');
    let input = prompt('Enter a word');
    let userWord = input.toLowerCase();
    if(!input){break;}
    if(gloss[userWord] === undefined){
        let newWord = prompt(`We could not find your word ${userWord}, please leave us with an explantion`).toLowerCase();
        gloss[userWord]=newWord;
        alert(`Done!`);
    }
    else{
        alert(`${input}\n${gloss[userWord]}`);
    }

}
//bai 2


const product = {
    name:'xiaomi rice cooker',
    price:'1700',
    brand:'Xiaomi',
    color:'white'
};
    for (let x in product) {
    console.log(x+': '+ product[x]);
    }
    

//bai 3

let products =[
    { name: 'Xiaomi portable charger 20000mah', brand: 'Xiaomi', price: 480, color: 'White', category: 'charger' },
    { name: 'VSmart Active 1', brand: 'VSmart', price: 5487, color: 'Black', category: 'phone' },
    { name: 'IPhone X', brand: 'Apple', price: 21490, color: 'Gray', category: 'phone' },
    { name: 'Samsung galaxy S10', brand: 'Samsung', price: 8490, color: 'Black', category: 'phone' }

    
    
]
//3.1
for (let x=0;x<products.length;x++){
    console.log(`${products[x].name}\n${products[x].price}\n----------------------------------`);
}
//3.2

for (let x=0;x<products.length;x++){
    console.log(`#${x+1}: ${products[x].name}\nPrice: ${products[x].price}`)
}

let userInput =Number(prompt('Enter a product position:'));
for (let i in products[userInput-1]){
console.log(i+':'+products[userInput-1][i]);
}
//3.3
let userCat = prompt('Enter a category:').toLowerCase();
for (let x=0;x<products.length;x++){
    if (products[x].category.includes(userCat)){
    console.log(`${products[x].name}\n Price: ${products[x].price}\n-------------------------------------`);
    } 
}
//3.4
products[0].provider = [`phukienzero`, `dientuccc`];
products[1].provider = [`tgdd`, `ddghn`, `vhStore`];
products[2].provider = [`tgdd`];
products[3].provider = [`tgdd`];

for (let x=0;x<products.length;x++){
    console.log(`#${x+1} ${products[x].name}\n Price: ${products[x].price}\n Providers: ${products[x].provider}\n----------------------------------`);
}

//bai 3.5

let userPro = prompt('Enter a provider:').toLowerCase();
for (let x=0;x<products.length;x++){
    if (products[x].provider.includes(userPro)){
        for (let i in products[x]){
        console.log(`${i}: ${products[x][i]}`);
        }
    }   
}