$(document).ready(function(){

$('.navitem a').mouseover(function(){
      $(this).css({'border-bottom':'1px solid black'});
  });
  $('.navitem a').mouseleave(function(){
      $(this).css({'border-bottom':'0px solid black'});
  });
  
	$("html").niceScroll(/*{'mousescrollstep':'55'}*/);


	/*var form = $('#contact'),
    submit = form.find('[name="submit"]');

form.on('submit', function(e) {
  e.preventDefault();
  
  // avoid spamming buttons
  if (submit.attr('value') !== 'Send')
    return;
  
  var valid = true;
  form.find('input, textarea').removeClass('invalid').each(function() {
    if (!this.value) {
      $(this).addClass('invalid');
      valid = false;
    }
  });
  
  if (!valid) {
    form.animate({left: '-3em'},  50)
        .animate({left:  '3em'}, 100)
        .animate({left:    '0'},  50);
  } else {
    submit.attr('value', 'Sending...')
          .css({boxShadow: '0 0 200em 200em rgba(225, 225, 225, 0.6)',
                backgroundColor: '#ccc'});
    // simulate AJAX response
    setTimeout(function() {
      // step 1: slide labels and inputs
      // when AJAX responds with success
      // no animation for AJAX failure yet
      form.find('label')
          .animate({left: '100%'}, 500)
          .animate({opacity: '0'}, 500);
    }, 1000);
    setTimeout(function() {
      // step 2: show thank you message after step 1
      submit.attr('value', 'Thank you :)')
            .css({boxShadow: 'none'});
    }, 2000);
    setTimeout(function() {
      // step 3: reset
      form.find('input, textarea').val('');
      form.find('label')
          .css({left: '0'})
          .animate({opacity: '1'}, 500);
      submit.attr('value', 'Send')
            .css({backgroundColor: ''});
    }, 4000);
  }
});*/


$(window).scroll(function(){

if($(this).scrollTop()!=0){
      $('.topbar').css({'position': 'fixed' });
      $('.topbar').animate({height: '76px'}, 100);
      $('.logo').animate({width: '120px'}, 100);
      $('.navitem').animate({'padding':'20px 20px 20px 20px'});
      
      
    
    }else{
      resetAnimation( '.text2' , 'pullUp' );
      resetAnimation( '.bars' , 'pullUp' );
      resetAnimation('.arrowRight','stretchRight');
      
      
      
      
      $('.txt1').css({'visibility':'hidden'});
      //$('.img1').removeClass('slideDown');


      //$('.topbar').css({'position': 'relative'});
      //$('.navitem').animate({'padding':'0px 20px 0px 20px'});
      //$('.logo').animate({width: '200px'}, 100);
      //$('.topbar').animate({height: '107px'}, 100);
      $('.scrollhide').css({'opacity':'1'});
      opacity=1;
    }

});


});

