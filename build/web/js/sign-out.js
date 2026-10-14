async function signOut() {

    const response = await fetch("SignOut");

    if (response.ok) {
        const json = await response.json();
        if (json.status) {
            window.location = "user-reset-password.html";
        } else {
            window.location.reload();
        }
    } else {
        console.log("LogOut Failed!");
    }

}




