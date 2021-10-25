// import Ellipsis from'../../assets/js/util'
// let ellipsis = new Ellipsis({
//     el:document.querySelector('.list'),
//     textCount:30,
//     findAllButtonText:"查看",
//     showFindAllButton:true
// })
// ellipsis.exec();

// () 分组
// + 一个或多个

// item=item.replace(/(#+\s+)/g,function(item){
//     return item.substr(0,item.indexOf(' '))
// })
// item=item.replace(/(#+)|\S+/g,function(item){
//     // console.log(item)
//     item=item.replace(/(#+)/g,`<h${item.length}><h${item.length}>`)
//     return item
// })

// \s 空格
// \S 反斜杠加大写字母表示非
// \d 数字
// \w 字符下划线
// match方法是匹配所有符合正则表达式的语句，把匹配到的值放到数组中；
// var str = document.querySelector('template').content.querySelector('article').innerHTML
// let res = str.match(/(#+\s*)|\S+|\n/g)
// res=res.join('').trim().split('\n')
// res.forEach(item => {
//     var arr=item.split(' ')
//     var el=document.createElement('h'+arr[0].length)
//     el.innerText=arr[1]
//     document.querySelector('body').appendChild(el)
// });

//[^\n] 非回车
// class Markdown {
//     constructor(props) {
//         this.text = typeof props == 'string' ? props : props.el.innerHTML;
//     }
//     parseHtml() {
//         let res = this.text.match(/(#+\s*)|(\S+)|(\n)/g);
//         res = res.join('').trim().split('\n');
//         var fragment=document.createDocumentFragment();
//         res.forEach(item => {
//             var arr = item.split(/(\s+)/g);
//             var el = document.createElement('h' + arr[0].length);
//             el.innerText = arr[2];
//             fragment.appendChild(el);
//         });
//         return fragment;
//     }
// }
// let md = new Markdown({ el: document.querySelector('template').content.querySelector('article') });
// let res = md.parseHtml();
// document.querySelector('body').appendChild(res);
//作业二：
// var deptData = [
//     {
//         deptName:'某某公司',
//         type:2
//     },
//     {
//         deptName:'子公司',
//         type:4
//     },
//     {
//         deptName:'子子部门',
//         type:5
//     }
// ]
// var a = '2->4,5'; 
// var res = format() 
// function format(){
//      return a.replace(/\d+/g,function(item){
//         return item=deptData.filter(data=>{
//             return data.type==item
//         })[0].deptName
//     })
// }
// console.log(res);
//作业三：
// var text = '{{ username }}';
// username是一个变量  用正则匹配到 username
// 方法一：
// '{{ username }}'.replace(/\{\{\s*(\S+)\s*\}\}/,'$1')
// 方法二：
// var a = text.match(/(?<=\{\{\s*)\S+(?=\s*\}\})/);
// 方法三：
// var a = /(?<=\{\{\s*)\S+(?=\s*\}\})/.exec(text)[0];


// 断言：   断：判断   言：说； 我判断
//先行断言  
// hello(?=world)   'helloworld' 可以匹配hello，但不包含world;
// hello(?=world)   'helloabc' 什么也匹配不到;
// 我判断，hello后跟的是world 如果不是，那匹配不成功；


//后行断方：
//(?<=hello)world  
// 我判断 world前面是不是hello ，如果是,那我返回world;

class Markdown {
    constructor(props) {
        this.text = typeof props == 'string' ? props : props.el.innerHTML;
    }
    parse() {
        var str = this.text.replace(/.+/g, (item) => {
            item = item.trim()
            return item
        })
        return str
    }
    parseHtml() {
        let res = this.parse()
        res=res.split(/\n/g)
        var fragment=document.createDocumentFragment();
        res.forEach(item=>{
            if(item.indexOf('#')>-1){
                var arr=item.split(/(\s+)/g);
                var length=arr[0].length>6?6:arr[0].length;
                var el=document.createElement('h'+length);
                el.textContent=arr[2];
                fragment.appendChild(el);
            }
            else{
                var p=document.createElement('p');
                p.textContent=item;
                fragment.appendChild(p);
            }
        })
        return fragment;
    }
}
let md = new Markdown({ el: document.querySelector('template').content.querySelector('article') });
let res = md.parseHtml();
document.querySelector('body').appendChild(res);