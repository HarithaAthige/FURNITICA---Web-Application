async function signUp() {

    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const user = {
        firstName: firstName,
        lastName: lastName,
        email: email,
        password: password
    };

    const userJson = JSON.stringify(user);

    const response = await fetch(
            "SignUp",
            {
                method: "POST",
                body: userJson,
                header: {
                    "Content-Type": "application/json"
                }
            }
    );

    if (response.ok) {       //success message
        const json = await response.json();

        if (json.status) {    //if true
//            document.getElementById("message").className = "text-success";
//            document.getElementById("message").innerHTML = json.message;
            window.location = "user-reset-password.html";
        } else {   //when status false
            //custom message
            document.getElementById("message").innerHTML = json.message;
        }

    } else {
        document.getElementById("message").innerHTML = "Registration Failed. Please try again!";

    }

}





