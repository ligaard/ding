$(document).ready(function() {
//overlabel
    // $("#user-login-form label").overlabel();
    //    	$("#ting-search-form label").overlabel();


	  $("label").inFieldLabels({
			fadeOpacity:"0.2",
			fadeDuration:"100"			
		});
//carousel
    $('#frontpagecarousel').jcarousel({
       vertical: false, //
       scroll: 1, //amount of items to scroll by
       animation: "slow", // slow - fast
       auto: "0", //autoscroll in secunds
       wrap: "last"
     });

    $('#event-similar').jcarousel({
       vertical: false, //
       scroll: 1, //amount of items to scroll by
       animation: "slow", // slow - fast
       auto: "0", //autoscroll in secunds
       wrap: "last"
     });




});


