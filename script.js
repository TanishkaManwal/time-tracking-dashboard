
  const tabs = document.querySelectorAll('.tab');
  const cards = document.querySelectorAll('.card');

  tabs.forEach(tab => {
    tab.addEventListener('click', () => {
      tabs.forEach(t => t.classList.remove('active'));
      tab.classList.add('active');

      const period = tab.getAttribute('data-period');

      cards.forEach(card => {
        const current = card.getAttribute(`data-${period}-current`);
        const previous = card.getAttribute(`data-${period}-previous`);

        card.querySelector('.current-hours').textContent = current;
        card.querySelector('.previous-hours').textContent = previous;
      });
    });
  });
