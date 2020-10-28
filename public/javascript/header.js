/* global $ */
$(document).ready(function(){
  // For Navigation Bar collapse
  var scrollTop = 0;
  $(window).scroll(function(){
    scrollTop = $(window).scrollTop();
      $('.counter').html(scrollTop);
    
    if (scrollTop >= 100) {
      $('.navigation').addClass('scrolled-navbar');
    } else if (scrollTop < 100) {
      $('.navigation').removeClass('scrolled-navbar');
    }    
  }); 

  //Intialising the web page with default activate class
  $(function(){
    classAddActivate();
  })

  //Add strike-through effect to the current item
  $(".nav-list li a").hover(
    function () {
      classRemoveActivate();
      $(this).addClass('activate');
    },
    function () {
      $(this).removeClass("activate");
      classAddActivate();
    }
  );

  // Add the activate Class
  function classAddActivate(){
    var current = location.pathname;
    $('.nav-list li a').each(function(){
        var $this = $(this);
        // if the current path is like this link, make it active
        if($this.attr('href').indexOf(current) != -1){
            $this.addClass('activate');
        }
    })
  }

  //Remove the activate Class
  function classRemoveActivate(){
    var current = location.pathname;
    $('.nav-list li a').each(function(){
      var $this = $(this);
      // if the current path is like this link, make it active
      if($this.attr('href').indexOf(current) != -1){
        $this.removeClass('activate');
      }
    })
  }
});


$('#nav-toggle').click(function() {
  $('nav ul').slideToggle();
});
    
    
    
    
 
    
