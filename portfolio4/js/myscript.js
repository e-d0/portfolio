$(function(){
		var viewUL = $("div.feature-slider").css("overflow", "hidden")
								.children("div"),
		imgs = viewUL.find(".slide_1"),
		imgW = 1000,
		imgsLen = imgs.length,
		totalImgsW = imgsLen * imgW;
		current = 1;
		
		createBubbles = function() {
				var switcherCount = $("div.feature-slider").find(".slide_1").length;
					for(i=0;i<switcherCount; i++)
						if(i==0){				
							var counter = ("<li id='active' data-page=" + (i) + "></li>");
							$("ul.slider-nav").append(counter);
							
						}else{
							var counter = ("<li id='passive' data-page=" + (i) + "></li>");
							$("ul.slider-nav").append(counter);
							
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
						$("#active").next().changeNavId(); 
					}else{--current;
						$("#active").prev().changeNavId();
					};
					if(current == 0){
						current = imgsLen; //set last in
						direction = "next";
						position = totalImgsW - imgW;
						$(".slider-nav li").attr("id","passive");
						$(".slider-nav li:last-child").attr("id","active");
											 
					}else if(current-1 == imgsLen){
						current = 1; //set first image
						position = 0;
						$(".slider-nav li").attr("id","passive");
						$(".slider-nav li:first-child").attr("id","active");
					}
					
					 doIt(viewUL, position, direction) 
					});
				function doIt(container, position, direction){
						var sign; // "-=" or"+="
						if(direction && position !=0 ){
							sign = (direction == "next") ? "-=" : "+=";
						}
						var shift = {"margin-left": sign ? (sign+position) : 
							position};
						var duration  = {};
						if(position == 0 || position == imgW*(imgsLen-1))
							duration = {duration:0};
						container.animate(shift, duration);		
					};
										
				$(".slider-nav").on("click", "li" ,function(){ 
					current = (parseInt($(this).attr("data-page")))+1;
					pxlCount = -((parseInt($(this).attr("data-page"))) * imgW);
					viewUL.animate({"margin-left" : pxlCount });
					$(this).changeNavId()
				}
				);
			 	 
				$(document).ready(createBubbles);
			
			})