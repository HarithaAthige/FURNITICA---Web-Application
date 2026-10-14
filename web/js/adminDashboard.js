function openTab(tabId) {
    const tabs = document.querySelectorAll('.tab');
    tabs.forEach(tab => {
        tab.classList.remove('active');
    });
    document.getElementById(tabId).classList.add('active');
}

async function saveBrand() {

    const brand = document.getElementById("brand").value;

    const form = new FormData();
    form.append("brand", brand);

    const response = await fetch("SaveBrand", {
        method: "POST",
        body: form
    });

    const popup = Notification();
    if (response.ok) {
        const json = await response.json();
        if (json.status) {
            popup.success({
                message: "Success"
            });
            document.getElementById("brand").value = " ";
        } else {
            alert(json.message);
            document.getElementById("brand").value = " ";
        }
    } else {
        alert(json.message);
        document.getElementById("brand").value = " ";
    }
}

async function loadBrand() {
    const response = await fetch("LoadBrand");
    if (response.ok) {
        const json = await response.json();
        if (json.status) {
            console.log(json);
            const select = document.getElementById("brandSelect");
            json.brandList.forEach(item => {
                const option = document.createElement("option");
                option.value = item.id;
                option.innerHTML = item.name;
                select.appendChild(option);
            });

//            updateProductView(json);
        } else {
            alert("Somthing went wrong");
        }
    } else {
        alert("Somthing went wrong");
    }
}

async function saveModel() {
    const model = document.getElementById("model").value;
    const brandId = document.getElementById("brandSelect").value;

    const form = new FormData();
    form.append("model", model);
    form.append("brandId", brandId);

    const response = await fetch("SaveModel", {
        method: "POST",
        body: form
    });

    if (response.ok) {
        const json = await response.json();
        if (json.status) {
            alert("Success");
            document.getElementById("model").value = "";
            document.getElementById("brandSelect").value = 0;
        } else {
            alert(json.message);
            document.getElementById("model").value = "";
            document.getElementById("brandSelect").value = 0;
        }
    } else {
        alert(json.message);
        document.getElementById("model").value = "";
        document.getElementById("brandSelect").value = 0;
    }
}

async function saveColor() {
    const color = document.getElementById("color").value;

    const form = new FormData();
    form.append("color", color);

    const response = await fetch("SaveColor", {
        method: "POST",
        body: form
    });

    if (response.ok) {
        const json = await response.json();
        if (json.status) {
            alert("Success");
            document.getElementById("color").value = "";
        } else {
            alert(json.message);
            document.getElementById("color").value = "";
        }
    } else {
        alert(json.message);
        document.getElementById("color").value = "";
    }
}

async function saveCity() {
    const category = document.getElementById("city").value;

    const form = new FormData();
    form.append("city", category);

    const response = await fetch("SaveCity", {
        method: "POST",
        body: form
    });

    if (response.ok) {
        const json = await response.json();
        if (json.status) {
            alert("Success");
            document.getElementById("city").value = "";
        } else {
            alert(json.message);
            document.getElementById("city").value = "";
        }
    } else {
        alert(json.message);
        document.getElementById("city").value = "";
    }
}