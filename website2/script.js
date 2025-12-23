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
