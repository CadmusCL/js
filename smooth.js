<script>
$(document).ready(function(){
    // Add smooth scrolling to all links
    $(&quot;a&quot;).on(&#39;click&#39;, function(event) {

      // Make sure this.hash has a value before overriding default behavior
      if (this.hash !== &quot;&quot;) {
        // Prevent default anchor click behavior
        event.preventDefault();

        // Store hash
        var hash = this.hash;

        // Using jQuery&#39;s animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $(&#39;html, body&#39;).animate({
          scrollTop: $(hash).offset().top
        }, 800, function(){

          // Add hash (#) to URL when done scrolling (default click behavior)
          window.location.hash = hash;
        });
      } // End if
    });
  });
</script>
