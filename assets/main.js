// Mobile nav toggle
document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var wrap = document.querySelector('.nav-wrap');
  if (toggle && wrap) {
    toggle.addEventListener('click', function () {
      wrap.classList.toggle('open');
    });
  }

  // Contact form: no backend wired up yet — show an inline confirmation
  // and let the user know where the payload logs so it's easy to see
  // it's ready to connect to a CRM / mail service later.
  var form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var confirm = document.getElementById('form-confirm');
      var data = Object.fromEntries(new FormData(form).entries());
      console.log('Contact form submission (not yet connected to a backend):', data);
      form.reset();
      if (confirm) confirm.classList.add('show');
    });
  }
});
