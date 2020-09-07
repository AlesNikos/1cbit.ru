$(document).ready(function () {
    $(".highlight").each(function () {
        var el = document.createElement("div");
        el.innerText = el.textContent = $(this).html();
        $(this).html(el.innerHTML);
        $(this).addClass('active');
    });
});