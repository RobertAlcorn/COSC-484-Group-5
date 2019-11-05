


function checkLogin() {
    var email = document.getElementById("email");
    var password = document.getElementById("password");

    
    if (!( (email.value === "group5@gmail.com") && (password.value === "group5") ) ){
        alert(email.value + " " + password.value)
        alert("Invalid Login!");
        return false;
    }
    alert(email.value + " " + password.value)
    return true;
}