const filters = document.querySelectorAll('.filters span');
const images = document.querySelectorAll('.images .img img');

for(let filter of filters) {
	filter.addEventListener('click', function () {
		for(let i of filters) {
			i.classList.remove('active');
		}
		filter.classList.add('active');

		for(let image of images) {
			image.parentElement.classList.remove('hide');
		}

		if(filter.innerHTML.toLowerCase() !== 'all') {
			for(let image of images) {
				if(filter.innerHTML.toLowerCase() !== image.dataset.filter) {
					image.parentElement.classList.add('hide');
				}
			}
		}
	})
}