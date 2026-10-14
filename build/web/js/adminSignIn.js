async function adminSignIn() {

    const email = document.getElementById("email").value;
    const password = document.getElementById("password").value;

    const signIn = {
        email: email,
        password: password
    };

    const signInJson = JSON.stringify(signIn);

    const response = await fetch(
            "AdminSignIn",
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
                window.location = "adminSignIn.html";
            } else {
                window.location = "adminDashboard.html";
            }
        } else {  //when status false
            document.getElementById("message").innerHTML = json.message;
        }
    } else {
        document.getElementById("message").innerHTML = "Admin SignIn Failed. Please try again!";
    }

}


