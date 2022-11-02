document.querySelectorAll('input').forEach(input => {
    input.addEventListener('focus', () => {
        input.labels.forEach(label => {
            label.classList.add('focused');
        })
    });

    input.addEventListener('blur', () => {
        input.labels.forEach(label => {
            label.classList.remove('focused');
        });
    });
});

document.querySelector('input[type="button"]').addEventListener('mouseover', (e) => {
    validateFormData();
    if(validateFormData()) {
        e.target.classList.add('valid');
    }
    else {
        e.target.classList.remove('valid');

        if(e.target.classList.contains("right")) {
            e.target.classList.remove("right");
        }
        else {
            e.target.classList.add("right");
        }
    }
    
});

function validateFormData() {
    let name = document.querySelector('#user-name').value,
        email = document.querySelector('#user-email').value,
        pass = document.querySelector('#user-pwd').value;    

    return validateName(name) && validateEmail(email) && validatePass(pass);
}

function validateName(name) {
    return name.length != 0;
}

function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

function validatePass(pass) {
    // 8-30 chars
    // >=1 uppercase, >=1 lowercase, >=1 number, >=1 special char
    const regex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[#$@!%&*?])[A-Za-z\d#$@!%&*?]{8,30}$/;
    return regex.test(pass);
}