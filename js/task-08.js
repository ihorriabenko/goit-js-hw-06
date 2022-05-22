const formRef = document.querySelector('.login-form');

formRef.addEventListener('submit', onForm);

function onForm(event) {
    event.preventDefault();

    const {
        elements: { email, password },
    } = event.currentTarget;

    if (email.value === '' || password.value === '') {
        return alert('Please fill in all the fields!');
    }

    const obj = {
        email: email.value,
        password: password.value,
    };

    console.log(obj);
    event.currentTarget.reset();
}
