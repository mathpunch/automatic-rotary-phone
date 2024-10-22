document.getElementById('search-button').addEventListener('click', function() {
    const query = document.getElementById('search-input').value;
    const resultsDiv = document.getElementById('results');
    resultsDiv.innerHTML = '';

    fetch(`https://api.github.com/search/repositories?q=${query}+user:USERNAME+language:HTML&sort=stars&order=desc`)
        .then(response => response.json())
        .then(data => {
            data.items.forEach(item => {
                const link = document.createElement('a');
                link.href = `https://${item.full_name}.github.io`;
                link.textContent = item.full_name;
                link.target = '_blank'; // Open in new tab
                resultsDiv.appendChild(link);
                resultsDiv.appendChild(document.createElement('br'));
            });
        })
        .catch(error => {
            console.error('Error fetching data:', error);
        });
});
