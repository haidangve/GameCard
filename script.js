document.addEventListener("DOMContentLoaded", function () {
    // Heart Icons
    var heartIcons = document.querySelectorAll('.fa-heart');

    heartIcons.forEach(function (heartIcon) {
        heartIcon.addEventListener('click', function () {
            // Toggle between empty and filled heart icons
            this.classList.toggle('far');
            this.classList.toggle('fas');
            this.classList.toggle('fa-heart-filled'); // Add this line
        });
    });

    // Links
    var links = document.querySelectorAll('a');

    links.forEach(function (link) {
        link.addEventListener('click', function () {
            link.classList.add('clicked');
        });
    });

    var toggleBtn = document.querySelector('.theme-toggle-btn')
    var body = document.querySelector('body')

    toggleBtn.addEventListener('click', function(){
        body.classList.toggle('dark')
        toggleBtn.classList.toggle('dark')
    })
});
