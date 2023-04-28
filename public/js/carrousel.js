window.addEventListener('load', () =>{
  'use strict'
  const grande =  document.querySelector('div.grande')
  const punto =  document.querySelectorAll('li.punto')

  //recorer los puntos :D
  punto.forEach(( cadaPunto, i )=>{
    //asignar un click a cada punto 
    punto[i].addEventListener('click', ()=>{
      
      //guardar la posicion de los puntos
      let position = i
      //calculando el espacio de desplazamiento el grande
      let operacion = position*-20
      
      //movimiento del grande 
      grande.style.transform = `translateX(${operacion}%)`

      //recorrido de todos los puntos 
      punto.forEach(( cadaPunto, i ) =>{
        //quitar clase activo a los puntos
        punto[i].classList.remove('activo')
      })
      //añadir la clase activo al punto donde esta el click
      punto[i].classList.add('activo')
  })
})

})
