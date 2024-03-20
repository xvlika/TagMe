function toggleShowMoreLess() {
        var button = document.getElementById("show");
        if (button.textContent === "Show More") {
            button.textContent = "Show Less";
            document.getElementById("boxes").scrollIntoView({ behavior: 'smooth' });
        } else {
            button.textContent = "Show More";
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
            button.textContent = "Show More";
        } else {
            button.textContent = "Show Less";
        }
    });