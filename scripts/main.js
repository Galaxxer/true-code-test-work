
const bg_image = document.querySelector(".page__background-image");
const bg_noise = document.querySelector(".page__background-image--filter");

document.addEventListener("mousemove", (e) => {
    const bg_image_offset = (window.innerWidth + e.pageX * 10 ) / 90;
    bg_image.style.transform = `translateX(${bg_image_offset}px)`;

    const bg_noise_offset = (window.innerWidth - e.pageX * 10 ) / 90;
    bg_noise.style.transform = `translateX(${bg_noise_offset}px)`;
});


const popup = document.querySelector('.popup')

const popupOpen = document.querySelector('#open-popup')
const popupClose = document.querySelector('#close-popup')

const showPopup = () => {
    popup.hidden = false;
}
const hidePopup = () => {
    popup.hidden = true;
}

popupOpen.addEventListener('click', showPopup)
popupClose.addEventListener('click', hidePopup)

console.log(popupOpen)