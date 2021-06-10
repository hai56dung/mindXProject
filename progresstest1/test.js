{
    //bai1
    let str_input = prompt("Please input something:");
    let newString = "";

    for (let x = str_input.length - 1; x > -1; x--) {
        newString += str_input[x]
    }
    console.log(newString);

}

{
    //bai2

    function captialize(string) {
        return string[0].toUpperCase() + string.slice(1);
    }

    let str = prompt("");
    let testArr = str.split(" ");
    let arrLength = testArr.length;
    let newStr = "";

    for (let x = 0; x < arrLength; x++) {
        if (x == 0) {
            let j = captialize(testArr[x]);
            newStr += `${j} `;
        } else if (x < arrLength - 1) {
            newStr += `${testArr[x]} `;
        } else {
            let j = captialize(testArr[x]);
            newStr += `${j} `;
        }

    }
    console.log(newStr);
}

{
    //bai 3
    let str = prompt("");
    let arr = str.split(",")
    var seen = [];
    var output = [];
    var len = arr.length;
    var j = 0;
    for (let i = 0; i < len; i++) {
        let item = arr[i];
        if (seen[item] != 1) {
            seen[item] = 1;
            output[j] = item;;
            j++;
        }
    }
    console.log(output);
}

//bai 4
let database = [{
        name: "Nguyen Hoang A",
        age: 22,
        salary: 1,
        title: "lecturer"
    },
    {
        name: "Hoang A Nguyen",
        age: 23,
        salary: 2,
        title: "Head of security"
    },
    {
        name: "A Nguyen Hoang",
        age: 24,
        salary: 3,
        title: "Manager"
    }
]
while (true) {
    var num = Number(prompt("Hi there, welcome to admin panel, what do you want?\n" +
        "1. Look up\n" +
        "2. Create\n" +
        "3. Update\n" +
        "4. Delete\n" +
        "5. Exit\n" +
        "Enter number to choose a panel!"));
    if (num == 5)
        break;
    //read
    if (num == 1) {
        let input = Number(prompt("Look up by employee number:"));
        for (let x in database[input - 1]) {
            console.log(`${x}: ${database[input-1][x]}`);
        }
    }

    //add

    if (num == 2) {
        let i = database.length;

        database.push({})

        database[i].name = prompt("Enter name:");
        database[i].age = Number(prompt("Enter number:"));
        database[i].salary = Number(prompt("Enter salary:"));
        database[i].title = prompt("Enter title");
        i++;
        alert("done!")
        console.log(database);
    }
    //update
    if (num == 3) {
        let input = Number(prompt("Enter the employee number you want to update:"));
        let updateProp = prompt("Enter the property you want to update").toLowerCase();
        database[input - 1][updateProp] = prompt("Update property");
        alert("Done!");
        console.log(database);
    }
    //delete
    if (num == 4) {

        let input = Number(prompt("Enter an employee number you want to delete:"));
        database.splice(Number - 1, 1);
        alert("Done!");
        console.log(database);
    }
}
//bai 5 
let input = prompt("Enter a date");

let date = input.split("/");
let day = Number(date[0]);
let month = Number(date[1]);
let year = Number(date[2]);

if ((month == 4 || month == 6 || month == 9 || month == 11) && day <= 30 && day >= 1 && day > 0) {
    alert("Valid date");
    if (day == 30) {

    }

} else if ((month == 1 || month == 3 || month == 5 || month == 7 || month == 8 || month == 10 || month == 12) && day <= 31 && day >= 1 && year > 0) {
    alert("Valid date");

} else if (month == 2 && day <= 28 && day >= 0 && year > 0) {
    alert("Valid date");

} else if (month == 2 && (year % 4 == 0 || (year % 100 == 0 && year % 400 == 0)) && day <= 29 && day >= 1) {
    alert("Valid date");

} else {
    alert("Invalid date")
}