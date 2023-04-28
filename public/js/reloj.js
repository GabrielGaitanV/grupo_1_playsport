window.addEventListener('load', function(){


const tiempo = document.querySelector('.tiempo');

function digitalClock(){

    let h = new Date()
    
    let timeString = h.toLocaleTimeString();
    tiempo.innerHTML = timeString;

}
setInterval(() => {
    digitalClock()
}, 1000);

})