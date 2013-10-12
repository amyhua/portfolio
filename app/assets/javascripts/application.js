// This is a manifest file that'll be compiled into application.js, which will include all the files
// listed below.
//
// Any JavaScript/Coffee file within this directory, lib/assets/javascripts, vendor/assets/javascripts,
// or vendor/assets/javascripts of plugins, if any, can be referenced here using a relative path.
//
// It's not advisable to add code directly here, but if you do, it'll appear at the bottom of the
// the compiled file.
//
// WARNING: THE FIRST BLANK LINE MARKS THE END OF WHAT'S TO BE PROCESSED, ANY BLANK LINE SHOULD
// GO AFTER THE REQUIRES BELOW.
//
//= require jquery
//= require jquery_ujs
//= require jquery.parallax
//= require messages
//= require tooltips

$.fn.setPeekHeight = function(){
    var freeSpace = $(window).height() - $(this).height();
    var fillerHeight = (freeSpace - 50) + 'px';
    $(this).parent().parent().next().css('padding-top',fillerHeight);
    console.log('Height '+fillerHeight);
}

$(document).ready(function() {

    //preload images

    function preload(arrayOfImages) {
    $(arrayOfImages).each(function(){
        $('<img/>')[0].src = this;
        // Alternatively you could use:
        // (new Image()).src = this;
        });
    }

    preload([
        'assets/seattle.png',
        'assets/uchicago.png',
        'assets/clouds.png',
        'assets/contact_icons.png',
        'assets/balloon.png',
        'assets/balloons_7_pegs_m.png',
        'assets/balloons_7_pegs.png',
        'assets/uchicago.png',
        'assets/me.png'
    ]);

    // Hide or show images upon load
    $('#me').hide();
    $('#window-view').addClass('clouds');
    $('.filler').hide();
    $('.animated-works > li').children().hide();

    $('#seattle').hide();

    function resizeWindow() {
        var height =      $(window).height()
        var height = height + 'px'
        $('.background').css('height', height);
    }
    resizeWindow();
    $(window).resize(function() {
        resizeWindow();
    })
   var scene = $('.scene').parallax();

    var height = $(window).height() + 'px';
    var width = $('#window-view').width();
    $('.transition-background').css({'height':height, 'width': width});
    $('.filler').css('padding-top',height);

    $(window).resize(function() {
        var height = $(window).height() + 'px';
        var width = $('#window-view').width();
        $('.transition-background').css({'height':height, 'width': width});
        $('.filler').css('padding-top',height);
    });

    $('a[data-link="#home"]').addClass('active');

    // Fix background at certain scroll positions
    $(window).scroll(function() {

        var uchicago_y = $('#before-uchicago').offset().top
        var about_y = $('#about').offset().top
        var seattle_y = $('#before-seattle').offset().top
        var skills_y = $('#skills').offset().top
        var work_y = $('#work').offset().top
        var contact_y = $('#contact').offset().top
        var pos_y = $(this).scrollTop()


        if (pos_y < 100){
            $('.nav a').removeClass('active');
            $('a[data-link="#home"]').addClass('active');
        }
        if (pos_y > (skills_y-75) && pos_y < uchicago_y){
            $('.nav a').removeClass('active');
            $('a[data-link="#skills"]').addClass('active');
        }
        if (pos_y < uchicago_y) {
            // Scroll up school and transition background to clouds && fade out frame
            $('#uchicago-filler').hide();
            $('#uchicago').show();
            $('#window-view').removeClass('uchicago').removeClass('seattle').addClass('clouds');
            if ($('#me').is(':visible')){
                $('#me').fadeOut().hide();
            }

        }
        if (pos_y < about_y && $('#window-view').hasClass('seattle')) {
            $('#window-view').fadeOut(function() {
                    $(this).removeClass('seattle').addClass('clouds').fadeIn();
                });

        }
        if (pos_y > uchicago_y && pos_y < (seattle_y - 500)) {
            // Change background to uchicago & display frame
            if ($('#window-view').hasClass('clouds')){
                $('#uchicago').hide();
                $('#uchicago-filler').show();
                $('#window-view').removeClass('clouds').addClass('uchicago');
            }


            // Fade back to UChicago
            if ($('#window-view').hasClass('seattle')) {
                $('#window-view').fadeOut(function() {
                    $(this).removeClass('seattle').addClass('uchicago').fadeIn();
                });
            }
        }
        if (pos_y > uchicago_y && pos_y < (work_y-100)){
            if ($('#me').is(':hidden')){
                $('#me').fadeIn().show();
            }
        }

        if (pos_y > (seattle_y-500)) {
            // Fade to Seattle
            if ($('#window-view').hasClass('uchicago') || $('#window-view').hasClass('clouds')) {
                $('#window-view').fadeOut(function() {
                    $(this).removeClass('uchicago').removeClass('clouds').addClass('seattle').fadeIn();
                });
            }
        }
        if (pos_y > uchicago_y && pos_y < (work_y - 100)){
            $('.nav a').removeClass('active');
            $('a[data-link="#about"]').addClass('active');
        }
        if (pos_y > (work_y - 100) && pos_y < (contact_y - 100)){
            $('.nav a').removeClass('active');
            $('a[data-link="#work"]').addClass('active');
            if ($('#me').is(':visible')){
                $('#me').fadeOut();
            }
        }
        if (pos_y > (contact_y - 100)){
            $('.nav a').removeClass('active');
            $('a[data-link="#contact"]').addClass('active');

        }
    });

    // Navigation Links - Smooth Scrolling

    $('.nav > a').on('click', function(e) {
        e.preventDefault();
        var target = $(this).data('link');
        var targetOffset = $(target).offset().top;
        $('html,body')
            .animate({scrollTop: targetOffset}, 1000);
    });

    // Dynamically adjust white box positions depending upon window height
// should be 71, 157, 374, 217

    $('.social > a').tooltip();
});

$(window).load(function(){
    $('.peek-at-next').each(function(){
        var freeSpace = $(window).height() - $(this).height();
        var fillerHeight = (freeSpace - 40) + 'px';
        $(this).parent().parent().next('.freeSpace').css('padding-top',fillerHeight);
        console.log($(this).height());
    });

})
