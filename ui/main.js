//counter code
var button = document.getElementById('counter');
button.onClick = function(){
    
    //create the request
    var request = new XMLHttpRequest();
    
    //capture the responce and store it in a variable
    request.onreadystatechange = function(){
        if(request.readyState == XMLHttpRequest.DONE) {
            //take some action
            if(request.status == 200){
                var counter = request.responseText;
                var span = document.getElementById('count');
                span.innerHTML = counter.toString();
            }
            
        }
        //Not done yet
        
    };
    //Make the request
    request.open('GET','http://shail1312.imad.hasura-app.io/counter',true)
    request.send(null);
};