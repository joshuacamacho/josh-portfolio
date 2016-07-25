$(document).ready(function(){


	/*smooth scrolling*/


    $("html").niceScroll(/*{'mousescrollstep':'55'}*/);

  $('.navitem a').mouseover(function(){
  		$(this).css({'border-bottom':'1px solid black'});
  });
  $('.navitem a').mouseleave(function(){
  		$(this).css({'border-bottom':'0px solid black'});
  });

	    

	
	});
    
	
	//end smooth scrolling
	
	$('section[data-type="background"]').each(function(){
        var $bgobj = $(this); // assigning the object
     
        $(window).scroll(function() {
            var yPos = -($bgobj.scrollTop()) / $bgobj.data('speed'); 
             
            // Put together our final background position
            var coords = '50% '+ yPos + 'px';
 
            // Move the background
            $bgobj.css({ backgroundPosition: coords });
        }); 
    }); 

	





	console.log('loaded source.js');
	

	//function to center and bottom position the scroll arrow
	function centerBottom(selector) {
    var newTop =   $(window).height() - $(selector).height() -20;
    var newLeft = ($(window).width()  - $(selector).width()) / 2;
    $(selector).css({
    	'position': 'absolute',
    	'left': newLeft,
    	'top': newTop
    });
	}
	centerBottom(".arrowholder");

	//handles the absolute position of the text over the coffee picture
	var bottomposition = $('.footerContent').height() 
											 + ($('.bodycontainer3').height()/2) 
											 +40;
	
	$('.bannertext2').css({'bottom':bottomposition});
	//handles positioning of top text over first picture
	

	


	function resetAnimation(itemClass,animateClass){
  	
  	$(itemClass).removeClass(animateClass);
  	$(itemClass).css({'visibility':'hidden'});
  }


  $('.slider').scroll(function(){


  });

	var isBig=true;//flag used for nav bar
	
	var opacity =1;
	$(window).scroll(function(){
	

		// Simple parallax scroll --> on banner
	



		var shiftFactor = 3;
		var c_slidepos = -75;
	
		var theight = $('.banner').outerHeight();
		var pctg = $(this).scrollTop() / theight;
		
		
		var new_position = -c_slidepos * pctg * shiftFactor;
		$('.banner').css({'margin-top': (new_position+c_slidepos)+'px'});
		
		/* for handling animations */
		$('#hidden').each(function(){
		var imagePos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+600) {
				$(this).addClass("slideUp");
			}
		});

		$('.barsanimate').each(function(){
		var imagePos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+600) {
				$('.bars').css({'visibility':'visible'});
				$('.bars').addClass("pullUp");
			}
		});

		$('.text2').each(function(){
		var imagePos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+800) {
				$('.text2').css({'visibility':'visible'});
				$('.text2').addClass("pullUp");
			}
		});
		//arrow right animation handler
		$('.arrowRight').each(function(){
		var imagePos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+700) {
				$(this).css({'visibility':'visible'});
				$(this).addClass("stretchRight");
			}
		});
		//icon animation handler
		/*$('.img1').each(function(){
		var imagePos = $(this).offset().top;

		var topOfWindow = $(window).scrollTop();
			if (imagePos < topOfWindow+700) {
				$('.txt1').css({'visibility':'visible'});
				$(this).addClass("slideDown");
			}
		});*/


		// Simple nav follow
		opacity-=.05;
		$('.scrollhide').css({'opacity':opacity});


		//handles top bar nav color change
		
		//service button

		function changeFontcolor(classname, color){
			$(classname).css({'color':color});

		}

		if( $(this).scrollTop() >=  (  $('.solidbar1').offset().top - 76 - ($('#home1').height()/3) )
		&& $(this).scrollTop() < ( $('#home2').offset().top - 76  ) ){
			$('.navService').css({'background':'#1AB2B9'});
			changeFontcolor('.navService a','white');
		}else{
			$('.navService').css({'background':'white'});
			changeFontcolor('.navService a','black');
		}
		//team button
		if( $(this).scrollTop() >=  (  $('.solidbar2').offset().top - 76 - ($('#home2').height()/3))
		&& $(this).scrollTop() < ( $('#home3').offset().top - 76)  ){
			
			$('.navTeam').css({'background':'#E88F0C'});
			changeFontcolor('.navTeam a','white');
		}else{
			$('.navTeam').css({'background':'white'});

			changeFontcolor('.navTeam a','black');
		}
		//Partners button
		if( $(this).scrollTop() >=  (  $('.solidbar3').offset().top - 76 - ($('#home3').height()/3))
		&& $(this).scrollTop() < ( $('#home4').offset().top - 76)  ){
			
			$('.navPartner').css({'background':'#823FE7'});
			changeFontcolor('.navPartner a','white');
		}else{
			$('.navPartner').css({'background':'white'});
			changeFontcolor('.navPartner a','black');
		}




		//top bar + nav / logo
		
		
		if($(this).scrollTop()!=0){
			/*$('.topbar').css({'position': 'fixed' });*/
			if(isBig === true){
				$('.topbar').removeClass("animateDown").addClass("animateUp");
				isBig=false;
				$('.logo').removeClass("animateImageBig").addClass("animateImageSmall");
				$('.navitem').removeClass("animateNavBig").addClass("animateNavSmall");
			}
			
			
			
		
		}else{
			resetAnimation( '.text2' , 'pullUp' );
			resetAnimation( '.bars' , 'pullUp' );
			resetAnimation('.arrowRight','stretchRight');
			if(isBig == false){
				$('.topbar').removeClass("animateUp").addClass("animateDown");
				isBig=true;
				console.log('shoulda got big');
				$('.navitem').removeClass("animateNavSmall").addClass("animateNavBig");
				$('.logo').removeClass("animateImageSmall").addClass("animateImageBig");
			}
			
			
			
			$('.txt1').css({'visibility':'hidden'});
			//$('.img1').removeClass('slideDown');


			//$('.topbar').css({'position': 'relative'});
			
			//$('.topbar').animate({height: '107px'}, 100);
			$('.scrollhide').css({'opacity':'1'});
			opacity=1;
		}
	
	});
	
	$(window).resize(function(evt){
		centerBottom(".arrowholder");


		var bottomposition = $('.footerContent').height() 
											 + ($('.bodycontainer3').height()/2) 
											 +40;
		
		$('.bannertext2').css({'bottom':bottomposition});

		//handles positioning of top text over first picture
		var topposition = $('.slider').offset().top + ($('.slider').height()/4) ;
	
		$('.bannertext').css({'top':topposition});

		//console.log('test');
		//$('.banner').css({width: $(window).width()+'px'});
		//$('.banner').attr('src', 'http://placehold.it/'+$(window).width()+'x700');
	
    });
	//$('.banner').css({width: $(window).width()+'px'});
	//$('.banner').attr('src', 'http://placehold.it/'+$(window).width()+'x700');
	
	

