$.ajax({
    type: "get",
    dataType: 'json',
    url: `http://localhost:5050/api/getAllBlog2`,
    success: (res) => {
        xr2(res.data)
        arrow()
    }
})
function xr2(data) {
    for (let i = 0; i < data.length; i++) {
        $('.recommend').append(`
        <div class="re_content" data-id=${data[i].id}>
        <h5>
            <span class="listName">
            ${data[i].Blogtitle}
            </span>
        </h5>
        <div class="row botm">
            <div class="col-xl-3col-lg-3 col-md-3 col-sm-3 col-3 imgbigx${i}">
            <span class='ovfh'><img src="../img/${i+5}.jpeg" alt="" class="vue_img1"></span>
            </div>
            <div class="col-xl-9 col-lg-9 col-md-9 col-sm-9 col-9">
            <div class="vue_text">${data[i].BlogIntroduction}</div>
                <div class="" style='display:none'>${data[i].Blogcontent}</div>
                <div class="icon">
                    <span class="iconfont icon-yanjing- yanjing"></span>
                    <span class="Numberreaders">${data[i].Reading}</span>
                    <span class="godnice">
                        <span class="iconfont icon-dianzan good${i}"></span>
                        <span class="goodeNumber">${data[i].like}</span>
                    </span>
                    <span class="readers_text">阅读文章</span>
                </div>
            </div>
        </div>
    </div>
        `)
        $(`.good${i}`).css({'color':'#57AD90'})
    }
    for (let i = 0; i < data.length; i++) {
        $(`.good${i}`).css({ 'transition': ' all .3s' })
        $(`.good${i}`).click(function () {
            $(`.good${i}`).css({ "transform": "scale(1.5)", 'color': 'red' })
            setTimeout(() => {
                $(`.good${i}`).css({ "transform": "scale(1)", 'color': 'black' })
            }, 400)
            let num = Number($(this).next().text())
            num = num + 1;
            $(this).next().text(`${num}`)
            let ids = $(this).parents('.li').attr('data-id') != undefined ? $(this).parents('.li').attr('data-id') : $(this).parents('.re_content').attr('data-id');
            $.ajax({
                type: 'put',
                dataType: 'json',
                url: `http://localhost:5050/api/two/${ids}`,
                data: {
                    like: String(num),
                },
                success: (res) => {
                    console.log(res);
                }
            })
        })
    };
    $('.readers_text').click(function () {
        let ids = $(this).parents('.re_content').attr('data-id')
        let num = Number($(this).siblings('.Numberreaders').text());
        num = num + 1;
        sessionStorage.id = ids;
        sessionStorage.two = 2;
        $(this).siblings('.Numberreaders').text(`${num}`)
        $.ajax({
            type: 'put',
            dataType: 'json',
            url: `http://localhost:5050/api/two/${ids}`,
            data: {
                Reading: String(num),
            },
            success: (res) => {
                console.log(res);
            }
        })
        location = './index.html'
    });

    $('.sp1').click(()=>{
        location="../index.html"
    })
    $('.sp2').click(()=>{
        location="./indexTechnologysharing.html"
    })
    $('.sp4').click(() => {
        location = "./myindex.html"
    })
    $('.L2').click(() => {
        location = "../index.html"
    })
    $('.L3').click(() => {
        location = "./html/indexTechnologysharing.html"
    })
    $('.L4').click(() => {
        location = "./html/Myrecommendation.html"
    })
    $('.L5').click(() => {
        location = "./html/myindex.html"
    })
}
function arrow(){
    for (let i = 1; i < 5; i++) {
        $(`.sp${i}`).mouseover(() => {
            $(`.jiantou${i}`).css({
                'transform': "rotate(180deg)"
            })
        })
        $(`.sp${i}`).mouseout(() => {
            $(`.jiantou${i}`).css({
                'transform': "rotate(0deg)"
            })
        })
    }

    $('.bott_s').mouseover(() => {
        $('.xbt_3').css({
            'width': "90px",
            'borderBottomColor': '#57AD90'
        })
    })
    $('.bott_s').mouseout(() => {
        $('.xbt_3').css({
            'width': "50px",
            'borderBottomColor': 'black'
        })
    })
    for (let i = 0; i < 3; i++) {
        $(`.ovfh`).mouseover(function () {
            const img = $(this).children('.vue_img1');
            $(img[0]).css({
                'transform': 'scale(1.5)',
                'transition': 'all .7s'
            })
        })
        $(`.ovfh`).mouseout(function () {
            const img = $(this).children('.vue_img1');
            $(img[0]).css({
                'transform': 'scale(1)',
                'transition': 'all .7s'
            })
        })
    }
    $('.L2').click(() => {
        location = "../index.html"
    })
    $('.L3').click(() => {
        location = "./indexTechnologysharing.html"
    })
    $('.L4').click(() => {
        location = "./Myrecommendation.html"
    })
    $('.L5').click(() => {
        location = "./myindex.html"
    })
}