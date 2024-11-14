document.addEventListener('DOMContentLoaded', function () {
  function scrollToAnchor(anchorId) {
    const element = document.getElementById(anchorId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  }

  const anchorLinks = document.querySelectorAll('.anchor-link');
  anchorLinks.forEach((link) => {
    link.addEventListener('click', function () {
      const anchorId = this.getAttribute('data-anchor');
      scrollToAnchor(anchorId);
    });
  });

  const accItems = document.querySelectorAll('.samsungs24-accordion__item');

  accItems.forEach((item) => {
    item.addEventListener('click', function () {
      const isActive = this.classList.contains('active');

      for (let j = 0; j < accItems.length; j++) {
        accItems[j].classList.remove('active');
        const panel = accItems[j].nextElementSibling;
        panel.style.maxHeight = null;
      }

      if (!isActive) {
        this.classList.add('active');
        let panel = this.nextElementSibling;
        panel.style.maxHeight = panel.scrollHeight + 'px';
      }
    });
  });

  let samsungs24AiLeftSlider = new Swiper('.left-samsungs24-ai__slider', {
    speed: 500,
    slidesPerView: 1,
    navigation: {
      nextEl: '.left-samsungs24-ai-next',
      prevEl: '.left-samsungs24-ai-prev',
    },
  });
  let samsungs24AiRightSlider = new Swiper('.right-samsungs24-ai__slider', {
    speed: 500,
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: '.right-samsungs24-ai-pagination',
      type: 'bullets',
      clickable: true,
    },
    effect: 'fade',
    fadeEffect: {
      crossFade: true,
    },
  });
  samsungs24AiLeftSlider.controller.control = samsungs24AiRightSlider;
  samsungs24AiRightSlider.controller.control = samsungs24AiLeftSlider;

  let samsungs24ColorsTopSlider = new Swiper('.top-samsungs24-colors__slider', {
    speed: 500,
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: '.top-samsungs24-colors-pagination',
      type: 'bullets',
      clickable: true,
    },
  });

  let samsungs24ColorsBottomSlider = new Swiper(
    '.bottom-samsungs24-colors__slider',
    {
      speed: 500,
      slidesPerView: 1,
      effect: 'fade',
      fadeEffect: {
        crossFade: true,
      },
    }
  );

  samsungs24ColorsTopSlider.controller.control = samsungs24ColorsBottomSlider;
  samsungs24ColorsBottomSlider.controller.control = samsungs24ColorsTopSlider;

  const samsungs24ZoomSlider = new Swiper('.samsungs24-zoom__swiper', {
    speed: 500,
    slidesPerView: 1,
    spaceBetween: 10,
    navigation: {
      nextEl: '.samsungs24-zoom__next',
      prevEl: '.samsungs24-zoom__prev',
    },
    pagination: {
      el: '.samsungs24-zoom-pagination',
      type: 'bullets',
      clickable: true,
    },
  });

  const samsungs24ScalingSlider = new Swiper('.samsungs24-scaling__swiper', {
    speed: 500,
    slidesPerView: 1,
    spaceBetween: 10,
    pagination: {
      el: '.samsungs24-scaling-pagination',
      type: 'bullets',
      clickable: true,
    },
  });

  const samsungs24AlwaysOnDispSlider = new Swiper(
    '.samsungs24-alwaysOnDisp__swiper',
    {
      speed: 500,
      slidesPerView: 1,
      spaceBetween: 10,
      navigation: {
        nextEl: '.samsungs24-alwaysOnDisp__next',
        prevEl: '.samsungs24-alwaysOnDisp__prev',
      },
      pagination: {
        el: '.samsungs24-alwaysOnDisp-pagination',
        type: 'bullets',
        clickable: true,
      },
    }
  );
});
