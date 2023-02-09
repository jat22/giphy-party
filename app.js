// console.log("Let's get this party started!");


async function getGif (q){
	const res = await axios.get('http://api.giphy.com/v1/gifs/search', { params:
	{ api_key: 'r8mZlYrWJarkeAvnYusshn8LEsTfaDP4' , q} 
	} );
	// addGif(res.data.data[Math.floor(Math.random()* 51)].images.original.url);
	console.log(res)
}

function addGif(url){
	const newGif = document.createElement('img');
	newGif.setAttribute('src', url);
	const gifContainer = document.getElementById('gif-container');
	gifContainer.append(newGif)
}

function removeGifs(){
	$('#gif-container').empty()
}

$('#btn-search').on('click', function(event){
	event.preventDefault()
	const srchTerm = $('#srch-term').val();
	getGif(srchTerm)
	$('#srch-term').val('');
})

$('#btn-remove').on('click', removeGifs())


