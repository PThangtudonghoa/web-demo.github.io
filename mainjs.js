
function showRegister(){
    const register = document.getElementById('show-Form-register')
    if(register){
        const registerNew = document.createElement('div')
        registerNew.classList.add('form-register')
        registerNew.innerHTML = `
        <div class="form-register-overlay"></div>
        <div class="form-register-main">
            <div class="form-register-header">
                <div class="form-register-header-1">Đăng ký</div>
                <div class="form-register-header-2">Đăng nhập</div>
            </div>
            <div class="form-register-body">
                <input class="form-register-input" type="text" placeholder="Nhập email của bạn">
                <input class="form-register-input" type="text" placeholder="Nhập Mật Khẩu">
                <input class="form-register-input" type="text" placeholder="Xác nhận mật khẩu">
                <div class="form-register-policytext">
                    <input type="checkbox" class="register-checkbox">
                    Bằng việc đăng ký, bạn đã đồng ý với Shopee về 
                    <a class="form-policytext" href="">Điều khoản dịch <br> vụ</a> & 
                    <a class="form-policytext" href="">Chính sách bảo mật</a>
                </div>
            </div>
            <div class="form-register-btn">
                <button class="btn btn-1" onclick="back()">TRỞ LẠI</button>
                <button class="btn btn-2">ĐĂNG KÝ</button>
            </div>
            <div class="form-register-footer">
                <div class="form-register-footer-item form-register-footer-item-1"><i class="fab fa-facebook-square form-register-footer-icon"></i>Kết nối với FaceBook</div>
                <div class="form-register-footer-item form-register-footer-item-2"><i class="fab fa-google form-register-footer-icon"></i> Kết nối với Google</div>
            </div>
        </div>
        `
        register.appendChild(registerNew)
    }
}
function showregister1(){
    showRegister();
    console.log(456)
}
// showLogin
function showLogin(){
    const login = document.getElementById('show-Form-login')
    if(login){
        const loginNew = document.createElement('div')
        loginNew.classList.add('form-register')
        loginNew.innerHTML = `
        <div class="form-register-overlay"></div>
        <div class="form-register-main">
            <div class="form-register-header">
                <div class="form-register-header-1">Đăng nhập</div>
                <div class="form-register-header-2">Đăng ký</div>
            </div>
            <div class="form-register-body">
                <input class="form-register-input" type="text" placeholder="Nhập email của bạn">
                <input class="form-register-input" type="text" placeholder="Nhập Mật Khẩu">
                <div class="form-register-hepl">
                    <a class="form-misspassword" href="">Quên mật khẩu</a>
                    <span class="minior"></span>
                    <a class="form-help" href="">Trợ giúp ?</a>
                </div>
            </div>
            <div class="form-register-btn">
                <button class="btn btn-1" onclick="back()">TRỞ LẠI</button>
                <button class="btn btn-2">ĐĂNG NHẬP</button>
            </div>
            <div class="form-register-footer">
                <div class="form-register-footer-item form-register-footer-item-1"><i class="fab fa-facebook-square form-register-footer-icon"></i>Kết nối với FaceBook</div>
                <div class="form-register-footer-item form-register-footer-item-2"><i class="fab fa-google form-register-footer-icon"></i> Kết nối với Google</div>
            </div>
        </div>
        `
        login.appendChild(loginNew)
    }
}

function showLogin1(){
    showLogin();
    console.log(123)
}
function back(){
    const register = document.getElementById('show-Form-register')
    const login = document.getElementById('show-Form-login')
    login.innerHTML = ''
    register.innerHTML = ''
}

function like(){
    const getLike = document.querySelector('.product-item-heart-liked')
    const getNolike = document.querySelector('.product-item-heart-nolike')
    console.log(getNolike)
    getNolike.classList.add('noShowLike')
    getLike.classList.add('showLike')
    console.log(getLike)
}
function unLike(){
    const getLike = document.querySelector('.product-item-heart-liked')
    const getNolike = document.querySelector('.product-item-heart-nolike')
    getNolike.classList.remove('noShowLike')
    getLike.classList.remove('showLike')
}
