document.querySelectorAll('.dot').forEach(dot => {
    dot.addEventListener('click', function () {
      const card = this.closest('.product-card');
      const img = card.querySelector('.product-img');
      img.src = this.dataset.img;

      card.querySelectorAll('.dot').forEach(d => d.classList.remove('active'));
      this.classList.add('active');
    });
  });



  const tabs = document.querySelectorAll('.product-tabs li');
  const products = document.querySelectorAll('.product-item');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {

      // active tab
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const category = tab.dataset.tab;

      products.forEach(product => {
        const productCategory = product.dataset.category;

        if (productCategory.includes(category)) {
          product.style.display = 'block';
        } else {
          product.style.display = 'none';
        }
      });

    });
  });


  const btn = document.getElementById("scrollTopBtn");

  window.addEventListener("scroll", () => {
    if (window.scrollY > 50) {
      btn.classList.add("show");
    } else {
      btn.classList.remove("show");
    }
  });

  btn.addEventListener("click", () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth"
    });
  });
 window.addEventListener('scroll', function() {
  const navbar = document.getElementById('mainNavbar');
  const search = document.getElementById('navbarSearch');
  const stickyMenu = document.getElementById('stickyMenu');

  if (window.scrollY > 50) {
    navbar.classList.add('sticky-top');
    search.style.display = 'none';
    stickyMenu.style.display = 'block';
  } else {
    navbar.classList.remove('sticky-top');
    search.style.display = 'block';
    stickyMenu.style.display = 'none';
  }
});

 const pagesToggle = document.getElementById('pagesToggle');
  const pagesSub = document.getElementById('pagesSub');

  pagesToggle.addEventListener('click', () => {
    pagesSub.classList.toggle('open');
    pagesToggle.classList.toggle('open');
  });

  
  const tabs2 = document.querySelectorAll('.mobile-tabs button');
  const lists = document.querySelectorAll('.mobile-menu-list');

  tabs2.forEach(tab => {
    tab.addEventListener('click', () => {

      tabs2.forEach(t => t.classList.remove('active'));
      lists.forEach(list => list.classList.remove('active'));

      tab.classList.add('active');

      const target = tab.getAttribute('data-target');
      document.getElementById(target).classList.add('active');
    });
  });

  
  document.addEventListener('DOMContentLoaded', function () {

    const carousel = document.getElementById('carouselExampleControls');

    function animateSlide(slide) {
      const items = slide.querySelectorAll('.col-6');
      items.forEach((item, index) => {
        setTimeout(() => {
          item.classList.add('show');
        }, index * 200); // كل عنصر يظهر بعد 200ms من الذي قبله
      });
    }

    // أول slide
    const firstSlide = carousel.querySelector('.carousel-item.active');
    animateSlide(firstSlide);

    // عند تغيير slide
    carousel.addEventListener('slide.bs.carousel', function (event) {
      // نزيل الكلاس show من جميع العناصر
      const items = event.relatedTarget.querySelectorAll('.col-6');
      items.forEach(item => item.classList.remove('show'));

      // بعد قليل، نبدأ ظهورهم تدريجي
      setTimeout(() => {
        animateSlide(event.relatedTarget);
      }, 100);
    });
  });
