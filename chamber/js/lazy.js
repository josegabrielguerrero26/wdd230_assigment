
const images = document.querySelectorAll('img.disc');

let imageOptions={};

let observer =new IntersectionObserver((entries, observer)=>{
    entries.forEach(entry =>{
        if(!entry.isIntersecting) return;
        const image = entry.target;
        const url=image.getAttribute('data-src');
        image.src=url;
        observer.unobserve(image)
    });
}, imageOptions);

images.forEach((image) =>{
    observer.observe(image)
});