// Wait for the DOM to fully load
document.addEventListener('DOMContentLoaded', () => {
    // Select all project names
    const projectNames = document.querySelectorAll('.project-name');

    // Add click event listeners to toggle details
    projectNames.forEach(project => {
        project.addEventListener('click', () => {
            // Get the next sibling (details section)
            const projectDetails = project.nextElementSibling;

            // Toggle the 'show' class
            projectDetails.classList.toggle('show');
        });
    });
});
