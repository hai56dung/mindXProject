function initMap() {
 
    const viettel = { lat: 20.9979887, lng:105.8290721 };
   
    const map = new google.maps.Map(document.getElementById("map"), {
      zoom: 16,
      center: viettel,
    });
  
    const marker = new google.maps.Marker({
      position: viettel,
      map: map,
    });
}


let stadiumApi = "/json/db.json";

// Khởi động hàm

async function start() {
    let containerEl = document.querySelector(".container");
    const data = await fetch(stadiumApi).then((res) => res.json())
    containerEl.innerHTML = window.onload(data.stadium);
}

start();

window.onload = function () {
    const dataDetail = JSON.parse(localStorage.getItem("dataCard"));
    console.log(dataDetail);
    console.log(dataDetail.id);
    return`
    <div class="main-center">
        <div class="slideshow">
            <button class="slide-button" id="button-left" onclick="plusDivs(-1)">&#10094;</button>
            <img class="my-slides" src="${dataDetail.img}">
            <img class="my-slides" src="${dataDetail.img2}">
            <button class="slide-button" id="button-right" onclick="plusDivs(1)">&#10095;</button>
          
            </div>
        </div>
          <div class="main-content">
    
          <a href="/html/home.html" alt="">Trở về trang chủ </a>
          <br>
          <br>
          <div class="content-header">
            <div ><img src="/img/Soccerball-green.svg.png" style="height: 20px; width: 20px; float:left;padding-right: 5px;"><h3><b></b>${dataDetail.name}</b></h3></div>
            <br>
        
            
            <img src="/img/663-6632602_green-address-icon-png.jpg"  style="height: 20px; width: 20px; float:left;padding-right: 5px;">
            <p><span style="color:green"><b>Địa chỉ:</b> </span>${dataDetail.address} </p>
         
              <div><img src="/img/phone.jpg"  style="height: 20px; width: 20px; float:left;padding-right: 5px;"><p><spam style="color:green"><b>SĐT:</b>   </spam>${dataDetail.phoneNumber} </p></div>
              <div><img src="/img/clock.png"  style="height: 20px; width: 20px; float:left;padding-right: 5px;"><p><spam style="color:green"><b>Giờ mở của:</b></spam> 6h00 - 23h00</p></div>
            </div>
          
          <div id="map">



          </div>
          <br>
    



            
          <p>${dataDetail.description}</p>
          <b>THÔNG TIN CHI TIẾT</b>

          <p>- Giới thiệu chung: <span>${dataDetail.details}</span> </p>
                
          <b>BẢNG GIÁ</b>
          <br>
            <div class="table">
              <Table>
              <tr>
              <th>Giá thuê sân 11 người</th>
              <th></th>
              </tr>
              <th>6h00 - 9h00</th>
              <th>100k/giờ</th>
              
              <tr>
                <th>9h00 - 12h00</th>
              <th>200k/giờ</th>

              </tr>
              <tr><th>12h00 - 17h00</th>
                <th>150k/giờ</th></tr>
              </tr>
              <th>17h00 - 21h00</th>
              <th>200k/giờ</th>
              
              <tr>
              </tr>
              <th>21h00 - 23h00</th>
              <th>100k/giờ</th>
              
              <tr>
              
              </Table>
            </div>
                
            <p> - Đồ hỗ trợ bóng đá: Có cho thuê hầu hết các dụng cụ bóng đá cần thiết như : Giầy, bóng, lót chân… </p>
                
            <b>Tại sao nên chọn sân bóng này?</b>
            <ul>
                <li>Khu đất có tầm nhìn thoáng, không gian quang đãng</li>
                <li>Có 2 bãi đỗ xe rộng rãi. </li>
                <li>Các dịch vụ về đồ đạc phụ kiện bóng đá và các loại nước giải khát.</li>
                
            </ul>
            <a href="www.google.com"><button class="reserve-button">Đặt sân</button></a>

    
        </div>
  </div>
</div>
    
    `
}