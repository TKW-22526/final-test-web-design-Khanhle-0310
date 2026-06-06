//Sản phẩm
var sanPham = [
    {
        id: "keo-chi",
        ten: "Kẹo Chỉ",
        loai: "Kẹo tuổi thơ",
        gia: 8000,
        anh: "../assets/keochi.jpg",
        mota: "Kẹo chỉ là món ăn vặt quen thuộc ở cổng trường, có vị ngọt nhẹ và mềm.",
        huongvi: "Ngọt nhẹ, mềm",
        chitiet: "Kẹo chỉ là món ăn vặt dân dã, thường được bán trước cổng trường hoặc trên những xe hàng nhỏ. Sợi kẹo mảnh, mềm, có vị ngọt nhẹ và thường được cuốn cùng bánh tráng mỏng. Đây là món ăn khiến nhiều người nhớ lại những giờ ra chơi vui vẻ bên bạn bè."
    },
    {
        id: "keo-keo",
        ten: "Kẹo Kéo",
        loai: "Kẹo tuổi thơ",
        gia: 10000,
        anh: "../assets/keokeo.jpg",
        mota: "Kẹo kéo là món ăn vặt truyền thống, thường được bán trên xe hàng rong.",
        huongvi: "Ngọt, dẻo",
        chitiet: "Kẹo kéo có vị ngọt đậm, dẻo và thơm nhẹ. Người bán thường kéo kẹo thành từng thanh nhỏ ngay tại chỗ, tạo cảm giác rất quen thuộc và gần gũi. Món này gắn liền với hình ảnh xe kẹo rong và tiếng rao trước cổng trường."
    },
    {
        id: "keo-bong-gon",
        ten: "Kẹo Bông Gòn",
        loai: "Kẹo tuổi thơ",
        gia: 12000,
        anh: "../assets/keobonggon.jpg",
        mota: "Kẹo bông gòn mềm xốp, màu sắc đẹp và tan nhanh trong miệng.",
        huongvi: "Ngọt, xốp",
        chitiet: "Kẹo bông gòn có màu sắc bắt mắt, mềm nhẹ như mây và tan nhanh khi ăn. Món này thường xuất hiện ở hội chợ, công viên hoặc trước trường học. Chỉ cần nhìn thấy cây kẹo bông gòn là đã thấy cả một bầu trời tuổi thơ hiện về, hơi sến nhưng đúng."
    },
    {
        id: "big-babol",
        ten: "Kẹo Cao Su Big Babol",
        loai: "Kẹo tuổi thơ",
        gia: 5000,
        anh: "../assets/keocaosu.jpg",
        mota: "Kẹo cao su Big Babol dùng để nhai và thổi bong bóng, rất quen thuộc với học sinh.",
        huongvi: "Ngọt, thơm trái cây",
        chitiet: "Kẹo cao su Big Babol nổi bật với hương trái cây thơm ngọt và khả năng thổi bong bóng. Đây là món kẹo từng được nhiều học sinh yêu thích vì vừa ăn vừa có thể chơi cùng bạn bè. Nhỏ thôi nhưng độ gây nghiện tuổi thơ thì khỏi bàn."
    },
    {
        id: "mi-tre-em",
        ten: "Mì Trẻ Em",
        loai: "Đồ ăn vặt mặn",
        gia: 4000,
        anh: "../assets/mi.jpg",
        mota: "Mì trẻ em là món ăn vặt được bóp vụn rồi trộn với gói gia vị.",
        huongvi: "Mặn, giòn",
        chitiet: "Mì trẻ em là món ăn vặt quen thuộc với cách ăn rất đơn giản: bóp vụn mì, cho gia vị vào rồi lắc đều. Vị mặn, giòn và thơm khiến món này trở thành lựa chọn quen thuộc trong giờ ra chơi. Một món ăn không cầu kỳ nhưng ký ức thì đầy ắp."
    },
    {
        id: "bim-bim-cua",
        ten: "Bim Bim Cua",
        loai: "Đồ ăn vặt mặn",
        gia: 6000,
        anh: "../assets/bimbim.jpg",
        mota: "Bim bim cua là món snack giòn, thơm và có vị cua.",
        huongvi: "Giòn, mặn",
        chitiet: "Bim bim cua có vị mặn nhẹ, giòn tan và mùi thơm đặc trưng. Đây là món ăn vặt thường được mua ở căn tin hoặc tiệm tạp hóa gần trường. Chỉ cần một gói nhỏ là đủ để chia nhau trong giờ ra chơi, vì con người có vẻ rất thích chia đồ ăn khi còn nhỏ."
    },
    {
        id: "kem-ki",
        ten: "Kem Kí",
        loai: "Đồ ăn lạnh",
        gia: 15000,
        anh: "../assets/kemki.jpg",
        mota: "Kem kí là món kem mát lạnh, nhiều màu và nhiều vị.",
        huongvi: "Ngọt, lạnh",
        chitiet: "Kem kí là món kem mát lạnh với nhiều màu sắc và hương vị khác nhau. Món này thường được bán theo phần nhỏ, rất phù hợp để ăn vào những ngày nóng. Vị kem ngọt, béo nhẹ và cảm giác mát lạnh khiến nó trở thành món ăn gắn liền với mùa hè tuổi thơ."
    },
    {
        id: "xi-muoi",
        ten: "Xí Muội",
        loai: "Ô mai - trái cây",
        gia: 7000,
        anh: "../assets/ximuoi.jpg",
        mota: "Xí muội có vị chua ngọt mặn, là món ăn vặt nhỏ nhưng rất bắt miệng.",
        huongvi: "Chua, ngọt, mặn",
        chitiet: "Xí muội là món ăn vặt nhỏ nhưng có hương vị rất đặc biệt, vừa chua, vừa ngọt, vừa mặn. Món này thường được học sinh mang theo để nhâm nhi cùng bạn bè. Dù không quá nổi bật về hình thức, xí muội lại có hương vị rất dễ nhớ."
    }
];


