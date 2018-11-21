

                var slideIndex = 0;
                runSlides();

                function runSlides() {
                  var i;
                  var slides = document.getElementsByClassName("main_slide");
                  var dots = document.getElementsByClassName("dot");
                  for (i = 0; i < slides.length; i++) {
                    slides[i].style.display = "none";
                  }
                  slideIndex++;
                  if (slideIndex > slides.length) {slideIndex = 1}
                  for (i = 0; i < dots.length; i++) {
                    dots[i].className = dots[i].className.replace(" active", "");
                  }
                  slides[slideIndex-1].style.display = "block";
                  dots[slideIndex-1].className += " active";
                  setTimeout(runSlides, 5000); // Change image every 2 seconds
                }

                var slideIndex = 0;
                showSlides();
                function showSlides() {
                  var i;
                  var slides = document.getElementsByClassName("moSlides");
                  var dots = document.getElementsByClassName("dot");
                  for (i = 0; i < slides.length; i++) {
                    slides[i].style.display = "none";
                  }
                  slideIndex++;
                  if (slideIndex > slides.length) {slideIndex = 1}
                  for (i = 0; i < dots.length; i++) {
                    dots[i].className = dots[i].className.replace(" active", "");
                  }
                  slides[slideIndex-1].style.display = "block";
                  dots[slideIndex-1].className += " active";
                  setTimeout(showSlides, 7000);
                }

                $(function() {
                  $('a[href*="#"]:not([href="#"])').click(function() {
                    if (location.pathname.replace(/^\//,'') === this.pathname.replace(/^\//,'') && location.hostname === this.hostname) {
                      var target = $(this.hash);
                      target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                      if (target.length) {
                        $('html, body').animate({
                          scrollTop: target.offset().top - 41+'px'
                        }, 3000);
                        return false;
                      }
                    }
                  });
                });

                // go to top pc
                window.onscroll = function() {scrollFunction()};

                function scrollFunction() {
                    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
                        document.getElementById("smoothBtn").style.display = "block";
                    } else {
                        document.getElementById("smoothBtn").style.display = "none";
                    }
                }
