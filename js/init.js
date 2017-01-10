(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();


    $('#send_button_container a').on("click", function(){
    	$.ajax({
    		url: "http://foxacademia.com/php/contact.php?con=mail&email=eduardo.quintero52@gmail.com&course=android"
    	}).done(function(){
    		alert("Listo");
    	});
    });
  }); // end of document ready
})(jQuery); // end of jQuery name space