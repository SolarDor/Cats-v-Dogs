$(document).ready(function() {
  $("button#meow").click(function() {
    $("ul#cat").prepend("<li>Meow!</li>");
    $("ul#dog").prepend("<li>Woof!</li>");
  });

  $("button#woof").click(function() {
    $("ul#cat").prepend("<li>Meow Hiss Meow!</li>");
    $("ul#dog").prepend("Arf Arf Growl!</li>");
  });
});