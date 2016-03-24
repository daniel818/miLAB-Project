/**
 * Created by Daniel on 24/03/2016.
 */

Parse.initialize("EoP2P9g5Ic5lc6Mxebgx4FcEA6Ro7AQmsAtKMRUL", "9NY3ogqKjbPQwDz1V5uVTMMaQQar8T5LzCr6HucI");

//var User = Parse.Object.extend("User");
function saveUser(){

    var password = $("#signup-password").val();

    var name = document.getElementById("signup-name").value;
    var pass = document.getElementById("signup-password").value;
    var mail = document.getElementById("signup-email").value;


    var user = new Parse.User();
    user.set("username", name );
    user.set("password", pass );
    user.set("email", mail);

    user.signUp(null, {
        success: function(user) {
            alert("Success");
        }, error: function(user, error){
            console.log("signup error: " + error.message);
            alert("signup error:" + error.message);
        }
    });
}


