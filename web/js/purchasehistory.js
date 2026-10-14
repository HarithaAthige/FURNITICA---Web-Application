async function loadHistory() {
    const popup = new Notification();
    const response = await fetch("LoadPurchaseData");
    if (response.ok) {
        const json = await response.json();
        if (json.status) {
            console.log(json);
            const table_Body = document.getElementById("table-Body");
            table_Body.innerHTML = "";

            json.orderItemsList.forEach(orderItems => {
                let price = orderItems.product.price * orderItems.qty;
                let tableData = `<tr id="oItems">
            <td>${orderItems.orders.id}</td>
            <td>${orderItems.orders.createdAt}</td>
            <td>${orderItems.product.title} x ${orderItems.qty}</td>
            <td>Rs. <span>
                    ${new Intl.NumberFormat("en-US",
                        {minimumFractionDigits: 2})
                        .format(price)}
                    </span></td>
            <td>${orderItems.orderStatus.value}</td>
        </tr>`;
                table_Body.innerHTML += tableData;

            });
        } else {
            if (json.message === "Please SignIn") {
                window.location = "user-login.html";
            }
        }
    } else {
        popup.error({
            message: "Something went wrong in Purchesed History !"
        });
    }
}


