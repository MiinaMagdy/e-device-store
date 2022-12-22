let navbar = document.getElementsByClassName('navbar-root')[0];
const path = `${navbar.id?"/": "../"}html/contact-us.html`; 
console.log(path);

navbar.innerHTML = `
    <div class="navbar-container">
        <h1>Nerdware</h1>
        <a href="${navbar.id?"/": "../"}html/contact-us.html"><h1>Contact Us</h1></a>
    </div>
`;

