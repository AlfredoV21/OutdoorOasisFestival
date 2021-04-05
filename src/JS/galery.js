document.addEventListener('DOMContentLoaded', function() {
    createGalery();
    scrollNav();
    quietNav();
})
//Create new galery
function createGalery() {
    const galery = document.querySelector('.galery__images');

    for (let i = 1; i <= 12; i++) {
        const image = document.createElement('IMG');
        image.src = `minimg/thumb/${i}.webp`;
        image.dataset.imageId = i;
        //add the image class
        image.classList.add("image__edit");

        //Add the showImage function
        image.onclick = showImage;

        const list = document.createElement('LI');
        list.appendChild(image);
        galery.appendChild(list);
    };
}; 
//Show big images
function showImage(e) {
    const id = parseInt( e.target.dataset.imageId );

    //generate the image
    const image = document.createElement('IMG');
    image.src = `minimg/grande/${id}.webp`;

    const overlay = document.createElement('DIV');
    overlay.appendChild(image);
    overlay.classList.add('overlay');
    //When doing click another shape of the page
    overlay.onclick = function() {
        overlay.remove();
        body.classList.remove('class-body');

    };

    //Close image button
    const closeImage = document.createElement('P');
    closeImage.textContent = 'X';
    closeImage.classList.add('close-btn');

    //Close image button acction
    closeImage.onclick = function() {
        overlay.remove();
        body.classList.remove('class-body');
    };

    overlay.appendChild(closeImage);

    //Show in the HTML
    const body = document.querySelector('body');
    body.appendChild(overlay);
    body.classList.add('class-body');

};

//Quiet navegation
function quietNav() {
    const bar = document.querySelector('.header');

    //Register the Intersection Observer
    const observer = new IntersectionObserver( entries => {
        if(entries[0].isIntersecting) {
            bar.classList.remove('fix');
        } else {
            bar.classList.add('fix');
        }
    });

    //Element to observe
    observer.observe(document.querySelector('.video'));
};

//Scroll movement
function scrollNav() {
    const links = document.querySelectorAll('.main-navigation a')

    links.forEach( link => {
        link.addEventListener('click', e => {
            e.preventDefault();

            //Smooth Scroll
            const section = document.querySelector(e.target.attributes.href.value);
            section.scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
};


