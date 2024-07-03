// From: https://coderwall.com/p/ahazha/force-redraw-on-an-element-jquery
// Nope, still not refreshing
$.fn.redraw = function()
{
	return $(this).each(function()
	{
		var redraw = this.offsetHeight;
	});
};

// From: https://stackoverflow.com/a/6536874
// Nope, no refresh...
function refresh_CSS(element)
{
	var i,
    tags = document.getElementById(element).getElementsByTagName("*"),
    total = tags.length;
	for ( i = 0; i < total; i++ )
	{
		var width = tags[i].style.width;
		tags[i].style.width = '';
		tags[i].style.width = width;
	}
};

function UserProfile_DeleteFavorite(isbn)
{
	$("#favorite_"+isbn).empty();

	// From: https://stackoverflow.com/a/7726912
	// Nope, not refreshing...
		//$("#favorites_table").removeClass("table table-striped");
		//$("#favorites_table").addClass("table table-striped");

	// From: https://stackoverflow.com/a/7726880
	// No refresh...
		//$("tr").css({width: '', height: ''});
		//$("td").css({width: '', height: ''});

	// From: https://stackoverflow.com/a/6536874
	// Still no refresh...
		//$('#favorites_table').find('*').width('');

	//refresh_CSS("favorites_table");
	//$('#favorites_table').redraw();

	// Ugh. Forget it. The table can stay out of alternate-row coloring, potentially, when
	// an element is deleted. WAY too much time loss.

	return 0;
};

function UserProfile_EditReview(isbn)
{
	if ( ($('#textarea_'+isbn).attr('readonly') == "readonly") ||
		 ($('#textarea_'+isbn).attr('disabled') == "disabled") )
	{
		$('#textarea_'+isbn).removeAttr('readonly');
		$('#textarea_'+isbn).removeAttr('disabled');
	} else
	{
		$('#textarea_'+isbn).attr('readonly', true);
		$('#textarea_'+isbn).attr('disabled', true);
	}
	return 0;
};

function UserProfile_SaveReview(isbn)
{
	return 0;
};

function UserProfile_DeleteReview(isbn)
{
	//var result = $.get(<URL>/<end_point>);
	//if (result ... )
		$('#review_'+isbn).empty();

	return 0;
};

function UserProfile_DeleteCartItem(isbn)
{
	var requestConfig = {
		method: 'PATCH',
		url: '/cart/' + String(isbn),
		contentType: 'application/json',
		data: JSON.stringify({})
	};

	$.ajax(requestConfig).then(function (responseMessage) {
		console.log(responseMessage);
		$('#shopcart_'+String(isbn)).empty();
	});
  

	return 0;
};