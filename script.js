document.getElementById('goButton').addEventListener('click', function() {
    const urlInput = document.getElementById('urlInput').value.trim();
    if (urlInput) {
        // Automatically add 'http://' if the URL doesn't start with 'http://' or 'https://'
        const fullUrl = urlInput.startsWith('http://') || urlInput.startsWith('https://') ? urlInput : 'http://' + urlInput;

        // Set the iframe source to the entered URL
        const contentFrame = document.getElementById('contentFrame');
        contentFrame.src = fullUrl;
        contentFrame.style.display = 'block'; // Show the iframe
    } else {
        alert("Please enter a valid URL.");
    }
});
