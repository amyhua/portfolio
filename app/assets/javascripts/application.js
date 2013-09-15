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
        var top = Math.floor($('#before-uchicago').offset().top);
        if ($(this).scrollTop() > (top - 500)) {
            $('#window-view').css('background-image',"url('/assets/uchicago.png')");
        }
        if ($(this).scrollTop()> top) {
            $('#uchicago').addClass('hide-this');

        }
        // See former background if scrolling back up
        if ($(this).scrollTop() < top) {
            $('#uchicago').removeClass('hide-this');
            $('#window-view').css('background-image',"url('/assets/clouds.png')");
        }

    })
});
