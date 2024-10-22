document.getElementById('goButton').addEventListener('click', function() {
    const urlInput = document.getElementById('urlInput').value.trim();
    if (urlInput) {
        // Automatically add 'http://' if the URL doesn't start with 'http://' or 'https://'
        const fullUrl = urlInput.startsWith('http://') || urlInput.startsWith('https://') ? urlInput : 'http://' + urlInput;

        // Redirect to the entered URL
        window.location.href = fullUrl; 
    } else {
        alert("Please enter a valid URL.");
    }
});
