document.getElementById('urlInput').addEventListener('keypress', function (event) {
    if (event.key === 'Enter') {
        navigateToUrl();
    }
});

document.getElementById('goButton').addEventListener('click', navigateToUrl);

function navigateToUrl() {
    const input = document.getElementById('urlInput').value;
    // Check if the URL starts with http:// or https://
    if (!input.startsWith('http://') && !input.startsWith('https://')) {
        alert('Please enter a valid URL starting with http:// or https://');
        return;
    }
    window.location.href = input;
}
