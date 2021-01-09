$(function() {
    $(".fakeBtn").click(function() {
        $("#fakeModal").modal('show');
    });
    $(".maplink").hover(function(){
        $(this).css("color", "rgb(99, 10, 10)");
        }, function(){
        $(this).css("color", "black");
      });
});