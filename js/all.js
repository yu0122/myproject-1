$('#HeaderBtnBars').click(function(){
    $('#HeaderBody').fadeIn();
    $('body').css('overflow', 'hidden');
});

$('#HeaderBtnXmark').click(function(){
    $('#HeaderBody').fadeOut();
    $('body').css('overflow', 'visible');
});