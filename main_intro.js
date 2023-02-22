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
var modal = document.getElementById('login-form');
window.onclick = function(event) 
{
    if (event.target == modal) 
    {
        modal.style.display = "none";
    }
}