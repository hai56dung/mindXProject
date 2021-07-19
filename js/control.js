let userEl = document.querySelector(".txtuser");
let userSignEl = document.querySelector(".txtuserSign");
let passEl = document.querySelector(".txtpass");
let passSignEl = document.querySelector(".txtpassSign");
let submit = document.querySelector(".submit");
let showPassEl = document.querySelector("#showPass");
let btnSign = document.querySelector(".sign");



let stadiumApi = '/json/db.json';

function start() {
    getStadium(checkLogin);
}

start();

function createCustomer(data) {
    let options = {
        method: 'POST',
        body: JSON.stringify(data)
    };
    fetch(stadiumApi, options).then(function(response) {
        return response.json();
    }).then(callback);
}

function signForm() {
    if(window.localStorage){
        localStorage.getItem("user",userSignEl);
        localStorage.getItem("pass",passSignEl);
        addEventListener
    }else{
        
    }
}


//Tạo html Đăng ký
function showSignForm(add) {
    let showSign = document.querySelector(".form");
    showSign.innerHTML = `
    <h1 class="title py-4">Đăng Ký</h1>
    <div class="col py-4"><input type="text" class="form-control txtuserSign" placeholder="Username"></div>
    <div class="col py-4"><input type="password" class="form-control txtpassSign" placeholder="Password"></div>
    <button class="btnSign btn-success submit px-4">Đăng Ký</button>
    <p class="message pt-4 text-danger"></p>
    `;
}


//hiển thị mật khẩu
function checkPass() {
    if(showPassEl.checked == true){
        passEl.setAttribute( 'type', 'text' );
        console.log(passEl.value);
    }else{
        passEl.setAttribute( 'type', 'password' );
    }
}


function getStadium(callback) {
    fetch(stadiumApi).then(function(response) {
        return response.json();
    }).then(data => callback(data.customer))
}

async function start() {
    const data = await fetch(stadiumApi).then((res) => res.json());
    checkLogin(data.customer);
  }
  
start();


function checkLogin(customers){
    let html = customers.map(function(customer) {
    if(window.localStorage){
        localStorage.setItem("user",`${customer.NameLogin}`);
        localStorage.setItem("pass",`${customer.password}`);

        let user = localStorage.getItem("user");
        let pass = localStorage.getItem("pass");

        let message = document.querySelector(".message");
        console.log(userEl.value);
        submit.addEventListener("click", function(){
            if(user == userEl.value && pass == passEl.value){
                localStorage.setItem("dataCus", JSON.stringify(customer));
                window.location = "home.html";
            }else{
                message.innerHTML = `Đăng nhập không thành công`;
            }
        })
    }else{
        console.log("Not Support ...")
    };
});
}