(function () {
  var buttons = document.querySelectorAll('.zoom-button');
  if (!buttons.length) return;

  var dialog = document.createElement('dialog');
  dialog.className = 'zoom-dialog';
  var img = document.createElement('img');
  dialog.appendChild(img);
  document.body.appendChild(dialog);

  buttons.forEach(function (button) {
    button.addEventListener('click', function () {
      var source = button.querySelector('img');
      img.src = source.src;
      img.alt = source.alt;
      dialog.showModal();
    });
  });

  dialog.addEventListener('click', function () {
    dialog.close();
  });
})();
