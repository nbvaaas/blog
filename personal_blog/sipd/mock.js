const Blog = require('../models/BlogcontentTwo');
const BlogSer = require('../services/BlogcontentServicesTwo');
const axios = require('axios');
const cheerio = require('cheerio')
async function getBlogHtml(){
    return (await axios.get('https://blog.csdn.net/weixin_45568677?spm=1001.2101.3001.5343')).data
}

async function getBlogUrl(){
    const html = await getBlogHtml()
    const $ = cheerio.load(html)
    const links = $('.blog-list-box> a > .blog-list-content').get()
    const linkArr = links.map((ele) => {
        return $(ele).html()
    })
    let num = 1;
    for(let i =15;i<linkArr.length;i++){
        getBlogText(num,linkArr[i])
        num++;
    }
    // linkArr.map((url) => {
    //     getBlogText(url)
    // })
}

async function getBlogText(id,url){
    // const texts =  (await axios.get(url)).data
    // const $ = cheerio.load(texts)

    // // 文章标题
    // const Blogtitle = $('#articleContentId').text()
    // // 发布时间
    // const releaseTime = $('.bar-content>.time').text().trim()
    // // 访问量
    // const Reading = $('.read-count').text()
    // // 文章主体
    // const Blogcontent = $('.baidu_pl').html()

    const obj = {
        BlogIntroduction:url,
    }
    BlogSer.updateBlogsTwo(id,obj)
}
// getBlogUrl()