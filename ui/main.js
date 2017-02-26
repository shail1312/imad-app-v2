console.log('Loaded!');
//change the text of main text
var element = document.getElementById('main-text');
element.innerHTML='New value';

//move the image
var img = document.getElementById('madi');
var marginLeft=0;
function moveRight(){
    marginLeft+=10;
    img.style.marginLeft=marginLeft+'px';
    if(marginLeft==100){
        marginLeft=0;
    }
}
img.onclick = function(){
    alert('hello');
    var interval=setInterval(moveRight,100);
};