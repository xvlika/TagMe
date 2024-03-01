function expandBox(box, newText) {
    var boxes = document.querySelectorAll('.box');
    boxes.forEach(function(boxElement) {
        if (boxElement !== box) {
            boxElement.classList.remove('expanded');
            boxElement.querySelector('p').textContent = ''; 
        }
    });

    let paragraph = box.querySelector('p');
    paragraph.textContent = newText;

    if (!box.classList.contains('expanded')) {
        box.classList.add('expanded');
    } else {
        paragraph.textContent = ''; 
    }

    document.addEventListener('click', function(event) {
        if (!box.contains(event.target)) {
            box.classList.remove('expanded');
            paragraph.textContent = ''; 
        }
    });
}
