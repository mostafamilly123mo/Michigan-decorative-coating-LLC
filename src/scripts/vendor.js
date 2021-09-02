import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css'
import 'bootstrap-social/bootstrap-social.css'
import * as bootstrap from 'bootstrap';
import $ from 'jquery'
import '../style.css'

var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})

window.onload = () => {
    document.querySelector('.spinnerContainer').classList.add('hidden')
}

$('.navbar-nav>li>a').on('click', function(){
    if (!$(this).hasClass("dropdown-toggle")) {
    $('.navbar-collapse').removeClass('show');
    }
});

$('.dropdown-item').on('click' , () => {
    $('.navbar-collapse').removeClass('show');
})

$('.contactButton').on('click', function(){
    $('.navbar-collapse').removeClass('show');
});

$('#submitButton').on('click' , (event) => {
    event.preventDefault()
    var name = $('#nameInput').val();
    var phone = $('#phoneNumber').val();
    var message = $('#messageTextArea').val();
    document.getElementById("contactForm").reset();
    window.location.href = 'mailto:mail@company.com?subject=' + name + ' (' + phone + ')' + '&body=' + message;
})
