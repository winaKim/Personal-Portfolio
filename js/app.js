$(document).ready(function() {
    $(window).on('scroll', function() {
        var scroll = $(window).scrollTop();
        if (scroll >= 50) {
            $(".sticky").addClass('stickyadd');
        } else {
            $(".sticky").removeClass('stickyadd');
        }
        
        // Get the button:
        let mybutton = document.getElementById("topBtn");

        if (scroll >= 250) {
            mybutton.style.display = "block";
        } else {
            mybutton.style.display = "none";
        }
    })

    var typed = new Typed(".element", {
        strings : ["Software Developer", "Security Analyst"],
        smartBackspace: true,
        typeSpeed:100,
        backSpeed:100,
        loop:true,
        loopCount:Infinity,
        startDelay:1000
    });

});

// When the user clicks on the button, scroll to the top of the document
function toHome() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}
