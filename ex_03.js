<!DOCTYPE html>
<html>

  <head>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Roboto:wght@100;900&display=swap');

      #out {
        font-family: roboto;
        font-weight: 900;
      }

    </style>
    <script src="https://code.jquery.com/jquery-3.6.0.min.js"></script>
  </head>

  <body>
    <div class="container">
      <div class="fade-container">
        <span id="out" class="fade"> </span>
      </div>
    </div>
    <script>
      // Animate function
      function stepAnimateText(element, animation, delay) {

        var text = $(element).text();
        var curr = 'Hello World!';

        for (var i = 0; i < text.length; i++) {
          var character = text.charAt(i);
          $(element).html(curr + '<span class="' + animation + '" style="-webkit-animation-delay: ' + i * delay + 's; animation-delay: ' + i * delay + 's">' + character + "</span>");
          curr = $(element).html();
        }
      }

      const delay = 0.02;

      // Display function
      function displayThisText(str) {
        if (document.getElementById("out").innerHTML.length === 0)
          document.getElementById("out").innerHTML += "\n";
        document.getElementById("out").innerHTML += str;
        stepAnimateText('.fade', 'bounceInDown', delay);
      }

      // Init on load
      stepAnimateText('.fade', 'bounceInDown', delay);

      $('.fade-container').click(function() {
        stepAnimateText('.fade', 'bounceInDown', delay);
        return false;
      });

    </script>
  </body>

</html>
