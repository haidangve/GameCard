// script.js
document.addEventListener("DOMContentLoaded", function () {
    var heartIcons = document.querySelectorAll('.fa-heart');

    heartIcons.forEach(function (heartIcon) {
        heartIcon.addEventListener('click', function () {
            this.classList.toggle('fas');
            this.classList.toggle('fa-heart-filled');
        });
    });
});

document.addEventListener("DOMContentLoaded", function () {
    // Get all anchor elements
    var links = document.querySelectorAll('a');

    // Add click event listener to each link
    links.forEach(function (link) {
        link.addEventListener('click', function () {
            // Add a class to the clicked link
            link.classList.add('clicked');
        });
    });
});
