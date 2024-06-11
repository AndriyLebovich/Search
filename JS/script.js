document.getElementById('search-button').addEventListener('click', function () {
	const query = document.getElementById('search-input').value.trim();
	const resultsContainer = document.getElementById('search-results');
	resultsContainer.innerHTML = '';

	if (query.trim() === '') {
		resultsContainer.innerHTML = '<p>Please enter a search term.</p>';
		return;
	}

	const url = `search_results.html?query=${encodeURIComponent(query)}`;
	window.location.href = url;
});


