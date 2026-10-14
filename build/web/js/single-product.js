async function loadData() {
    const searchParams = new URLSearchParams(window.location.search);
    if (searchParams.has("id")) {
        const productId = searchParams.get("id");
        const response = await fetch("LoadSingleProduct?id=" + productId);
        if (response.ok) {
            const json = await response.json();
            if (json.status) {
                console.log(json);
                //single-product-images
                document.getElementById("image1").src = "product-images\\" + json.product.id + "\\image1.jpg";
//                document.getElementById("image2").src = "product-images\\" + json.product.id + "\\image2.jpg";
//                document.getElementById("image3").src = "product-images\\" + json.product.id + "\\image3.jpg";
                document.getElementById("thumb-image1").src = "product-images\\" + json.product.id + "\\image1.jpg";
                document.getElementById("thumb-image2").src = "product-images\\" + json.product.id + "\\image2.jpg";
                document.getElementById("thumb-image3").src = "product-images\\" + json.product.id + "\\image3.jpg";
                //single-product-images

                document.getElementById("product-title").innerHTML = json.product.title;
                document.getElementById("published-on").innerHTML = json.product.created_at;
                document.getElementById("product-price").innerHTML = new Intl.NumberFormat(
                        "en-US",
                        {minimumFractionDigits: 2}).format(json.product.price);
                document.getElementById("brand-name").innerHTML = json.product.model.brand.name;
                document.getElementById("model-name").innerHTML = json.product.model.name;
                document.getElementById("product-quality").innerHTML = json.product.quality.value;
                document.getElementById("product-stock").innerHTML = json.product.qty;

                //product-color
                document.getElementById("color-border").style.borderColor = "black";
                document.getElementById("color-background").style.backgroundColor = json.product.color.value;

                //product-storage
                document.getElementById("product-storage").innerHTML = json.product.storage.value;

                //product-description
                document.getElementById("product-description").innerHTML = json.product.description;

                //add-to-cart-main-button
                const addToCartMain = document.getElementById("add-to-cart-main");
                addToCartMain.addEventListener(
                        "click", (e) => {
                    addToCart(json.product.id, document.getElementById("add-to-cart-qty").value);
                    e.preventDefault();
                });
                //add-to-cart-main-button-end

                //similer-products
                let similer_product_main = document.getElementById("similer-product-main");
                let productHtml = document.getElementById("similer-product");
                similer_product_main.innerHTML = "";
                json.productList.forEach(item => {
                    let productCloneHtml = productHtml.cloneNode(true);
                    productCloneHtml.querySelector("#similer-product-a1").href = "product-detail.html?id=" + item.id;
                    productCloneHtml.querySelector("#similer-product-image").src = "product-images\\" + item.id + "\\image1.jpg";
                    productCloneHtml.querySelector("#similer-product-add-to-cart").addEventListener(
                            "click", (e) => {
                        addToCart(item.id, 1);
                        e.preventDefault();
                    });
                    productCloneHtml.querySelector("#similer-product-a2").href = "product-detail.html?id=" + item.id;
                    productCloneHtml.querySelector("#similer-product-title").innerHTML = item.title;
                    productCloneHtml.querySelector("#similer-product-storage").innerHTML = item.storage.value;
                    productCloneHtml.querySelector("#similer-product-price").innerHTML = "Rs. " + new Intl.NumberFormat(
                            "en-US",
                            {minimumFractionDigits: 2})
                            .format(item.price);
                    ;
                    productCloneHtml.querySelector("#similer-product-color-border").style.borderColor = "black";
                    productCloneHtml.querySelector("#similer-product-color-background").style.borderColor = item.color.value;
                    similer_product_main.appendChild(productCloneHtml);


                });


                $('.recent-product-activation').slick({
                    infinite: true,
                    slidesToShow: 4,
                    slidesToScroll: 4,
                    arrows: true,
                    dots: false,
                    prevArrow: '<button class="slide-arrow prev-arrow"><i class="fal fa-long-arrow-left"></i></button>',
                    nextArrow: '<button class="slide-arrow next-arrow"><i class="fal fa-long-arrow-right"></i></button>',
                    responsive: [{
                            breakpoint: 1199,
                            settings: {
                                slidesToShow: 3,
                                slidesToScroll: 3
                            }
                        },
                        {
                            breakpoint: 991,
                            settings: {
                                slidesToShow: 2,
                                slidesToScroll: 2
                            }
                        },
                        {
                            breakpoint: 479,
                            settings: {
                                slidesToShow: 1,
                                slidesToScroll: 1
                            }
                        }
                    ]
                });

            } else {
                window.location = "home3.html";
            }
        } else {
            window.location = "home3.html";
        }
    }
}

