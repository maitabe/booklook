

//functions
var fetch = function(isbn) {
	$.ajax({
	  method: "GET",
	  url: 'https://www.googleapis.com/books/v1/volumes?q=' + isbn,
	  dataType: "json",
	  success: function(data) {
	  	console.log(data);
	  	displayData(data);
	  },
	  error: function(jqXHR, textStatus, errorThrown) {
	    console.log(textStatus);
	  }
	});
};

var displayData = function(data) {

	if(data.totalItems){

		var newBook = {
			title: data.items[0].volumeInfo.title,
			description: data.items[0].volumeInfo.description,
			author: data.items[0].volumeInfo.authors,
			img: data.items[0].volumeInfo.imageLinks.smallThumbnail,
			pages: data.items[0].volumeInfo.pageCount
		};


		var source = $('#book-template').html();
		var template = Handlebars.compile(source);
		var newHtml = template(newBook);
		$('#info-book').append(newHtml);

	}else{
		$('#error-message').append('book not found');
		$('input#book-isbn').addClass('warning');
	}


};



//event handlers
$(document).ready(function() {

	$('#search-book').on('click', function(){

		var isbn = $('#book-isbn').val();

		fetch(isbn);

		$('#book-isbn').val('');
	});

});
