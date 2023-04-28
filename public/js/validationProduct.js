window.addEventListener('load', ()=>{
    'use strict'
    const form = document.querySelector('form')
    const name1 = document.querySelector('#product_name')
    const description = document.querySelector('#product_description')
    const price = document.querySelector('#product_price')
    const img = document.querySelector('#product_image')
    const guardar = document.querySelector('#guardar')


    guardar.addEventListener('click', (e)=>{
        console.log(e);
        let errors = [];
            
            if( name1.value == ''){
                errors.push ('El nombre del producto es obligatorio')

            }else if(name1.value.length < 5){
                errors.push('El nombre del producto debe tener almenos 5 caracteres')
            }
            
            if( description.value == ''){
                errors.push('La descripcion del producto es obligatorio')

            }else if(description.value.length < 20){
                errors.push ('La descripcion del producto debe terner almenos 20 caracteres')
            }
            
            if( price.value == ''){
                errors.push('El precio del producto es obligatorio')

            }else if(price.value.length < 4){
                errors.push  ('El precio del producto debe tener almenos 4 caracteres')
            }
            
            let typeImg = img.value.split(".").pop();

            if (typeImg == ""){
                errors.push('La imagen del producto debe tener un archivo valido, (JPG, JPEG, PNG, GIF)')
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
