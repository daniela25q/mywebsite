// Set the index of the current slide
var slideIndex = 1;

// Call the function to start the slideshow
startSlideshow();

// Function to start the slideshow
function startSlideshow() {
  // Get all the slide images
  var slides = document.getElementsByClassName("slide");
  // Get the number of slides
  var numSlides = slides.length;

  // Wrap around to the first slide if we reach the end
  if (slideIndex > numSlides) {
    slideIndex = 1;
  } else if (slideIndex < 1) {
    slideIndex = numSlides;
  }

  // Hide all the slides
  for (var i = 0; i < numSlides; i++) {
    slides[i].classList.remove("active");
  }

  // Show the current slide
  slides[slideIndex - 1].classList.add("active");

  // Move to the next slide after 3 seconds
  setTimeout(function () {
    slideIndex++;
    startSlideshow();
  }, 3000);
}
