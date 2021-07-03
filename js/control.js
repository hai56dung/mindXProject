let userEl = document.querySelector(".txtuser");
let passEl = document.querySelector(".txtpass");
let submit = document.querySelector(".submit");

if(window.localStorage){
    localStorage.setItem("user","hai56dung");
    localStorage.setItem("pass","123456");

    let user = localStorage.getItem("user");
    let pass = localStorage.getItem("pass");

    let message = document.querySelector(".message");

    submit.addEventListener("click", function() {
        if(user == userEl.value && pass == passEl.value){
            window.location = "home.html"
        }else{
            message.innerHTML = `Đăng nhập không thành công`;
        }
    })
}else{
    console.log("not Supported..");
}