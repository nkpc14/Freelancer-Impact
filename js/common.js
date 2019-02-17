$(function() {
    $('#menu .dropdown-menu').dropdown_menu({          // Class for drop shadow on submenus
      });
});

$(function () {
  $('#demo5').scrollbox({
    direction: 'v',
    distance: 170
  });
  $('#demo5-backward').click(function () {
    $('#demo5').trigger('backward');
  });
  $('#demo5-forward').click(function () {
    $('#demo5').trigger('forward');
  });
});

	   
	   
		var theInt = null;
		var $crosslink, $navthumb;
		var curclicked = 0;
		
		theInterval = function(cur){
			clearInterval(theInt);
			
			if( typeof cur != 'undefined' )
				curclicked = cur;
			
			$crosslink.removeClass("active-thumb");
			$navthumb.eq(curclicked).parent().addClass("active-thumb");
				$(".stripNav ul li a").eq(curclicked).trigger('click');
			
			theInt = setInterval(function(){
				$crosslink.removeClass("active-thumb");
				$navthumb.eq(curclicked).parent().addClass("active-thumb");
				$(".stripNav ul li a").eq(curclicked).trigger('click');
				curclicked++;
				if( 2 == curclicked )
					curclicked = 0;
				
			}, 30000);
		};
		
		$(function(){
			
			$("#main-photo-slider").codaSlider();
			
			$navthumb = $(".nav-thumb");
			$crosslink = $(".cross-link");
			
			$navthumb
			.click(function() {
				var $this = $(this);
				theInterval($this.parent().attr('href').slice(1) - 1);
				return false;
			});
			
			theInterval();
			
	$('#goBtn').click(function (e) {
			
			
			var id = '#dialog';
	
		//Get the screen height and width
		var maskHeight = $(document).height();
		var maskWidth = $(window).width();
	
		//Set heigth and width to mask to fill up the whole screen
		$('#mask').css({'width':maskWidth,'height':maskHeight});
		
		//transition effect		
		$('#mask').fadeIn(1000);	
		$('#mask').fadeTo("slow",0.8);	
	
		//Get the window height and width
		var winH = $(window).height();
		var winW = $(window).width();
              
		//Set the popup window to center
		$(id).css('top',  winH/2-$(id).height()/2);
		$(id).css('left', winW/2-$(id).width()/2);
	
		//transition effect
		$(id).fadeIn(1000); 	
	});		
	//if close button is clicked
	$('.window .close').click(function (e) {
		//Cancel the link behavior
		e.preventDefault();
		
		$('#mask').hide();
		$('.window').hide();
	});	
	
	//if mask is clicked
	//$('#mask').click(function () {
		//$(this).hide();
		//$('.window').hide();
	//});		
	
	
		});
		
	function blank(a) { if(a.value == a.defaultValue) a.value = ""; }
function unblank(a) { if(a.value == "") a.value = a.defaultValue; }	
		















