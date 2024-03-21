function toggleShowMoreLess() {
    var button = document.getElementById("show");
    if (button.textContent === "მეტი") {
        button.textContent = "ნაკლები";
        document.getElementById("boxes").scrollIntoView({ behavior: 'smooth' });
    } else {
        button.textContent = "მეტი";
        window.scrollTo({ top: 0, behavior: 'smooth' });
    }
}

window.addEventListener('scroll', function() {
    var button = document.getElementById("show");
    var boxes = document.getElementById("boxes");
    var windowHeight = window.innerHeight;
    var boxesTop = boxes.getBoundingClientRect().top;
    var boxesBottom = boxes.getBoundingClientRect().bottom;

    if (boxesTop <= windowHeight && boxesBottom > windowHeight) {
        button.textContent = "მეტი";
    } else {
        button.textContent = "ნაკლები";
    }
});