$(function(){
  //
  // Button back to the Top
  //
  const topBtn = $('#pageTop');
  topBtn.hide();
  $(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
      topBtn.fadeIn();
    } else {
      topBtn.fadeOut();
    }
  });
  topBtn.click(function () {
    topBtn.fadeOut();
    $('html, body').animate({
      scrollTop: 0
    }, 300);
    return false;
  });
});

// header 最初から固定表示、特定位置までスクロールでサイズ・色を変える
var _window = $(window),
    _header = $('.glHeader'),
    heroBottom;

_window.on('scroll',function(){
    heroBottom = $('.hero').height();
    if(_window.scrollTop() > heroBottom){
        _header.addClass('transform');
    }
    else{
        _header.removeClass('transform');
    }
});

_window.trigger('scroll');




