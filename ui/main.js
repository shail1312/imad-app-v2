//submit username/password to login

var submit = document.getElementById('submit_btn');
submit.onclick = function(){
    var nameInput = document.getElementById('username');
    var name = nameInput.value;
    //create the request
    var request = new XMLHttpRequest();
    
    //capture the responce and store it in a variable
    request.onreadystatechange = function(){
        if(request.readyState == XMLHttpRequest.DONE) {
            //take some action
            if(request.status == 200){
                console.log('user loged in');
                alert("Logged in successfull");
            }
            else if (request.status == 403) {
                alert('username/password is incorrect');
            }
            else if(request.status == 500){
                alert('Something went wrong on the server');
            }
        }
        //Not done yet
    };
    //Make the request
    var username = document.getElementById('username').value;
    var password = document.getElementById('password').value;
    console.log(username);
    console.log(password);
    request.open('POST','http://shail1312.imad.hasura-app.io/create-user',true);
    request.setRequestHeader('Content-type','application/json');
    request.send(JSON.stringify({username: username, password: password}));
    
   
};