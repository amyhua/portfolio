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
//= require_tree .

$(document).ready(function() {

    // Hide or show images upon load
    $('#me').hide();
    $('#window-view').addClass('clouds');

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

    $(window).resize(function() {
        var height = $(window).height() + 'px';
        var width = $('#window-view').width();
        $('.transition-background').css({'height':height, 'width': width});
    });
    // Fix background at certain scroll positions
    $(window).scroll(function() {
        var uchicago_y = Math.floor($('#before-uchicago').offset().top);
        var about_y = Math.floor($('#about').offset().top);
        if ($(this).scrollTop() > (uchicago_y - 500)) {
            // Change background to uchicago
            $('#window-view').removeClass('clouds').addClass('uchicago');
        }
        if ($(this).scrollTop() <= uchicago_y) {
            // Smoothly transition back to clouds
            $('#uchicago').show();
            $('#window-view').removeClass('uchicago').addClass('clouds');
        } else {
            // Smoothly transition to background uchicago image
            $('#uchicago').hide();

        }
        // Set picture frame if on about page

        if ($(this).scrollTop() > (about_y-700)) {
            $('#me').fadeIn();
        }

    })     ;

    // Navigation Links

    $('.nav > a').on('click', function() {
        var target = $(this).attr('href');
        var targetOffset = $(target).offset().top;
        $('html,body')
            .animate({scrollTop: targetOffset}, 1000);


    });
});
