document.addEventListener('DOMContentLoaded', () => {
  const form = document.getElementById('contactForm');
  const successToast = document.getElementById('successToast');
  const radioInputs = document.querySelectorAll('.form__radio-input');

  // Handle active states for radio buttons
  radioInputs.forEach(radio => {
    radio.addEventListener('change', (e) => {
      // Remove active class from all wrappers
      document.querySelectorAll('.form__radio-wrapper').forEach(wrapper => {
        wrapper.classList.remove('active');
      });
      // Add active class to the selected wrapper
      if (e.target.checked) {
        e.target.closest('.form__radio-wrapper').classList.add('active');
      }
    });
  });

  form.addEventListener('submit', (e) => {
    e.preventDefault();
    let isValid = true;

    // First Name validation
    const firstName = document.getElementById('firstName');
    const groupFirstName = document.getElementById('group-firstName');
    if (!firstName.value.trim()) {
      groupFirstName.classList.add('error');
      isValid = false;
    } else {
      groupFirstName.classList.remove('error');
    }

    // Last Name validation
    const lastName = document.getElementById('lastName');
    const groupLastName = document.getElementById('group-lastName');
    if (!lastName.value.trim()) {
      groupLastName.classList.add('error');
      isValid = false;
    } else {
      groupLastName.classList.remove('error');
    }

    // Email validation
    const email = document.getElementById('email');
    const groupEmail = document.getElementById('group-email');
    const emailError = document.getElementById('email-error');
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!email.value.trim()) {
      groupEmail.classList.add('error');
      emailError.textContent = "This field is required";
      isValid = false;
    } else if (!emailRegex.test(email.value.trim())) {
      groupEmail.classList.add('error');
      emailError.textContent = "Please enter a valid email address";
      isValid = false;
    } else {
      groupEmail.classList.remove('error');
    }

    // Query Type validation
    const queryType = document.querySelector('input[name="queryType"]:checked');
    const groupQueryType = document.getElementById('group-queryType');
    if (!queryType) {
      groupQueryType.classList.add('error');
      isValid = false;
    } else {
      groupQueryType.classList.remove('error');
    }

    // Message validation
    const message = document.getElementById('message');
    const groupMessage = document.getElementById('group-message');
    if (!message.value.trim()) {
      groupMessage.classList.add('error');
      isValid = false;
    } else {
      groupMessage.classList.remove('error');
    }

    // Consent validation
    const consent = document.getElementById('consent');
    const groupConsent = document.getElementById('group-consent');
    if (!consent.checked) {
      groupConsent.classList.add('error');
      isValid = false;
    } else {
      groupConsent.classList.remove('error');
    }

    // If valid, show success toast and reset form
    if (isValid) {
      form.reset();

      // Remove active states from radios
      document.querySelectorAll('.form__radio-wrapper').forEach(wrapper => {
        wrapper.classList.remove('active');
      });

      // Show toast
      successToast.classList.add('show');

      // Hide toast after 5 seconds
      setTimeout(() => {
        successToast.classList.remove('show');
      }, 5000);
    }
  });

  // Real-time validation clearing on input
  const inputs = document.querySelectorAll('.form__input, .form__textarea');
  inputs.forEach(input => {
    input.addEventListener('input', () => {
      input.closest('.form__group').classList.remove('error');
    });
  });

  const radiosAndCheckbox = document.querySelectorAll('.form__radio-input, .form__checkbox-input');
  radiosAndCheckbox.forEach(input => {
    input.addEventListener('change', () => {
      input.closest('.form__group').classList.remove('error');
    });
  });
});
