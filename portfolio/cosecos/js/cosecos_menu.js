function mob_nav2(){
    var $totalMenu = $('.nav_2'),
        $menuHeight = '56rem',
        mBox = $(".miniMBox");
    console.log( $('.nav_2') );
    mBox.hide();
    $totalMenu.children('i').on('click', function(){
       $(".miniMBox").slideToggle(); 
    });

//    $totalMenu.css({'width':'20rem', 'height':$menuHeight, 'float':'left', 
//                             'background-color':'#e94466'})
//         .children('i').css({'color': '#555', 'font-weight':'bold','display':'block','text-align':'center','line-height':'3rem'});
//    
};//jquery end
// rgba($sub3,0.5);


function rwd(){
    var winW = $(window).width();
    var ww = parseInt(winW);
    var hand = 977; //tablet
    if(ww < 977){mob_nav2();}
};

var winW1 = parseInt($(window).width());
$(window).on('resize', function(){
    if(winW1 != $(window).width()){
    location.reload(); 
    }
    rwd();
    // 세로값이 변경시에는 새로고침을 하지 않음
      
    
});