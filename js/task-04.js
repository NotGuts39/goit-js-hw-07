const loginForm = document.querySelector('.login-form')

loginForm.addEventListener('submit', event => {

    event.preventDefault();

    
    const isValid = {};

    for (const input of loginForm.elements) {
    
        if (input.type === 'email' || input.type === 'password') {
            isValid[input.name] = input.value.trim();
        }
}



    if (Object.values(isValid).some(value => value === '')) {

        alert('All form fields must be filled in');
    }

    else {
        
        console.log(isValid);
        loginForm.reset();
    }


})