function expandBox(box, newText) {
    let paragraph = box.querySelector('p');

    if (!box.classList.contains('expanded')) {
        // Expand the box
        box.classList.add('expanded');
        paragraph.textContent = newText;
        paragraph.style.fontSize = '1.2rem';
        paragraph.style.color = 'white'; 
    } else {
        box.classList.remove('expanded');
        paragraph.textContent = ''; 
    }

    box.addEventListener('click', function(event) {
        event.stopPropagation();
    });

    let boxes = document.querySelectorAll('.box');
    boxes.forEach(function(boxElement) {
        if (boxElement !== box) {
            boxElement.classList.remove('expanded');
            boxElement.querySelector('p').textContent = ''; 
        }
    });
}

document.addEventListener('click', function(event) {
    let boxes = document.querySelectorAll('.box');
    boxes.forEach(function(boxElement) {
        boxElement.classList.remove('expanded');
        boxElement.querySelector('p').textContent = ''; 
    });
});
