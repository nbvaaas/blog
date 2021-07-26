let obj;
// sessionStorage
$.ajax({
    type: 'get',
    dataType: 'json',
    url: `http://localhost:5050/api/${sessionStorage.two == 1 ? 'add' : 'two'}/${sessionStorage.id}`,
    success: (res) => {
        console.log(res.data);
        obj = res.data
        xr(res)
        goods()
    }
})

function xr(res) {
    $('.title').text(res.data.Blogtitle)
    $('.time').append(`${res.data.releaseTime}`)
    $('.likenum').text(res.data.like)
    $('.goodnice').text(res.data.like)
    $('.readingnum').text(res.data.Reading)
    $('.contents1').append(`${res.data.Blogcontent}`)
    $('.pid').attr({ 'data-id': `${res.data.id}` })
    $('.authorname').text(res.data.Author)
}
// 面包屑
function mbx() {
    $('.mbx').click(() => {
        $('.mbxL').css({ 'width': "40%" })
        $('.Mask').css({ 'display': 'block' })
        $('.mbxL1').css({ 'display': 'block' })
    })
    $('.Mask').click(() => {
        $('.mbxL').css({ 'width': "0" })
        $('.Mask').css({ 'display': 'none' })
        $('.mbxL1').css({ 'display': 'none' })
    })
}
mbx()
function arrow() {
    for (let i = 1; i < 5; i++) {
        $(`.sp${i}`).mouseover(() => {
            $(`.jiantou${i}`).css({ 'transform': "rotate(180deg)" })
        })
        $(`.sp${i}`).mouseout(() => {
            $(`.jiantou${i}`).css({ 'transform': "rotate(0deg)" })
        })
    }

    $(`.good1`).click(function () {
        $(`.good1`).css({ "transform": "scale(1.5)", 'color': 'red' })
        setTimeout(() => {
            $(`.good1`).css({ "transform": "scale(1)", 'color': '#57AD90' })
        }, 400)
        let num = Number($(this).next().text())
        num = num + 1;
        $('.likenum').text(`${num}`)
        $(this).next().text(`${num}`)
        const id = $('.pid').attr('data-id')
        $.ajax({
            type: 'put',
            dataType: 'json',
            url: `http://localhost:5050/api/add/${id}`,
            data: {
                like: `${num}`,
            },
            success: (res) => {
                console.log(res);
            }
        })
    })
}
arrow()
// 点击事件
clickM()
function clickM(){
    $('.sp1').click(()=>{
        location="../index.html"
    })
    $('.sp2').click(()=>{
        location="./indexTechnologysharing.html"
    })
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
$('.fay').click(() => {
    const get = new Date();
    let name = `匿名${Math.floor(Math.floor(Math.random() * 10 * 1000))}`;
    let time = get.toLocaleString();
    $.ajax({
        type: 'post',
        dataType: 'json',
        url: `http://localhost:5050/api/${sessionStorage.two == 1 ? 'stay' : 'stay2'}`,
        data:{
            content:$('.leaveamessage').val(),
            BlogId:sessionStorage.id,
            like:0,
            lowss:0,
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
$.ajax({
    type:'get',
    dataType:'json',
    url:`http://localhost:5050/api/${sessionStorage.two == 1 ? 'stay' : 'stay2'}/${sessionStorage.id}`,
    success:(res)=>{
        xrs(res.data.datas)
    }
})

// 渲染
function xrs(data){
    $('.ul1').html('')
    for(let i =0;i<data.length;i++){
        $('.ul1').append(`
        <li class="li1" data-id="${data[i].id}">
        <span class="img2">
            <img src="../img/23.jpeg" alt="">
        </span>
        <div class="nameTime">
            <span class="name"></span>
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

// 点赞和踩事件
goods()
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
            url:`http://localhost:5050/api/${sessionStorage.two == 1 ? 'stay' : 'stay2'}/${ids}`,
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
            url:`http://localhost:5050/api/${sessionStorage.two == 1 ? 'stay' : 'stay2'}/${ids}`,
            data:{
                lowss:String(god),
            },
            success:(res)=>{
                console.log(res);
            }
        })
    })
}