

// 数据渲染
async function run() {
    await one();
    await two();
    await three();

}

run().then((res) => {
    clikM()
    QRcodes()
    lunbotu()
    arrow()
    mbx()
})

async function one() {
    $.ajax({
        type: "get",
        dataType: 'json',
        url: `http://localhost:5050/api/add/6/0`,
        success: (res) => {
            const data = res.data.datas;
            xr(data)
        }
    })
}

async function two() {
    $.ajax({
        type: 'get',
        url: `http://localhost:5050/api/two/3/0`,
        success: (res) => {
            const data2 = res.data.datas;
            xr2(data2)
        }
    })
}

async function three() {
    $.ajax({
        type: 'get',
        url: `http://localhost:5050/api/order`,
        success: (res) => {
            console.log(res);
            let arr = ['①', '②', '③', '④', '⑤', '⑥', '⑦']
            for (let i = 0; i < res.data.datas.length; i++) {
                $('.t2_ul').append(`
                <li class="t_li1">
                <span class='color ${i < 3 ? 'color2' : ''}'>${arr[i]}</span>
                <span class="span ${i < 3 ? 'color3' : ''}" data-id='${res.data.datas[i].id}' data-reading='${res.data.datas[i].Reading}'>${res.data.datas[i].Blogtitle}</span>
                </li>
                `)
            }
        }
    })
}




