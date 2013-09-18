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

    // Fix background at certain scroll positions
    $(window).scroll(function() {
        var seattle_y = $('#before-seattle').offset().top
        var uchicago_y = $('#before-uchicago').offset().top
        var about_y = $('#about').offset().top

        var pos_y = $(this).scrollTop();

        if (pos_y < uchicago_y) {
            // Scroll up school and transition background to clouds && fade out frame
            $('#uchicago-filler').hide();
            $('#uchicago').show();
            $('#window-view').removeClass('uchicago').removeClass('seattle').addClass('clouds');
            if ($('#me').is(':visible')){
                $('#me').fadeOut().hide();
            }
        }
        if (pos_y > uchicago_y && pos_y < (seattle_y - 500)) {
            // Change background to uchicago & display frame
            if ($('#window-view').hasClass('clouds')){
                $('#uchicago').hide();
                $('#uchicago-filler').show();
                $('#window-view').removeClass('clouds').addClass('uchicago');
                $('#me').fadeIn().show();
            }


            // Fade back to UChicago
            if ($('#window-view').hasClass('seattle')) {
                $('#window-view').fadeOut(function() {
                    $(this).removeClass('seattle').addClass('uchicago').fadeIn();
                });
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
    });

    // Navigation Links - Smooth Scrolling

    $('.nav > a').on('click', function(e) {
        e.preventDefault();
        var target = $(this).data('link');
        var targetOffset = $(target).offset().top;
        $('html,body')
            .animate({scrollTop: targetOffset}, 1000);
    });

    $('.carousel').carousel();
});
