$(function() {
  $(".content").hide();
  styleQuotations();
  styleStories();

});

$(".text-container button").click(function() {
  var content = $(this).siblings(".content");
  var subtitle = $(this).siblings(".subtitle");
  if (content.css("display") == "none") {
    content.css("display", "inline-block");
    subtitle.css("padding-bottom", "5px");
    $(this).html("<img src=glyphicons_free/glyphicons/png/glyphicons-434-minus.png alt=Minus sign>");
  } else if (content.css("display") == "inline-block") {
    content.css("display", "none");
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
  $(".content_container").css("width", "1000px");
}


var photoCount = 0;
function changePhoto() {
  var photo = document.getElementById("profile");
  if (photoCount % 2 == 0) {
    photo.src = "assets/brady.jpg";
    photoCount++;
  }
  else {
    photo.src = "assets/profile.jpg";
    photoCount++;
  }
}

document.getElementById("profile").addEventListener("click", changePhoto);









