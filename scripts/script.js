$(function() {
  $(".story").hide();
  styleQuotations();
  styleStories();
});

$(".text-container button").click(function() {
  var thisStory = $(this).siblings(".story");
  var subtitle = $(this).siblings(".subtitle");
  if (thisStory.css("display") == "none") {
    thisStory.css("display", "inline-block");
    subtitle.css("padding-bottom", "5px");
    $(this).html("<img src=glyphicons_free/glyphicons/png/glyphicons-434-minus.png alt=Minus sign>");
  } else if (thisStory.css("display") == "inline-block") {
    thisStory.css("display", "none");
    subtitle.css("padding_bottom", "0px");
    $(this).html("<img src=glyphicons_free/glyphicons/png/glyphicons-433-plus.png alt=Plus sign>");
  }
});

// give quotations some CSS
function styleQuotations() {
  $(".quotation").css("max-width", "60%");
}

// give stories some css
function styleStories() {
  $(".pre-scrollable").css("width", "800px");
}








