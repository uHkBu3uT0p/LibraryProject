$(document).ready(function () {
  $(".header_burger").click(function (event) {
    $(".header_burger,.nav").toggleClass("active");
    $("body").toggleClass("lock");
  });
});
// $('.header__list').click(function(event) {
//   $('.header__burger,.header__menu').removeClass('active');
//   $('body').removeClass('lock');}
