// Mobile nav toggle
document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  if (toggle) {
    toggle.addEventListener('click', function () {
      document.body.classList.toggle('nav-open');
    });
  }

  // Contact form handling (Formspree-ready).
  // To receive real emails: create a free form at https://formspree.io,
  // then replace YOUR_FORM_ID below (and in each HTML file's form action) with your ID.
  var forms = document.querySelectorAll('form[data-contact-form]');
  forms.forEach(function (form) {
    form.addEventListener('submit', function (e) {
      var action = form.getAttribute('action') || '';
      if (action.indexOf('YOUR_FORM_ID') !== -1) {
        // Formspree not configured yet — fall back to opening the user's email client.
        e.preventDefault();
        var data = new FormData(form);
        var lines = [];
        data.forEach(function (value, key) { lines.push(key + ': ' + value); });
        var subject = encodeURIComponent('New message from phamilefinancial.com');
        var body = encodeURIComponent(lines.join('\n'));
        window.location.href = 'mailto:phamleins@gmail.com?subject=' + subject + '&body=' + body;
        showFormStatus(form, 'success');
        form.reset();
      }
      // If Formspree IS configured, let the form submit normally (handled by fetch below).
    });
  });

  function showFormStatus(form, type) {
    var success = form.querySelector('.form-success');
    var error = form.querySelector('.form-error');
    if (success) success.style.display = type === 'success' ? 'block' : 'none';
    if (error) error.style.display = type === 'error' ? 'block' : 'none';
  }
});
