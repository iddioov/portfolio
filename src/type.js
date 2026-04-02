'use strict';

document.addEventListener('DOMContentLoaded', () => {
  const selector = '.home__title--strong';
  const $target = document.querySelector(selector);
  const originalText = $target.textContent;

  function typeNext() {
    $target.textContent = originalText;
    TypeHangul.type(selector, {
      intervalType: 100,
      humanize: 0.4,
    });
  }

  function deleteText(callback) {
    let length = $target.textContent.length;

    const interval = setInterval(() => {
      length--;
      $target.textContent = originalText.slice(0, length);

      if (length <= 0) {
        clearInterval(interval);
        callback();
      }
    }, 150);
  }

  $target.addEventListener('th.endType', () => {
    setTimeout(() => {
      deleteText(() => {
        setTimeout(typeNext, 300);
      });
    }, 1500);
  });

  typeNext();
});
