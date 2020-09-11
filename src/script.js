
$('.header .burger').on('click', function(){
    $(this).parents('.header').toggleClass('opened');
    $('body').toggleClass('overflow');
});

$('.custom-input, .custom-select').styler();

$('.custom-input input').on('focusout', function(){
    $(this).val() != '' ? $(this).addClass('filled') : $(this).removeClass('filled')
})
