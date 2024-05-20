document.addEventListener('DOMContentLoaded', function() {
    const contentDiv = document.getElementById('content');

    // Fetch manga list from MangaDex API
    fetch('https://api.mangadex.org/manga')
        .then(response => response.json())
        .then(data => {
            const mangaList = data.data;
            mangaList.forEach(manga => {
                const mangaDiv = document.createElement('div');
                mangaDiv.textContent = manga.attributes.title.en;
                contentDiv.appendChild(mangaDiv);
            });
        })
        .catch(error => {
            console.error('Error fetching manga:', error);
            contentDiv.textContent = 'Failed to load manga.';
        });
});
