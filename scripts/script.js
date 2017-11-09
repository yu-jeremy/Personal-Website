$(function() {
  $("#story_one").hide();
  $("#story_two").hide();
  $("#story_three").hide();
});

$("#toggle_one").click(function() {
  if ($("#story_one").css("display") == "none") {
    $("#story_one").css("display", "inline-block");
    $("#subtitle_one").css("padding-bottom", "5px");
    $("#toggle_one").html("<img src=glyphicons_free/glyphicons/png/glyphicons-434-minus.png alt=Minus sign>");
  } else if ($("#story_one").css("display") == "inline-block") {
    $("#story_one").css("display", "none");
    $("#subtitle_one").css("padding-bottom", "0px");
    $("#toggle_one").html("<img src=glyphicons_free/glyphicons/png/glyphicons-433-plus.png alt=Plus sign>");
  }
});

$("#toggle_two").click(function() {
  if ($("#story_two").css("display") == "none") {
    $("#story_two").css("display", "inline-block");
    $("#subtitle_two").css("padding-bottom", "5px");
    $("#toggle_two").html("<img src=glyphicons_free/glyphicons/png/glyphicons-434-minus.png alt=Minus sign>");
  } else if ($("#story_two").css("display") == "inline-block") {
    $("#story_two").css("display", "none");
    $("#subtitle_two").css("padding-bottom", "0px");
    $("#toggle_two").html("<img src=glyphicons_free/glyphicons/png/glyphicons-433-plus.png alt=Plus sign>");
  }
});

$("#toggle_three").click(function() {
  if ($("#story_three").css("display") == "none") {
    $("#story_three").css("display", "inline-block");
    $("#subtitle_three").css("padding-bottom", "5px");
    $(".#toggle_three").html("<img src=glyphicons_free/glyphicons/png/glyphicons-434-minus.png alt=Minus sign>");
  } else if ($("#story_three").css("display") == "inline-block") {
    $("#story_three").css("display", "none");
    $("#subtitle_three").css("padding-bottom", "0px");
    $("#toggle_three").html("<img src=glyphicons_free/glyphicons/png/glyphicons-433-plus.png alt=Plus sign>");
  }
});




