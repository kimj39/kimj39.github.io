/* Initially load home page*/
$(document).ready(function(){
    $("#content").load("..\view\home.html #homePage");
});

/* Loads corresponding page when selected in Nav Bar */
$(".navbar").on('click', function(e){
  var myClass = e.target.className;
  if (myClass === "navOp" || myClass === "navText") {
    var myId = e.target.id;  
    $("#content").load(myId + ".html #" + myId + "Page");
  }
});