let emailInput = document.querySelector('#emailInput');
let passInput = document.querySelector('#passInput');
let loginBtn = document.querySelector('#loginBtn');
let form = document.querySelector('form');

form.addEventListener('submit', (event)=>{
    event.preventDefault();
    if(emailInput.value === 'ali.engineer@gmail.com' && passInput.value === '123ali'){
        window.location.href = "../tasks/task.html";
    } else{
        alert('Incorrect email or password');
        emailInput.value = '';
        passInput.value = '';
    }
})

