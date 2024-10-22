let idx;

fetch('search-data.json')
    .then(response => response.json())
    .then(data => {
        idx = lunr(function () {
            this.ref('id');
            this.field('title');
            this.field('content');

            data.forEach(doc => {
                this.add(doc);
            });
        });

        const searchInput = document.getElementById('searchInput');
        const searchResults = document.getElementById('searchResults');

        searchInput.addEventListener('input', function () {
            const results = idx.search(this.value);
            searchResults.innerHTML = '';

            results.forEach(result => {
                const matchedDoc = data.find(doc => doc.id == result.ref);
                const resultItem = document.createElement('div');
                resultItem.innerHTML = `<a href="${matchedDoc.url}">${matchedDoc.title}</a>`;
                searchResults.appendChild(resultItem);
            });
        });
    });