/*google font*/

  WebFontConfig = {
    google: { families: [ 'Open+Sans:700,400:latin' ] }
  };
  (function() {
    var wf = document.createElement('script');
    wf.src = ('https:' == document.location.protocol ? 'https' : 'http') +
      '://ajax.googleapis.com/ajax/libs/webfont/1/webfont.js';
    wf.type = 'text/javascript';
    wf.async = 'true';
    var s = document.getElementsByTagName('script')[0];
    s.parentNode.insertBefore(wf, s);
  })(); 

  
  $(document).ready(function(){
	$('.navPartner a').on('click',function (e) {
	    e.preventDefault();

	    var target = ($('.partners').offset().top - 76);

	    $('html, body').stop().animate({
	        'scrollTop': target
	    }, 900, 'swing', function () {
	        //window.location.hash = target;
	    });
	});

	$('.navService a').on('click',function (e) {
	    e.preventDefault();

	    var target = ($('.services').offset().top - 76);

	    $('html, body').stop().animate({
	        'scrollTop': target
	    }, 900, 'swing', function () {
	        //window.location.hash = target;
	    });
	});

	$('.navTeam a').on('click',function (e) {
	    e.preventDefault();

	    var target = ($('.team').offset().top - 76);

	    $('html, body').stop().animate({
	        'scrollTop': target
	    }, 900, 'swing', function () {
	        //window.location.hash = target;
	    });
	});

	$('.navHome a').on('click',function (e) {
	    e.preventDefault();

	    var target = 

	    $('html, body').stop().animate({
	        'scrollTop': 0
	    }, 900, 'swing', function () {
	        //window.location.hash = target;
	    });

			//$('.navitem').animate({'padding':'0px 20px 0px 20px'});
			//$('.logo').animate({width: '200px'}, 100);
			//$('.topbar').animate({height: '107px'}, 100);



	});


});

