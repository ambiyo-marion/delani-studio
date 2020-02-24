$(document).ready(function() {
    $("#icondesign").click(function() {
      $(".designdescription").toggle();
    });
    $("#development").click(function() {
        $(".developmentdescription").toggle();
      });
      $("#management").click(function() {
        $(".managementdescription").toggle();
      });
      $(".work4-image").hover(function(){
        $("#work4-blue").toggle()
        $("#work4-img").toggle()
    });
    $(".work3-image").hover(function(){
      $("#work3-ontario").toggle()
      $("#work3-img").toggle()
  });
  $(".work2-image").hover(function(){
      $("#work2-gold").toggle()
      $("#work2-img").toggle()
  });
  $(".work8-image").hover(function(){
      $("#work8-giraffe").toggle()
      $("#work8-img").toggle()
  });
  $(".work1-image").hover(function(){
      $("#work1-entertain").toggle()
      $("#work1-img").toggle()
  });
  $(".work7-image").hover(function(){
      $("#work7-logo").toggle()
      $("#work7-img").toggle()
  });
  $(".work6-image").hover(function(){
      $("#work6-form").toggle()
      $("#work6-img").toggle()
  });
  $(".work5-image").hover(function(){
      $("#work5-elena").toggle()
      $("#work5-img").toggle()
  });
      
      $("#submitbutton").click(function(){
        var messageHere = (document.getElementById("messagehere").value);
        var name = (document.getElementById("name").value);
        if(messageHere != "") {
        alert(name + " we have received your message. Thank you for reaching out to us.");
      } else {
        alert("Please fill out form before submitting");
      }
      });
});