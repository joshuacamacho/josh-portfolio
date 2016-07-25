(function ($) {
  $(document).ready(function() {

    $(document).on('click.card', '.card', function (e) {
      if ($(this).find('.card-reveal').length) {
        console.log("card reveal");
        if ($(e.target).is($('.card-reveal span.card-title')) || $(e.target).is($('.card-reveal span.card-title i'))) {
          $(this).find('.card-reveal').velocity({translateY: 0}, {duration: 300, queue: false, easing: 'easeOutQuad'});        
        }
        else {
          $(this).find('.card-reveal').velocity({translateY: '-100%'}, {duration: 300, queue: false, easing: 'easeOutQuad'});        
        }
      }


      

    });  


      

$(".card").mouseenter(function(e){
    $(this).find('.card-reveal').css({ display: 'block'}).velocity("stop", false).velocity({translateY: '-100%'}, {duration: 300, queue: false, easing: 'easeInOutQuad'});
  
  if ($(this).find('> .card-reveal').length) {
    if ($(e.target).is($('.card .activator')) || $(e.target).is($('.card .activator i')) ) {
    // Make Reveal animate up
        }
      }

      $('.card-reveal').closest('.card').css('overflow', 'hidden');

});

$(".card").mouseleave(function(){
  // Make Reveal animate down and display none
  $(this).find('.card-reveal').velocity(
    {translateY: 0}, 
    {
      duration: 225,
      queue: false,
      easing: 'easeInOutQuad',
      complete: function() {
        $(this).css({ display: 'none'});
      }
    });
});


  });
}( jQuery ));