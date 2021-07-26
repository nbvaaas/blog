
$.ajax({
    type:'get',
    dataType:'json',
    url:'http://localhost:5050/api/getMessage',
    success:(res)=>{
        xr(res.data)
        goods()
        clickM()
        arrow()
        mbx()
        liuy()
        arrow()
    }
})

function arrow() {
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
}
// 渲染
function xr(data){
    $('.ul1').html('')
    for(let i =0;i<data.length;i++){
        $('.ul1').append(`
        <li class="li1" data-id="${data[i].id}">
        <span class="img2">
            <img src="../img/23.jpeg" alt="">
        </span>
        <div class="nameTime">
            <span class="name">${data[i].name}</span>
            <span class="time">${data[i].time}</span>
        </div>
        <div class="content">
        ${data[i].content}
        </div>
        <div class="goodnumber">
            <div class="cz">
                <span class="good">赞</span>&emsp;
                <span class="goodnum">${data[i].like}</span>
                &emsp;
                <span class="lowss">踩</span>&emsp;
                <span class="lowssnum">${data[i].lowss}</span>
            </div>
        </div>
        </li>
        `)
    }
}
// 面包屑
function mbx() {
    $('.mbx').click(() => {
        $('.mbxL').css({
            'width': "40%"
        })
        $('.Mask').css({
            'display': 'block'
        })
        $('.mbxL1').css({
            'display': 'block'
        })
    })
    $('.Mask').click(() => {
        $('.mbxL').css({
            'width': "0"
        })
        $('.Mask').css({
            'display': 'none'
        })
        $('.mbxL1').css({
            'display': 'none'
        })
    })
}
// 点击事件
function clickM() {
    $('.sp1').click(() => {
        location = "../index.html"
    })
    $('.sp2').click(() => {
        location = "./indexTechnologysharing.html"
    })
    $('.sp3').click(() => {
        location = "./Myrecommendation.html"
    })
    $('.sp4').click(() => {
        location = "./myindex.html"
    })
}
// 点赞和踩事件
function goods() {
    $('.good').click(function(){
        let num = 1;
        let god = Number($(this).next('.goodnum').text());
        const ids = $(this).parents(".li1").attr('data-id')
        god = god + num;
        $(this).next('.goodnum').text(`${god}`)
        $.ajax({
            type:'post',
            dataType:'json',
            url:`http://localhost:5050/api/getMessage/${ids}`,
            data:{
                like:String(god),
            },
            success:(res)=>{
                console.log(res);
            }
        })
    })
    $('.lowss').click(function(){
        let num = 1;
        let god = Number($(this).next('.lowssnum').text());
        const ids = $(this).parents(".li1").attr('data-id')
        god = god + num;
        $(this).next('.lowssnum').text(`${god}`)
        $.ajax({
            type:'post',
            dataType:'json',
            url:`http://localhost:5050/api/getMessage/${ids}`,
            data:{
                lowss:String(god),
            },
            success:(res)=>{
                console.log(res);
            }
        })
    })
}

function liuy(){
    $('.fay').click(() => {
        const get = new Date();
        let name = `匿名${Math.floor(Math.floor(Math.random() * 10 * 1000))}`;
        let time = get.toLocaleString();
        $.ajax({
            type: 'post',
            dataType: 'json',
            url: 'http://localhost:5050/api/getMessage',
            data:{
                like:0,
                lowss:0,
                content:$('.leaveamessage').val(),
                time,
                name
            },
            success: (res) => {
                console.log(res);
            }
        })
        $('.ul1').append(`
        <li class="li1" data-id="">
        <span class="img2">
            <img src="../img/23.jpeg" alt="">
        </span>
        <div class="nameTime">
            <span class="name">${name}</span>
            <span class="time">${time}</span>
        </div>
        <div class="content">
        ${$('.leaveamessage').val()}
        </div>
        <div class="goodnumber">
            <div class="cz">
                <span class="good">赞</span>&emsp;
                <span class="goodnum">0</span>
                &emsp;
                <span class="lowss">踩</span>&emsp;
                <span class="lowssnum">0</span>
            </div>
        </div>
        </li>
        `)
        $('.leaveamessage').val('')
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
    $('.L2').click(() => {
        location = "./index.html"
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