document.addEventListener('DOMContentLoaded', function() {
    const reactionButtons = document.querySelectorAll('.reactions .knopka button');
    reactionButtons.forEach(button => {
      button.addEventListener('click', () => {
        const counter = button.nextElementSibling;
        const prefix = counter.textContent.match(/^(Помогло|Нравится|Огонь|Рекомендую) /)[0]; // Извлекаем префикс
        let count = parseInt(counter.textContent.replace(prefix, ''));
  
        // Используем dataset для хранения состояния 0 или 1
        let currentState = button.dataset.state || "0"; // Если state не существует, устанавливаем 0
        currentState = currentState === "0" ? "1" : "0";
        button.dataset.state = currentState;
        count = parseInt(currentState);
  
  
        const image = button.querySelector('img');
        if (image) {
          image.style.backgroundColor = count === 0 ? '#fff' : '#FFDDDFAD';
        }
        counter.textContent = prefix + count;
      });
    });
  });
  
  