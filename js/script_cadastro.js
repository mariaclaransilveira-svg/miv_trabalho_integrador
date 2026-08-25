(function () {
  'use strict';

  const steps    = Array.from(document.querySelectorAll('.form-step'));
  const prevBtn  = document.getElementById('prevBtn');
  const nextBtn  = document.getElementById('nextBtn');
  const submitBtn = document.getElementById('submitBtn');
  const indicators = Array.from(document.querySelectorAll('.step-item'));
  let current = 0;

  function showStep(index) {
    steps.forEach((s, i) => s.classList.toggle('d-none', i !== index));
    indicators.forEach((el, i) => {
      el.classList.toggle('active', i === index);
      el.setAttribute('aria-current', i === index ? 'step' : 'false');
    });
    prevBtn.disabled = index === 0;
    nextBtn.classList.toggle('d-none', index === steps.length - 1);
    submitBtn.classList.toggle('d-none', index !== steps.length - 1);
    if (index === steps.length - 1) buildReview();
    steps[index].querySelector('input, select, textarea')?.focus();
  }

  function validateStep(index) {
    const fields = steps[index].querySelectorAll('input, select, textarea');
    let valid = true;
    fields.forEach(field => {
      if (!field.checkValidity()) {
        field.classList.add('is-invalid');
        valid = false;
      } else {
        field.classList.remove('is-invalid');
        field.classList.add('is-valid');
      }
    });
    return valid;
  }

  function buildReview() {
    const dl = document.getElementById('reviewSummary');
    const form = document.getElementById('stepForm');
    const data = new FormData(form);
    dl.innerHTML = '';
    for (const [key, value] of data.entries()) {
      dl.innerHTML += `<dt class="col-sm-4">${key}</dt>
                       <dd class="col-sm-8">${value || '—'}</dd>`;
    }
  }

  nextBtn.addEventListener('click', () => {
    if (validateStep(current)) {
      current++;
      showStep(current);
    }
  });

  prevBtn.addEventListener('click', () => {
    current--;
    showStep(current);
  });

  document.getElementById('stepForm').addEventListener('submit', e => {
    e.preventDefault();
    alert('Form submitted successfully!');
    // Replace with your fetch/XHR submission logic
  });

  showStep(0);
})();
