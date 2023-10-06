// $("h1").html("<mark>Good bye</mark>");
$("button").click(function () {
  var origHTML = $("h1").html();
  console.log(origHTML);
  $("h1").html("<mark>" + origHTML + "</mark>");
});
$("button").on("click", function () {
  $("h1").toggle();
});
$(document).keydown(function (event) {
  var pressedKey = event.key;
  $("h1").text(pressedKey);
  console.log(event.key);
});
