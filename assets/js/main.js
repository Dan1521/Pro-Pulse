

document.addEventListener('DOMContentLoaded', () => {
	const burger = document.querySelector('.burger'),
		menu = document.querySelector('.menu');

	// Burger
	burger.addEventListener('click', (event)=>{
		menu.classList.toggle('active')
		burger.classList.toggle('active')
		document.body.classList.toggle('no-scroll')
	})
	window.addEventListener("resize",()=>{
		menuToggler()
	})
	window.addEventListener("load",()=>{
		menuToggler()
	})
	function menuToggler(){
		if(window.innerWidth >= 1025){
			menu.classList.remove('active')
			burger.classList.remove('active');
			document.body.classList.remove('no-scroll')
		}
	}

	
	const menuItem = document.querySelectorAll('[data-sub-menu-trigger]');

	menuItem.forEach(menu => {
		menu.addEventListener('click', (event)=>{
			let self = event.currentTarget,
				selfParent = self.parentNode,
				subMenu = selfParent.querySelector('[data-sub-menu]');

				if(!selfParent.closest('._active')){ //Если нет класса то добавляем 
					selfParent.classList.add('_active')
					subMenu.style.maxHeight = subMenu.scrollHeight + 'px';
				}else{
					selfParent.classList.remove('_active')	
					subMenu.style.maxHeight = 0;
				}
		})
	});	
	


	const secutitySlider = new Swiper('.partners__slider', {
		slidesPerView: 'auto',
		spaceBetween: 10,
		loop: true,
		speed: 500,
		navigation: {
			nextEl: '.partners-btn--left',
			prevEl: '.partners-btn--prev',
		  },
	});

	const aboutSlider = new Swiper('.about-us__slider', {
		slidesPerView: 'auto',
		speed: 1000,
		effect: 'fade',
		navigation: {
			nextEl: '.about-us__btn--left',
			prevEl: '.about-us__btn--prev',
		},
	});

	const blockNewSlider = new Swiper('.block-news__slider', {
		slidesPerView: 'auto',
		speed: 1000,
		navigation: {
			nextEl: '.block-news__slider-next',
			prevEl: '.block-news__slider-prev',
		},
	});

	const serviceSlider = new Swiper('.service-card__slider', {
		slidesPerView: 1,
		spaceBetween: 20,
		loop: true,
		speed: 700,
		slideCenter: true,
		navigation: {
			nextEl: '.service-card__slider-next',
			prevEl: '.service-card__slider-prev',
		},
	});

	const benefitsSlider = document.querySelector('.benefits')

	function sliderInit(benefitsSlider){
		if(window.innerWidth <= 1025){
			const swiperSlider = new Swiper(benefitsSlider, {
				slidesPerView: 1,
				spaceBetween: 25,
				loop: true,
				speed: 700,
				watchSlidesProgress: true,
				navigation: {
					nextEl: '.benefits-btn--left',
					prevEl: '.benefits-btn--prev',
				},
				pagination: {
					type: 'progressbar',
					el: '.swiper-pagination'
				},
				
				breakpoints: {
					// если размер окна >= 575px
					575: {
						slidesPerView: 2,
					},
					// если размер окна >= 768px
					768: {
					slidesPerView: 3,
					spaceBetween: 25
					}
				}
			});
			if(window.innerWidth > 1025){
				swiperSlider.destroy();
			}
		}
	}

	window.addEventListener('resize', ()=>{
		sliderInit(benefitsSlider)
	})
	window.addEventListener('load', ()=>{
		sliderInit(benefitsSlider)
	})

	const ourObjectSlider = new Swiper('.object__swiper', {
		slidesPerView: 'auto',
		spaceBetween: 25,
		speed: 700,
		slideClass: 'objects__pop-up',
	})
	
	const aboutUsText = document.querySelector('.about-us__text'),
		aboutUsMore = document.querySelector('.about-us__more');

	if(aboutUsMore){
		aboutUsMore.addEventListener('click', ()=>{
			let fullHeight = aboutUsText.scrollHeight;
	
			if(!aboutUsText.classList.contains('active')) {
				aboutUsText.classList.add('active');
				aboutUsMore.classList.add('active');
				aboutUsText.style.maxHeight = fullHeight + 'px';
			}else{
				aboutUsText.classList.remove('active');
				aboutUsMore.classList.remove('active');
				aboutUsText.style.maxHeight = 296 + 'px';
			}
		})
	}
	


	


		const animItems = document.querySelectorAll('.anim');
	// if(mapObject){
	// 	mapObject.forEach(object=>{
	// 		object.addEventListener('mouseover', (event)=>{
	// 			let self = event.currentTarget,
	// 				parent = self.parentNode,
	// 				parentId = parent.id;
	
	// 			parent.classList.add('_active');
	
	// 			popup.forEach(modal =>{
	// 				if(modal.dataset.id == parentId){
	// 					let markerTop = self.getBoundingClientRect().top,
	// 						markerLeft = self.getBoundingClientRect().left;
	
	// 					modal.classList.add('_active');
	// 					modal.style.left = (markerLeft - modal.offsetWidth / 2) + 'px';
	// 					modal.style.top = markerTop + pageYOffset  + 100 + 'px';		
	// 				}
	// 			})
	// 		})
	
	// 		object.addEventListener('mouseout', (event)=>{
	// 			popup.forEach(modal =>{
	// 				let parent = event.currentTarget.parentNode;
	
	// 				modal.classList.remove('_active');				
	// 				parent.classList.remove('_active');
	// 			})
	// 		})
	
	// 	})
	// }


	// Obeject map mouves
	const popUps = document.querySelectorAll('.objects__pop-up');
	document.querySelector('.objects__map').addEventListener('mouseover', (event)=>{
		const self = event.target;

		document.querySelectorAll('.map__object').forEach(element => {
			let parent = self.parentNode,
				parentId = parent.id;

			
		if(parent == element){
			for (let i = 0; i < popUps.length; i++) {
				const popUp = popUps[i];

				if(parentId == popUp.dataset.id){
					parent.classList.add('_active')
					console.log(parent);

					let markerTop = parent.getBoundingClientRect().top,
						markerLeft = parent.getBoundingClientRect().left;

						popUp.style.left = (markerLeft - popUp.offsetWidth / 2) + 'px';
						popUp.style.top = markerTop + pageYOffset  + 100 + 'px';
						popUp.classList.add('_active');

						popUp.addEventListener('mouseover', e=>{
							let self = e.currentTarget;
							if(self){
								parent.classList.add('_active')
								self.classList.add('_active');
							}
						
						})
				}

				

			}

		}
			
		});
		
	})

	document.querySelector('.objects__map').addEventListener('mouseout', (event)=>{
		let self = event.target,
			parent = self.parentNode;
			parent.classList.remove('_active')
		for (let i = 0; i < popUps.length; i++) {
			const popUp = popUps[i];
				
				popUp.classList.remove('_active');
	

		}
	})

	


	

	function animScroll(){
		animItems.forEach(object=>{
			let	itemOffset = object.getBoundingClientRect().top + window.pageYOffset;
	
			if(window.innerHeight + window.pageYOffset - 100 > itemOffset ){
				if(!object.classList.contains('active'))object.classList.add('active');
				
				if(object.classList.contains('num-objects__num') && !object.classList.contains('a')){
					let i = 0;
					object.classList.add('a')
					setInterval(() => {
						if(i >= object.dataset.count) return
						i++
						object.innerHTML = i;

					}, 15);
				}
			}
				
			
		})
	}
	animScroll()
	window.addEventListener('scroll', ()=>{
		animScroll()
	})

	const paginItem = document.querySelectorAll('.paggin__item a'),
		anchor = document.querySelectorAll('.anchor');

	if(paginItem){
		paginItem.forEach(item =>{
			item.addEventListener('click',(e)=>{
				e.preventDefault();
				let itemId = e.currentTarget.getAttribute('href').substring(1);

				scroll(itemId)
			})
		})
	}

	function scroll(itemId) {
		anchor.forEach(container => {
			const containerId = container.getAttribute('id');

			if(itemId == containerId){
				container.scrollIntoView({
					behavior: 'smooth',
					block: 'start'
				});
			}
		});
	}	



	

	const serviceModal = document.querySelector('.service-modal'),
		serviceModalToglle =document.querySelectorAll('[data-modal-btn]');
	
	serviceModalToglle.forEach(item =>{
		item.addEventListener('click', (event)=>{
			console.log(event.currentTarget);
			if(serviceModal.closest('.active')){
				serviceModal.classList.remove('active');
			}else{
				serviceModal.classList.add('active');
			}
		})
	})
	
	

	

	if(document.querySelector('.form')){
		const formFields = document.querySelectorAll('.form__field');
		const validation = new JustValidate('.service-contact__form');
		const telSelector = document.querySelector('.form__input--tel');
		const telMask = new Inputmask("+7(999)999-99-99", {showMaskOnHover: false });

		validation
		.addField('.form__input--name', [
				{
				rule: 'required',
				errorMessage: 'Введите имя'
				},
				{
				rule: 'minLength',
				value: 2,
				errorMessage: 'Минимум 2 символа',
				},
			],
			
		)
		.addField('.form__input--tel', [
			{
			rule: 'required',
			errorMessage: 'Введите телефон',
			},
			{
				validator: (name, value) => {
				  let phone = telSelector.inputmask.unmaskedvalue();
				  return Number(phone) && phone.length === 10
				},
				errorMessage: 'Заполните поле',
			},
		])
		.addField('.form__input--email', [
			{
			rule: 'required',
			errorMessage: 'Введите почту',
			},
			{
			rule: 'email',
			},
		])
		.addField('.form__input--textarea', [
			{
			rule: 'required',
			errorMessage: 'Введите текст вопроса',
			},
			{
			rule: 'minLength',
			value: 2,
			errorMessage: 'Минимум 2 символа',
			},
		])

		formFields.forEach(field =>{
			let input = field.querySelector('.form__input');
			input.addEventListener('input', event =>{
				if(input.value.length >= 1){
					input.classList.add('active')
				}else{
					input.classList.remove('active')
				}
			})
		})
	
		telMask.mask(telSelector);
	}
	
})



