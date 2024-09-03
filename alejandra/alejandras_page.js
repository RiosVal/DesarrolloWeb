document.getElementById('theme-toggle').addEventListener('click', function() {
    document.body.classList.toggle('dark-theme');
    
    const themeIcon = document.getElementById('theme-icon');
    if (document.body.classList.contains('dark-theme')) {
        themeIcon.src = 'assets/moon.png';
        themeIcon.alt = 'Dark Theme';
    } else {
        themeIcon.src = 'assets/sun.png';
        themeIcon.alt = 'Light Theme';
    }
});
