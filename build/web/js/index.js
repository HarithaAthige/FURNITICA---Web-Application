function indexOnloadFunctions() {
    checkSessionCart();
    loadProductData();
}
async function checkSessionCart() {
    const popup = new Notification();
    const response = await fetch("CheckSessionCart");
    if (!response.ok) {
        popup.error({
            message: "Something went wrong! Try again shortly"
        });
    }
}

async function loadProductData() {

    const popup = new Notification();
    const response = await fetch("LoadHomeData");
    if (response.ok) {
        const json = await response.json();
        if (json.status) {
            console.log(json);
            //loadBrands(json);
            loadNewArrivals(json);
            loadNewArrivalsBottom(json);
            loadDealOfTheDay(json);
        } else {
            popup.error({
                message: "Something went wrong! Try again shortly"
            });
        }
    } else {
        popup.error({
            message: "Something went wrong! Try again shortly"
        });
    }
}



function loadNewArrivals(json) {
    const new_arrival_product_container = document.getElementById("new-arrival-product-container");
    new_arrival_product_container.innerHTML = "";

    json.productList.forEach(item => {
        let product_card = `  <div class="item text-center col-3 mb-2 me-2">
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

function loadNewArrivalsBottom(json) {
    const new_arrival_product_container_bottom = document.getElementById("new-arrival-product-container-bottom");
    new_arrival_product_container_bottom.innerHTML = "";

    json.productList.forEach(item => {
        let product_card = `  <div class="item text-center col-3 ">
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
        new_arrival_product_container_bottom.innerHTML += product_card;
    });
}

function loadDealOfTheDay(json) {
    const deal_of_the_day_container = document.getElementById("deal-of-the-day-container");
    deal_of_the_day_container.innerHTML = "";

    json.productList.forEach(item => {
        let product_card = `  <div class="tab-content" id="deal-of-the-day-container">
                                                        <div id="deal_of_day" class="slick">
                                                            <div class="item text-center">
                                                                <div class="product-miniature js-product-miniature item-one first-item">
                                                                    <div class="thumbnail-container">
                                                                        <a href="product-detail.html?id=${item.id}">
                                                                            <img class="img-fluid" src="product-images/${item.id}/image1.jpg" alt="img">
                                                                        </a>
                                                                    </div>
                                                                    <div class="product-description">
                                                                        <div class="d-flex justify-content-center">
                                                                            <div class="days"></div>
                                                                            <div class="hours"></div>
                                                                            <div class="minutes"></div>
                                                                            <div class="seconds"></div>
                                                                        </div>
                                                                        <div class="product-groups">
                                                                            <div class="product-title">
                                                                                <a href="product-detail.html">${item.title}</a>
                                                                            </div>
                                                                            <div class="product-group-price">
                                                                                <span class="price">Rs. ${new Intl.NumberFormat(
                "en-US",
                {minimumFractionDigits: 2})
                .format(item.price)}</span>
                                                                            </div>
                                                                        </div>
                                                                        <div class="product-buttons d-flex justify-content-center">
                                                                            <form action="#" method="post" class="formAddToCart">
                                                                                <input type="hidden" name="token">
                                                                                <input type="hidden" name="id_product" value="1">
                                                                                <a class="add-to-cart" href="#"  onclick="addToCart(${item.id},1);  data-button-action="add-to-cart">
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
                                                            </div> 
                                                        </div>
                                                    </div>`;
        deal_of_the_day_container.innerHTML += product_card;
    });
}


async function addToCart(productId, qty) {
    const popup = new Notification();// link notification js in single-product.html
    const response = await fetch("AddToCart?prId=" + productId + "&qty=" + qty);
    if (response.ok) {
        const json = await response.json(); // await response.text();
        if (json.status) {
            popup.success({
                message: json.message
            });
        } else {
            popup.error({
                message: "Something went wrong. Try again"
            });

        }
    } else {
        popup.error({
            message: "Something went wrong. Try again"
        });
    }
}



