// Generate random color
const randomColor = () => {
    const hex = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color +=hex[Math.floor(Math.random() * 16)];
    }
    return color;
};
// console.log(randomColor());

// start and stop button ref
let colorref;
const startChangingColor = function(){
    if(!colorref){
     colorref = setInterval(changeBgColor,1000)
    } //good practise
    function changeBgColor(){
    document.body.style.backgroundColor = randomColor();
    }
}
document.getElementById('start').addEventListener('click', startChangingColor);

const stopChangingColor = function(){
    clearInterval(colorref);
    colorref = null; //good practise
    document.body.style.backgroundColor = 'white';
}

document.getElementById('stop').addEventListener('click', stopChangingColor);
