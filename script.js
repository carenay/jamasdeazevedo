    function showSection(id) {
      document.querySelectorAll('.section').forEach(sec => sec.classList.remove('active'));
      document.getElementById(id).classList.add('active');
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }

    // Carrossel
    let currentSlide = 0;
    const slides = document.getElementById('slides');
    const totalSlides = slides.children.length;

    function showSlide(index) {
      currentSlide = (index + totalSlides) % totalSlides;
      slides.style.transform = `translateX(-${currentSlide * 100}%)`;
    }

    function nextSlide() {
      showSlide(currentSlide + 1);
    }

    function previousSlide() {
      showSlide(currentSlide - 1);
    }

    // Iniciar carrossel automático
    setInterval(nextSlide, 5000);
    
    // Prevenir envio de formulários (apenas para demonstração)
    document.querySelectorAll('form').forEach(form => {
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        alert('Formulário enviado com sucesso! (esta é uma demonstração)');
      });
    });
