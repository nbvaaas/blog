// 面包屑
function mbx(){
    $('.mbx').click(()=>{
        $('.mbxL').css({'width':"40%"})
        $('.Mask').css({'display':'block'})
        $('.mbxL1').css({'display':'block'})
    })
    $('.Mask').click(()=>{
        $('.mbxL').css({'width':"0"})
        $('.Mask').css({'display':'none'})
        $('.mbxL1').css({'display':'none'})
    })
}
mbx()
function arrow(){
    for(let i = 1;i<5;i++){
        $(`.sp${i}`).mouseover(()=>{
            $(`.jiantou${i}`).css({'transform':"rotate(180deg)"})
        })
        $(`.sp${i}`).mouseout(()=>{
            $(`.jiantou${i}`).css({'transform':"rotate(0deg)"})
        })
    }
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