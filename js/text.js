document.addEventListener('DOMContentLoaded', function() {
    const textElement = document.querySelector('.hdtext');
    const readMoreButton = document.querySelector('.readMore');
    const buttonsContainer = document.querySelector('.btns');
  
    if (!textElement || !readMoreButton || !buttonsContainer) {
      console.error("Один или несколько элементов не найдены!");
      return;
    }
  
    const maxChars = 100; // Максимальное количество символов для отображения
    const fullText = textElement.textContent;
    const lines = [];
    let currentLine = "";
  
    for (let i = 0; i < fullText.length; i++) {
      currentLine += fullText[i];
      if (currentLine.length >= maxChars) {
        lines.push(currentLine);
        currentLine = "";
      }
    }
    if (currentLine.length > 0) {
      lines.push(currentLine);
    }
  
    const maxLines = 1; //максимальное кол-во строк для отображения изначально
    let visibleLines = lines.slice(0, maxLines).join('\n'); 
  
    if (lines.length > maxLines) {
      visibleLines += '...';
    }
  
    textElement.textContent = visibleLines;
  
    readMoreButton.addEventListener('click', () => {
      textElement.classList.toggle('show');
      if (textElement.classList.contains('show')) {
        textElement.textContent = fullText;
        readMoreButton.style.display = 'none';
        const hideButton = document.createElement('button');
        hideButton.textContent = 'Скрыть';
        hideButton.classList.add('hide-button');
        hideButton.addEventListener('click', () => {
          textElement.classList.remove('show');
          textElement.textContent = visibleLines;
          hideButton.remove();
          readMoreButton.style.display = 'block';
        });
        buttonsContainer.appendChild(hideButton);
      } else {
        textElement.textContent = visibleLines;
        readMoreButton.style.display = 'block';
      }
    });
  });

  
  