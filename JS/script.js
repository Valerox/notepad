$('#btnSave').on('click', insertNote);

function insertNote() {
    let value = $('#editor').val();
    let created = new Date();

    var jqxhr = $.post( "./JS/ajax.php", function() {
        alert( "success" );
      })
        .done(function() {
          alert( "second success" );
        })
        .fail(function() {
          alert( "error" );
        })
        .always(function() {
          alert( "finished" );
        });
}