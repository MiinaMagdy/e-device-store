const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
});


fetch(`../data/${params.category}.json`).then(response => {
    return response.json();
}).then(data => {
    document.querySelector(".product-name").innerText = data[params.id].name;
    document.querySelector(".product-img").src = data[params.id].image;
    document.querySelector(".product-price").innerText = data[params.id].price;
    document.querySelector(".product-rate").innerText = data[params.id].rating;
    document.querySelector(".product-description").innerText = data[params.id].description;
    document.querySelector(".product-features").innerHTML = "";
    for (feature of data[params.id].features) {
        document.querySelector(".product-features").innerHTML += `<li>${feature}</li>`;
    }
});