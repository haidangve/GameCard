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