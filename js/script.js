$(document).ready(function(event) {
    $('.hi__burger').click(function(event) {
        $('.hi__burger,.menu__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
});
$(document).ready(function(event) {
    $('.menu__element._el').click(function(event) {
        $('.menu__list').toggleClass('active');
    });
});