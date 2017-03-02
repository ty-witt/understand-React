"use strict";

$(function() {
	var header = $(".navbar");
	$(window).scroll(function() {
		var scroll = $(window).scrollTop();

		if (scroll >= 100) {
			header.addClass("stickyHeader");
		} else {
			header.removeClass("stickyHeader");
		}
	});
});

$(document).ready(function(){
  // Add smooth scrolling to all links
  $("a").on('click', function(event) {
 
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "" && this.hash.indexOf("/search/") < 1 ) {
      // Prevent default anchor click behavior
      event.preventDefault();
 
      // Store hash
      var hash = this.hash;
      var offset = 55;
 
      if(hash == "#Contact")
      {
        offset = -150;
      }
 
      // Using jQuery's animate() method to add smooth page scroll
      // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
      $('html, body').animate({
        scrollTop: $(hash).offset().top - offset
      }, 800, function(){
        // Add hash (#) to URL when done scrolling (default click behavior)
        window.location.hash = hash;
      });
    } // End if
  });
});