//Hàm định dạng tiền
function doiTien(soTien){
    return soTien.toLocaleString("vi-VN") + "đ";
}

//Giỏ hàng
function layGioHang(){
    var gioHang = localStorage.getItem("gioHang");

    if(gioHang == null){
        return [];
    }

    return JSON.parse(gioHang);
}

function luuGioHang(gioHang){
    localStorage.setItem("gioHang", JSON.stringify(gioHang));
    capNhatSoLuong();
}

function capNhatSoLuong(){
    var oSoLuong = document.getElementById("soLuong");

    if(oSoLuong == null){
        return;
    }

    var gioHang = layGioHang();
    var tong = 0;

    for(var i = 0; i < gioHang.length; i++){
        tong = tong + gioHang[i].soluong;
    }

    oSoLuong.innerHTML = tong;
}

function themVaoGio(id){
    var gioHang = layGioHang();
    var sp = null;

    for(var i = 0; i < sanPham.length; i++){
        if(sanPham[i].id == id){
            sp = sanPham[i];
        }
    }

    var daCo = false;

    for(var j = 0; j < gioHang.length; j++){
        if(gioHang[j].id == id){
            gioHang[j].soluong = gioHang[j].soluong + 1;
            daCo = true;
        }
    }

    if(daCo == false){
        gioHang.push({
            id: sp.id,
            ten: sp.ten,
            gia: sp.gia,
            soluong: 1
        });
    }

    luuGioHang(gioHang);
    alert("Đã thêm " + sp.ten + " vào giỏ hàng");
}

function muaNgay(id){
    themVaoGio(id);
    window.location.href = "giohang.html";
}

//Hiển thị sản phẩm
function hienThiSanPham(){
    var khung = document.getElementById("danhsachsanpham");

    if(khung == null){
        return;
    }

    var tuKhoa = document.getElementById("timkiem").value.toLowerCase();
    var loai = document.getElementById("loai").value;

    var html = "";

    for(var i = 0; i < sanPham.length; i++){
        var sp = sanPham[i];

        var dungTuKhoa = sp.ten.toLowerCase().includes(tuKhoa);
        var dungLoai = loai == "tatca" || sp.loai == loai;

        if(dungTuKhoa && dungLoai){
            html = html + `
                <div class="sanpham">
                    <img src="${sp.anh}" alt="${sp.ten}">
                    <h3>${sp.ten}</h3>
                    <p>${sp.mota}</p>
                    <p class="gia">${doiTien(sp.gia)}</p>

                    <a class="btn-nho" href="chitiet.html?id=${sp.id}">Chi tiết</a>
                    <button class="btn-nho" onclick="themVaoGio('${sp.id}')">Thêm giỏ</button>
                    <button class="btn-nho" onclick="muaNgay('${sp.id}')">Mua</button>
                </div>
            `;
        }
    }

    if(html == ""){
        html = "<p>Không tìm thấy sản phẩm.</p>";
    }

    khung.innerHTML = html;
}

