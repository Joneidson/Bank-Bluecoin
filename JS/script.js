document.getElementById('contactForm').addEventListener('submit', function (e) {
  e.preventDefault();

  const responseDiv = document.getElementById('formResponse');
  responseDiv.innerText = '✅ Thank you! Your message has been sent.';
  responseDiv.style.color = 'green';

  this.reset();
});
