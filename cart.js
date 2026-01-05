let cart = [];

function addToCart(id, name, price) {
    cart.push({id, name, price});
    renderCart();
}

function removeFromCart(index) {
    cart.splice(index,1);
    renderCart();
}

function renderCart() {
    const cartItemsContainer = document.getElementById("cart-items");
    const totalEl = document.getElementById("total");
    cartItemsContainer.innerHTML = "";
    let total = 0;
    cart.forEach((item,index)=>{
        total += item.price;
        const div = document.createElement("div");
        div.className = "cart-item";
        div.innerHTML = `${item.name} - $${item.price} <button onclick="removeFromCart(${index})">❌</button>`;
        cartItemsContainer.appendChild(div);
    });
    totalEl.textContent = total;
}
