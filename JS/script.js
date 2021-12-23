$('#btnSave').on('click', insertNote);

function insertNote() {
    let value = $('#editor').val();
    let created = new Date();

    $.ajax({
      method: 'POST',
      url:    './JS/ajax.php',
      data: { 'value': value, 'created': created.getTime()},
     }).done(function( data ) {
        console.log('done');
      });
}