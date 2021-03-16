let userName = prompt("Who's there?"); //store username

    if(userName == "Admin") //checks if user is the right user
    {
        let password = prompt("What's the password");  
        
            if(password == "TheMaster")     
            {
                alert("Welcome Master");
            }
            
            if(password == null || password == '') //checks if input is cancelled
            {
                alert("Canceled");
            }
            
            else                                    //If wrong password is entered
            {
                alert("Wrong password");
            }
            
    }
    
    else if(userName == null || userName === '')  //If username is empty or canceled
    {
        alert("Canceled");
    }
    
    else                                          //If username is not correct
    {
        alert("I don't know you");
    }
