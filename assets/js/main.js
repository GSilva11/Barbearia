const hamburguer = document.querySelector(".hamburguer");

const nav = document.querySelector(".navbar");
hamburguer.addEventListener("click", () => nav.classList.toggle("active"));

function addListener() {
	const nav = document.querySelector('nav')
    const listItems = document.querySelectorAll('#navbar-items > li');
	console.log('list', listItems)
	listItems.forEach(li => {
		const anchor = li.querySelector('a')
		anchor.addEventListener('click', () => nav.classList.remove('active'))
	})
}
addListener()