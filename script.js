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
    strings: ["am an IT Student.", "am a Writer.", "am a self-taught, front-end web developer.", "love swimming", "love coding[C#, JavaScript]."],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true
  });

  var typed = new Typed(".typing-2", {
    strings: ["am an IT Student.", "am a Writer.", "am a self-taught, front-end web developer.", "love swimming", "love coding[C#, JavaScript]."],
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
