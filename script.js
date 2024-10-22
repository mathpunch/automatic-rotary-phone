document.getElementById('goButton').addEventListener('click', function() {
    const urlInput = document.getElementById('urlInput').value.trim();
    if (urlInput) {
        const fullUrl = urlInput.startsWith('http://') || urlInput.startsWith('https://') ? urlInput : 'http://' + urlInput;

        // Load the URL in the iframe
        const contentFrame = document.getElementById('contentFrame');
        contentFrame.src = fullUrl;
        contentFrame.style.display = 'block'; // Show the iframe
    } else {
        alert("Please enter a valid URL.");
    }
});
