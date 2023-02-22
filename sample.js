    function register()
    {
        let x=document.getElementById('login');
        let y=document.getElementById('register');
        let z=document.getElementById('btn');
        // console.log("in register");
        x.style.left='400px';
        y.style.left='50px';
        z.style.left='110px';
        // return "register";
    }
    function login()
    {
        let x=document.getElementById('login');
        let y=document.getElementById('register');
        let z=document.getElementById('btn');
        // console.log("in login");
        x.style.left='50px';
        y.style.left='450px';
        z.style.left='0px';
        // return "login";
    }
    function CallMainIntroPage(){
        // console.log("Inn");
        window.open("main_intro.html");
    }
    var modal = document.getElementById('login-form');
    window.onclick = function(event)
    {
        if (event.target == modal) 
        {
            modal.style.display = "none";
        }
    }
    function logout()
    {
        window.open("sample.html","_self");
    }
    function CallProfElective(){
        window.open( "profElective.html" , "_self" );
    }
    function CallOpenElective(){
        window.open( "OpenElective.html" , "_self" );
    }
    function adminlogin(){
        window.open("adminlogin.html","_self");
    }
    function onSignIn(googleUser) {
        var profile = googleUser.getBasicProfile();
        console.log('ID: ' + profile.getId()); // Do not send to your backend! Use an ID token instead.
        console.log('Name: ' + profile.getName());
        console.log('Image URL: ' + profile.getImageUrl());
        console.log('Email: ' + profile.getEmail()); // This is null if the 'email' scope is not present.
    }
    function web(){
        if(confirm("do u want to register?")==false){
            console.log("inside if");
            return;
        }
        else{
            let a=document.getElementById('count1');
            if(a.checked) {
                document.getElementById("count1").value=  document.getElementById("count1").value;
            }
            else if(document.getElementById('count2').checked) {
                document.getElementById("count2").innerHTML= document.getElementById("count2").value-1; 
            }
            else if(document.getElementById('count3').checked==true) {
                console.log("inside e3");
                document.getElementById("count3").innerHTML=document.getElementById("count3").value-1; 
            }
            else {
                console.log("inside e4");
                document.getElementById("count4").innerHTML=
                        document.getElementById("count4").value-1;
            }
            // const count=document.getElementById();
            // document.getElementById("count1").innerHTML(x);
            // window.open("OpenElective.html");

            // const btn = document.querySelector('#btn');        
            // const radioButtons = document.querySelectorAll('input[name="size"]');
            // btn.addEventListener("click", () => {
            //     let selectedSize;
            //     let d;
            //     for (const radioButton of radioButtons) {
            //         if (radioButton.checked) {
            //             selectedSize = radioButton.value;
            //             d=radioButton.id;
            //             break;
            //         }
            //     }
            //     let y=document.getElementById(d).innerHTML= (d.value) - 1;
            //     // show the output:
            //     // output.innerText = selectedSize ? `You selected ${selectedSize}` : `You haven't selected any size`;
            // });
        }
    }