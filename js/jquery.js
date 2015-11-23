$(document).ready(function() {

  //Alert is hidden
  $(".alert-danger").hide();

  //Creating a list title
   $(".btn-primary").on("click", function(e) {
    e.preventDefault();
    console.log("button works");

    var listName = $("#listName").val();
    var listTitle = $("<h3>");
    var deleteBtn = $("<button>").addClass("btn btn-danger").append("Delete");
    var deleteTitle = $("<h3>").append(deleteBtn);

    listTitle.append(listName).append(deleteTitle);
    $("th").append(listTitle);

    $("#listName").val("").focus();
  });

  //Clicking add button
  $(".btn-success").on("click", function(e) {
    e.preventDefault();
    console.log("button works");

    var newItem = $("#newItem").val().trim();
    console.log("new word");

    if (newItem === "") {
      return;
    }

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

    //Variables for new row, delete button, and check button
    var newRow = $("<tr>");
    var wordTd = $("<td>").addClass("word-td").append(newItem);
    var completeBtn = $("<button>").addClass("btn btn-info").append("Completed");
    var completeTd = $("<td>").append(completeBtn);
    var deleteBtn = $("<button>").addClass("btn btn-danger").append("Delete");
    var deleteTd = $("<td>").append(deleteBtn);

    //Appending new row and delete button to table body
    newRow.append(wordTd).append(completeTd).append(deleteTd);
    $("tbody").append(newRow);

    //Clearing the input field
    $("#newItem").val("").focus();
  });

  //Deleting added row
  $("table").on("click", ".btn-danger", function() {
    $(this).parent().parent().remove();
  });

  //Strike Through 
  $("table").on("click", ".btn-info", function() {
    $(this).parent().prev().css("text-decoration", "line-through");
  });

  //Clearing alert
  $("#newItem").on("keydown", function() {
    $(".alert-danger").fadeOut();
  });

});