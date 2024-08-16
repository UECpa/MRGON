document.addEventListener('DOMContentLoaded', function () {
    const observerOptions = {
      threshold: 0.1
    };
  
    const observerCallback = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    };
  
    const observer = new IntersectionObserver(observerCallback, observerOptions);
  
    const cards = document.querySelectorAll('.section-about .card');
    cards.forEach(card => observer.observe(card));
  });
  
  document.addEventListener('DOMContentLoaded', function () {
    const observerOptions = {
      threshold: 0.1
    };
  
    const observerCallback = (entries, observer) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          observer.unobserve(entry.target);
        }
      });
    };
  
    const observer = new IntersectionObserver(observerCallback, observerOptions);
  
    // Selecionar todos os elementos que precisam de animação
    const animateElements = document.querySelectorAll('#products .section-title, #products .product-card');
    animateElements.forEach(element => observer.observe(element));
  });
