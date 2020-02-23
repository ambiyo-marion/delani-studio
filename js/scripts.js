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