const boxes = document.querySelectorAll('.box');


window.addEventListener('scroll', scrolling);

scrolling();

function scrolling() {
    const triggerBottom = window.innerHeight * (4/5);
    boxes.forEach(box => {
        const boxTop = box.getBoundingClientRect().top;
        if(triggerBottom > boxTop) {
            box.classList.add('show');
        }else{
            box.classList.remove('show')
        }
    })
}