// set the first nav item as active
var dis = $(".list-wrap li").eq(0);

// align the wave
align(dis);

// align the wave on click
$(".list-wrap li").click(function(){
  dis = $(this);
  
  align(dis);
});

$('body').on('keydown',function(e){
    var code = e.keyCode || e.which;
  
    if(code == 9) {
      
      if(dis.is(':last-child')){
        $(".list-wrap li:nth-child(1)").trigger("click");
      }
      else{
        dis.next().trigger("click");
      }
      
    } 
});

$("body").keydown(function(e) {
  if(e.keyCode == 37) { // left
    $("#showroom").animate({
      right: "+=980"
    });
  }
  else if(e.keyCode == 39) { // right
    $("#showroom").animate({
      right: "-=980"
    });
  }
});

function align(dis){
  
  // get index of item
  var index = dis.index();
  
  // add active class to the new item
  $(".list-wrap li").removeClass("active");
  dis.delay(100).queue(function() {
    dis.addClass('active').dequeue();
  });
  
  // move the wave
  if (window.matchMedia('(max-width:700px)').matches) {
    var right = index*60 - 9;
  } else {
    var right = index*120 - 18;
  }
  // var right = index*120 - 18;
  $("#wave").css('right', right);
  
  // ▼ this is not necessary for the navigation ▼
  
  // set the background color
  var color = dis.data('color');
  $("body").css('background', color);

  var tabId = dis.attr('data-tab');
  $('.Tabcondent').removeClass('active');
  $('#'+tabId).addClass('active');
  document.getElementById('profile').style.zIndex = 0;
  document.getElementById('coffee').style.zIndex = 0;
  document.getElementById('code').style.zIndex = 0;
  document.getElementById('article').style.zIndex = 0;
  document.getElementById('works').style.zIndex = 0;
  document.getElementById(tabId).style.zIndex = 999;
  console.log(document.getElementById('profile').style.zIndex);
  console.log(document.getElementById('coffee').style.zIndex);
  console.log(document.getElementById('code').style.zIndex);
  console.log(document.getElementById('article').style.zIndex);
  console.log(document.getElementById('works').style.zIndex);
}
