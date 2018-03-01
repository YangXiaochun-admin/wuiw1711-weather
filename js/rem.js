window.onload=function(){
    resize(1080,"x");
}
function resize(originSize,type){
    // originSize = 750;
    // type = x
    type = type || "x";
    if(type=="x"){
        var width = document.documentElement.clientWidth;//设备的宽度
        var scale = width/originSize*100+"px";
        document.getElementsByTagName("html")[0].style.fontSize=scale;
    }else if(type=="y"){
        var height = document.documentElement.clientHeight;
        var scale = height/originSize+"px";
        document.getElementsByTagName("html")[0].style.fontSize=scale;
    }
}
resize(1080,"x");

window.onresize = function(){
   resize(1080,"x"); 
}



// 750       100px     1rem(html fontSize 100px)  1rem = 100px   1rem

// 375       50px                                 1rem = 50px

// 750     100       750        100
//     =                   =  
// 375     ?         414         ?
  