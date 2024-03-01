document.addEventListener("DOMContentLoaded", function() {
    const toggleButton = document.getElementById("toggleTable");
    const table = document.getElementById("table");
    const productDescription = document.getElementById("productDescription");

    toggleButton.addEventListener("click", function() {
        if (table.style.display === "none" || table.style.display === "") {
            table.style.display = "block";
            toggleButton.textContent = "Show Less";
        } else {
            table.style.display = "none";
            toggleButton.textContent = "Show More";
        }
    });
});
