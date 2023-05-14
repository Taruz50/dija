$(document).ready(function() {
  $(window).scroll(function() {
    if (this.scrollY > 20) {
      $('.navbar').addClass("sticky");
    } else {
      $('.navbar').removeClass("sticky");
    }
    if (this.scrollY > 500) {
      $('.scroll-up-btn').addClass("show");
    } else {
      $('.scroll-up-btn').removeClass("show");
    }
  });

  //slide up script
  $('.scroll-up-btn').click(function() {
    $('html').animate({
      scrollTop: 0
    })
  });



  $('.menu-btn').click(function() {
    $('.navbar .menu').toggleClass("active");
    $('.menu-btn i').toggleClass("active");

  });

  var typed = new Typed(".typing", {
    strings: ["am an Economics Student.", "am a fast learner", "love cooking.", "am a fun, hardworking person.", "hate swimming", "love reading in my spare time"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
  });

  var typed = new Typed(".typing-2", {
    strings: ["am an Economics Student.", "am a fast learner", "love cooking.", "love tennis", "am a fun, hardworking person.", "hate swimming", "love reading in my spare time"],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
  });

  const readMoreBtn = document.querySelector('.read-more-btn');
  const text = document.querySelector('.Read-text');
  readMoreBtn.addEventListener('click', (e) => {
    text.classList.toggle('show-more');
    if (readMoreBtn.innerText == 'Read More') {
      readMoreBtn.innerText = 'Read Less';
    } else {
      readMoreBtn.innerText = 'Read More';
    }
  })

});
