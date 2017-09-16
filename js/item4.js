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

$('j_toggle_btn').on('click',function(){
    
})