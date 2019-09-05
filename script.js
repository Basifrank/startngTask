const subMit = () =>{
    const firstName = document.getElementById("first-Name").value;
    const lastName = document.getElementById("last-Name").value;
    const phoneNumber = document.getElementById("phone-Number").value;
    const email = document.getElementById("e-mail").value;
    const Message = document.getElementById("text-message").value;

    if (firstName == "")                                  
    { 
        window.alert("Please enter your name."); 
        firstName.focus(); 
        return false; 
    } 
   
    
    if (lastName == "")                           
    { 
        window.alert("Please enter your telephone number."); 
        phone.focus(); 
        return false; 
    } 

    if (phoneNumber == "")                           
    { 
        window.alert("Please enter your telephone number."); 
        phone.focus(); 
        return false; 
    } 

       
    if (email == "")                                   
    { 
        window.alert("Please enter a valid e-mail address."); 
        email.focus(); 
        return false; 
    } 
   
    if (email.indexOf("@", 0) < 0)                 
    { 
        window.alert("Please enter a valid e-mail address."); 
        email.focus(); 
        return false; 
    } 
   
    if (email.indexOf(".", 0) < 0)                 
    { 
        window.alert("Please enter a valid e-mail address."); 
        email.focus(); 
        return false; 
    } 
   

};