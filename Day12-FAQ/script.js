const toggles = document.querySelectorAll('.faq-toggle');

toggles.forEach(btn => {
    btn.addEventListener('click', () => {

        btn.parentNode.classList.toggle('active');
    })
})