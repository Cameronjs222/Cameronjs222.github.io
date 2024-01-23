
const img = document.querySelector('.img');
const projectWindow = document.querySelector('.deployedProjects')
img.style.top = `-${projectWindow.clientHeight}px`;

console.log(projectWindow.clientHeight);
const scrollImg = () => {
    const scrollPos = window.scrollY;
    if (scrollPos >= window2.getBoundingClientRect().top) {
        secondImg.style.top = `-${projectWindow.clientHeight + secondImg.clientHeight - scrollPos}px`;
    }
    img.style.top = `-${projectWindow.clientHeight - scrollPos}px`;
}


const window1 = document.getElementById('firstWindow');
const window2 = document.getElementById('secondWindow');

document.getElementById('navigateButton').addEventListener('click', function() {
    // Redirect to the next page (nextPage.html)
    window.location.href = 'newIndex.html';
});


const emailButton = document.getElementById("emailButton");

const emailLink = () => {
    const to = "Cameronshaffer95@gmail.com";
    const mailtoLink = `mailto:${to}`;
    window.location.href = mailtoLink;
}

emailButton.addEventListener("click", emailLink);
// window.addEventListener('scroll', textOpacity);
window.addEventListener('scroll', scrollImg);