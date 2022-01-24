let list = document.querySelectorAll('.list');
let box = document.querySelectorAll('.category_box');


for (let i = 0; i < list.length; i++){
	list[i].addEventListener('click', function(){
		for(let j=0; j<list.length; j++){
			list[j].classList.remove('active');
		}

		this.classList.add('active');

		let datafilter = this.getAttribute('data-filter');

		for(let k=0; k< box.length; k++){
			box[k].classList.remove('active');
			box[k].classList.add('hide');

			if (box[k].getAttribute('data-item') == datafilter || datafilter == "all") {
				box[k].classList.remove('hide');
				box[k].classList.add('active');
			}
		}
	})
}