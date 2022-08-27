window.addEventListener('load', function () {


    var login = document.querySelector('.loginTar');
    var mask = document.querySelector('.login-bg');
    var link = document.querySelector('#link');
    var closeBtn = document.querySelector('#closeBtn');
    link.addEventListener('click', function (e) {
        mask.style.display = 'block';
        login.style.display = 'block';
    });
    closeBtn.addEventListener('click', function (ee) {
        mask.style.display = 'none';
        login.style.display = 'none';
    });//鼠标在盒子中的距离不变
    var title = document.querySelector('#title');
    title.addEventListener('mousedown', function (eee) {
        var mouseInPositionX = eee.pageX - login.offsetLeft;
        var mouseInPositionY = eee.pageY - login.offsetTop;
        //在整个文档中鼠标的位置
        document.addEventListener('mousemove', MOVE, false);
        function MOVE(e4) {
            login.style.left = e4.pageX - mouseInPositionX + 'px';
            login.style.top = e4.pageY - mouseInPositionY + 'px';
        }

        //松开停止
        document.addEventListener('mouseup', function (e5) {
            document.removeEventListener('mousemove', MOVE);
        })
    });





    var majorContentDown = document.querySelector(".majorContentDown");
    var major = document.querySelector("#major");
    function clickLi(obj, whosValue) {
        obj.addEventListener('click', function (e) {
            // var objLi = document.querySelectorAll("li");
            if (e.target === obj) {
                whosValue.value = "请勿拖动";
            }
            else {
                whosValue.value = e.target.innerHTML;
                whosValue.style.color = "black";
            }
        }, false);
    };
    clickLi(majorContentDown, major);
    var searchContentDown = document.querySelector(".searchContentDown");
    var search = document.querySelector(".search");
    clickLi(searchContentDown, search);



    // $(".slideShow").on("mouseenter", function () {
    //     $(".rightBtn").css("display", "block");
    //     $(".leftBtn").css("display", "block");
    // });
    // $(".slideShow").on("mouseleave", function () {
    //     $(".rightBtn").css("display", "none");
    //     $(".leftBtn").css("display", "none");
    // });
    $(".slideShow").hover(function () {
        $(".rightBtn").css("display", "block");
        $(".leftBtn").css("display", "block");
        clearInterval(leaveTimer);
        leaveTimer = null;
    }, function () {
        $(".rightBtn").css("display", "none");
        $(".leftBtn").css("display", "none");
        leaveTimer = setInterval(function () {
            $(".rightBtn").click();
        }, 3000);
    });

    function createLi(obj, LisNumber) {
        loop1:
        for (var i = 0; i < LisNumber; i++) {
            var li = $("<li data-index=" + i + "></li>");
            obj.append(li);
        }
    };
    createLi(jQuery(".circle"), $(".slideShow-Content>li").length);

    // WW切换动画效果有bug，实力与时间有限，舍弃移动ul做轮播图，同时不再克隆图一,改用jQuery的淡入淡出
    //Wdh(后会有期,2022.8.24) $(".slideShow-Content:last").append($(".slideShow-Content>li:first").clone());

    // console.log($('.slideShow-Content').position().left);
    var index = 0;
    clearInterval(leaveTimer);
    var leaveTimer = setInterval(function () {
        // $(".slideShow-Content>li").eq(index).stop().fadeIn('slow', "swing").siblings().stop().fadeOut("normal", "swing");
        $(".rightBtn").click();
    }, 3000);
    $(".circle>li").on("click", function () {
        $(this).addClass("circleLisChange").siblings().removeClass("circleLisChange");
        index = parseInt($(this).attr("data-index"));
        $(".slideShow-Content>li").eq(index).stop().fadeIn('slow', "swing").siblings().stop().fadeOut("slow", "swing");
        // console.log($(this).attr("data-index"));
    });
    // var clickBeginTime = 0;
    // var timeDistance = true;
    $(".rightBtn").on("click", function () {
        if (index == $(".circle>li").length) {
            //WW $(".slideShow-Content").css("left", 0);
            index = 0;
        } else {
            $(".slideShow-Content>li").eq(index).stop().fadeIn('slow', "swing").siblings().stop().fadeOut("slow", "swing");
            $(".circle>li").eq(index).addClass("circleLisChange").siblings().removeClass("circleLisChange");
            index++;
        }
        // console.log($(".circle>li").length);
        // if (timeDistance) {
        //     clickBeginTime = Date.now();
        // } else {
        //     clickBeginTime = Date.now() - clickBeginTime;

        //     clickBeginTime = null;
        // }
        // if (clickBeginTime >= 100 && clickBeginTime <= 500) {
        //     alert("点击过快！");
        //     timeDistance = true;
        // } else {
        //     timeDistance = false;
        // }


        //WW $(".slideShow-Content").css("left", -index * jQuery(".slideShow").width())
        // console.log(-index * jQuery(".slideShow").width());
    });

    $(".leftBtn").on("click", function () {
        index--;
        if (index === -1) {
            index = 3;
        }
        $(".circle>li").eq(index).addClass("circleLisChange").siblings().removeClass("circleLisChange");
        $(".slideShow-Content>li").eq(index).stop().fadeIn('slow', "swing").siblings().stop().fadeOut("slow", "swing");
    });




    $(".course-recommended_head>span").on("click", function () {
        $("body,html").stop().animate({
            scrollTop: $(".course").eq($(this).index()).offset().top
        }, 1500);
    });


    function countDown(times) {
        var nowtime = +new Date();//当前时间戳
        var inputTime = +new Date(times);//周岁时间戳
        var times = (inputTime - nowtime) / 1000;//剩余总秒数
        var d = parseInt(times / 60 / 60 / 24);//剩余天数
        d = d < 10 ? '0' + d : d;
        var h = parseInt(times / 60 / 60 % 24);
        h = h > 10 ? h : '0' + h;
        var m = parseInt(times / 60 % 60);
        m = m < 10 ? '0' + m : m;
        var s = parseInt(times % 60);
        s = s > 10 ? s : '0' + s;
        return d + '天' + h + '时' + m + '分' + s + '秒';
    };
    $(".Countdowns").each(function () {
        if ($(this).html() === "距开课") {
            // alert(11);
            $(this).html(countDown('2023-4-29 00:00:00'));
        }
    });
    function funnyNumber(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    $.each($(".people"), function () {
        $(this).html(funnyNumber(0, 12000));
    });



    var date = new Date();
    var hour = date.getHours();
    if (hour >= 5 && hour <= 8) {
        $(".happySummer").css("background", "url(upload/morning.jpg)");
        $(".happySummer").html('早上好!');
    }
    else if (hour > 8 && hour < 12) {
        $(".happySummer").css("background", "url(upload/forenoon.jpg)");
        $(".happySummer").html('上午好!')
    }
    else if (hour >= 12 && hour < 18) {
        $(".happySummer").css("background", "url(upload/afternoon.jpg)");
        $(".happySummer").html('下午好!')
    }
    else {
        $(".happySummer").css("background", "url(upload/evening.jpg)");
        $(".happySummer").html('晚上好!');
    }
    window.setTimeout(function () {
        $(".happySummer").css("display", "none");
    }, 4000);
    $("window").on("pageshow", function () {


        if ($("body,html").scrollTop() >= 550) {
            $(".goBack").css("display", "block");
        } else {
            $(".goBack").css("display", "none");
        }

    });
    $(window.document).on("scroll", function () {
        if ($("body,html").scrollTop() >= 550) {
            $(".goBack").stop().fadeIn();
        } else {
            $(".goBack").stop().fadeOut();
        }
    });
    $(".goBack").on("click", function () {
        $("body,html").stop().animate({
            scrollTop: 0
        });
    });

}, false);