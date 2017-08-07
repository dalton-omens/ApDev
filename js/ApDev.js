if (typeof jQuery === 'undefined') {
  throw new Error('ApDev Javascript requires jQuery')
}

//ANIMATIONS
$(function() {

  var $window           = $(window),
      win_height_padded = $window.height() * 1.1;
      //isTouch           = Modernizr.touch;

  //if (isTouch) { $('.revealOnScroll').addClass('animated');}

  $window.on('scroll', revealOnScroll);

  function revealOnScroll() {
    var scrolled = $window.scrollTop(),
        win_height_padded = $window.height() * 1.1;

    // Showed...
    $(".revealOnScroll:not(.animated)").each(function () {
      var $this     = $(this),
          offsetTop = $this.offset().top;

      if (scrolled + win_height_padded > offsetTop + 300) {
        if ($this.data('timeout')) {
          window.setTimeout(function(){
            $this.addClass('animated ' + $this.data('animation'));
          }, parseInt($this.data('timeout'),10));
        } else {
          $this.addClass('animated ' + $this.data('animation'));
        }
      }
    });
    // Hidden...
   $(".revealOnScroll.animated").each(function (index) {
      var $this     = $(this),
          offsetTop = $this.offset().top;
      if (scrolled + win_height_padded < offsetTop) {
        $(this).removeClass('animated slide-in-left slide-in-right')
      }
    });
  }

  revealOnScroll();
});

//OBFUSCATION
var s = "=b!isfg>#nbjmup;TvqqpsuABqEfwTpmvujpot/dpn@tvckfdu>BqEfwTpmvujpot!Xfc!Jorvjsz!#?Dmjdl!Ifsf!Up!Fnbjm!Vt\"=0b?";
m = "";
  for (i=0; i<s.length; i++) {
    m+=String.fromCharCode(s.charCodeAt(i)-1);
  }
document.getElementById('method1').innerHTML=(m);
