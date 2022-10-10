const btnMenu = document.querySelector("#btn-menu");
const menu = document.querySelector("#menu");
btnMenu.addEvenListener("click", function(){
	menu.classList.toggle("mostrar");
});

const subMenuBtn = document.querySelectorAll(".submenu-btn");
for (let i=0; i<subMenuBtn.length; i++){
	subMenuBtn[i].addEventListener("click", function()){
		if(window.innerWidth < 768){
			const submenu = this.nextElementSibling;
			const height = submenu.scrollHeight;

			if (submenu.classList.contains("desplegar")){
				submenu.classList.remove("desplegar");
				submenu.removeAttribute("style");
			}
			else {
				submenu.classList.add("desplegar");
				submenu.style.height = height + "px"
			}
			
		}
	}
}