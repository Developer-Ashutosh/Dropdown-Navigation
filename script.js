const dropSections = document.querySelectorAll(".drop-section");

const toggleDropdown = () => {
    dropSections.forEach(section => {
        const arrowIcon = section.querySelector("img");
        const content = section.querySelector(".drop-content");

        section.addEventListener("mouseenter", () => {
            arrowIcon.src = "./images/icon-arrow-up.svg";
            content.style.display = "flex";
        });

        section.addEventListener("mouseleave", () => {
            arrowIcon.src = "./images/icon-arrow-down.svg";
            content.style.display = "none";
        });
    });
};

toggleDropdown();