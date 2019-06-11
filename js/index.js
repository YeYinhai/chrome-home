(function () {
    var baidu = $("#s_ipt_wr_baidu");
    var google = $("#s_ipt_wr_google");
    var focus_ovr = $("#focus_ovr");
    var isFocus = false;
    baidu.find("input").focus(function () {
        focus_ovr.fadeIn(300);
        isFocus = true;
    });
    baidu.find("input").blur(function () {
        isFocus = false;
    });

    google.find("input").focus(function () {
        focus_ovr.fadeIn(300);
        isFocus = true;
    });
    google.find("input").blur(function () {
        isFocus = false;
    });

    baidu.find("input").focus();

    setInterval(() => {
        if (isFocus == false) {
            focus_ovr.fadeOut(300);
        }
    }, 100)

    document.onkeydown = function () {
        if (event.keyCode == 9) {  //如果是其它键，换上相应在ascii 码即可。
            input.getAttribute('tabindex')[1].focus();
            return false; //非常重要
        }
    }

})($)