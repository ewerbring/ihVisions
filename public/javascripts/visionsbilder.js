

$( function() {
   $( ".AnswerBox, #responcebox, .gubbe, .input_fields_wrap" ).draggable();
 } );

 $( function() {
  $( "#commentbox" ).resizable();
} );




$('.bgubbe').click(function() {

   $('.b3').show();
   console.log(clicked);
});
$('.cgubbe').click(function() {

   $('.b2').show();
});

$('.dgubbe').click(function() {

   $('.b1').show();
});
$('.egubbe').click(function() {

   $('.b4').show();
});


$('.egubbe').click(function() {

   $('.abgubbe').show();

});
///textbox

$(document).ready(function() {
	var max_fields      = 10; //maximum input boxes allowed
	var wrapper   		= $("#answerBoxContainer"); //Fields wrapper
	var add_button      = $("#ADDBUTTON"); //Add button ID

	$(add_button).click(function(e){ //on add input button click

		console.log('adding!');
		e.preventDefault();
		$(wrapper).append('<div class="AnswerBox speech-bubble"><textarea class="texfield">Type a comment and drag it around</textarea></div>'); //add input box

		$( function() {
   			$( ".AnswerBox" ).draggable();
		} );
	});

	// $(wrapper).on("click",".remove_field", function(e){ //user click on remove text
	// 	e.preventDefault(); $(this).parent('div').remove(); x--;
	// })
});


/////draggable
