window.addEventListener('load', ()=>{
    'use strict'
    const form = document.querySelector('form')
    const name = document.querySelector('#user_name')
    const lastName = document.querySelector('#user_lastName')
    const email = document.querySelector('#user_email')
    const password = document.querySelector('#user_password')
    const confirmPassword = document.querySelector('#user_confirmPassword')
    const img = document.querySelector('#user_image')
    const guardar = document.querySelector('#guardar')

    // alert('Estoy acá');
    guardar.addEventListener('click', (e)=>{
        console.log(e);
        let errors = [];
        

            if( name.value == ''){
                errors.push ('El nombre es obligatorio y debe tener al menos 5 caracteres');
            }
            
            if(lastName.value == '' && lastName.value.length < 5){
                errors.push('El apellido es obligatorio y debe tener al menos 5 caracteres')
            }
            
            if( email.value == ''){
                errors.push('El email es obligatorio')
            }
            
            if( password.value == '' && password.value < 6){
                errors.push('El password es obligatorio y debe tener al menos 6 caracteres')
            }

            if( confirmPassword.value == '' || confirmPassword.value != password.value){
                errors.push('Debe coincidir el password')
            }    
            
            let typeImg = img.value.split(".").pop();

            if (typeImg == ""){
                errors.push('La imagen del usuario debe tener un archivo valido, (JPG, JPEG, PNG, GIF)')
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
