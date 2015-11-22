$(document).ready(function() {

  //Alert is hidden
  $(".alert-danger").hide();

  //Clicking add button
  $(".btn-success").on("click", function(e) {
    e.preventDefault();
    console.log("button works");

    var newItem = $("#newItem").val().trim();
    console.log("new word");

    //Function that shows alert box if input is duplicated
    var isDuplicate = false;
    $("td.word-td").each(function() {
      if($(this).text().trim().toLowerCase() === newItem.toLowerCase()) {
        isDuplicate = true;
      }
    });

    if(isDuplicate) {
      $(".alert-danger").fadeIn(1000);
      return;
    }

    //Variables for new row and delete button
    var newRow = $("<tr>");
    var wordTd = $("<td>").addClass("word-td").append(newItem);
    var deleteBtn = $("<button>").addClass("btn btn-danger").append("Delete");
    var deleteTd = $("<td>").append(deleteBtn);

    //Appending new row and delete button to table body
    newRow.append(wordTd).append(deleteTd);
    $("tbody").append(newRow);

    //Clearing the input field
    $("#newItem").val("").focus();
  });

  //Deleting added row
  $("table").on("click", ".btn-danger", function() {
    $(this).parent().parent().remove();
  });

  //Clearing alert
  $("#newItem").on("keydown", function() {
    $(".alert-danger").fadeOut();
  });

});