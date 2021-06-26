$(document).ready(function(){

    //mobile nav bar

    $('.js--mobile-nav-icon').click(function(){
        var nav = $('.js--main-nav');
        var icon = $('.js--mobile-nav-icon i');

        nav.slideToggle(200);

        if(icon.hasClass('ion-ios-menu')){
            icon.addClass('ion-ios-close');
            icon.removeClass('ion-ios-menu');
        } else{
            icon.addClass('ion-ios-menu');
            icon.removeClass('ion-ios-close');
        }

    });

    //navigation scroll or smooth scrolling
    $("a").on('click', function(event) {

        // Make sure this.hash has a value before overriding default behavior
        if (this.hash !== "") {
          // Prevent default anchor click behavior
          event.preventDefault();
    
          // Store hash
          var hash = this.hash;
    
          // Using jQuery's animate() method to add smooth page scroll
          // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
          $('html, body').animate({
            scrollTop: $(hash).offset().top
          }, 800, function(){
    
            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
          });
        } // End if
      });

      

});