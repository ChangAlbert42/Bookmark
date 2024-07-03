function AdminProfile_EditBook(isbn)
{
    $('#tdarea_'+isbn).attr("contenteditable", true).focus();
    $('#tdarea_'+isbn).keypress(function(e) {
        // prevents user from entering characters other than 0-9
        if (isNaN(String.fromCharCode(e.which))) e.preventDefault();

        // disable space bar when editing
        if (e.keyCode ===  32) { 
            e.preventDefault();
        }
    });

    // disable cut, copy, paste commands when user editing
    $('body').bind('cut copy paste', function(event) {
        event.preventDefault();
    });
};

function AdminProfile_SaveBook(isbn)
{

    let newInventory = $('#tdarea_'+isbn).text().trim();

    if(newInventory == ""){
        // default to 0 if entry is blank
        $('#tdarea_'+isbn).text('0');
    } else if (newInventory.length > 1 && newInventory[0] == "0"){
        // get rid of any trailing zeros
        newInventory = parseInt(newInventory);
        $('#tdarea_'+isbn).text(newInventory);
    } else {
        $('#tdarea_'+isbn).text(newInventory);
    }

    if(newInventory > 999999){
        alert("Inventory cannot be more than 999999.");
    } else {
        $('#tdarea_'+isbn).attr("contenteditable", false);
        alert("Processing update request.");
        $.ajax({
            type: 'POST',
            url: '/user',
            data: {
                isbn: isbn,
                inventory: newInventory,
                type: "update"
            }
        });
    }
};

function AdminProfile_DeleteBook(isbn)
{
    $("#favorite_"+isbn).remove();
    alert("Processing delete request.");
    $.ajax({
        type: 'POST',
        url: '/user',
        data: {
            isbn: isbn,
            type: "delete"
        }
    });
};

function AdminProfile_AddBook()
{
    let alertMsg = "";
    let missingField = false;
    let badData = false;

    let newTitle = $('#add-book-title-input').val();
    let newAuthor = $('#add-book-author-input').val();
    let newPrice = $('#add-book-price-input').val();
    let newISBN = $('#add-book-isbn-input').val();
    let newImg = $('#add-book-img-input').val();
    let newInventory = $('#add-book-inventory-input').val();
    let newPageCount = $('#add-book-page-count-input').val();
    let newSummary = $('#add-book-summary-input').val();
    let newGenres = $('#pick-genres').val();

    if(newTitle.trim() == ""){
        alertMsg = alertMsg.concat("Title cannot be blank.\n");
        missingField = true;
    }

    if(newAuthor.trim() == ""){
        alertMsg = alertMsg.concat("Author cannot be blank.\n");
        missingField = true;
    }

    if(newPrice.trim() == ""){
        alertMsg = alertMsg.concat("Price cannot be blank.\n");
        missingField = true;
    }

    if(newISBN.trim() == ""){
        alertMsg = alertMsg.concat("ISBN cannot be blank.\n");
        missingField = true;
    }

    if(newImg.trim() == ""){
        alertMsg = alertMsg.concat("Book Cover Link cannot be blank.\n");
        missingField = true;
    }

    if(newInventory.trim() == ""){
        alertMsg = alertMsg.concat("Inventory cannot be blank.\n");
        missingField = true;
    }

    if(newPageCount.trim() == ""){
        alertMsg = alertMsg.concat("Page Count cannot be blank.\n");
        missingField = true;
    }

    if(newSummary.trim() == ""){
        alertMsg = alertMsg.concat("Summary cannot be blank.\n");
        missingField = true;
    }

    if(!(newImg.includes('http'))){
        alertMsg = alertMsg.concat("Invalid book cover link.\n")
        badData = true;        
    }

    if(!(newImg.includes('.com'))){
        alertMsg = alertMsg.concat("Invalid book cover link.\n")
        badData = true;        
    }

    if(parseInt(newInventory) < 0 || parseInt(newInventory) > 999999){
        alertMsg = alertMsg.concat("Inventory must be between 0 and 999999.\n");
        badData = true;
    }

    if(parseInt(newPrice) < 1 || parseInt(newPrice) > 999999){
        alertMsg = alertMsg.concat("Price must be between 1 and 999999.\n");
        badData = true;
    }

    if(parseInt(newPageCount) < 1 || parseInt(newPageCount) > 999999){
        alertMsg = alertMsg.concat("Page Count must be between 1 and 999999.\n");
        badData = true;
    }

    if(!newGenres){
        alertMsg = alertMsg.concat("You must select at least 1 genre.\n");
        badData = true;
    }

    if(missingField || badData){
        alert(alertMsg);
    } else {
        alert(`Processing ${newTitle} now!`);
        $.ajax({
            type: 'POST',
            url: '/user',
            data: {
                title: newTitle,
                author: newAuthor,
                price: newPrice,
                isbn: newISBN,
                img: newImg,
                inventory: newInventory,
                pageCount: newPageCount,
                summary: newSummary,
                genres: newGenres,
                type: "add"
            }
        });

        $('#add-book-title-input').val('');
        $('#add-book-author-input').val('');
        $('#add-book-price-input').val('');
        $('#add-book-isbn-input').val('');
        $('#add-book-img-input').val('');
        $('#add-book-inventory-input').val('');
        $('#add-book-page-count-input').val('');
        $('#add-book-summary-input').val('');
        $('#pick-genres').val('');
    }
};
