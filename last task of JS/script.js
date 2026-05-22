let allProducts = [];

let cart = [];

function fetchProducts(){
    document.getElementById("loader")
    .style.display = "block";
    fetch("https://fakestoreapi.com/products")
    .then((res) => res.json())
    .then((data) => {
        allProducts = data;
        displayProducts(data);
        document.getElementById("loader")
        .style.display = "none";
    })

    .catch(() => {
        document.getElementById("loader")
        .style.display = "none";
        document.getElementById("error")
        .innerText = "Error Fetching Data";
    });
}

function displayProducts(products){
    let container = document.getElementById("products");
    container.innerHTML = "";
    products.map((product) => {
        container.innerHTML += `
        <div class="card">
            <!-- Product Image -->
            <img src="${product.image}">
            <!-- Title -->
            <h3>
                ${product.title.slice(0,20)}...
            </h3>
            <!-- Description -->
            <p>
                ${product.description.slice(0,50)}...
            </p>
            <!-- Price -->
            <div class="price">
                ₹ ${product.price}
            </div>
            <!-- Category -->
            <p>
                ${product.category}
            </p>
            <!-- Rating -->
            <p>
                ⭐ ${product.rating.rate}
            </p>
            <!-- Add To Cart -->
            <button
            onclick="addToCart(${product.id})">
                Add To Cart
            </button>
            <!-- Remove -->
            <button
            class="remove-btn"
            onclick="removeItem(${product.id})">
                Remove
            </button>
        </div>
        `;
    });
}

document.getElementById("search")
.addEventListener("input",(e) => {
    let value = e.target.value.toLowerCase();
    let filtered = allProducts.filter((product) =>
        product.title
        .toLowerCase()
        .includes(value)
    );
    displayProducts(filtered);
});

document.getElementById("category")
.addEventListener("change",(e) => {
    let value = e.target.value;
    if(value === "all"){
        displayProducts(allProducts);
    }
    else{
        let filtered =
        allProducts.filter((product) =>
            product.category === value
        );
        displayProducts(filtered);
    }
});

function sortLowToHigh(){
    let sorted =
    [...allProducts].sort((a,b) =>
        a.price - b.price
    );
    displayProducts(sorted);
}

function sortHighToLow(){
    let sorted =
    [...allProducts].sort((a,b) =>
        b.price - a.price
    );
    displayProducts(sorted);
}

function addToCart(id){
    let product = 
    allProducts.find((item) =>
        item.id === id
    );

    let existing = 
    cart.find((item) =>
        item.id === id
    );

    if(existing){
        existing.qty++;
    }

    else{
        cart.push({
            ...product,
            qty : 1
        });
    }

    updateCart();
}

function updateCart(){
    let cartContainer =
    document.getElementById("cart");
    cartContainer.innerHTML = "";
    cart.map((item) => {
        cartContainer.innerHTML += `
        <div class="cart-item">
            <p>
                ${item.title.slice(0,20)}...
                <br>
                ₹ ${item.price}
                ×
                ${item.qty}
            </p>
            <button
            class="remove-btn"
            onclick="removeItem(${item.id})">
                Remove
            </button>
        </div>
        `;
    });

    document.getElementById("cart-count")
    .innerText = cart.length;

    let total =
    cart.reduce((sum,item) =>
        sum + item.price * item.qty
    ,0);

    document.getElementById("total")
    .innerText = total.toFixed(2);
}

function removeItem(id){
    cart =
    cart.filter((item) =>
        item.id !== id
    );

    updateCart();
}

fetchProducts();