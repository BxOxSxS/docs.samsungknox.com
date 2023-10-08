$(document).ready(function() {
  $("#gfg").on("keyup", function() {
    var value = $(this).val().toLowerCase();
    $("#geeks li").filter(function() {
      $(this).toggle($(this).text()
      .toLowerCase().indexOf(value) > -1)
    });
  });
});
