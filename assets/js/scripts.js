
$(document).foundation().ready(function(){

	// Lazy Loading not working :(
		//$("img").unveil();

	$('.learn-more-button').click(function(e) {
		e.preventDefault();
		$(this).fadeOut();
	});

	
	var message = "";
	$("#sendMessage").on("click", function() {
	    message = $("#contactform").serialize();
	    $.ajax({
	        url: "//formspree.io/krburgie+portfolio@gmail.com", 
	        method: "POST",
	        data: {message: message},
	        dataType: "json"
	    });

	    $('#contactArea').html("<div class='callout success'><h4>Message Sent!</h4><p>Thanks so much for reaching out. I'll be in touch soon!</p></div>");
  	return false;
	});

});