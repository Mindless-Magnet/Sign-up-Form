// const btn = document.querySelector('button');

// const pass = document.querySelector('#user_password');
// const pass2 = document.querySelector('#password_confirm');

// btn.addEventListener('click', function(e) {
//     if (pass.innerHTML !== pass2.innerHTML) {
//         pass.classList.add('error');
//         pass2.classList.add('error');
//     } else {
//         pass.classList.remove('error');
//         pass2.classList.remove('error');
//     }
//     });


const btn = document.getElementById('Signupbtn');

const pass = document.getElementById('user_password');
const pass2 = document.getElementById('password_confirm');

btn.addEventListener('click', function(e) {
    if (`${password.value}` !== `${password_confirm.value}`) {
        pass.classList.add('error');
        pass2.classList.add('error');
    } else {
        pass.classList.remove('error');
        pass2.classList.remove('error');
    }
    });
