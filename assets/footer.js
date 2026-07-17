// Shared footer markup, injected on every page so copy/links only live in one place.
document.addEventListener('DOMContentLoaded', function () {
  var el = document.getElementById('footer-include');
  if (!el) return;
  el.innerHTML = `
  <div class="container">
    <div class="footer-grid">
      <div class="footer-brand">
        <a href="index.html" class="brand">
          <span class="mark">M8</span>
          <span>Motiv8 Capital</span>
        </a>
        <p>A multifamily investment and development firm focused on acquiring, repositioning, developing, and operating residential communities across the Sun Belt.</p>
      </div>
      <div>
        <h4>Company</h4>
        <ul>
          <li><a href="index.html">Home</a></li>
          <li><a href="team.html">Meet the Team</a></li>
          <li><a href="process.html">Our Process</a></li>
        </ul>
      </div>
      <div>
        <h4>Acquisitions</h4>
        <ul>
          <li><a href="criteria.html">Acquisition Criteria</a></li>
          <li><a href="partners.html">Representative Experience</a></li>
          <li><a href="contact.html">Submit a Property</a></li>
        </ul>
      </div>
      <div>
        <h4>Get In Touch</h4>
        <ul>
          <li><a href="mailto:hello@motiv8capital.com">hello@motiv8capital.com</a></li>
          <li><a href="tel:+12143011981">(214) 301-1981</a></li>
          <li>6060 N Central Expy, Dallas, TX 75206</li>
          <li><a href="assets/motiv8-capital-one-pager.pdf">Download One-Pager (PDF)</a></li>
        </ul>
      </div>
    </div>
    <div class="footer-bottom">
      <span>&copy; ${new Date().getFullYear()} Motiv8 Capital. All rights reserved.</span>
      <span>This site is for informational purposes only and does not constitute an offer to sell or a solicitation of an offer to buy any security.</span>
    </div>
  </div>`;
});
