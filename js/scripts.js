$(document).ready(function() {

  $(".getCustInfo").submit(function(){
    event.preventDefault();
    console.log("hi");
    var javaScript1 = $("#javaScriptLine").val();
    var contact = ["firstName", "lastName", "addressStreet", "addressCity", "addressState", "addressZip"];

    contact.forEach(function(info) {
      var userAddress = $("input#" + info).val();
      $("." + info).text(userAddress).val();
    });
    $(".javaScriptOrdered").text(javaScript1).val();
    $(".receipt, .shipping").show();
  });
});
