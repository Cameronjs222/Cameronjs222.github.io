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
}


const textOpacity = () => {
    const scrollPos = window.scrollY;
    const text = document.querySelector('.text');
    text.style.opacity = `${scrollPos / 700}`;

}

    const emailButton = document.getElementById("emailButton");

        // Add a click event listener to the button
        emailButton.addEventListener("click", function () {
            // Define email parameters
            const to = "Cameronshaffer95@gmail.com";
            // Create the mailto link
            const mailtoLink = `mailto:${to}`;

            // Open the user's default email client
            window.location.href = mailtoLink;
        });


window.addEventListener('scroll', textOpacity);
window.addEventListener('scroll', scrollImg);
