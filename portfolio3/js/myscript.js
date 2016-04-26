$(function() {
  $('a[href*="#"]:not([href="#"])').click(function() {
    if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
      var target = $(this.hash); 
      target = target.length ? target : $('[name=' + this.hash.slice(1) +']'); 
      if (target.length) {
        $('html, body').animate({
          scrollTop: target.offset().top
        }, 2000);
        return false;
      }
    }
  });
  $('.main-nav-panel').css("height","0").css("opacity","0");
  $('.main-nav-panel').delay( 800).animate({'height':'+=70px','opacity':'1'});
  
  /*-------*/
  jQuery.fn.scrollCircles = function(options){
	
	var createScroller = function(){
		var scrollers = this;
		i = 0;
					
		$(scrollers).children("ul").children("li").children("img").each(function(index, element){
                $(element).attr("data-page", i);
                i++;                        
            });
		showScrollPage = function(i){
			 
			$(this).parent().parent().parent().children("div").children("div").hide(); 
			$(this).parent().parent().parent().children("div").children("div").eq(i).show(); 
			$(this).parent().parent().parent().children("ul").children("li").children("img").attr("src", "images/testimonial_circle.png"); 
			$(this).parent().parent().parent().children("ul").children("li").children("img").eq(i).attr("src", "images/testimonial_circle_hover.png");  
			};
			
		$(this).children("ul").children("li").children("img").on("click", function(){
                 showScrollPage.call($(this), parseInt($(this).attr("data-page")));
            });
		
	};
  return this.each(createScroller);
  
  };
   $("div.testimonial, div.blog").scrollCircles();
   $("div.testimonial, div.blog").children("ul").children("li").children("img").trigger("click");
 /*-------*/ 
   jQuery.fn.lightTabs = function(options){
        
        var createTabs = function(){
            tabs = this;
            i = 0;
            
            showPage = function(i){
                $(tabs).children("div").children("div").hide();
                $(tabs).children("div").children("div").eq(i).show();
                $(tabs).children("ul").children("li").removeClass("active");
                $(tabs).children("ul").children("li").eq(i).addClass("active");
            }
            
            showPage(0);				
            
            $(tabs).children("ul").children("li").each(function(index, element){
                $(element).attr("data-page", i);
                i++;                        
            });
            
            $(tabs).children("ul").children("li").click(function(){
                showPage(parseInt($(this).attr("data-page")));
            });				
        };		
        return this.each(createTabs);
    };	
 
$(document).ready(function(){
    $(".about_us_wrapper").lightTabs();
	});
 })