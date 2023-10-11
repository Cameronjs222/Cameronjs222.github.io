
const img = document.querySelector('.img');
console.log(img.clientHeight);
const secondImg = document.querySelector('.img2');
console.log(secondImg.clientHeight);
const projectWindow = document.querySelector('.projects')
console.log(projectWindow.clientHeight + " window height");
img.style.top = `-${projectWindow.clientHeight}px`;
secondImg.style.top = `-${projectWindow.clientHeight}px`;

const scrollImg = () => {
    const scrollPos = window.scrollY;
    if (scrollPos >= window2.getBoundingClientRect().top) {
        secondImg.style.top = `-${projectWindow.clientHeight + secondImg.clientHeight - scrollPos}px`;
    }
    img.style.top = `-${projectWindow.clientHeight - scrollPos}px`;
}


const window1 = document.getElementById('firstWindow');
const window2 = document.getElementById('secondWindow');
console.log(window1.getBoundingClientRect().y + " top");
console.log(window2.getBoundingClientRect().y + " bottom");



// const scrollImg = () => {
//     const scrollPos = window.scrollY;
//     const img = document.querySelector('.img');
//     const imgHeight = img.clientHeight;
//     const projectWindow = window.innerHeight;
//     const endOfPage = projectWindow * 5/3;
//     const scrollRatio = endOfPage / projectWindow;
//     img.style.top = `-${imgHeight - scrollPos}px`;
//     const secondImg = document.querySelector('.img2');
//     const secondImgHeight = secondImg.clientHeight;
//     console.log(endOfPage)
//     if (scrollPos >= endOfPage / 2) {
//         secondImg.style.top = `-${secondImgHeight + projectWindow - scrollPos}px`;
//     }
// }

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