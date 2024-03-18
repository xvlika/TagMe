document.getElementById('show').addEventListener('click', function() {
    var boxesSection = document.getElementById('boxes');
    boxesSection.scrollIntoView({ behavior: 'smooth' });
});
window.addEventListener('DOMContentLoaded', function() {
    var boxes = document.querySelectorAll('.box');
    boxes.forEach(function(box) {
        box.classList.add('appear');
    });
});

document.getElementById('show').addEventListener('click', function() {
    var boxes = document.querySelectorAll('.box');
    boxes.forEach(function(box) {
        box.classList.add('appear');
    });
});
