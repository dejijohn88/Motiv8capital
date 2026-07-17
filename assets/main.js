// Mobile nav toggle
document.addEventListener('DOMContentLoaded', function () {
  var toggle = document.querySelector('.nav-toggle');
  var wrap = document.querySelector('.nav-wrap');
  if (toggle && wrap) {
    toggle.addEventListener('click', function () {
      wrap.classList.toggle('open');
    });
  }

  // Contact form: submits to Netlify Forms via AJAX so the page doesn't
  // reload — Netlify detects the form at deploy time from the
  // data-netlify + form-name markup in contact.html.
  var form = document.getElementById('contact-form');
  if (form) {
    form.addEventListener('submit', function (e) {
      e.preventDefault();
      var confirmEl = document.getElementById('form-confirm');
      var body = new URLSearchParams(new FormData(form)).toString();
      fetch('/', {
        method: 'POST',
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        body: body
      })
        .then(function () {
          form.reset();
          if (confirmEl) confirmEl.classList.add('show');
        })
        .catch(function (err) {
          console.error('Form submission failed:', err);
          alert('Something went wrong sending your submission — please try again or email hello@motiv8capital.com directly.');
        });
    });
  }
});
