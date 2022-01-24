let menu = document.querySelector("#menu");
let navbar = document.querySelector(".navbar");

menu.onclick = () => {
	menu.classList.toggle('fa-window-close-o');
	navbar.classList.toggle('active');
}

window.onscroll = () =>{
	menu.classList.remove('fa-window-close-o');
	navbar.classList.remove('active');
}