const navMobile = document.querySelector('.nav-mobile')
const navDesktop = document.querySelector('.nav-desktop')
const navLogo = document.querySelector('.nav__logo')
const navBtn = document.querySelector('.hamburger');
const allNavMobileLinks = document.querySelectorAll('.nav__link-mobile')
const footerYear = document.querySelector('.footer__year')

const handleNav = () => {
	navBtn.classList.toggle('is-active') //specyfikacja ikonki hamburgerowej
	navMobile.classList.toggle('nav-mobile--active')

	allNavMobileLinks.forEach((link) => {
		link.addEventListener('click', () => {
			navMobile.classList.remove('nav-mobile--active')
			navBtn.classList.remove('is-active') //żeby ikonka hamb. nie działała poprawnie co drugie skorzystanie z nawigacji
		});
	});
};

navBtn.addEventListener("click", handleNav)

const handleDesktopNav = () => {
	navDesktop.classList.toggle('nav-desktop--reduction', window.scrollY > 65)
} //dodawanie klasy, zmniejszającej navigację desktopową

window.addEventListener('scroll', handleDesktopNav)


const handleNavLogo = () => {
	navLogo.classList.toggle('nav__logo--reduction', window.scrollY > 65)
} //dodawanie klasy, zmniejszającej logo w nawigacji

window.addEventListener('scroll', handleNavLogo)



const handleCurrentYear = () => {
	//funkcja umieszczająca aktualny rok w stopce
	const year = new Date().getFullYear() //funkcja year, new Date - tworzymy obiekt nowej daty, wywołanie metody getFullYear()
	footerYear.innerText = year
};

handleCurrentYear()