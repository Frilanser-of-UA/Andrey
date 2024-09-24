const btnSound = document.querySelector(".bt-icon");
btnSound.addEventListener("click", () => {
    btnSound.classList.toggle("active");
})

// swiper slider

let gallerySliderCenter = new Swiper('.slider', {
	slidesPerView: 1,
	spaceBetween: 10,
	autoHeight: false,
	speed: 1000,
	freeMode: false,
	touchRatio: 1,
	simulateTouch: true,
	// Arrows
	navigation: {
		nextEl: '.bt-slider--next',
		prevEl: '.bt-slider--prev',
	},
});

// steps

let sections = document.querySelectorAll(".fullscreen");
if(sections.length > 0){
    for (let i = 0; i < sections.length; i++) {
        let btnSection = sections[i].querySelector(".bt[data-step]");
        sections[0].classList.add('active');
        btnSection.addEventListener('click', () => {
            sections[i].classList.remove('active');
            if (sections[i].nextElementSibling !== null) {
                sections[i].nextElementSibling.classList.add('active');
            }
            if (sections[i].nextElementSibling === null) {
                sections[0].classList.add('active');
            }
        });
    }
}









// let btnStep = document.querySelectorAll('.bt[data-step]');
// let sectionScreen = document.querySelectorAll('.fullscreen');
// console.log(btnStep);
// for (let i = 0; i < sectionScreen.length; i++) {
//     sectionScreen[i].id = `step-${[i + 1]}`;
// }
// for (let i = 0; i < btnStep.length; i++) {
//     btnStep[i].dataset.step = `step-${[i + 1]}`;
//     btnStep[i].addEventListener("click", function(e){
//         let self = e.currentTarget;
//         let btnData = self.getAttribute('data-step');
//         let currentElem = document.querySelector(`.fullscreen[id="${btnData}"]`);
//         let currentSwction = document.querySelectorAll(".fullscreen");
//         // currentSwction.forEach( function(el) {
//         //     el.classList.remove("hide");
//         // });
//         if(btnData === currentElem.id){
//             currentElem.classList.add("hide");
//         } else if (btnData !== currentElem.id){
//             currentElem.classList.remove("hide");
//         }




//         console.log(currentElem.id);
//         console.log(btnData);
//     })
// }


