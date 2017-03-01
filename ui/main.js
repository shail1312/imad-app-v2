console.log('Loaded!');
//counter code
var counter =0;
var button = document.getElementById('counter');
button.onClick = function(){
    
    //make request to counter exd point
    
    //capture the responce and store it in a variable
    
    //rendre the variable in the correct spam
    counter = counter+1;
    var spam = document.getElementById('count');
    spam.innerHTML = counter.toString();
};