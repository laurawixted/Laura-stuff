document.querySelectorAll('.copy-email').forEach((btn) => {
  const toast = btn.nextElementSibling;
  let timer;

  btn.addEventListener('click', async () => {
    try {
      await navigator.clipboard.writeText(btn.dataset.email);
      toast.hidden = false;
      clearTimeout(timer);
      timer = setTimeout(() => { toast.hidden = true; }, 3000);
    } catch {
      window.location.href = `mailto:${btn.dataset.email}`;
    }
  });
});
