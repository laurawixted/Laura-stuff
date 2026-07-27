function fallbackCopyText(text) {
  const textArea = document.createElement('textarea');
  textArea.value = text;
  textArea.setAttribute('readonly', '');
  textArea.style.position = 'absolute';
  textArea.style.left = '-9999px';
  document.body.appendChild(textArea);
  textArea.select();

  let copied = false;
  try {
    copied = document.execCommand('copy');
  } catch {
    copied = false;
  }

  document.body.removeChild(textArea);
  return copied;
}

document.querySelectorAll('.copy-email').forEach((btn) => {
  const toast = btn.parentElement?.querySelector('.copy-toast') ?? null;
  let timer;

  btn.addEventListener('click', async (event) => {
    if (btn.tagName === 'A') {
      event.preventDefault();
    }

    const email = btn.dataset.email;
    let copied = false;

    if (email) {
      try {
        if (navigator.clipboard?.writeText) {
          await navigator.clipboard.writeText(email);
          copied = true;
        }
      } catch {
        copied = false;
      }

      if (!copied) {
        copied = fallbackCopyText(email);
      }
    }

    if (copied) {
      if (toast) {
        toast.hidden = false;
        clearTimeout(timer);
        timer = setTimeout(() => { toast.hidden = true; }, 3000);
      }
      return;
    }

    if (email) {
      window.location.href = `mailto:${email}`;
    }
  });
});
