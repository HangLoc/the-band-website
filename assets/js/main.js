//Đặt biến
const buyBtns = document.querySelectorAll('.js-buy-ticket')
const modal = document.querySelector('.js-modal')
const modalClose = document.querySelector('.js-modal-close')
const modalBtnClose = document.querySelector('.js-close-btn')
const modalContainer = document.querySelector('.js-modal-container')

// Hàm hiển thị modal mua vé - thêm class open vào modal
function showBuyTickets() {
    modal.classList.add('open')
}
//Hàm ẩn modal mua vé - remove class open khỏi modal
function hideBuyTickets() {
    modal.classList.remove('open')
}

// Vòng lập qua từng thẻ button và lắng nghe hành vi click
for(const buyBtn of buyBtns) {
    buyBtn.addEventListener('click',showBuyTickets)
}
//Nge hành vi click khi nhấn vào nút close
modalClose.addEventListener('click',hideBuyTickets)

modalBtnClose.addEventListener('click',hideBuyTickets)

modal.addEventListener('click',hideBuyTickets)

//chặn sự kiện nổi bọt và dừng lại ngay class modal-container
modalContainer.addEventListener('click', function(event) {
    event.stopPropagation(modalContainer)
})



//Menubar responsive mobile
var header = document.getElementById('header');
var menuMobile = document.getElementById('menu-mobile');
var headerHeight = header.clientHeight;

//đóng/mở menu
menuMobile.onclick = function(){
    var isClose = header.clientHeight === headerHeight;

    if(isClose) {
        header.style.height = 'auto';
    } else {
        // header.style.height = '46px';
        header.style.height = null;
    }
}

//tự động đóng khi chọn menu
var menuItems = document.querySelectorAll('#nav li a[href*="#"]');
for (var i = 0; i < menuItems.length; i++) {
    var menuItem = menuItems[i];

    menuItem.onclick = function(event) {
        var isParentMenu = this.nextElementSibling && this.nextElementSibling.classList.contains('subnav');
        if(isParentMenu) {
            event.preventDefault();
        }else {
            header.style.height = null;
        }
    }
}