// 渲染函数
function xr(data) {
    let it = 1;
    let imgnum = 3;
    for (let i = 0; i < data.length; i++) {
        $('.ul_1').append(
            `
        <li class="col-xl-4 col-lg-4 col-md-6 col-sm-6 li" data-id=${data[i].id}>
        <span class='imgbig${i}' style="border-radius: 15px;">
            <img src="./img/${imgnum}.jpeg" alt="" class="img${i}">
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
        $(`.good${i+1}`).css({
            'color': '#57AD90'
        })
        it++;
        imgnum++;
    }
    for (let i = 0; i < 7; i++) {
        $(`.imgbig${i}`).css({
            "overflow": "hidden",
            'width': '100%',
            'height': '160px'
        })
        $(`.img${i}`).css({
            "width": "100%",
            'height': '160px',
            "transition": "all .7s"
        })
        $(`.imgbig${i}`).mouseover(() => {
            $(`.img${i}`).css({
                "transform": "scale(1.5)"
            })
        })
        $(`.imgbig${i}`).mouseout(() => {
            $(`.img${i}`).css({
                "transform": "scale(1)"
            })
        })
    }
}

function xr2(data) {
    let it = 7;
    let imgnum = 9;
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
                <span class='ovfh'><img src="./img/${imgnum}.jpeg" alt="" class="vue_img1"></span>
            </div>
            <div class="col-xl-9 col-lg-9 col-md-9 col-sm-12 col-12">
            <div class="vue_text">${data[i].BlogIntroduction}</div>
                <div class="" style='display:none'>${data[i].Blogcontent}</div>
                <div class="icon">
                    <span class="iconfont icon-yanjing- yanjing"></span>
                    <span class="Numberreaders">${data[i].Reading}</span>
                    <span class="godnice">
                        <span class="iconfont icon-dianzan good${it}"></span>
                        <span class="goodeNumber">${data[i].like}</span>
                    </span>
                    <span class="readers_text">阅读文章</span>
                </div>
            </div>
        </div>
    </div>
        `)
        $(`.good${it}`).css({
            'color': '#57AD90'
        })
        it++;
        imgnum++;
    }
}
// 轮播图
function lunbotu() {
    let steep = 765;
    let run = 0;
    setInterval(() => {
        run = run + steep;
        if (run >= 2281) {
            run = 0;
        }
        $(".tu1_son").css({
            'transform': "translate(-" + run + "px)"
        })
    }, 2000)
}
// 箭头旋转/移入溢出效果
function arrow() {
    // 头部箭头效果
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
    // 
    $(`.adv`).mouseover(() => {
        $(`.adv_img`).css({
            "transform": "scale(1.5)"
        })
    })
    $(`.adv`).mouseout(() => {
        $(`.adv_img`).css({
            "transform": "scale(1)"
        })
    })
    $('#ico').click(() => {
        window.scrollTo(0, 0)
    })
    $('.ico2').mouseover(() => {
        $('.pl').css({
            'width': '30px',
            'height': '150px'
        })
    })
    $('.ico2').mouseout(() => {
        $('.pl').css({
            'width': '0px',
            'height': '0px'
        })
    })
    $('#ico').mouseover(() => {
        $('.md3').css({
            'width': '30px',
            'height': '150px'
        })
    })
    $('#ico').mouseout(() => {
        $('.md3').css({
            'width': '0px',
            'height': '0px'
        })
    })
    $('.xbt').mouseover(() => {
        $('.xbt_1').css({
            'width': "90px",
            'borderBottomColor': '#57AD90'
        })
    })
    $('.xbt').mouseout(() => {
        $('.xbt_1').css({
            'width': "50px",
            'borderBottomColor': 'black'
        })
    })

    $('.ph').mouseover(() => {
        $('.sph').css({
            'width': '80px',
            'borderBottomColor': 'red'
        })
        $('.sph2').css({
            'width': '80px',
            'borderBottomColor': 'red'
        })
    })
    $('.ph').mouseout(() => {
        $('.sph').css({
            'width': '50px',
            'borderBottomColor': 'black'
        })
        $('.sph2').css({
            'width': '50px',
            'borderBottomColor': 'black'
        })
    })
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


    $('.recommend').delegate('.ovfh','mouseover',function () {
        const img = $(this).children('.vue_img1');
        $(img[0]).css({
            'transform': 'scale(1.5)',
            'transition': 'all .7s'
        })
    })
    $('.recommend').delegate('.ovfh','mouseout',function () {
        const img = $(this).children('.vue_img1');
        $(img[0]).css({
            'transform': 'scale(1)',
            'transition': 'all .7s'
        })
    })
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

function clikM() {
    // 跳转到github https://github.com/nbvaaas/blogs/tree/master/personal_blog
    $('.phon4').click(()=>{
        location = 'https://github.com/nbvaaas/blogs/tree/master/personal_blog';
    })
    // 热榜模块阅读
    $('.t2_ul').delegate('.span', 'click', function () {
        console.log(2);
        let num = Number($(this).attr('data-reading'));
        num = num + 1;
        const ids = $(this).attr('data-id');
        sessionStorage.id = ids;
        sessionStorage.two = 1;
        $.ajax({
            type: 'put',
            dataType: 'json',
            url: `http://localhost:5050/api/add/${ids}`,
            data: {
                Reading: String(num),
            },
            success: (res) => {
                console.log(res);
            }
        })
        location = './html/index.html'
    })
    // 技术分享模块阅读
    $('.ul_1').delegate('.reads', 'click', function () {
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
            success: (res) => {
                console.log(res);
                location = './html/index.html'
            }
        })
    })
    // 技术推荐模块阅读
    $('.recommend').delegate('.readers_text', 'click', function () {
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
        location = './html/index.html'
    })
    // 点赞
    for (let i = 1; i < 7; i++) {
        $(`.good${i}`).css({
            'transition': ' all .3s'
        })
        $(`.ul_1`).delegate(`.good${i}`, 'click', function () {
            $(`.good${i}`).css({
                "transform": "scale(1.5)",
                'color': 'red'
            })
            setTimeout(() => {
                $(`.good${i}`).css({
                    "transform": "scale(1)",
                    'color': '#57AD90'
                })
            }, 400)
            let num = Number($(this).next().text())
            num = num + 1;
            $(this).next().text(`${num}`)
            let ids = $(this).parents('.li').attr('data-id') != undefined ? $(this).parents('.li').attr('data-id') : $(this).parents('.re_content').attr('data-id');
            $.ajax({
                type: 'put',
                dataType: 'json',
                url: `http://localhost:5050/api/${i > 6 ? 'two' :'add'}/${ids}`,
                data: {
                    like: String(num),
                },
                success: (res) => {
                    console.log(res);
                }
            })
        })
    }
    for (let i = 7; i < 10; i++) {
        $(`.good${i}`).css({
            'transition': ' all .3s'
        })
        $(`.recommend`).delegate(`.good${i}`, 'click', function () {
            $(`.good${i}`).css({
                "transform": "scale(1.5)",
                'color': 'red'
            })
            setTimeout(() => {
                $(`.good${i}`).css({
                    "transform": "scale(1)",
                    'color': '#57AD90'
                })
            }, 400)
            let num = Number($(this).next().text())
            num = num + 1;
            $(this).next().text(`${num}`)
            let ids = $(this).parents('.li').attr('data-id') != undefined ? $(this).parents('.li').attr('data-id') : $(this).parents('.re_content').attr('data-id');
            $.ajax({
                type: 'put',
                dataType: 'json',
                url: `http://localhost:5050/api/${i > 6 ? 'two' :'add'}/${ids}`,
                data: {
                    like: String(num),
                },
                success: (res) => {
                    console.log(res);
                }
            })
        })
    }
    $('.ico2').on('click', () => {
        location = "./html/Anonymouscomment.html"
    })
    // 头部导航栏点击跳转页面
    $('.sp4').on('click', () => {
        location = "./html/myindex.html"
    })
    $('.sp2').on('click', () => {
        location = "./html/indexTechnologysharing.html"
    })
    $('.sp3').on('click', () => {
        location = "./html/Myrecommendation.html"
    })

    $('.L2').on('click', () => {
        location = "./index.html"
    })
    $('.L3').on('click', () => {
        location = "./html/indexTechnologysharing.html"
    })
    $('.L4').on('click', () => {
        location = "./html/Myrecommendation.html"
    })
    $('.L5').on('click', () => {
        location = "./html/myindex.html"
    })
    let look = true
    $('#admin').click(()=>{
        if(look){
            $('.logdin').css({'right':'25px'})
            look = false;
        }else{
            $('.logdin').css({'right':'-300px'})
            look = true;
        }
    })
    $('.btnlogin').click(()=>{
        $.ajax({
            type:'post',
            dataType:'json',
            url:'http://localhost:5050/api/login',
            data:{
                admin: $('.admin').val(),
                pwd: $('.pwd').val()
            },
            success:(res)=>{
                if(res.data){
                    $('#prompt').text('登录成功').addClass('correct').removeClass('error');
                    setTimeout(() => {
                        $('.logdin').css({'right':'-300px'})
                    }, 300);
                    setTimeout(() => {
                        location ='./html/Backstage.html';
                    }, 1000);
                }else{
                    let num = 3;
                    let time ;
                    $('#prompt').text(`${num}秒后自动关闭,密码或账户错误。`).addClass('error').removeClass('correct');
                    time = setInterval(() => {
                        num--;
                        $('#prompt').text(`${num}秒后自动关闭,密码或账户错误。`).addClass('error').removeClass('correct');
                        console.log(num);
                        if(num == 0){
                            clearInterval(time)
                            $('.logdin').css({'right':'-300px'})
                            $('#prompt').text(' ')
                        }
                    }, 1000);
                    
                }
            }
        })
        $('.admin').val('')
        $('.pwd').val('')
    })
}

