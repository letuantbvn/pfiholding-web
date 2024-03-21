document.querySelector('#submit_form').onsubmit = function(e) {
    e.preventDefault();

    // truy cập vào msg thông báo
    let msgOj = document.querySelector('.msg');

    //Reset thông báo
    msgOj.innerText = '';


    //truy cập vào thành phần HTML tương ứng
    let fullNameOj = document.querySelector('input[name=fullname]');

    let emailOj = document.querySelector('input[name=email]');

    let phoneOj = document.querySelector('input[name=phone]');

    let smsOj = document.querySelector('input[name=sms]');


    //Lay gia tri nguoi dung nhap vao
    let fullName = fullNameOj.value;
    let email = emailOj.value;
    let phone = phoneOj.value;
    let sms = smsOj.value;

    //Validate From
    //Reset thông báo
    let requiredOj = document.querySelectorAll('.required');
    if (requiredOj.length > 0) {
        requiredOj.forEach(function(item) {
            item.innerText = '';
        });
    }



    let errors = {};
    if (fullName.trim() == '') {
        errors['fullname'] = 'Họ và tên không được trống';
        fullNameOj.parentElement.querySelector('.required').innerText = errors['fullname'];
    }

    if (email.trim() == '') {
        errors['email'] = 'Email không được trống';
        emailOj.parentElement.querySelector('.required').innerText = errors['email'];
    }

    if (phone.trim() == '') {
        errors['phone'] = 'Số điện thoại không được trống';
        phoneOj.parentElement.querySelector('.required').innerText = errors['phone'];
    }
    if (sms.trim() == '') {
        errors['sms'] = 'Lời nhắn không được trống';
        smsOj.parentElement.querySelector('.required').innerText = errors['sms'];
    }

    if (Object.keys(errors).length == 0) {
        //Không có lỗi gì
        let data = {
            'entry.1586872522': fullName,
            'entry.2140412867': email,
            'entry.328340211': phone,
            'entry.1959941283': sms
        }

        let queryString = new URLSearchParams(data);
        queryString = queryString.toString();
        console.log(queryString);

        msgOj.innerHTML = '<div class="alert alert-success text-center">Đang xử lý dữ liệu</div>';

        let xhr = new XMLHttpRequest();
        xhr.open("POST", 'https://docs.google.com/forms/u/2/d/e/1FAIpQLSc7IlLwCi40dsbgwQCXQ36Nen9sIq9LiDMBM2nczcmiVVc5dQ/formResponse', true);


        xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");

        msgOj.innerHTML = '<div class="alert alert-success text-center">Tải dữ liệu thành công <br> Cảm ơn quý khách, chúng tôi sẽ liên hệ lại cho quý khách sớm nhất</div>';

        xhr.send(queryString);


        //Reset field values sau khi gửi xong
        fullNameOj.value = '';
        emailOj.value = '';
        phoneOj.value = '';
        smsOj.value = '';

    } else {
        msgOj.innerHTML = '<div class="alert alert-danger text-center">Vui lòng kiểm tra dữ liệu</div>';
    }
}


//Logo đối tác
$('.clients-carousel').owlCarousel({
    autoplay: true,
    loop: true,
    margin: 15,
    dots: false,
    slideTransition: 'linear',
    autoplayTimeout: 2500,
    autoplayHoverPause: false,
    autoplaySpeed: 2000,
    responsive: {
        0: {
            items: 2
        },
        500: {
            items: 3
        },
        600: {
            items: 4
        },
        800: {
            items: 5
        },
        1200: {
            items: 6
        },
        1400: {
            items: 6
        },
        1600: {
            items: 6
        }

    }
});