function AddToCartClick(title){
    $.ajax({
        type: 'POST',
        url: `/book/${title}`,
        data: {
            title: title,
            type: "cart"
        }
    })
    alert(`${title} has been added to your cart!`)
}

function ThumbsUpClick(title)
{
    $.ajax({
        type: 'POST',
        url: `/book/${title}`,
        data: {
            title: title,
            type: "up"
        }
    })
    .done(function(data){
        location.reload(true);
    });
};

function ThumbsDownClick(title)
{
    $.ajax({
        type: 'POST',
        url: `/book/${title}`,
        data: {
            title: title,
            type: "down"
        }
    })
    .done(function(data){
        location.reload(true);
    });
};


$(document).ready(function(){
    $('#leave-review-form').hide();
});


function LeaveReviewClick(title)
{
    $('#leave-review-form').show();
};

function CancelReviewClick()
{
    $('#leave-review-textarea').val('');
    $('#sentiment-radio-1').attr('checked', false);
    $('#sentiment-radio-2').attr('checked', false);
    $('#sentiment-radio-3').attr('checked', false);
    $('#leave-review-form').hide();
};


function SubmitReviewClick(title)
{
    let sentiment = 0;
    let newReview = $('#leave-review-textarea').val();
    let sentimentVal = $('.sentiment-radio:checked').val();
    if(newReview.trim() == ""){
        alert("Review cannot be blank!");
    } else if(!sentimentVal){
        alert("Sentiment cannot be blank!");
    } else {
        if(sentimentVal.toLowerCase() == "thumbs up"){
            sentiment = 1
        }
        if(sentimentVal.toLowerCase() == "thumbs down"){
            sentiment = -1
        }
        if(sentimentVal.toLowerCase() == "indifferent"){
            sentiment = 0
        }
        $.ajax({
            type: 'POST',
            url: `/book/${title}`,
            data: {
                title: title,
                review: newReview.trim(),
                sentiment: sentiment,
                type: "review"
            }
        })
        .done(function(data){
            location.reload(true);
        });

        $('#leave-review-textarea').val('');
        $('#sentiment-radio-1').attr('checked', false);
        $('#sentiment-radio-2').attr('checked', false);
        $('#sentiment-radio-3').attr('checked', false);
        $('#leave-review-form').hide();
    }

};