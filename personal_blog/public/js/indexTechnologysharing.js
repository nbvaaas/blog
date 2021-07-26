$.ajax({
    type: "get",
    dataType: 'json',
    url: `http://localhost:5050/api/getAllBlog1`,
    success: (res) => {
        xr(res.data)
        over()
        Mclick(res.data)
    }
})

function xr(data) {
    let it = 1;
    let imgnum = 3;
    for (let i = 0; i < data.length; i++) {
        $('.ul_1').append(
            `
        <li class="col-xl-4 col-lg-4 col-md-6 col-sm-6 li" data-id=${data[i].id}>
        <span class='imgbig${i}'>
            <img src="../img/${imgnum}.jpeg" alt="" class="img${i}">
        </span>
        <h5 class="h5">${data[i].Blogtitle}</h5>
        <span class="sp5">${data[i].BlogIntroduction}</span>
        <span class="" style='display:none'>${data[i].Blogcontent}</span>
        <div class="li_father">
            <span class="reads" data-reading=${data[i].Reading}>
                +文章阅读
            </span>
            <span class="godnice">
                <span class="iconfont icon-dianzan good${it}"></span>
                <span class="goodeNumber">${data[i].like}</span>
            </span>
        </div>
        </li>
        `
        )
        $(`.imgbig${i}`).css({"overflow": "hidden",'width':'100%','height':'160px'})
        $(`.img${i}`).css({ "width": "100%",'height':'160px',"transition": "all .7s"})
        $(`.imgbig${i}`).mouseover(() => {
            $(`.img${i}`).css({"transform": "scale(1.5)"})
        })
        $(`.imgbig${i}`).mouseout(() => {
            $(`.img${i}`).css({"transform": "scale(1)"})
        })
        $(`.good${i+1}`).css({'color':'#57AD90'})
        it++;
        imgnum++;
    }
}

// 
function over(){
    for (let i = 1; i < 5; i++) {
        $(`.sp${i}`).mouseover(() => {
            $(`.jiantou${i}`).css({ 'transform': "rotate(180deg)" })
        })
        $(`.sp${i}`).mouseout(() => {
            $(`.jiantou${i}`).css({ 'transform': "rotate(0deg)" })
        })
    }
    $('.xbt').mouseover(() => {
        $('.xbt_1').css({ 'width': "90px", 'borderBottomColor': '#57AD90' })
    })
    $('.xbt').mouseout(() => {
        $('.xbt_1').css({ 'width': "50px", 'borderBottomColor': 'black' })
    })
}
function Mclick(data){
    $('.reads').click(function () {
        let num = Number($(this).attr('data-reading'));
        num = num + 1;
        const ids = $(this).parents('.li').attr('data-id');
        sessionStorage.id = ids;
        sessionStorage.two = 1;
                $.ajax({
                    type: 'put',
                    dataType: 'json',
                    url: `http://localhost:5050/api/add/${ids}`,
                    data: {
                        Reading: String(num),
                    },
                    success:(res)=>{
                        console.log(res);
                    }
                })
        location = '../html/index.html'
    });
    for (let i = 1; i < data.length; i++) {
        $(`.good${i}`).css({'transition': ' all .3s' })
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
                        url: `http://localhost:5050/api/add/${ids}`,
                        data: {
                            like: String(num),
                        },
                        success:(res)=>{
                            console.log(res);
                        }
                    })
        })
    };
    $('.sp1').click(()=>{
        location='../index.html'
    });
    $('.sp4').click(()=>{
        location='./myindex.html'
    });
    $('.sp3').click(()=>{
        location='./Myrecommendation.html'
    });
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