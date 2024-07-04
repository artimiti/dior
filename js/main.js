const swiperTop = new Swiper('.top__swiper', {
    // Optional parameters
    affect: 'fade',
    loop: true,
    autoplay: {
        delay: 4000,
        disableOnInteraction: false,
    },
    pagination: {
        el: ".swiper-pagination",
      },
  
    // Navigation arrows
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },
  
  });


  const swiperAbout = new Swiper(".about__slider", {
    slidesPerView: 4,
    spaceBetween: 20,
    freeMode: true,
    loop: true,
 // Navigation arrows
    navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },
  });

  document.querySelectorAll('.accordeon__triger').forEach((item) => {
        item.addEventListener('click', () => {
            item.parentNode.classList.toggle('accordeon__item--active')
        })
    });
