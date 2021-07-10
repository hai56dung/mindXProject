let stadiumApi = 'http://localhost:3000/stadium';

function start() {
    getStadium(renderStadium);
}

start();

function getStadium(callback) {
    fetch(stadiumApi).then(function(response) {
        return response.json();
    }).then(callback)
}

function renderStadium(stadiums) {
    let listCoursesBlock = document.querySelector("#listStadium");
    let html = stadiums.map(function(stadium) {
        return` 
        <div class="card mb-4 shadow-sm">
                <img class="detail-room" src="../img/Hinh-anh-–-2020-San-Bong-Cu-Chi-Sau-01-Nam-Khai-Thac-2.jpg">
                <div class="card-body">
                    <p class="card-text">
                       <p class="title">${stadium.name}</p>
                       <p class="detail">${stadium.local}</p>
                       <p class="price">${stadium.price}đ/trận &nbsp;&nbsp;<span class="first-price">200,000đ/trận</span></p>
                       <p class="address">Hai Bà Trưng - Hà Nội</p>
                    </p>
                    <a href="" class="text-decoration-none">Chi tiết>></a>
                </div>
        </div>    
       ` 
    });
    listCoursesBlock.innerHTML = html.join();
}

// function pickStadium(stadium) {
//     if(stadium.local == "Quận Đông Anh"){
//         renderStadium();
//     }
// }