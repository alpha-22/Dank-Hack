const options = {
	method: 'GET',
	headers: {
		'X-RapidAPI-Key': 'b426bdfaf8mshc7dde49a86ed815p1c4f78jsn79bddfa4e32f',
		'X-RapidAPI-Host': 'exercises-by-api-ninjas.p.rapidapi.com'
	}
};

fetch('https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises?muscle=biceps', options)
	.then(response => response.json())
	.then(response => document.getElementById('content1').innerHTML = response[0].name +   `<br>`+response[0].type+`<br>`+ response[0].muscle +`<br>`+response[0].equipment +`<br>`+ response[0].difficulty+`<br>`+response[0].instructions+`<br><br><br>`+
    response[1].name +   `<br>`+response[1].type+`<br>`+ response[1].muscle +`<br>`+response[1].equipment +`<br>`+ response[1].difficulty+`<br>`+response[1].instructions+`<br><br><br>`
    +
    response[2].name +   `<br>`+response[2].type+`<br>`+ response[2].muscle +`<br>`+response[2].equipment +`<br>`+ response[2].difficulty+`<br>`+response[2].instructions+`<br><br><br>`
    +
    response[3].name +   `<br>`+response[3].type+`<br>`+ response[3].muscle +`<br>`+response[3].equipment +`<br>`+ response[3].difficulty+`<br>`+response[3].instructions+`<br><br><br>`+
    response[4].name +   `<br>`+response[4].type+`<br>`+ response[4].muscle +`<br>`+response[4].equipment +`<br>`+ response[4].difficulty+`<br>`+response[4].instructions+`<br><br><br>`
    )

    
fetch('https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises?muscle=forearms', options)
.then(response => response.json())
.then(response => document.getElementById('content2').innerHTML = response[0].name +   `<br>`+response[0].type+`<br>`+ response[0].muscle +`<br>`+response[0].equipment +`<br>`+ response[0].difficulty+`<br>`+response[0].instructions+`<br><br><br>`+
response[1].name +   `<br>`+response[1].type+`<br>`+ response[1].muscle +`<br>`+response[1].equipment +`<br>`+ response[1].difficulty+`<br>`+response[1].instructions+`<br><br><br>`
+
response[2].name +   `<br>`+response[2].type+`<br>`+ response[2].muscle +`<br>`+response[2].equipment +`<br>`+ response[2].difficulty+`<br>`+response[2].instructions+`<br><br><br>`
+
response[3].name +   `<br>`+response[3].type+`<br>`+ response[3].muscle +`<br>`+response[3].equipment +`<br>`+ response[3].difficulty+`<br>`+response[3].instructions+`<br><br><br>`+
response[4].name +   `<br>`+response[4].type+`<br>`+ response[4].muscle +`<br>`+response[4].equipment +`<br>`+ response[4].difficulty+`<br>`+response[4].instructions+`<br><br><br>`
)

fetch('https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises?muscle=glutes', options)
.then(response => response.json())
.then(response => document.getElementById('content3').innerHTML = response[0].name +   `<br>`+response[0].type+`<br>`+ response[0].muscle +`<br>`+response[0].equipment +`<br>`+ response[0].difficulty+`<br>`+response[0].instructions+`<br><br><br>`+
response[1].name +   `<br>`+response[1].type+`<br>`+ response[1].muscle +`<br>`+response[1].equipment +`<br>`+ response[1].difficulty+`<br>`+response[1].instructions+`<br><br><br>`
+
response[2].name +   `<br>`+response[2].type+`<br>`+ response[2].muscle +`<br>`+response[2].equipment +`<br>`+ response[2].difficulty+`<br>`+response[2].instructions+`<br><br><br>`
+
response[3].name +   `<br>`+response[3].type+`<br>`+ response[3].muscle +`<br>`+response[3].equipment +`<br>`+ response[3].difficulty+`<br>`+response[3].instructions+`<br><br><br>`+
response[4].name +   `<br>`+response[4].type+`<br>`+ response[4].muscle +`<br>`+response[4].equipment +`<br>`+ response[4].difficulty+`<br>`+response[4].instructions+`<br><br><br>`
)

fetch('https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises?muscle=lower_back', options)
.then(response => response.json())
.then(response => document.getElementById('content4').innerHTML = response[0].name +   `<br>`+response[0].type+`<br>`+ response[0].muscle +`<br>`+response[0].equipment +`<br>`+ response[0].difficulty+`<br>`+response[0].instructions+`<br><br><br>`+
response[1].name +   `<br>`+response[1].type+`<br>`+ response[1].muscle +`<br>`+response[1].equipment +`<br>`+ response[1].difficulty+`<br>`+response[1].instructions+`<br><br><br>`
+
response[2].name +   `<br>`+response[2].type+`<br>`+ response[2].muscle +`<br>`+response[2].equipment +`<br>`+ response[2].difficulty+`<br>`+response[2].instructions+`<br><br><br>`
+
response[3].name +   `<br>`+response[3].type+`<br>`+ response[3].muscle +`<br>`+response[3].equipment +`<br>`+ response[3].difficulty+`<br>`+response[3].instructions+`<br><br><br>`+
response[4].name +   `<br>`+response[4].type+`<br>`+ response[4].muscle +`<br>`+response[4].equipment +`<br>`+ response[4].difficulty+`<br>`+response[4].instructions+`<br><br><br>`
)

fetch('https://exercises-by-api-ninjas.p.rapidapi.com/v1/exercises?muscle=chest', options)
.then(response => response.json())
.then(response => document.getElementById('content5').innerHTML = response[0].name +   `<br>`+response[0].type+`<br>`+ response[0].muscle +`<br>`+response[0].equipment +`<br>`+ response[0].difficulty+`<br>`+response[0].instructions+`<br><br><br>`+
response[1].name +   `<br>`+response[1].type+`<br>`+ response[1].muscle +`<br>`+response[1].equipment +`<br>`+ response[1].difficulty+`<br>`+response[1].instructions+`<br><br><br>`
+
response[2].name +   `<br>`+response[2].type+`<br>`+ response[2].muscle +`<br>`+response[2].equipment +`<br>`+ response[2].difficulty+`<br>`+response[2].instructions+`<br><br><br>`
+
response[3].name +   `<br>`+response[3].type+`<br>`+ response[3].muscle +`<br>`+response[3].equipment +`<br>`+ response[3].difficulty+`<br>`+response[3].instructions+`<br><br><br>`+
response[4].name +   `<br>`+response[4].type+`<br>`+ response[4].muscle +`<br>`+response[4].equipment +`<br>`+ response[4].difficulty+`<br>`+response[4].instructions+`<br><br><br>`
)
   
	.catch(err => console.error(err));

    
    

;   