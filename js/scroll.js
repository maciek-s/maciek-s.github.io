jQuery(function($)
{
  $.scrollTo(0);
  $("#lgogosmall").click(function() { $.scrollTo($("#top"), 500); });
  $("#link0").click(function() { $.scrollTo($("#top"), 500); });
  $("#link1").click(function() { $.scrollTo($("#me").offset().top -100, 500); });
  $("#link2").click(function() { $.scrollTo($("#skills"), 500); });
  $("#link3").click(function() { $.scrollTo($("#portfolio").offset().top -70, 500); });
  $("#link4").click(function() { $.scrollTo($("#contacts").offset().top -50, 500); });
  $("#icon_down").click(function() { $.scrollTo($("#me").offset().top -100, 500); });
  $("#icon_up").click(function() { $.scrollTo($("#top"), 500); });
}

);
