$('h1').addClass('big-title margin-50');
console.log($('h1').hasClass('margin-50'));

$('button').text("Don't click me");
$('button').click(function () {
  $('h1')
    .css('color', 'purple')
    .slideUp()
    .slideDown()
    .animate({ opacity: 0.5 });
});

$('a').attr('href', 'https://www.bing.com');

$(document).keypress(function (e) {
  $('h1').text(e.key);
});

$('h1').on('mouseover', function () {
  $('h1').css('color', 'purple');
});

$('h1').on('mouseleave', function () {
  $('h1').css('color', 'red');
});
