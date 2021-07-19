window.onload = function () {
    const dataDetail = JSON.parse(localStorage.getItem("dataCard"));
    const dataCusEl = JSON.parse(localStorage.getItem("dataCus"));

    let formout = document.querySelector(".container");
    formout.innerHTML = `
    <div class="card ">
    <div class="card-body text-center">
      <h3>Thông tin đặt sân</h3>
      <table class="table">
        <tr>
          <td>Tên khách hàng: </td>
          <td>${dataCusEl.Name}</td>
        </tr>
        <tr>
          <td>Số Điện thoại </td>
          <td>${dataCusEl.phoneNumber}</td>
        </tr>
        <tr>
          <td>Địa chỉ </td>
          <td>${dataCusEl.adrr}</td>
        </tr>
        <tr>
          <td>Email: </td>
          <td>${dataCusEl.email}</td>
        </tr>
        <tr>
          <td>Sân đặt</td>
          <td>${dataDetail.name}</td>
        </tr>
        <tr>
          <td colspan="2" class="table-active">Chúng tôi sẽ gọi điện cho bạn để chốt khung giờ</td>
        </tr>
        <tr>
          <td colspan="2"><button class = "btn btn-success">Xác nhận</button></td>
        </tr>
      </table>
    </div>
  </div>
    `
    let btnAccep = document.querySelector(".btn");
    btnAccep.addEventListener("click", function () {
        alert(`Chúc mừng ${dataCusEl.Name} đã đặt sân thành công. CHÚNG TÔI SẼ SỚM LIÊN HỆ VỚI BẠN`);
        window.location = "home.html";
        
    })
}