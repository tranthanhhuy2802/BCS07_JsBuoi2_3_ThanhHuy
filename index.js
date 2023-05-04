// Bài 1 Tính Lương Nhân viên
// Input :
// Lương 1 ngày = 100000
// nhập số ngày làm, lấy dữ liệu
// Output :
// tính lương và xuất ra dữ liệu ra màn hình
// xử lý :
// Lương = lương một ngày * số ngày làm
document.getElementById("but1").onclick = function () {
  var luongMotNgay = 100000;
  var soNgayLam = document.getElementById("soNgayLam").value * 1;
  var luong = luongMotNgay * soNgayLam;
  document.getElementById("hienThiKetQua").innerHTML =
    "Lương nhân viên: " + luong;
};

// Bài 2
// Input:
// Nhập số thứ 1 , Nhập số thứ 2, Nhập số thứ 3, Nhập số thứ , Nhập số thứ 5
// xử lý :
// lấy dữ liệu: Nhập số thứ 1 , Nhập số thứ 2, Nhập số thứ 3, Nhập số thứ 4, Nhập số thứ 5, ép kiểu dữ liệu
// tính trung bình = (Nhập số thứ 1 + Nhập số thứ 2 + Nhập số thứ 3 + Nhập số thứ 4 + Nhập số thứ 5)/5
// output
// tính trung bình và xuất ra màn hình kết quả

document.getElementById("but2").onclick = function () {
  var so1 = document.getElementById("so1").value * 1;
  var so2 = document.getElementById("so2").value * 1;
  var so3 = document.getElementById("so3").value * 1;
  var so4 = document.getElementById("so4").value * 1;
  var so5 = document.getElementById("so5").value * 1;
  var tinhTrungBinh = (so1 + so2 + so3 + so4 + so5) / 5;
  document.getElementById("hienThiKetQua1").innerHTML =
    "Trung Bình = " + tinhTrungBinh;
};

// Bài 3 Quy Đổi Tiền Tệ
// Input:
// nhập số tiền cần đổi
// 1 usd = 23500
// xử lý:
// lấy dữ liệu số tiền cần đổi, ép kiểu dữ liệu
// tổng tiền được đổi =  số tiền cần đổi * 23500
// output:
// tính và xuất ra màn hình

document.getElementById("but3").onclick = function () {
  var usd = 23500;
  var soTienCanDoi = document.getElementById("soTien").value * 1;
  var tongTienDuocDoi = soTienCanDoi * usd;
  document.getElementById("hienThiKetQua3").innerHTML =
    soTienCanDoi +
    " Usd = " +
    Intl.NumberFormat("vn-VN").format(tongTienDuocDoi) +
    " Vnđ";
};

// Bài 4 Tính Chu vi Diện Tích
// inPut :
// nhập chiều dài, nhập chiều rộng
// xử lý :
// lấy dữ liệu chiều dài, chiều rộng , ép kiểu
// chu vi =(chiều dài + chiều rộng )*2;
// diện tích = chiều dài * chiều rộng ;
// output
// tính và xuât ra màn hình

document.getElementById("but4").onclick = function () {
  var chieuDai = document.getElementById("chieuDai").value * 1;
  var chieuRong = document.getElementById("chieuRong").value * 1;
  var chuVi = (chieuDai + chieuRong) * 2;
  var dienTich = chieuDai * chieuRong;
  document.getElementById("hienThiKetQua4").innerHTML =
    "Chu vi = " + chuVi + " ; Diện tích = " + dienTich;
};

// Bài 5 Tính Tổng 2 Ký số
// input
// nhập số có 2 ký số
// xử lý
// lấy dữ liệu số có 2 ký số
// lấy số hàng đơn vị = so có 2 ký số %10;
// lấy số hàng chục = Math.floor(so co  ký số ,10);
// tong 2 ký số = lấy số hàng đơn vị  + lấy số hàng chục
// output
// tính và xuất ra màn hình

document.getElementById("but5").onclick = function () {
  var so = document.getElementById("so").value * 1;
  var soDonVi = so % 10;
  var soHangChuc = Math.floor(so / 10);
  console.log(soHangChuc);
  var tong = soDonVi + soHangChuc;
  document.getElementById("hienThiKetQua5").innerHTML =
    "Tổng 2 ký số = " + tong;
};
