let buttons = document.querySelectorAll(".deco-btn__btn");

buttons.forEach(btn => {
	btn.addEventListener('click', function(e) {

		let x = e.pageX - e.target.offsetLeft;
		let y = e.pageY - e.target.offsetTop;

		let ripples = document.createElement('span');
		ripples.classList.add('ripples');
		ripples.style.left = x + 'px';
		ripples.style.top = y + 'px';
		this.appendChild(ripples);

		setTimeout(() => {
			ripples.remove();
		},500)
	})
});

//<!DOCTYPE Liky>
