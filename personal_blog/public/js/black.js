$('.blog').click(() => {
    $('.blog').addClass('bgcolor')
    $('.liuy').removeClass('bgcolor')
    $('.addblog').removeClass('bgcolor')
    $('#area').css({
        'display': 'none'
    })
    $('.head').css({
        'display': 'none'
    })
    $('.content').css({
        'display': 'block'
    })
    $('.ul_2').css({
        'display': 'none'
    })
    $('.ul_1').css({
        'display': 'block'
    })
    $('.path').css({
        'display': 'block'
    })
    $('.paths').css({
        'display': 'block'
    })
    $('.release').css({
        'display': 'none'
    })
})
$('.liuy').click(() => {
    $('.liuy').addClass('bgcolor')
    $('.blog').removeClass('bgcolor')
    $('.addblog').removeClass('bgcolor')
    $('#area').css({
        'display': 'none'
    })
    $('.head').css({
        'display': 'none'
    })
    $('.content').css({
        'display': 'block'
    })
    $('.ul_1').css({
        'display': 'none'
    })
    $('.ul_2').css({
        'display': 'block'
    })
    $('.path').css({
        'display': 'none'
    })
    $('.paths').css({
        'display': 'none'
    })
    $('.release').css({
        'display': 'none'
    })
    $.ajax({
        type: 'get',
        dataType: 'json',
        url: 'http://localhost:5050/api/getMessage',
        success: (res) => {
            sbsb(res.data)
        }
    })

})
let look = true;
let Logo ;
$('.paths').click(()=>{
    $('.ul_1').html('')
    if(look){
        Logo = 1;
        $('.paths').text('返回站技术分享管理')
        $('.path').text('当前博客管理为/技术推荐')
        $.ajax({
            type: 'get',
            dataType: 'json',
            url: 'http://localhost:5050/api/two',
            success: (res) => {
                xr(res.data)
            }
        })
        look = false;
    }else{
        Logo = 2;
        $('.paths').text('进入技术推荐管理')
        $('.path').text('当前博客管理为/技术分享')
        $.ajax({
            type: 'get',
            dataType: 'json',
            url: 'http://localhost:5050/api/add',
            success: (res) => {
                xr(res.data)
            }
        })
        look = true;
    }
})
$('.addblog').click(() => {
    $('.addblog').addClass('bgcolor')
    $('.blog').removeClass('bgcolor')
    $('.liuy').removeClass('bgcolor')
    $('.release').css({
        'display': 'block'
    })
    $('#area').css({
        'display': 'block'
    })
    $('.head').css({
        'display': 'block'
    })
    $('.content').css({
        'display': 'none'
    })
    $('.path').css({
        'display': 'none'
    })
    $('.paths').css({
        'display': 'none'
    })
})

$.ajax({
    type: 'get',
    dataType: 'json',
    url: 'http://localhost:5050/api/add',
    data: {

    },
    success: (res) => {
        xr(res.data)
    }
})
function xr(data) {
    $('.ul_1').html('')
    for (let i = 0; i < data.length; i++) {
        $('.ul_1').append(
            `
            <li class="li" data-id=${data[i].id}>
            <h2 class="h22">${data[i].Blogtitle}</h2>
            <span class="sp5">${data[i].BlogIntroduction}</span>
            <span class="" style='display:none'>${data[i].Blogcontent}</span>
            <div class="bh">
                <span class="font">文章编号</span>&emsp;
                <span class="font-s">${data[i].id}</span>&emsp;
                <span class="font">作者</span>&emsp;
                <span class="font-s">${data[i].Author}</span>&emsp;
                <span class="font">发布时间</span>&emsp;
                <span class="font-s">${data[i].releaseTime}</span>&emsp;
            </div>
            <div class="li_father">
                <span class="remov">删除文章</span>
            </div>
            </li>
         `
        )
    }
}
bianji()
let MDtext,HTMLtxt;
function bianji() {
    $('#show-area').on('DOMNodeInserted', () => {
        HTMLtxt = $('#show-area').html();
    })
    $('#md-area').bind('input propertychange', function () {
        MDtext = $('#md-area').val();
    });
    $(".ul_1").delegate('.reads', 'click', function () {
        $('.ul_1').css({
            'display': 'none'
        });
        $.ajax({
            type: 'get',
            dataType: 'json',
            url: `http://localhost:5050/api/add/${$(this).parents('.li').attr('data-id')}`,
            success: (res) => {}
        })
    })
    // 删除文章
    $('.ul_1').delegate('.remov', 'click', function () {
        let thiss = $(this).parents('.li');
        $.ajax({
            type: 'delete',
            dataType: 'json',
            url: `http://localhost:5050/api/${Logo == 1 ? 'two' : 'add'}/${$(this).parents('.li').attr('data-id')}`,
            data: {

            },
            success: (res) => {
                console.log(res);
                $(thiss).remove();
            }
        })
    })
    $('.ul_2').delegate('.removs', 'click', function () {
        $.ajax({
            type: 'delete',
            dataType: 'json',
            url: `http://localhost:5050/api/getMessage/${$(this).parents('.li1').attr('data-id')}`,
            data: {

            },
            success: (res) => {
                console.log(res);
            }
        })
    })
    $('.baocun').click(() => {
        $('.son_content').attr({
            'contenteditable': 'false'
        })
    })
}

function sbsb(data) {
    $('.ul_2').html('')
    for (let i = 0; i < data.length; i++) {
        $('.ul_2').append(`
<li class="li1" data-id="${data[i].id}">
<span class="img2">
    <img src="../img/23.jpeg" alt="">
</span>
<div class="nameTime">
    <span class="name">${data[i].name}</span>
    <span class="time">${data[i].time}</span>
</div>
<div class="contents">
${data[i].content}
</div>
<div class="goodnumber">
    <div class="cz">
        <span class="removs">删除文章</span>
    </div>
</div>
</li>
`)
    }
}
let time = new Date()
$('.release').click(()=>{
    if(MDtext != undefined && HTMLtxt != undefined){
        $('.Mask').css({'display':'block'})
        $('#md-area').val('')
        $('#show-area').html('')
        $.ajax({
            type:'post',
            dataType:'json',
            url:`http://localhost:5050/api/${Math.random() > 0.5 ? 'add' : 'two'}`,
            data:{
                like:0,
                Reading:0,
                Blogcontent:HTMLtxt,
                Blogtitle:HTMLtxt,
                releaseTime: `${time.toLocaleString()}`,
                Author:'ljh',
                BlogIntroduction:HTMLtxt,
                Grammar:MDtext
            },
            success:(res)=>{
                console.log(res);
            }
        })
        let num = 3;
        let timer ;
        timer = setInterval(()=>{
            num--;
            if(num == 0){
                clearInterval(timer);
                $('.Mask').css({'display':'none'})
            }
            $('.ts').text(`博客正在保存/${num}秒后自动关闭`)
        },1000)
    }else{
        alert('博客不能为空')
    }
})
$('.returns').click(()=>{
    location = '../index.html'
})