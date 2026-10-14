async function signIn() {

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const signIn = {
        email: email,
        password: password
    };

    const signInJson = JSON.stringify(signIn);

    const response = await fetch(
            "SignIn",
            {
                method: "POST",
                body: signInJson,
                header: {
                    "Content-Type": "application/json"
                }
            }
    );

    if (response.ok) {       //success message
        const json = await response.json();
        if (json.status) {   //if true

            if (json.message === "1") {
                window.location = "user-reset-password.html";
            } else {
                window.location = "home3.html";
            }
        } else {  //when status false
            document.getElementById("message").innerHTML = json.message;
        }
    } else {
        document.getElementById("message").innerHTML = "SignIn Failed. Please try again!";
    }

}

async function authenticateUser() {
    const response = await fetch("SignIn");

    if (response.ok) {
        const json = await response.json();
        if (json.message === "1") {
            window.location = "home3.html";
        } else {

        }
    } else {

    }

}