// 二维码
function QRcodes() {
    $('.phon2').mouseover(() => {
        $('.QRcodeImg').attr({
            src: './img/21.jpg'
        })
        $('.QRcode').css({
            'display': 'block'
        })
        setTimeout(() => {
            $('.QRcode').css({
                'width': '100px',
                'height': '100px'
            });
            $('.QRcodeImg').css({
                'display': 'block'
            });
        }, 100)
    })
    $('.phon2').mouseout(() => {
        $('.QRcode').css({
            'width': '0px',
            'height': '0px'
        });
        $('.QRcodeImg').css({
            'display': 'none'
        });
        setTimeout(() => {
            $('.QRcode').css({
                'display': 'none'
            })
        }, 550);
    })
    $('.phon3').mouseover(() => {
        $('.QRcodeImg').attr({
            src: './img/22.png'
        })
        $('.QRcode').css({
            'display': 'block'
        })
        setTimeout(() => {
            $('.QRcode').css({
                'width': '100px',
                'height': '100px'
            });
            $('.QRcodeImg').css({
                'display': 'block'
            });
        }, 100)
    })
    $('.phon3').mouseout(() => {
        $('.QRcode').css({
            'width': '0px',
            'height': '0px'
        });
        $('.QRcodeImg').css({
            'display': 'none'
        });
        setTimeout(() => {
            $('.QRcode').css({
                'display': 'none'
            })
        }, 550);
    })

}
// $.ajax({
//     type:'post',
//     dataType:'json',
//     url:'http://localhost:5050/api/stay',
//     data:{
//         content:'阿西吧',
//         BlogId:93
//     },
//     success:(res)=>{
//         console.log(res);
//     }
// })
