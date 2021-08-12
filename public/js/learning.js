$( "button.continue" ).html( "Next Step..." ) // change the inner html of an element

// runs when button with class of "continue" is clicked
$("button.continue").click(() => {
  $("button.continue").html("Good job!")
})

$("button.add").click(() => {
  $("#insert-here").append("<p>Paragraph appended, amazing!")
})

$("a#google-link").attr("href", "https://www.google.com")