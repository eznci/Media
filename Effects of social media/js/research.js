i = 0;
$(document).ready(function(){
  $("w").keypress(function(){
    $("span1").text(i += 1);
  });
  $("button").click(function(){
    $("w").keypress();
  });
});