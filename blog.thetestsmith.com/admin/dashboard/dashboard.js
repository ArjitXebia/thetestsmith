document.addEventListener('DOMContentLoaded', function() {
    const statusFilter = document.getElementById('statusFilter');
    const articlesGrid = document.getElementById('articlesGrid');

    function fetchAndDisplayArticles(status = '') {
        let url = 'http://localhost:5000/api/blogposts';
        if (status && status !== 'all') {
            url += `?status=${status}`;
        }

        fetch(url)
            .then(response => response.json())
            .then(data => {
                articlesGrid.innerHTML = '';
                data.forEach(article => {
                    const articleDiv = document.createElement('div');
                    articleDiv.className = 'article';
                    articleDiv.innerHTML = `
                        <h3>${article.title}</h3>
                        <p>Status: ${article.status}</p>
                        <!-- Add other fields as needed -->
                    `;
                    articlesGrid.appendChild(articleDiv);
                });
            })
            .catch(error => console.error('Error:', error));
    }

    fetchAndDisplayArticles();

    statusFilter.addEventListener('change', () => {
        fetchAndDisplayArticles(statusFilter.value);
    });
});
