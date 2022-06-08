function showPassword() {
    const eye = document.getElementById('eye');
    const eyeSlash = document.getElementById('eye-slash');
    const fieldPassword = document.getElementById('field-password');

    if (eye.style.display === 'none') {
        eye.style.display = 'block';
        eyeSlash.display = 'none';
        fieldPassword.type = 'text';
    } else {
        eye.style.display = 'none';
        eyeSlash.display = 'block';
        fieldPassword.type = 'password';
    }
};

document.getElementById('btn-login').addEventListener('click', function(e){
    e.preventDefault();
    alert('Loagdo');
});