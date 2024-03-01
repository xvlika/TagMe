function expandBox(box) {
    var boxes = document.querySelectorAll('.boxes');
    if (box.classList.contains('expanded')) {
        boxes.forEach(function (item) {
            item.style.display = 'block';
            item.classList.remove('expanded');
        });
        box.style.transform = 'scale(1)';
    } else {
        boxes.forEach(function (item) {
            if (item !== box) {
                item.style.display = 'none';
            }
        });
        box.classList.add('expanded');
        box.style.transform = 'scale(1.3)';
    }
}