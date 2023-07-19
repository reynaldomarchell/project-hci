const form = document.querySelector('.contact-form');
const nameInput = document.querySelector('.name');
const emailInput = document.querySelector('.email');
const messageInput = document.querySelector('.message');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    if (nameInput.value === '' || emailInput.value === '' || messageInput.value === '') {
        alert('Harap isi semua field.');
    } else {
        alert('Pesan berhasil terkirim.');

        nameInput.value = '';
        emailInput.value = '';
        messageInput.value = '';
    }
});
