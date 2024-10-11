document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('themeToggle');
    const body = document.body;
    const triangle = document.querySelector('.triangle');
  
    themeToggle.addEventListener('click', () => {
      body.classList.toggle('night');
      updateTriangleColor();
    });
  
    function updateTriangleColor() {
      if (body.classList.contains('night')) {
        triangle.style.borderLeftColor = '#2c3e50';
        document.querySelector('.banner').textContent = "Hi Sasa, Good Night My Lovely Girl ❤😘";  // night color
      } else {
        triangle.style.borderLeftColor = '#87CEEB';
        document.querySelector('.banner').textContent = "Hi Sasa, Good Morning My Sweety ❤😘"; // day color
      }
    }
    updateTriangleColor();
  });