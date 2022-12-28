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
    document.getElementById("multiCamera").src = data[params.id].cards[0].image;
    document.getElementById("multiPen").src = data[params.id].cards[1].image;
    document.getElementById("multiExcellence").src = data[params.id].cards[2].image;
    document.getElementById("multiBuilt").src = data[params.id].cards[3].image;

    document.getElementById("title_inf_camera").innerHTML = data[params.id].cards[0].name;
    document.getElementById("title_inf_pen").innerHTML = data[params.id].cards[1].name;
    document.getElementById("title_inf_Excellence").innerHTML = data[params.id].cards[2].name;
    document.getElementById("title_inf_Built").innerHTML = data[params.id].cards[3].name;

    document.getElementById("data_inf_camera").innerHTML = data[params.id].cards[0].description;
    document.getElementById("data_inf_pen").innerHTML = data[params.id].cards[1].description;
    document.getElementById("data_inf_Excellence").innerHTML = data[params.id].cards[2].description;
    document.getElementById("data_inf_Built").innerHTML = data[params.id].cards[3].description;
});