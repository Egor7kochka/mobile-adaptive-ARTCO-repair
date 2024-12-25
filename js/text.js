document.addEventListener('DOMContentLoaded', function() {
  const reviewBlocks = document.querySelectorAll('.revieWW');

  reviewBlocks.forEach(block => {
    const textElement = block.querySelector('.hdtext');
    const readMoreButton = block.querySelector('.readMore');
    const buttonsContainer = block.querySelector('.btns');

    if (!textElement || !readMoreButton || !buttonsContainer) {
      console.error("Один или несколько элементов не найдены в блоке!", block);
      return;
    }

    const maxChars = 100;
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

    const maxLines = 1;
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
});

