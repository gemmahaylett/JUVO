$('.sidemenu').click(function() {
	$('.st-content').css('overflow-y', 'hidden');
});

$('.st-pusher').click(function() {
	$('.st-content').css('overflow-y', 'scroll');
});

$('#charity-list li a').click(function() {
   // fetch the class of the clicked item
   var ourClass = $(this).attr('class');
   
   // reset the active class on all the buttons
   $('#charity-list li').removeClass('active');
   // update the active state on our clicked button
   $(this).parent().addClass('active');
   
   if(ourClass == 'all') {
      // show all our items
      $('#charity-holder').find('div.item').show(); 
   }
   else {
      // hide all elements that don't share ourClass
      $('#charity-holder').find('div:not(.' + ourClass + ')').hide();
      // show all elements that do share ourClass
      $('#charity-holder').find('div.' + ourClass).show();
   }
   return false;
});