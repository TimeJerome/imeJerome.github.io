$(document).ready(function(event) {
    $('.hi__burger').click(function(event) {
        $('.hi__burger,.menu__menu').toggleClass('active');
        $('body').toggleClass('lock');
    });
});