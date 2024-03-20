function expandBox(element, expandedText) {
    var expandedElements = document.querySelectorAll('.expanded');

expandedElements.forEach(function(expandedElement) {
    if (expandedElement !== element) {
        expandedElement.classList.remove('expanded');
        var pTags = expandedElement.getElementsByTagName('p');
        if (pTags.length > 0) {
            expandedElement.removeChild(pTags[0]);
        }
    }
});

element.classList.toggle('expanded');

if (element.classList.contains('expanded')) {
    const boxImg = document.querySelector('.boxImg')
    element.style.display = 'flex';
    element.style.alignItems = 'center';
    element.style.flexDirection = 'row';
    element.style.justifyContent = 'space-between';
    //boxImg.style.height = '20px'; 
    var pTag = document.createElement('p');
    pTag.textContent = expandedText;
    element.appendChild(pTag);
} else {
    var pTags = element.getElementsByTagName('p');
    if (pTags.length > 0) {
        element.removeChild(pTags[0]);
        boxImg.style.height = '30%'; 
    }
}
}
