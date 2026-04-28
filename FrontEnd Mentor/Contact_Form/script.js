const form = document.getElementById('contact-form');


const errorMessageNameDiv = document.querySelector('.error-message-name');
const errorMessageEmailDiv = document.querySelector('.error-message-email');
const errorMessageQueryTypeDiv = document.querySelector('.error-message-query-type');
const errorMessageDiv = document.querySelector('.error-message');
const errorMessageConsentDiv = document.querySelector('.error-message-consent');
const submittedMessageDiv = document.querySelector('.submitted-message');

function validateForm(event) {
    event.preventDefault();

    const firstName = document.getElementById('firstname').value.trim();
    const lastName = document.getElementById('lastname').value.trim();
    const email = document.getElementById('email').value.trim();
    const generalEnquiry = document.getElementById('general_enquiry').checked;
    const supportRequest = document.getElementById('support_request').checked;
    const message = document.getElementById('message').value.trim();
    const consent = document.getElementById('consent').checked;

    if (firstName !== '' && lastName !== '' && email !== '' && (generalEnquiry || supportRequest) && message !== '' && consent) {
        submittedMessageDiv.style.display = 'flex';

        errorMessageNameDiv.textContent = '';
        errorMessageEmailDiv.textContent = '';
        errorMessageQueryTypeDiv.textContent = '';
        errorMessageDiv.textContent = '';
        errorMessageConsentDiv.textContent = '';

        form.reset();

        setTimeout(() => {
            submittedMessageDiv.style.display = 'none';
        }, 2000);
    } else {
        submittedMessageDiv.style.display = 'none';

        if (firstName === '' && lastName === '') {
            errorMessageNameDiv.textContent = 'Both First and Last Name are required. *';
        } else if (firstName === '') {
            errorMessageNameDiv.textContent = 'First name is required. *';
        } else if (lastName === '') {
            errorMessageNameDiv.textContent = 'Last name is required. *';
        } else {
            errorMessageNameDiv.textContent = '';
        }

        errorMessageEmailDiv.textContent = email === '' ? 'Email is required. *' : '';
        errorMessageQueryTypeDiv.textContent = !(generalEnquiry || supportRequest) ? 'Please select a query type. *' : '';
        errorMessageDiv.textContent = message === '' ? 'Message is required. *' : '';
        errorMessageConsentDiv.textContent = !consent ? 'You must consent to being contacted. *' : '';

    }
}



form.addEventListener('submit', validateForm);
