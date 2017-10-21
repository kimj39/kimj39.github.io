/* Initially load home page*/
/* test */
$(document).ready(function(){
    $("#content").load("vh4/view/home.html #homePage");
});

/* Loads corresponding page when selected in Nav Bar */
$(".navbar").on('click', function(e){
  var myClass = e.target.className;
  if (myClass === "navOp" || myClass === "navText") {
    var myId = e.target.id;  
    $("#content").load("vh4/view/" + myId + ".html #" + myId + "Page");
  }
}); 