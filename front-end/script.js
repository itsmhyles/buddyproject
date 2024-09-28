// Add JavaScript code for your web site here and call it from index.html.
function highlightLink(link) {
    // Remove 'active' class from all links
    const links = document.querySelectorAll('nav ul li a');
    links.forEach((item) => item.classList.remove('active'));

    // Add 'active' class to the clicked link
    link.classList.add('active');
}
