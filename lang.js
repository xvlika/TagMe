function toggleLanguage() {
    var currentUrl = window.location.href;
    if (currentUrl.includes('index-georgian.html')) {
        window.location.href = currentUrl.replace('index-georgian.html', 'index.html');
        document.getElementById('languageToggle').innerHTML = '<p>English</p>';
    } else {
        window.location.href = currentUrl.replace('index.html', 'index-georgian.html');
        document.getElementById('languageToggle').innerHTML = '<p>Georgian</p>';
    }
}
