document.getElementById('goButton').addEventListener('click', function() {
    const urlInput = document.getElementById('urlInput').value.trim();
    if (urlInput) {
        // Automatically add 'http://' if the URL doesn't start with 'http://' or 'https://'
        const fullUrl = urlInput.startsWith('http://') || urlInput.startsWith('https://') ? urlInput : 'http://' + urlInput;

        // Open the URL in a new tab
        window.open(fullUrl, '_blank');
    } else {
        alert("Please enter a valid URL.");
    }
});