//Chi tiết
function hienThiChiTiet(){
    var khung = document.getElementById("chitietsanpham");

    if(khung == null){
        return;
    }

    var thamSo = new URLSearchParams(window.location.search);
    var id = thamSo.get("id");

    if(id == null){
        id = "keo-chi";
    }

    var sp = sanPham[0];

    for(var i = 0; i < sanPham.length; i++){
        if(sanPham[i].id == id){
            sp = sanPham[i];
        }
    }

    khung.innerHTML = `
    <img src="${sp.anh}" alt="${sp.ten}">

    <h2>${sp.ten}</h2>
    <p class="gia">${doiTien(sp.gia)}</p>

    <p><b>Loại:</b> ${sp.loai}</p>
    <p><b>Hương vị:</b> ${sp.huongvi}</p>

    <h3>Mô tả sản phẩm</h3>
    <p>${sp.chitiet}</p>

    <p><b>Xuất xứ:</b> Việt Nam</p>
    <p><b>Bảo quản:</b> Nơi khô ráo, thoáng mát</p>
    <p><b>Đối tượng:</b> Mọi lứa tuổi</p>

    <div class="nhom-nut">
        <button class="nut" onclick="muaNgay('${sp.id}')">Mua ngay</button>
        <button class="nut2" onclick="themVaoGio('${sp.id}')">Bỏ vào giỏ hàng</button>
        <a class="nut2" href="sanpham.html">Quay lại</a>
    </div>
`;
}

//Hiển thị giỏ hàng
function hienThiGioHang(){
    var khung = document.getElementById("khunggiohang");
    var oTong = document.getElementById("tongtien");

    if(khung == null || oTong == null){
        return;
    }

    var gioHang = layGioHang();

    if(gioHang.length == 0){
        khung.innerHTML = "<p>Giỏ hàng đang trống.</p>";
        oTong.innerHTML = doiTien(0);
        return;
    }

    var html = "";
    var tongTien = 0;

    for(var i = 0; i < gioHang.length; i++){
        var item = gioHang[i];
        var thanhTien = item.gia * item.soluong;
        tongTien = tongTien + thanhTien;

        html = html + `
            <div class="item-giohang">
                <h3>${item.ten}</h3>
                <p>Giá: ${doiTien(item.gia)}</p>
                <p>Số lượng: 
                    <button onclick="doiSoLuong('${item.id}', -1)">-</button>
                    ${item.soluong}
                    <button onclick="doiSoLuong('${item.id}', 1)">+</button>
                </p>
                <p>Thành tiền: ${doiTien(thanhTien)}</p>
                <button class="nut" onclick="xoaSanPham('${item.id}')">Xóa</button>
            </div>
        `;
    }

    khung.innerHTML = html;
    oTong.innerHTML = doiTien(tongTien);
}

function doiSoLuong(id, so){
    var gioHang = layGioHang();

    for(var i = 0; i < gioHang.length; i++){
        if(gioHang[i].id == id){
            gioHang[i].soluong = gioHang[i].soluong + so;

            if(gioHang[i].soluong <= 0){
                gioHang.splice(i, 1);
            }
            break;
        }
    }

    luuGioHang(gioHang);
    hienThiGioHang();
}

function xoaSanPham(id){
    var gioHang = layGioHang();

    for(var i = 0; i < gioHang.length; i++){
        if(gioHang[i].id == id){
            gioHang.splice(i, 1);
            break;
        }
    }

    luuGioHang(gioHang);
    hienThiGioHang();
}

function xoaGioHang(){
    localStorage.removeItem("gioHang");
    capNhatSoLuong();
    hienThiGioHang();
}

function thanhToan(){
    var gioHang = layGioHang();

    if(gioHang.length == 0){
        alert("Giỏ hàng đang trống");
        return;
    }

    alert("Đặt hàng thành công!");
    xoaGioHang();
}

//Liên hệ
function guiLienHe(){
    alert("Đã gửi liên hệ thành công!");
}

window.onload = function(){
    capNhatSoLuong();
    hienThiSanPham();
    hienThiChiTiet();
    hienThiGioHang();
};
