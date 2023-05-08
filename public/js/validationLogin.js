window.addEventListener('load', ()=>{
    'use strict'
    const form = document.querySelector('form')
    const email = document.querySelector('#user_email')
    const password = document.querySelector('#user_password')
    const ingresar = document.querySelector('#ingresar')

    // alert('Estoy en el login');
    ingresar.addEventListener('click', (e)=>{
        console.log(e);
        let errors = [];
    
            
            if( email.value == ''){
                errors.push('El email es obligatorio')
            }
            
            if( password.value == '' ){
                errors.push('El password es obligatorio')
           }else if(password.value.length < 8){
                errors.push('El password debe tener almenos 8 caracteres')
           }
           
            console.log(errors.length);

            if(errors.length > 0){
                e.preventDefault();

                let listaErrors = document.querySelector('.errors ul')

                for(let i = 0; i < errors.length; i++){
                    listaErrors.innerHTML+= `<li> ${errors[i]} </li>`
                }
            }else{
                form.sumbit();
            }
    })

})
