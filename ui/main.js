console.log('Loaded!');
//counter code
var button = document.getElementById('counter');
var counter =0;
button.onClick = function(){
    
    //make request to counter exd point
    
    //capture the responce and store it in a variable
    
    //rendre the variable in the correct spam
    counter = counter+1;
    var span = document.getElementById('count');
    span.innerHTML = counter.toString();
};