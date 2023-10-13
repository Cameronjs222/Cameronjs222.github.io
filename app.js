
const img = document.querySelector('.img');
const secondImg = document.querySelector('.img2');
const projectWindow = document.querySelector('.projects')
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

const textOpacity = () => {
    const scrollPos = window.scrollY;
    const text1 = document.querySelector('.text1');
    const text2 = document.querySelector('.text2');
    if (scrollPos > window1.getBoundingClientRect().top - window.innerHeight) {
      text1.style.color = `rgb(255, 255, 255, ${scrollPos / (window.innerHeight / 2)})`;
    }
    console.log(scrollPos - window2.getBoundingClientRect().top);
    if (scrollPos > window2.getBoundingClientRect().top) {
      text2.style.color = `rgb(255, 255, 255, ${(scrollPos - window2.getBoundingClientRect().top) / (window.innerHeight / 2)}`;
    }
  }

// const textOpacity = () => {
//     const scrollPos = window.scrollY;
//     const text1 = document.querySelector('.text1');
//     const text2 = document.querySelector('.text2');
//     if (scrollPos > window1.getBoundingClientRect().top - window.innerHeight) {
//         text1.style.opacity = `${scrollPos / (window.innerHeight/2)}`;
//     } 
//     console.log(scrollPos - window2.getBoundingClientRect().top);
//     if (scrollPos > window2.getBoundingClientRect().top) {
//         text2.style.opacity = `${(scrollPos - window2.getBoundingClientRect().top) / (window.innerHeight)}`;
//         text2.style.color = "white";
//     }
// }

// const textOpacity = () => {
//     const scrollPos = window.scrollY;
    
//     // Select all elements with class name "text1"
//     const text1Elements = document.querySelectorAll('.text1');
    
//     // Select all elements with class name "text2"
//     const text2Elements = document.querySelectorAll('.text2');
    
//     text1Elements.forEach(text1 => {
//         if (scrollPos > text1.getBoundingClientRect().top - window.innerHeight) {
//             text1.style.opacity = `${scrollPos / (window.innerHeight / 2)}`;
//         }
//     });
    
//     text2Elements.forEach(text2 => {
//         if (scrollPos > text2.getBoundingClientRect().top) {
//             text2.style.opacity = `${(scrollPos - text2.getBoundingClientRect().top) / window.innerHeight}`;
//             text2.style.color = "white";
//         }
//     });
// }


const emailButton = document.getElementById("emailButton");

const emailLink = () => {
    const to = "Cameronshaffer95@gmail.com";
    const mailtoLink = `mailto:${to}`;
    window.location.href = mailtoLink;
}

emailButton.addEventListener("click", emailLink);
window.addEventListener('scroll', textOpacity);
window.addEventListener('scroll', scrollImg);