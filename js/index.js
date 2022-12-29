let navbar = document.getElementsByClassName('navbar-root')[0];
const path = `${navbar.id?"/": "../"}html/contact-us.html`; 
console.log(path);
navbar.innerHTML = `
    <div class="navbar-container">
		<a href="${navbar.id?"/": "../"}index.html"><h1>Nerdware</h1></a>
        <a href="${navbar.id?"/": "../"}html/contact-us.html"><h1>Contact Us</h1></a>
    </div>
`;

const slider = document.querySelector('#slider');
let counter = 1;
let slidesCnt = data.length;
let slides = []
let dots = []
function doThis(str){
	open(str)
}
buildSlides = () => {
	for(let i = 0;i < slidesCnt;i++){
		const item = data[i]
		const slide = `
		<div class="myslide fade" link=${data[i].link}>
			<div class="txt">
				<h1>${item.title}</h1>
				<p>${item.description}</p>
			</div>
			<img src=${item.imgPath}>
		</div>
		`
		slides.push(slide)
	}
}
buildSlides()
slider.innerHTML += slides.join('')


buildDots = () => {
	for(let i = 0;i < slidesCnt;i++){
		const dot = `<span class="dot" onclick="currentSlide(${i+1})"></span>`
		dots.push(dot)
	}
}
buildDots()
const divDot = document.createElement('div')
divDot.setAttribute('class', 'dotsbox')
divDot.style.textAlign = 'center'
divDot.innerHTML = dots.join('')
slider.appendChild(divDot)
slider.innerHTML += `
	<a class="prev" onclick="plusSlides(-1)">&#10094;</a>
	<a class="next" onclick="plusSlides(1)">&#10095;</a>
`
slideFunction(counter);
let timer = setInterval(autoSlide, 8000);

function autoSlide() {
	counter += 1;
	slideFunction(counter);
}

function plusSlides(n) {
	counter += n;
	slideFunction(counter);
	resetTimer();
}

function currentSlide(n) {
	counter = n;
	slideFunction(counter);
	resetTimer();
}

function resetTimer() {
	clearInterval(timer);
	timer = setInterval(autoSlide, 6000);
}

function slideFunction(n) {
	const myslide = document.querySelectorAll('.myslide')
	
	const dot = document.querySelectorAll('.dot')
	for(i = 0;i< myslide.length ; i++){
		myslide[i].style.display = "none";
		console.log()
		const img = myslide[i].getAttribute('link')

		myslide[i].onclick =  () => doThis(img);
	}

	for(i = 0;i<dot.length;i++) {
		dot[i].className = dot[i].className.replace(' active', '');
	}
	if(n > myslide.length){
	   counter = 1;
	   }
	if(n < 1){
	   counter = myslide.length;
	   }
	myslide[counter - 1].style.display = "block";
	dot[counter - 1].className += " active";
}
