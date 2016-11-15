var books =
	{title:'The Hunger Games',
	 author:'Suzanne Collins',
	 description:'Katniss Everdeen lives in a place called Panem. Panem lies on what used to be North America. Panem is split up into 12 districts. Each year, every district is forced to randomly choose two tributes--one girl and one boy--to fight in the annual Hunger Games.',
	 time:25,
	 pages:374,
	 imgSrc:'img/hungerGames.jpg'
	};


//functions
// var submitForm = function() {
// 	if(){

// 	}
// };


var source = $('#book-template').html();
var template = Handlebars.compile(source);
var newHtml = template(books);
// $('#info-book').append(newHtml);


//event handlers
$(document).ready(function() {

	$('#search-book').on('click', function(){

		var title = $('#book-title').val();
		var author = $('#book-author').val();
		var description = $('#book-description').val();
		var imgSrc = $('#book-url').val();
		var pages = $('#book-no-pages').val();
		var time = $('#book-read-time').val();

		$('#info-book').append(newHtml);
	});

});
