(function($){
  $(function(){

    $('.button-collapse').sideNav();
    $('.parallax').parallax();
	$(".preloader-wrapper").css("display","none");
	$("#contact_box").css("display","none");
    $('.error_message').css("display","none");
    $("#contact_box").css("z-index","10");

	var sending_mail = false;

	var selected_course;

    $('#send_button_container a').on("click", function(){
		sendEmail();
    });

    $('#email').keyup(function(e){
		if(e.keyCode == 13)
		{
			sendEmail();
		}
	});



    $('.course_button').on("click", function(element){
    	selected_course = this.getAttribute("data");
	    $("#contact_box").fadeIn();
	    $('#email').focus();
    });

    $('#close_contact').on("click", function(){
	    $("#contact_box").fadeOut();
    });

    $(document).keyup(function(e) {
    	if(e.keyCode == 27){
	    	$("#contact_box").fadeOut();
    	}
    });

    function sendEmail(){
    	var email = $('#email').val();

    	if(!sending_mail){
    		$('.error_message').fadeOut();
    		if(isEmail(email)){
	    		sending_mail = true;
		    	$(".preloader-wrapper").fadeToggle();
			    $("#send_icon").fadeToggle();

		    	$.ajax({
		    		url: "../php/contact.php?con=mail&email="+email+"&course="+selected_course
		    	}).done(function(){
		    		sending_mail = false;
		    		$(".preloader-wrapper").fadeToggle();
			    	$("#send_icon").fadeToggle();
		    		$("#contact_box").fadeToggle();
		    	});
    		}else{
    			$('.error_message').fadeIn();
    		}
    	}
    }
    function isEmail(email) {
  		var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
  		return regex.test(email);
	}
  }); // end of document ready
})(jQuery); // end of jQuery name space