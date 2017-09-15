$( document ).ready( function() {
  
  get_watched_repos();
  
function get_watched_repos() 
{
   
  $( '#github' ).html( "" );
  var html = "<h2></h2>";
  
  $.ajax( {
    	url : "https://api.github.com/users/ghostzer/repos",
    	dataType : "jsonp",
    	success : function ( returndata ) {
      	$.each( returndata.data, function ( i, item ) {
        	html += '<div>' +
          	'<div>' + this.name + '</div>' +
          	'</div>';
      	} );
      $( '#github' ).append( html );
     } // close success handler
     });
  
}

}); //close document ready
  

            // html += '<li>' +
            // '<h3><a href="' + this.html_url + '">' + this.name + '</a></h3>' +
            // '<ul>' +
            // '<li>' + 'Description: ' + this.description + '</li>' +
            // '<li>' + 'Language: ' + this.language + '</li>' +
            // '<li>' + 'Updated: ' + this.updated_at + '</li>' +
            // '<li>' + 'Owner: ' + this.owner.login + '</li>' +
            // '</ul>' +
            // '</li>';