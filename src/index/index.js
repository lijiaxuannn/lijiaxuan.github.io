var articles = [
    {
        id:1,
        title:'如何看待知乎上的男拳',
        article:`我看女拳的时候感觉她们不是女的 我看男拳的时候也不觉得他们是男的 疯了 全都疯了 老实人在中间说一句话立马被揍得东倒西歪满地找牙关键老实人还不知道做错了啥明…`
    },
    {
        id:2,
        title:'如何看待知乎上的男拳',
        article:`我看女拳的时候感觉她们不是女的 我看男拳的时候也不觉得他们是男的 疯了 全都疯了 老实人在中间说一句话立马被揍得东倒西歪满地找牙关键老实人还不知道做错了啥明…`
    },
    {
        id:3,
        title:'如何看待知乎上的男拳',
        article:`我看女拳的时候感觉她们不是女的 我看男拳的时候也不觉得他们是男的 疯了 全都疯了 老实人在中间说一句话立马被揍得东倒西歪满地找牙关键老实人还不知道做错了啥明…`
    },
    {
        id:4,
        title:'如何看待知乎上的男拳',
        article:`我看女拳的时候感觉她们不是女的 我看男拳的时候也不觉得他们是男的 疯了 全都疯了 老实人在中间说一句话立马被揍得东倒西歪满地找牙关键老实人还不知道做错了啥明…`
    },
    {
        id:5,
        title:'如何看待知乎上的男拳',
        article:`我看女拳的时候感觉她们不是女的 我看男拳的时候也不觉得他们是男的 疯了 全都疯了 老实人在中间说一句话立马被揍得东倒西歪满地找牙关键老实人还不知道做错了啥明…`
    },
]
var conversation=document.querySelector('.conversation')
conversation.remove()
articles.forEach(element=>{
    var subclonde=conversation.cloneNode(true)
    var tit=subclonde.querySelector('.text-dingwei')
    var text=subclonde.querySelector('.main-text')
    var nav=subclonde.querySelector('.nav')
    tit.innerText=element.title
    text.innerText=element.article
    subclonde.appendChild(tit)
    subclonde.appendChild(text)
    subclonde.appendChild(nav)
    document.querySelector('.main-left').appendChild(subclonde)
})