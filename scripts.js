// Get all project names
const projectNames = document.querySelectorAll('.project-name');

// Loop through each project name
projectNames.forEach(project => {
    project.addEventListener('click', () => {
        // Get the corresponding project details
        const projectDetails = project.nextElementSibling;

        // Toggle the display of the project details
        if (projectDetails.style.display === 'none' || projectDetails.style.display === '') {
            projectDetails.style.display = 'block';
        } else {
            projectDetails.style.display = 'none';
        }
    });
});
