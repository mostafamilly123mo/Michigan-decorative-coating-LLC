import 'bootstrap/dist/css/bootstrap.min.css';
import 'font-awesome/css/font-awesome.min.css'
import 'bootstrap-social/bootstrap-social.css'
import $ from 'jquery'
import * as bootstrap from 'bootstrap';


var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})

$('.navbar-nav>li>a').on('click', function(){
    $('.navbar-collapse').removeClass('show');
});