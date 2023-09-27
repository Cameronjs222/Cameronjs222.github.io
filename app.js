const scrollImg = () => {
    const scrollPos = window.scrollY;
    console.log(scrollPos);
    const img = document.querySelector('.img');
    if (scrollPos > 250) {
        img.style.top = `${(scrollPos - 250) * -0.5}px`;
    }
    else {
        img.style.top = '0px';

    }
}

    window.addEventListener('scroll', scrollImg);