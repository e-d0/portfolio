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
  })
	
  $('.menu_wrapper ').css("height", "0");
  $('.menu').css('opacity', '0');
  
  $('.menu_wrapper ').delay( 800).animate({'height':'+=12%'},function(){
	$('.menu').css('opacity','1');
  })
  
  $('.arrow_up').click(function(){
		  var currentWindowPositionY = $(window).scrollTop();
		  var offsets=[];
		  
		  $('a[id]').each(function(index, element){ offsets.push(
					$(element).offset().top
					)
					});
			for(i=0; i<offsets.length; i++){
				if(  (offsets[i] < currentWindowPositionY) && (offsets[i+1] >= currentWindowPositionY)){
				$('html, body').animate({
				  scrollTop: offsets[i] 
				}, 800); 
																							} 
				else if( offsets[offsets.length-1] <= currentWindowPositionY ){
					$('html, body').animate({
				  scrollTop: offsets[offsets.length-1]  
				}, 300);  
				};
			}return false;
	 });
	
	$('.arrow_down').click(function(){
		  var currentWindowPositionY = $(window).scrollTop();
		  var offsets=[];
		  
			$('a[id]').each(function(index, element){ offsets.push(
					$(element).offset().top
					)
					});
			for(i=0; i<offsets.length; i++){
				if(  (offsets[i] <= currentWindowPositionY) && (offsets[i+1] >= currentWindowPositionY)){
				$('html, body').animate({
				  scrollTop: offsets[i+1]+30 
				}, 3000);
																							} 
				  else if( ( offsets[0] >currentWindowPositionY >0)  ){
					$('html, body').animate({
				  scrollTop: offsets[0] 
				}, 500); 
				}; 
			}return false;
	}) ;
	
	$(window).on("scroll", function(){
			var currentWindowPositionY = $(window).scrollTop();
			var offsets=[];
			  $('a[id]').each(function(index, element){ offsets.push(
					$(element).offset().top)});		
					
			if (offsets[offsets.length-1] < currentWindowPositionY){
					$('.arrow_down_wrapper').css( 'display', 'none' );
			}else if (offsets[0] > currentWindowPositionY){
					$('.arrow_up_wrapper').css( 'display', 'none' );			
			}
			else{
					$('.arrow_down_wrapper').css( 'display', 'block' );
					$('.arrow_up_wrapper').css( 'display', 'block' );
			}
	});
})