// Lấy đối tượng div để hiển thị bộ đếm
var countdown = document.getElementById("countdown");

// Tính toán thời gian kết thúc đếm ngược 2 ngày 2 giờ 10 phút 10 giây từ thời điểm hiện tại
var so_ngay = 2;
var so_gio = 2;
var so_phut = 10;
var so_giay = 10;

var countDownDate = new Date().getTime() + so_ngay * 24 * 60 * 60 * 1000 + so_gio * 60 * 60 * 1000 + so_phut * 60 * 1000 + so_giay * 1000;

// Cập nhật bộ đếm mỗi giây
var x = setInterval(function () {

    // Lấy thời gian hiện tại
    var now = new Date().getTime();

    // Tính toán khoảng cách thời gian giữa thời điểm hiện tại và thời điểm kết thúc đếm ngược
    var distance = countDownDate - now;

    // Tính toán các giá trị ngày, giờ, phút và giây
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);
    
    // Hiển thị bộ đếm trong đối tượng div
    countdown.innerHTML = `
    <div class="row">
        <div class="col-md-3 col-3 text-center form-text">
            <p class="form-number">${days}</p>
            <p>Ngày</p>
        </div>
        <div class="col-md-3 col-3 text-center form-text">
            <p class="form-number">${hours}</p>
            <p>Giờ</p>
        </div>
        <div class="col-md-3 col-3 text-center form-text">
            <p class="form-number">${minutes}</p>
            <p>Phút</p>
        </div>
        <div class="col-md-3 col-3 text-center form-text">
            <p class="form-number">${seconds}</p>
            <p>Giây</p>
        </div>
    </div>
    `

    // Kiểm tra nếu thời gian đếm ngược kết thúc thì dừng bộ đếm
    if (distance < 0) {
        clearInterval(x);
        countdown.innerHTML = `
        <div class="row">
            <div class="col-md-3 col-3 text-center form-text">
                <p class="form-number">00</p>
                <p>Ngày</p>
            </div>
            <div class="col-md-3 col-3 text-center form-text">
                <p class="form-number">00</p>
                <p>Giờ</p>
            </div>
            <div class="col-md-3 col-3 text-center form-text">
                <p class="form-number">00</p>
                <p>Phút</p>
            </div>
            <div class="col-md-3 col-3 text-center form-text">
                <p class="form-number">00</p>
                <p>Giây</p>
            </div>
        </div>
        `
    }
}, 1000);