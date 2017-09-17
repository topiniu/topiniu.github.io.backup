/**
 * Created by topiniu on 2017/3/11.
 */
function toggleContactBtn(flag){
    if(flag==1)
        $(".item4 .contactBtn").css({
            "bottom":"0"
        });
    else
        $(".item4 .contactBtn").css({
            "bottom":"-80px"
        });
}

function bindToggle(){
$('j_toggle_btn').on('click',function(){
    console.log('bind');
    
})
}

// init hidden style
function initProductsStyle(){
    var windowWidth = window.innerWidth;
    $('.products').each(function(i,e) {
        
        if(i!==0){
            var v = i*windowWidth + 300;
            console.log(v);
            $(e).css('left',v);
        }
       

    });
}