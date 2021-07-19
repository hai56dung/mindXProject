window.onload = function () {
  const dataDetail = JSON.parse(localStorage.getItem("dataCard"));
  let formEl = document.querySelector(".container");
  
  formEl.innerHTML = `
  <div class="container py-5">
  <div class="form-tal border">
    <div class="head">
      <h6>Thông tin khách hàng</h6>
    </div>
    <div class="form py-4">
      <div class="infor">
      <div>Thông tin nhận hàng</div>
      <div class="row py-4">
        <div class="col-md-6">
          Tên <span style="color:red">*</span>
          <div><input class="form-control nameCus" type="text"></div>
        </div>
        <div class="col-md-6">
          Số điện thoại <span style="color:red">*</span>
          <div><input type = "number" class="form-control" id="phoneNumberCus"></div>
      </div>
        <div class="col-md-12 py-4">
          Địa chỉ <span style="color:red">*</span>
          <div><input type="text" class="form-control" id="addressCus"></div>
        </div>
        <div class="col-md-12 py-4">
          Ghi Chú <span style="color:red">*</span>
          <div><input type="text" class="form-control" id="noteCus"></div>
        </div>
        <div class="col-md-12 py-4">
          <div class="card w-50">
            <!-- <img src="../img/anninh1.jpg" class="card-img-top" alt="..."> -->
            <div class="card-body">
              <h5 class="card-title">${dataDetail.name}</h5>
              <p class="card-text">${dataDetail.address}</p>
              <p class="card-text" style = "color:"red""><div style = "color:"red"" class="text-price">${dataDetail.price}đ/trận</div></p>
            </div>
          </div>
        </div>
        <div class="col-md-12 py-4">
          <button class="btn btn-danger">Xác nhận</button>
        </div>
      </div>
      </div>
    </div>
  </div>
</div>
  `
  if (window.localStorage){
    let btnEl = document.querySelector(".btn");

    btnEl.addEventListener("click", function() {
      let nameCusEl = document.querySelector(".nameCus");
      console.log(nameCusEl.value);
      let phoneNumberCusEl = document.getElementById("phoneNumberCus");
      console.log(phoneNumberCusEl.value);
      let addressCusEl = document.getElementById("addressCus");
      let noteEl = document.getElementById("noteCus");
      
      // localStorage.setItem("nameEl",nameCusEl);
      localStorage.setItem("nameEl",nameCusEl);
      localStorage.setItem("phoneNumber", phoneNumberCusEl);
      localStorage.setItem("address", addressCusEl);
      localStorage.setItem("note", noteEl);

      window.location = "/html/formInfor.html"
    })
  }else{
    console.log("not support")
  }
}


