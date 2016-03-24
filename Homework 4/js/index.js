// Create a global variable for the total
// Create a function you can run when you submit the field Hint: .submit() in jQuery
// In your enter function, remember we can use .append() in jQuery to add things to HTML elements

//Declare global variable
var total = 0;
	$('#entry').submit(enter);

	function enter(event) {
    //getting the value of the input with an id of #newEntry
		var entry, money;
			
  				entry = $('#newEntry').val();
  				entry = parseFloat(entry);
  				dollars = dollarsFormat(entry);
  

  $('#entries').append('<tr><td></td><td>' + dollars + '</td></tr>');
  	total = total + entry;
  
  $('#total').html(dollarsFormat(total));
  
  $('#newEntry').val('');
}

function dollarsFormat(number) {
    var dollars = parseFloat(number);
  	dollars = dollars.toFixed(2);
  	dollars = '$' + dollars;
  
 return dollars;

}