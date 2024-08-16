
document.addEventListener('DOMContentLoaded', function() {
    var animationTarget = document.getElementById('animationTarget');
    animationTarget.classList.add('animate__fadeInUp'); // Adicione a classe de animação desejada
});


// Função para verificar se o elemento está visível na tela
function isElementInViewport(el) {
    const rect = el.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
  // Função para lidar com a animação quando o elemento está visível
  function handleVisibility() {
    const section = document.getElementById('products');
    if (isElementInViewport(section)) {
      section.classList.add('visible');
      window.removeEventListener('scroll', handleVisibility);
    }
  }
  
  // Evento para verificar a visibilidade durante o scroll e ao carregar a página
  window.addEventListener('scroll', handleVisibility);
  document.addEventListener('DOMContentLoaded', handleVisibility);
  