window.onresize=function(){
    var html=document.documentElement;
    var clientWidth=html.clientWidth;
    // console.log("ddd")
    html.style.fontSize=20*(clientWidth/375)+"px";
}