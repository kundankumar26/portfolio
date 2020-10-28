/* global $ */
$(".block").hover(function(){
          $(this).find('.gradient').animate({ height: "8em"}, "fast");
          $(this).find('.block-show').animate({fontSize: '0.6em'}, "fast");
          $(this).find('.block-btn').show();
    }, function(){
          $(this).find('.gradient').animate({ height: "2em"}, "fast");
          $(this).find('.block-show').animate({fontSize: '0.4em'}, "fast");
          $(this).find('.block-btn').hide();
    });