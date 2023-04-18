const navMobile = document.querySelector('.nav-mobile');
const navBtn = document.querySelector('.hamburger');
const allNavMobileLinks = document.querySelectorAll('.nav__link-mobile');
const footerYear = document.querySelector('.footer__year');

const handleNav = () => {
	navBtn.classList.toggle('is-active'); //specyfikacja ikonki hamburgerowej
	navMobile.classList.toggle('nav-mobile--active');

	allNavMobileLinks.forEach((link) => {
		link.addEventListener('click', () => {
			navMobile.classList.remove('nav-mobile--active');
			navBtn.classList.remove('is-active'); //żeby ikonka hamb. nie działała poprawnie co drugie skorzystanie z nawigacji
		});
	});
};

navBtn.addEventListener("click", handleNav)

const handleCurrentYear = () => {
	//funkcja umieszczająca aktualny rok w stopce
	const year = new Date().getFullYear(); //funkcja year, new Date - tworzymy obiekt nowej daty, wywołanie metody getFullYear()
	footerYear.innerText = year;
};

handleCurrentYear();