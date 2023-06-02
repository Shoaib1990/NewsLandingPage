window.addEventListener("load", (event) => {
    
    const toggleButton = document.getElementById('navbar-toggle');
    const menu = document.querySelector('#mobile .menu');
    
    toggleButton.addEventListener('click', function() {
        menu.classList.toggle('active');
    });
});


