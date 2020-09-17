
$('.header .burger').on('click', function(){
    $(this).parents('.header').toggleClass('opened');
    $('body').toggleClass('overflow');
});

$('.custom-input, .custom-select').styler();

$('.custom-input input, .custom-input textarea').on('focusout', function(){
    $(this).val() != '' ? $(this).addClass('filled') : $(this).removeClass('filled')
})

$("input[type=file]").on('change', function () {
    var fileName = this.files[0].name;
    $(this).parent().addClass('loaded');
    $(this).siblings('label').text(fileName);
});
$(".uploader-delete").on('click', function () {
    $(this).siblings('input[type=file]').val('');
    $(this).siblings('.uploader-text').text('прикрепить файл');
    $(this).parent().removeClass('loaded');
})