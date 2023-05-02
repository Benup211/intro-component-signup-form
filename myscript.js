function ctrial(){
    var validemailRegex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
    var firstname=document.getElementById("fname");
    var pfname=document.getElementById("efname");
    var lastname=document.getElementById("lname");
    var plname=document.getElementById("elname");
    var password=document.getElementById("spassword");
    var ppass=document.getElementById("epass");
    var email=document.getElementById("semail");
    var pemail=document.getElementById("eemail");
    if(firstname.value=="")
    {
        firstname.classList.remove("mb-3");
        firstname.classList.add("bg-[url('./images/icon-error.svg')]","bg-right","bg-no-repeat","mb-1","border-mentor-red");
        pfname.classList.remove("hidden");
        document.getElementById("fname").placeholder="";
    }
    else
    {
        firstname.classList.remove("bg-[url('./images/icon-error.svg')]","bg-right","bg-no-repeat","mb-1","border-mentor-red");
        firstname.classList.add("mb-3");
        pfname.classList.add("hidden");
        document.getElementById("fname").placeholder="First Name";
    }
    if(lastname.value=="")
    {
        lastname.classList.remove("mb-3");
        lastname.classList.add("bg-[url('./images/icon-error.svg')]","bg-right","bg-no-repeat","mb-1","border-mentor-red");
        plname.classList.remove("hidden"); 
        document.getElementById("lname").placeholder="";
    }
    else
    {
        lastname.classList.remove("bg-[url('./images/icon-error.svg')]","bg-right","bg-no-repeat","mb-1","border-mentor-red");
        lastname.classList.add("mb-3");
        plname.classList.add("hidden");
        document.getElementById("lname").placeholder="Last Name";
    }
    if(password.value=="")
    {
        password.classList.remove("mb-3");
        password.classList.add("bg-[url('./images/icon-error.svg')]","bg-right","bg-no-repeat","mb-1","border-mentor-red");
        ppass.classList.remove("hidden"); 
        document.getElementById("spassword").placeholder="";
    }
    else
    {
        password.classList.remove("bg-[url('./images/icon-error.svg')]","bg-right","bg-no-repeat","mb-1","border-mentor-red");
        password.classList.add("mb-3");
        ppass.classList.add("hidden");
        document.getElementById("spassword").placeholder="Password";
    }
    if(!((email.value).match(validemailRegex)))
    {
        email.classList.remove("mb-3");
        email.classList.add("bg-[url('./images/icon-error.svg')]","bg-right","bg-no-repeat","mb-1","border-mentor-red");
        pemail.classList.remove("hidden"); 
        document.getElementById("semail").value="example@gmail.com";
        document.getElementById("semail").style.color="hsl(0, 100%, 74%)";

    }
    else
    {
        email.classList.remove("bg-[url('./images/icon-error.svg')]","bg-right","bg-no-repeat","mb-1","border-mentor-red");
        email.classList.add("mb-3");
        pemail.classList.add("hidden");
        document.getElementById("semail").placeholder="Email Address";
        document.getElementById("semail").style.color="inherit";
    }
}