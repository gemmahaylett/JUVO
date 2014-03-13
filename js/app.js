// Foundation JavaScript
// Documentation can be found at: http://foundation.zurb.com/docs
$(document).foundation();

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

var doughnutDonateCanvas = [
    {
      value: 20,
      color:"#c9ae3f"
    },
    {
      value : 80,
      color : "#f4d130"
    },
  ];


var doughnutDashCanvas1 = [
        {
          value: 20,
          color:"#c9ae3f"
        },
        {
          value : 80,
          color : "#f4d130"
        },
      
      ];


var doughnutDashCanvas2 = [
        {
          value: 20,
          color:"#c9ae3f"
        },
        {
          value : 80,
          color : "#f4d130"
        },
      
      ];


if ($("#dash-canvas1").length > 0){
  var myDoughnutDashCanvas1 = new Chart(document.getElementById("dash-canvas1").getContext("2d")).Doughnut(doughnutDashCanvas1);
  var myDoughnutDashCanvas2 = new Chart(document.getElementById("dash-canvas2").getContext("2d")).Doughnut(doughnutDashCanvas2);
}

if ($("#donate-canvas").length > 0){
  var doughnutDonateCanvas = new Chart(document.getElementById("donate-canvas").getContext("2d")).Doughnut(doughnutDonateCanvas);
}

var lineChartData = {
  labels : ["January","February","March","April","May","June","July"],
  datasets : [
    {
      fillColor : "rgba(220,220,220,0.5)",
      strokeColor : "rgba(220,220,220,1)",
      pointColor : "rgba(220,220,220,1)",
      pointStrokeColor : "#fff",
      data : [65,59,90,81,56,55,40]
    }
  ]

}
      
   var options = {
        
  //Boolean - If we show the scale above the chart data     
  scaleOverlay : false,
  
  //Boolean - If we want to override with a hard coded scale
  scaleOverride : false,
  
  //** Required if scaleOverride is true **
  //Number - The number of steps in a hard coded scale
  scaleSteps : null,
  //Number - The value jump in the hard coded scale
  scaleStepWidth : null,
  //Number - The scale starting value
  scaleStartValue : null,

  //String - Colour of the scale line 
  scaleLineColor : "rgba(0,0,0,.1)",
  
  //Number - Pixel width of the scale line  
  scaleLineWidth : 1,

  //Boolean - Whether to show labels on the scale 
  scaleShowLabels : true,
  
  //Interpolated JS string - can access value
  scaleLabel : "<%=value%>",
  
  //String - Scale label font declaration for the scale label
  scaleFontFamily : "'Arial'",
  
  //Number - Scale label font size in pixels  
  scaleFontSize : 12,
  
  //String - Scale label font weight style  
  scaleFontStyle : "normal",
  
  //String - Scale label font colour  
  scaleFontColor : "#666",  
  
  ///Boolean - Whether grid lines are shown across the chart
  scaleShowGridLines : true,
  
  //String - Colour of the grid lines
  scaleGridLineColor : "rgba(0,0,0,.05)",
  
  //Number - Width of the grid lines
  scaleGridLineWidth : 1, 
  
  //Boolean - Whether the line is curved between points
  bezierCurve : false,
  
  //Boolean - Whether to show a dot for each point
  pointDot : true,
  
  //Number - Radius of each point dot in pixels
  pointDotRadius : 3,
  
  //Number - Pixel width of point dot stroke
  pointDotStrokeWidth : 1,
  
  //Boolean - Whether to show a stroke for datasets
  datasetStroke : true,
  
  //Number - Pixel width of dataset stroke
  datasetStrokeWidth : 2,
  
  //Boolean - Whether to fill the dataset with a colour
  datasetFill : true,
  
  //Boolean - Whether to animate the chart
  animation : true,

  //Number - Number of animation steps
  animationSteps : 60,
  
  //String - Animation easing effect
  animationEasing : "easeOutQuart",

  //Function - Fires when the animation is complete
  onAnimationComplete : null
  
}

if ($("#canvasLine").length > 0){
  var myLine = new Chart(document.getElementById("canvasLine").getContext("2d")).Line(lineChartData, options);
}

var barChartData = {
  labels : ["January","February","March","April","May","June","July"],
  datasets : [
    {
      fillColor : "rgba(59, 89, 152,0.5)",
      strokeColor : "rgba(59, 89, 152,1)",
      data : [65,59,90,81,56,55,40]
    },
    {
      fillColor : "rgba(0, 172, 237,0.5)",
      strokeColor : "rgba(0, 172, 237,1)",
      data : [28,48,40,19,96,27,100]
    },
    {
      fillColor : "rgba(221, 75, 57,0.5)",
      strokeColor : "rgba(221, 75, 57,1)",
      data : [18,42,60,89,76,17,50]
    }
  ]
}
  
var options = {
   scaleOverlay : false,

   //Boolean - If we want to override with a hard coded scale
   scaleOverride : false,

   //** Required if scaleOverride is true **
   //Number - The number of steps in a hard coded scale
   scaleSteps : null,
   //Number - The value jump in the hard coded scale
   scaleStepWidth : null,
   //Number - The scale starting value
   scaleStartValue : null,

   //String - Colour of the scale line  
   scaleLineColor : "rgba(0,0,0,.1)",

   //Number - Pixel width of the scale line 
   scaleLineWidth : 1,

   //Boolean - Whether to show labels on the scale  
   scaleShowLabels : true,

   //Interpolated JS string - can access value
   scaleLabel : "<%=value%>",

   //String - Scale label font declaration for the scale label
   scaleFontFamily : "'Arial'",

   //Number - Scale label font size in pixels 
   scaleFontSize : 12,

   //String - Scale label font weight style 
   scaleFontStyle : "normal",

   //String - Scale label font colour 
   scaleFontColor : "#666", 

   ///Boolean - Whether grid lines are shown across the chart
   scaleShowGridLines : false,

   //Boolean - If there is a stroke on each bar 
   barShowStroke : true,

   //Number - Pixel width of the bar stroke 
   barStrokeWidth : 2,

   //Number - Spacing between each of the X value sets
   barValueSpacing : 5,

   //Number - Spacing between data sets within X values
   barDatasetSpacing : 1,

   //Boolean - Whether to animate the chart
   animation : true,

   //Number - Number of animation steps
   animationSteps : 60,

   //String - Animation easing effect
   animationEasing : "easeOutQuart",

   //Function - Fires when the animation is complete
   onAnimationComplete : null
}

if ($("#canvasBar").length > 0){
  var myLine = new Chart(document.getElementById("canvasBar").getContext("2d")).Bar(barChartData, options);
}

$(".hero").backstretch("images/hero.png");






  