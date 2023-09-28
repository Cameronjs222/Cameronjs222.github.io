const scrollImg = () => {
    const scrollPos = window.scrollY;
    const img = document.querySelector('.img');
    const imgHeight = img.clientHeight;
    const windowHeight = window.innerHeight;
    img.style.top = `-${imgHeight - scrollPos * 1.35}px`;
    // take the number from img.style.top and convert it to a number
    const imgTop = parseInt(img.style.top)
    const secondImg = document.querySelector('.img2');
    const secondImgHeight = secondImg.clientHeight;
    if (imgTop >= -21) {
        secondImg.style.top = `-${secondImgHeight + 800 - scrollPos * 1.35}px`;
    }
    console.log(scrollPos);
}

window.addEventListener('scroll', scrollImg);
