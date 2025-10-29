// Minimal client-side interactions (menu toggle + form submission simulation)
document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.getElementById('menuToggle');
  menuToggle.addEventListener('click', () => {
    alert('Menu toggle clicked — implement mobile nav here.');
  });

  const contactForm = document.getElementById('contactForm');
  const status = document.getElementById('formStatus');

  contactForm.addEventListener('submit', function (ev) {
    ev.preventDefault();
    status.textContent = 'Sending message...';

    // gather form data
    const fd = new FormData(contactForm);
    const payload = {
      name: fd.get('name') || '',
      email: fd.get('email') || '',
      company: fd.get('company') || '',
      subject: fd.get('subject') || '',
      message: fd.get('message') || ''
    };

    // This demo simulates sending. Replace with your API endpoint or email handling.
    setTimeout(() => {
      status.textContent = `Thanks, ${payload.name || 'there'} — your message has been received. We'll get back to you at ${payload.email || 'your email'}.`;
      contactForm.reset();
    }, 900);
  });
});