const scrollImg = () => {
    const scrollPos = window.scrollY;
    const img = document.querySelector('.img');
    const imgHeight = img.clientHeight;
    const windowHeight = window.innerHeight;
    const endOfPage = windowHeight * 5/3;
    const scrollRatio = endOfPage / windowHeight;
    img.style.top = `-${imgHeight - scrollPos}px`;
    const secondImg = document.querySelector('.img2');
    const secondImgHeight = secondImg.clientHeight;
    console.log(endOfPage)
    if (scrollPos >= endOfPage / 2) {
        secondImg.style.top = `-${secondImgHeight + windowHeight - scrollPos}px`;
    }
    console.log(scrollPos, windowHeight);
    console.log(scrollRatio + '%');
}


const textOpacity = () => {
    const scrollPos = window.scrollY;
    const text = document.querySelector('.text');
    console.log(scrollPos);
    console.log(text);
    text.style.opacity = `${scrollPos / 700}`;

}

window.addEventListener('scroll', textOpacity);
window.addEventListener('scroll', scrollImg);
