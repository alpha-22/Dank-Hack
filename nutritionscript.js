const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'b426bdfaf8mshc7dde49a86ed815p1c4f78jsn79bddfa4e32f',
		'X-RapidAPI-Host': 'edamam-recipe-search.p.rapidapi.com'
	}
};

fetch('https://edamam-recipe-search.p.rapidapi.com/search?q=chicken', options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));