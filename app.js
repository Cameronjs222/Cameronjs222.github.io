const scrollImg = () => {
    const scrollPos = window.scrollY;
    const img = document.querySelector('.img');
    const imgHeight = img.clientHeight;
    const windowHeight = window.innerHeight;

    // Calculate the top position of the image based on the scroll position
    const imgTop = Math.min(0, scrollPos - (imgHeight - windowHeight));
    
    img.style.top = imgTop + 'px';
}

    window.addEventListener('scroll', scrollImg);