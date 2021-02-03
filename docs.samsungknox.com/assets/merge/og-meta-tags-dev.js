// This function will be executed automatically when document is loaded
$(document).ready(function(){
	var metaDescription = $('p:eq(1)').text();
	$('head').append( '<meta property="og:description" content="' +  metaDescription + '">' );
	// OG Meta tags
	var metaURL = $(location).attr('href');
	$('head').append( '<meta property="og:url" content="' +  metaURL + '">' );
	var metaImage = $('img:eq(1)').attr('src');
	$('head').append( '<meta property="og:image" content="' +  metaImage + '">' );
	var metaTitle = $('h1:eq(0)').text();
	$('head').append( '<meta property="og:title" content="' +  metaTitle + '">' );
	// Normal Meta description tag
	$('head').append( '<meta name="description" content="' +  metaDescription + '">' );
});