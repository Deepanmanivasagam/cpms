$(document).ready(()=>{
    $('.test1').hide();
    $('.battingtest').mouseenter(()=>{
      $('.test1').fadeIn(300)
    });
    $('.battingtest').mouseleave(()=>{
      $('.test1').fadeOut(300)
    });
    $('.dropdown-submenu').hide();
    $('.ranking').click(()=>{
        $('.dropdown-submenu').toggle(300)
      });
    //   odi
      $('.odi1').hide();
    $('.battingodi').mouseenter(()=>{
      $('.odi1').fadeIn(300)
    });
    $('.battingodi').mouseleave(()=>{
      $('.odi1').fadeOut(300)
    });

    // t20
    $('.t201').hide();
    $('.battingt20').mouseenter(()=>{
      $('.t201').fadeIn(300)
    });
    $('.battingt20').mouseleave(()=>{
      $('.t201').fadeOut(300)
    });
  });
