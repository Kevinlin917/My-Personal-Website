// This is a JavaScript function that toggles the visibility of the projects dropdown menu
function toggleProjects() {
    const projects = document.getElementById("projects");
    projects.style.display = (projects.style.display === "block") ? "none" : "block";
    const dropdown = document.querySelector(".dropdown");
    dropdown.classList.toggle("open");
}

