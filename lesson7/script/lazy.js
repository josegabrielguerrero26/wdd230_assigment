
const images = document.querySelectorAll('img');

images.forEach(image => {
    const url=image.getAttribute('data-src');
     image.src=url;
});

