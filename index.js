function date() {
   $("#birthday-msg").text("");
  $(".flex-grid").removeClass("bg-red");
  var name = $("#name").val();
  $(".name-div").hide();
  var dateTime = $("#birthdaytime").val();
  var countDownDate = new Date(dateTime).getTime();

  var intervalId = setInterval(() => {
    var now = new Date().getTime();
    var distance = countDownDate - now;

    // Time calculations for days, hours, minutes and seconds
    var days = Math.floor(distance / (1000 * 60 * 60 * 24));
    var hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    var minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    var seconds = Math.floor((distance % (1000 * 60)) / 1000);

    if (distance < 0) {
      clearInterval(intervalId);

      $("#days").text("NA");
      $("#hours").text("NA");
      $("#minutes").text("NA");
      $("#seconds").text("NA");
      $("#birthday-msg").text("Happy Birthday " + name + " 🎉🎊🎂");
      $(".flex-grid").addClass("bg-red");
      $(".name-div").show();
    } else {
      $("#days").text(days + " Days");
      $("#hours").text(hours + " Hours");
      $("#minutes").text(minutes + " Minutes");
      $("#seconds").text(seconds + " Seconds");
    }
  }, 1000);
}
