const tabLinks = document.querySelectorAll('.tab-links a');

tabLinks.forEach(link => {
    link.addEventListener('click',  => {

        tabLinks.forEach(link => link.classList.remove('active'));

        link.classList.add('active');

        const panel = document.querySelector(link.hash);
        panel.style.display = 'block';
    });
});