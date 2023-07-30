// Add an event listener to each project div
const projects = document.querySelectorAll('.project');
projects.forEach(project => {
    project.addEventListener('click', () => {
        project.classList.toggle('active');
        const details = project.querySelectorAll('.project-details');
        details.forEach(detail => {
            detail.style.display = project.classList.contains('active') ? 'block' : 'none';
        });
    });
});
