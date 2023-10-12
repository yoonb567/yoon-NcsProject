    //gnb 
    $('.toggle').click(function(){
      $('#gnb').animate({right:'0'});  
      $('.gnb_bg').animate({left:'0', opacity:'1'});
    });

    $('.x').click(function(){
      $('#gnb').animate({right:'-70vw'});
      $('.gnb_bg').animate({left:'-30vw', opacity:'0'});      
    });

    //accordion
    $('.entry').next().slideUp();

    $('#gnb ul>li>.entry').click(function(){
      $('.entry').not(this).next().slideUp()
      $(this).next().slideToggle()
          
      $('.entry').not(this).removeClass('on')
      $(this).toggleClass('on');
      // console.log($(this).attr('class'))
    });
  
    //gallery
    $('.slick_bg').slick({
      arrows: false,
      fade: true,
    })
    $('.slick_list').slick({
      arrows: false,
      centerMode: true,
      asNavFor: '.slick_bg',
      // dots: true,
    })