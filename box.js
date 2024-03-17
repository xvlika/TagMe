function expandBox(box, newText) {
    let paragraph = box.querySelector('p');

    if (!box.classList.contains('expanded')) {
        box.classList.add('expanded');
        paragraph.textContent = newText;
        paragraph.style.fontSize = '1.2rem';
        paragraph.style.color = 'white'; 
        
        if (paragraph.textContent.trim() !== '') {
            if (window.innerWidth <= 450) {
                box.style.width = '70%';
                box.style.height = '50%';
            }
        }
    } else {
        box.classList.remove('expanded');
        paragraph.textContent = ''; 
        box.style.width = ''; 
        box.style.height = ''; 
    }

    box.addEventListener('click', function(event) {
        event.stopPropagation();
    });

    let boxes = document.querySelectorAll('.box');
    boxes.forEach(function(boxElement) {
        if (boxElement !== box) {
            boxElement.classList.remove('expanded');
            boxElement.querySelector('p').textContent = ''; 
            boxElement.style.width = ''; 
            boxElement.style.height = ''; 
        }
    });
}

document.addEventListener('click', function(event) {
    let boxes = document.querySelectorAll('.box');
    boxes.forEach(function(boxElement) {
        boxElement.classList.remove('expanded');
        boxElement.querySelector('p').textContent = ''; 
        boxElement.style.width = '';
        boxElement.style.height = ''; 
    });
});