$(function(){

    // top_btn
    var topBtn = $('#topBtn');
    topBtn.hide();
      
    $(window).on('scroll', function(){
        
    var sc = $(this).scrollTop();
            
    if(sc <= 200){
        topBtn.fadeOut(200);        
    }else{
        topBtn.fadeIn(200);
    }    
    });    
    
    topBtn.on('click', function(){
        // $(window).scrollTop(0);
        $('html, body').animate({'scrollTop':0},500);
    }); // top_btn
    
    
    $('wrap').on('click', function(){
    $('html,body').animate({'scrollTop':0}, 1000);
    
    });
    
}); //jQrery