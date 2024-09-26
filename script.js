document.getElementById('urlInput').addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        navigateToUrl();
    }
});

document.getElementById('goButton').addEventListener('click', navigateToUrl);

function navigateToUrl() {
    let input = document.getElementById('urlInput').value.trim();
    
    // Automatically add http:// if no protocol is present
    if (!input.startsWith('http://') && !input.startsWith('https://')) {
        input = 'http://' + input; // Default to http
    }

    // Validate URL format (basic check)
    try {
        new URL(input);
        window.location.href = input;
    } catch (_) {
        alert('Please enter a valid URL.');
    }
}
