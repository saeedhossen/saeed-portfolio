// Get all project names
const projectNames = document.querySelectorAll('.project-name');

// Loop through each project name
projectNames.forEach(project => {
    project.addEventListener('click', () => {
        // Get the corresponding project details
        const projectDetails = project.nextElementSibling;

        // Toggle the 'active' class to show or hide the project details
        projectDetails.classList.toggle('active');
    });
});
