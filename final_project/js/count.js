const drinks = document.querySelector("#drinks_sub");
let count = Number(window.localStorage.getItem("drinks"));

if (count !== 0) {
	drinks.textContent = `${count}`;
} else {
	drinks.textContent = ` Send a recipe! `;
}