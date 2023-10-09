const randomColor = function() {
    const hexValue = "0123456789ABCDEF";
    let color = '#'
    for(let i = 0; i < 6; i++ ){
        color += hexValue[Math.floor(Math.random()*16)];
    }
    return color;
};
let interval;
const startChangingColor = function() {
    if (!interval){
        interval = setInterval(changeBgColor,1000);
    }
    function changeBgColor() {
        document.body.style.backgroundColor = randomColor()
    }
}; 
const stopChangingColor = function() {
    clearInterval(interval);
    interval = null;
}  
document.querySelector("#start").addEventListener('click',startChangingColor)
document.querySelector("#stop").addEventListener('click',stopChangingColor)