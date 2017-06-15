// Reading Data

$(function() {
    $('#result').html(
        JSON.stringify(snap.val())
        );
    // Put your firebaseRef.on call here!
    firebaseRef.on("value", function(snap){
        });
});
