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

$('#hide-comment1').click(function(){
   var comment_status = $('#hide-comment1').html();

   if(comment_status == 'Hide <br>Comment'){
      $('#comment-content1 p').css('color', '#D6D6D6');
      $('#comment-content1 h4').css('color', '#D6D6D6');
      $('#comment-content1 img').css('opacity', '0.4');
      $('#hide-comment1').html('Show Comment');
   }
   else{
      $('#comment-content1 p').css('color', '#666666');
      $('#comment-content1 h4').css('color', '#666666');
      $('#comment-content1 img').css('opacity', '1.0');
      $('#hide-comment1').html('Hide <br>Comment');
   }
});

$('#hide-comment2').click(function(){
   var comment_status = $('#hide-comment2').html();

   if(comment_status == 'Hide <br>Comment'){
      $('#comment-content2 p').css('color', '#D6D6D6');
      $('#comment-content2 h4').css('color', '#D6D6D6');
      $('#comment-content2 img').css('opacity', '0.4');
      $('#hide-comment2').html('Show Comment');
   }
   else{
      $('#comment-content2 p').css('color', '#666666');
      $('#comment-content2 h4').css('color', '#666666');
      $('#comment-content2 img').css('opacity', '1.0');
      $('#hide-comment2').html('Hide <br>Comment');
   }
});

$('#hide-comment3').click(function(){
   var comment_status = $('#hide-comment3').html();

   if(comment_status == 'Hide <br>Comment'){
      $('#comment-content3 p').css('color', '#D6D6D6');
      $('#comment-content3 h4').css('color', '#D6D6D6');
      $('#comment-content3 img').css('opacity', '0.4');
      $('#hide-comment3').html('Show Comment');
   }
   else{
      $('#comment-content3 p').css('color', '#666666');
      $('#comment-content3 h4').css('color', '#666666');
      $('#comment-content3 img').css('opacity', '1.0');
      $('#hide-comment3').html('Hide <br>Comment');
   }
});

$('#hide-comment4').click(function(){
   var comment_status = $('#hide-comment4').html();

   if(comment_status == 'Hide <br>Comment'){
      $('#comment-content4 p').css('color', '#D6D6D6');
      $('#comment-content4 h4').css('color', '#D6D6D6');
      $('#comment-content4 img').css('opacity', '0.4');
      $('#hide-comment4').html('Show Comment');
   }
   else{
      $('#comment-content4 p').css('color', '#666666');
      $('#comment-content4 h4').css('color', '#666666');
      $('#comment-content4 img').css('opacity', '1.0');
      $('#hide-comment4').html('Hide <br>Comment');
   }
});

$(function(){
     
    $('#Grid').mixitup();
     
});