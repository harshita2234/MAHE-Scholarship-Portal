document.addEventListener('DOMContentLoaded', function() {
    const footerURL = 'footer.html';
    const footerPlaceholder = document.getElementById('footer-placeholder');
    if (footerPlaceholder) {
        fetch(footerURL)
            .then(response => response.text())
            .then(html => footerPlaceholder.innerHTML = html)
            .catch(error => console.error('Failed to load footer:', error));
    }
});
