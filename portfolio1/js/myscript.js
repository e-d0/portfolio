$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash);
      target = target.length ? target : $('[id=' + this.hash.slice(1) +']');
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 5000);
        return false;
      }
    }
  });
  $('.services_wrapper').css({'opacity': 0});
  $('.what_we_do, .tablets, .about_us').css({'opacity': 0,
					  'height': 0});
   var waypoint = new Waypoint({
		  element: document.getElementById('waypoint_about_us'),
		  
		  handler: function(direction){
			$('.about_us').animate({"opacity": "+=1",
									"height": "+=450"}, 400, function(){
					 waypoint.disable();
					})
		  },
		  offset: '20%'
   })
   
     var waypointServices = new Waypoint({
		  element: document.getElementById('waypoint_services_wrapper'),
		  handler: function(direction){
			$('.services_wrapper').animate({"opacity": "+=1"
									}, 400, function(){
					 waypointServices.disable();
					  
			})
			$('.services').animate({"opacity": "+=1"}, 500, function(){
					 waypointServices.disable(); 
			})
		  },
		  offset: '10%'
   })
    var waypointWhatWeDo = new Waypoint({
		  element: document.getElementById('waypoint_what_we_do'),
		  handler: function(direction){
			$('.what_we_do').animate({"opacity": "+=1",
									"height": "+=1380"}, 600, function(){
					 waypointWhatWeDo.disable();
			})
		  } 
      })
	var waypointTablets = new Waypoint({
		  element: document.getElementsByClassName("tablets"),
		  handler: function(direction){
			$('.tablets').animate({"opacity": "+=1",
									"height": "+=474"}, 3500, function(){
					 waypointTablets.disable();
			})
		  },
			offset: '40%' 
      })  
});