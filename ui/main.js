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
}
img.onClick=function(){
    alert("click");
    var interval=setInterval(moveRight,100);
};