// jQuery for page scrolling feature - requires jQuery Easing plugin
$(function () {
    "use strict";
    $('a.page-scroll').on('click', function (event) {
        var $anchor = $(this);
        $('html, body').stop().animate({
            scrollTop: $($anchor.attr('href')).offset().top
        }, 1500, 'easeInOutExpo');
        event.preventDefault();
    });
});

//Counter style
jQuery(document).ready(function ($) {
    "use strict";
    $('.counter').counterUp({
        delay: 10,
        time: 800
    });

    $("#port_carouse, #port_carouse2,#port_carouse3,#port_carouse4,#port_carouse5,#port_carouse6,#port_carouse7,#port_carouse8").owlCarousel({
        navigation: true, // Show next and prev buttons
        navigationText: ["<i class='fa fa-caret-left'></i>", "<i class='fa fa-caret-right'><i>"],
        slideSpeed: 300,
        pagination: false,
        paginationSpeed: 400,
        singleItem: true
    });

    $('body').sectionMenu().fragmentScroll();


});

//Preloader Effect
document.addEventListener('DOMContentLoaded', function () {
    "use strict";
    document.querySelector('body').className += ' loaded';
});


// Highlight the top nav as scrolling occurs
$('body').scrollspy({
    target: '.navbar-fixed-top'
})

// Porfolio filter
/*Mixitup portfolio shrting*/

//TODO:Pie values
jQuery('#grid').mixitup({
    targetSelector: '.mix',
});

var chAr1P = $('#chart-area1').next('h3').text();
var chAr1 = chAr1P.slice(0, chAr1P.indexOf("%"));
var chAr2P = $('#chart-area2').next('h3').text();
var chAr2 = chAr2P.slice(0, chAr2P.indexOf("%"));
var chAr3P = $('#chart-area3').next('h3').text();
var chAr3 = chAr3P.slice(0, chAr3P.indexOf("%"));
var chAr4P = $('#chart-area4').next('h3').text();
var chAr4 = chAr4P.slice(0, chAr4P.indexOf("%"));
var chAr5P = $('#chart-area5').next('h3').text();
var chAr5 = chAr5P.slice(0, chAr5P.indexOf("%"));
var chAr6P = $('#chart-area6').next('h3').text();
var chAr6 = chAr6P.slice(0, chAr6P.indexOf("%"));

var pieData1 = [{
    value: chAr1,
    color: "#000",
    highlight: "#222",
    segmentShowStroke: false,
    showTooltips: false
}, {
    value: 100 - chAr1,
    color: "transparent"
}];

var pieData2 = [{
    value: chAr2,
    color: "#000",
    highlight: "#222",
    segmentShowStroke: false
}, {
    value: 100 - chAr2,
    color: "transparent"
}];

var pieData3 = [{
    value: chAr3,
    color: "#000",
    highlight: "#222",
    segmentShowStroke: false
}, {
    value: 100 - chAr3,
    color: "transparent"
}];

var pieData4 = [{
    value: chAr4,
    color: "#000",
    highlight: "#222",
    segmentShowStroke: false
}, {
    value: 100 - chAr4,
    color: "transparent"
}];

var pieData5 = [{
    value: chAr5,
    color: "#000",
    highlight: "#222",
    segmentShowStroke: false
}, {
    value: 100 - chAr5,
    color: "transparent"
}];

var pieData6 = [{
    value: chAr6,
    color: "#000",
    highlight: "#222",
    segmentShowStroke: false
}, {
    value: 100 - chAr6,
    color: "transparent"
}];
//Setion Menu
jQuery(window).load(function ($) {
    "use strict";

    Chart.defaults.global.showTooltips = false;
    var ctx1 = document.getElementById("chart-area1").getContext("2d");
    window.myPie = new Chart(ctx1).Pie(pieData1);

    var ctx2 = document.getElementById("chart-area2").getContext("2d");
    window.myPie = new Chart(ctx2).Pie(pieData2);

    var ctx3 = document.getElementById("chart-area3").getContext("2d");
    window.myPie = new Chart(ctx3).Pie(pieData3);

    var ctx4 = document.getElementById("chart-area4").getContext("2d");
    window.myPie = new Chart(ctx4).Pie(pieData4);

    var ctx5 = document.getElementById("chart-area5").getContext("2d");
    window.myPie = new Chart(ctx5).Pie(pieData5);

    var ctx6 = document.getElementById("chart-area6").getContext("2d");
    window.myPie = new Chart(ctx6).Pie(pieData6);

    $('.intro-heading').textillate({
        in: {
            effect: 'fadeIn',
            sequence: true
        }
    });

});

/* ------ Wow Effect ---------------------
 ------------------------------------------ */
var wow = new WOW({
    boxClass: 'wow', // default
    animateClass: 'animated', // default
    offset: 100, // default
    mobile: true, // default
    live: true // default
})
wow.init();

var isGraph1Viewed = false;

$(window).scroll(function () {
    "use strict";
    if (isScrolledIntoView($('#chart-area1, #chart-area2, #chart-area3, #chart-area4, #chart-area5, #chart-area6')) && isGraph1Viewed == false) {
        var ctx1 = document.getElementById("chart-area1").getContext("2d");
        window.myPie = new Chart(ctx1).Pie(pieData1);
        var ctx2 = document.getElementById("chart-area2").getContext("2d");
        window.myPie = new Chart(ctx2).Pie(pieData2);
        var ctx3 = document.getElementById("chart-area3").getContext("2d");
        window.myPie = new Chart(ctx3).Pie(pieData3);
        var ctx4 = document.getElementById("chart-area4").getContext("2d");
        window.myPie = new Chart(ctx4).Pie(pieData4);
        var ctx5 = document.getElementById("chart-area5").getContext("2d");
        window.myPie = new Chart(ctx5).Pie(pieData5);
        var ctx6 = document.getElementById("chart-area6").getContext("2d");
        window.myPie = new Chart(ctx6).Pie(pieData6);
        isGraph1Viewed = true;
    }
});

function isScrolledIntoView(elem) {
    var docViewTop = $(window).scrollTop();
    var docViewBottom = docViewTop + $(window).height();
    var elemTop = $(elem).offset().top;
    var elemBottom = elemTop + $(elem).height();
    return ((elemBottom >= docViewTop) && (elemTop <= docViewBottom) && (elemBottom <= docViewBottom) && (elemTop >= docViewTop));
}

let now= new Date();
let begginingOfCareer = new Date(2015,10);
let difference = now - begginingOfCareer;
let year = 1000 * 60 * 60 * 24 * 30.5 * 12;
var years = Math.ceil(difference/year);
$('#experience-years').html(years);

/* ------ End Document ----------
 ------------------------------------------ */