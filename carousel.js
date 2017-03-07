var carousel = document.getElementsByClassName('carouselContainer');

[].forEach.call(carousel, function(c) {
  console.log(c);
  let prev = c.getElementsByClassName('prevBtn')[0],
      next = c.getElementsByClassName('nextBtn')[0],
      inner = c.getElementsByClassName('carouselInner')[0],
      innerLeft = document.getElementById('carouselInnerLeft'),
      slidesLeft = innerLeft.getElementsByClassName('imgSlide'),
      innerRight = document.getElementById('carouselInnerRight'),
      slidesRight = innerRight.getElementsByClassName('imgSlide'),
      slides = inner.getElementsByClassName('imgSlide'),
      width = 720, slideIndex = 0, widthSmall = 640;

      function slideShow() {
        inner.style.left = -width * slideIndex + 'px';
        innerLeft.style.left = -widthSmall * slideIndex + 'px';
        innerRight.style.left = -widthSmall * slideIndex + 'px';
      }

      prev.addEventListener('click', function () {
        slideIndex--;
        if (slideIndex < 0) {
          slideIndex = slides.length - 1;
        }
        slideShow();
      });
      next.addEventListener('click', function () {
        slideIndex++;
        if (slideIndex >= slides.length) {
          slideIndex = 0;
        }
        slideShow();
      });

});
