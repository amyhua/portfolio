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
        var seattle_y = $('#before-seattle').offset().top;
        var uchicago_y = $('#before-uchicago').offset().top;
        var about_y = $('#about').offset().top;

        var pos_y = $(this).scrollTop();

        if (pos_y <= uchicago_y) {
            // Scroll up school and transition background to clouds && fade out frame
            $('#uchicago').show();
            $('#uchicago-filler').hide();
            $('#window-view').removeClass('uchicago').addClass('clouds');
            $('#me').fadeOut();
        }
        if (pos_y > uchicago_y && pos_y < (seattle_y - 500)) {
            // Change background to uchicago & display frame
            if ($('#window-view').hasClass('clouds')){
                $('#uchicago').hide();
                $('#uchicago-filler').show();
                $('#window-view').removeClass('clouds').addClass('uchicago');
                $('#me').fadeIn();
            }


            // Fade back to UChicago
            if ($('#window-view').hasClass('seattle')) {
                $('#window-view').fadeOut(function() {
                    $(this).removeClass('seattle').addClass('uchicago').fadeIn();
                });
            }
        }
        if (pos_y > (seattle_y - 500)) {
            // Fade to Seattle
            if ($('#window-view').hasClass('uchicago')) {
                $('#window-view').fadeOut(function() {
                    $(this).removeClass('uchicago').addClass('seattle').fadeIn();
                });
            }
        }
    });

    // Navigation Links - Smooth Scrolling

    $('.nav > a').on('click', function() {
        var target = $(this).attr('href');
        var targetOffset = $(target).offset().top;
        $('html,body')
            .animate({scrollTop: targetOffset}, 1300);


    });
});
