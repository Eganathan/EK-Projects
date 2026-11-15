(() => {
  document.querySelectorAll('[data-enhanced]').forEach(element => { element.hidden = false; });
  const input = document.querySelector('[data-search]');
  const buttons = [...document.querySelectorAll('button[data-status]')];
  const cards = [...document.querySelectorAll('[data-project]')];
  let status = 'all';
  const update = () => {
    const terms = input?.value.toLowerCase().trim().split(/\s+/).filter(Boolean) || [];
    let count = 0;
    cards.forEach(card => {
      card.hidden = !(status === 'all' || status === card.dataset.status) || !terms.every(term => card.dataset.searchText.toLowerCase().includes(term));
      if (!card.hidden) count++;
    });
    buttons.forEach(button => { button.setAttribute('aria-pressed', String(button.dataset.status === status)); });
    const result = document.querySelector('[data-results]');
    if (result) result.textContent = `${count} project${count === 1 ? '' : 's'}${terms.length || status !== 'all' ? ' found' : ''}`;
    const empty = document.querySelector('[data-empty]');
    if (empty) empty.hidden = count > 0;
  };
  input?.addEventListener('input', update);
  buttons.forEach(button => { button.addEventListener('click', () => { status = button.dataset.status; update(); }); });
  document.querySelector('[data-reset]')?.addEventListener('click', () => { input.value = ''; status = 'all'; update(); input.focus(); });
  if (input) update();
})();
