const params = new Proxy(new URLSearchParams(window.location.search), {
    get: (searchParams, prop) => searchParams.get(prop),
});

fetch(`../data/${params.category}.json`).then(response => {
    return response.json();
}).then(data => {
    document.querySelector(".product-name").innerText = data[0].name;
    document.querySelector(".product-img").src = data[0].image;
    document.querySelector(".product-description").innerText = data[0].description;

    // 4 cards
    let cards = ["one", "two" , "three", "four"];
    for (let i = 0; i < cards.length; i++) {
        let card = document.querySelector(`.${cards[i]}`);
        card.querySelector("img").src = data[0].cards[i].image;
        card.querySelector("h3").innerText = data[0].cards[i].name;
        card.querySelector("p").innerText = data[0].cards[i].description;
    }

    // 4 products
    for (let i = 0; i < cards.length; i++) {
        let card = document.querySelector(`.product-${cards[i]}`);
        let j = i + 1;
        card.querySelector("img").src = data[j].image;
        card.querySelector("h3").innerText = data[j].name;
        card.querySelector("p").innerText = data[j].features.join("|");
        card.querySelector(".price").innerHTML = `<p>${data[j].price}</p>`;
    }
    const pathnameDevices = "/html/devices.html"
    const buttons = document.querySelectorAll(".deviceslink");
    for (let i = 0; i < 5; i++) {
        buttons[i].href = window.location.origin + pathnameDevices + window.location.search + `&id=${i}`
    }
    
});