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
    if(marginLeft==200){
        marginLeft-=10;
    }
    if(marginLeft==-200){
        marginLeft+=10;
    }
}
img.onclick = function(){
    alert('hello');
    var interval=setInterval(moveRight,30);
};