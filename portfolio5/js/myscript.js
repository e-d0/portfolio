$(function(){
		var switcherUL = $("div.b-switcher-slider").css("overflow", "hidden")
								.children("div");
		var viewUL = $("div.b-arrow-slider").css("overflow", "hidden")
								.children("div"),
		imgs = viewUL.find(".b-arrow-slider__item"),
		imgW = $(".b-arrow-slider__item").width(),
		imgsLen = imgs.length,
		totalImgsW = imgsLen * imgW;
		current = 1;
		$(document).ready($(".b-slides").width(totalImgsW));
				
		createBubbles = function() {
				var switcherCount = $("div.b-switcher-slider").find(".b-switcher__item").length;
					for(i=0;i<switcherCount; i++)
						if(i==0){				
							var counter = ("<li id='active' data-page=" + (i) + "></li>");
							$("ul.b-slider-nav").append(counter);
					}else{
							var counter = ("<li id='passive' data-page=" + (i) + "></li>");
							$("ul.b-slider-nav").append(counter);
					};			 
			};
		
		jQuery.fn.changeNavId = function(){
			$(this).siblings().attr("id","passive");
			$(this).attr("id","active");
		};
		
		$("div.slider-nav-menu").show()
					.find(".nav-left,.nav-right")
					.on("click", function(){
					var direction = $(this).attr("id"),
					 position = imgW;

					 if(direction == "next") 
					{++current;
						}else{--current;
					};
					if(current == 0){
						current = imgsLen; //set last in
						direction = "next";
						position = totalImgsW - (imgW*5);				 
					}else if(current-1 == imgsLen ){
						current = 1; //set first image
						position = 0;
					}
					 doIt(viewUL, position, direction) 
					});
			
					function doIt(container, position, direction){
						var sign; // "-=" or"+="
						currentWinSize= $(document).width();
						lastSlideOffset=$(".b-arrow-slider__item").parent().children().last().offset().left;
						if(direction && position !=0 ){
							sign = (direction == "next") ? "-=" : "+=";
						}
						var shift = {"margin-left": sign ? (sign+position) : 
							position};
						var duration  = {};
						if(position == 0 || position == imgW*(imgsLen-1) || currentWinSize*0.7>lastSlideOffset )
							duration = {duration:300};
						container.animate(shift, duration);		
					};
										
				 
				$(".b-slider-nav").on("click", "li" ,function(){ 
					currentLi = (parseInt($(this).attr("data-page")));
					var findIndexItem = $("div.b-switcher-slider").find(".b-switcher__item").length;
					for(i=0;i<findIndexItem; i++)
						if(i==currentLi){
							$("div.b-switcher-slider").children().eq(i).css("display","inline-block");      
						}else{
							$("div.b-switcher-slider").children().eq(i).css("display","none");        

						}

					$(this).changeNavId()
				}
				);
			 	 
				$(document).ready(createBubbles);
})