function loadSingleProduct(json) {
    const new_arrival_product_container = document.getElementById("new-arrival-product-container");
    new_arrival_product_container.innerHTML = "";

    json.productList.forEach(item => {
        let product_card = `  <div class="item text-center">
                                                                <div class="product-miniature js-product-miniature item-one first-item">
                                                                    <div class="thumbnail-container">
                                                                        <a href="product-detail.html?id=${item.id}">
                                                                            <img class="img-fluid image-cover" src="product-images/${item.id}/image1.jpg" alt="img">
                                                                            <img class="img-fluid image-secondary" src="product-images/${item.id}/image2.jpg" alt="img">                                                                         
                                                                        </a>
                                                                        <div class="product-flags discount">-30%</div>
                                                                        <div class="highlighted-informations">
                                                                            <div class="variant-links">
                                                                                <a href="#" class="color beige" title="Beige"></a>
                                                                                <a href="#" class="color orange" title="Orange"></a>
                                                                                <a href="#" class="color green" title="Green"></a>
                                                                            </div>
                                                                        </div>
                                                                    </div>
                                                                    <div class="product-description">
                                                                        <div class="product-groups">
                                                                            <div class="product-title">
                                                                                <a href="product-detail.html?id=${item.id}">${item.title}</a>
                                                                            </div>
                                                                            <div class="rating">
                                                                                <div class="star-content">
                                                                                    <div class="star"></div>
                                                                                    <div class="star"></div>
                                                                                    <div class="star"></div>
                                                                                    <div class="star"></div>
                                                                                    <div class="star"></div>
                                                                                </div>
                                                                            </div>
                                                                            <div class="product-group-price">
                                                                                <div class="product-price-and-shipping">
                                                                                    <span class="price">Rs. ${new Intl.NumberFormat(
                "en-US",
                {minimumFractionDigits: 2})
                .format(item.price)}</span>
                                                                                    
                                                                                </div>
                                                                            </div>
                                                                        </div>
                                                                        <div class="product-buttons d-flex justify-content-center">
                                                                            <form action="#" method="post" class="formAddToCart">
                                                                                <input type="hidden" name="token">
                                                                                <input type="hidden" name="id_product" value="1">
                                                                                <a class="add-to-cart" href="#"onclick="addToCart(${item.id},1);" data-button-action="add-to-cart">
                                                                                    <i class="fa fa-shopping-cart" aria-hidden="true"></i>
                                                                                </a>
                                                                            </form>
                                                                            <a class="addToWishlist" href="#" data-rel="1" onclick="">
                                                                                <i class="fa fa-heart" aria-hidden="true"></i>
                                                                            </a>
                                                                            <a href="#" class="quick-view hidden-sm-down" data-link-action="quickview">
                                                                                <i class="fa fa-eye" aria-hidden="true"></i>
                                                                            </a>
                                                                        </div>
                                                                    </div>
                                                                </div>
                                                            </div> `;
        new_arrival_product_container.innerHTML += product_card;
    });
}


async function addToCart(productId, qty) {
    const popup = new Notification();
    const response = await fetch("AddToCart?prId=" + productId + "&qty=" + qty);
    if (response.ok) {
        const  json = await response.json();
        if (json.status) {
            popup.success({
                message: json.message
            });
        } else {
            popup.error({
                message: "Something went wrong. Try again!"
            });
        }
    } else {
        popup.error({
            message: "Something went wrong. Try again!"
        });
    }
}


