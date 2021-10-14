class Translte {
    constructor(e) {
        this.target = e.targets
        this.newarr = this.target.slice()
    }
    add() {
        console.log(this.newarr)
        let that = this
        if (this.newarr.length > 0) {
            let targe = this.newarr.shift()
            targe.el.classList.add(targe.ClassName)
            let addevent = function () {
                setTimeout(()=>{
                    // this.classList.remove(targe.ClassName)
                    this.removeEventListener('animationstart', addevent)
                    that.add()
                },50)
            }
            targe.el.addEventListener('animationstart', addevent)
        }
    }
    curindex() {
        return this.count - this.num + 1
    }
}
class Animat{
    constructor(targe){
        this.targe=targe
    }
    add(){
        this.targe.add()
    }
}
var a = new Animat(new Translte(
    {
        targets: [
            {
                el: document.querySelector('.dingwe'),
                ClassName: 'left'
            },
            {
                el: document.querySelector('.left1'),
                ClassName: 'left'
            },
            {
                el: document.querySelector('.left2'),
                ClassName: 'left'
            },
            {
                el: document.querySelector('.left3'),
                ClassName: 'left'
            },
            {
                el: document.querySelector('.header1'),
                ClassName: 'left'
            },
            {
                el: document.querySelector('.header1-text'),
                ClassName: 'left'
            },
            {
                el: document.querySelector('.header2'),
                ClassName: 'left'
            },
            {
                el: document.querySelector('.header2-text'),
                ClassName: 'left'
            },
            {
                el: document.querySelector('.header3'),
                ClassName: 'left'
            },
            {
                el: document.querySelector('.header3-text'),
                ClassName: 'left'
            },
        ],
    }
))
a.add()
var b = new Animat(new Translte(
    {
        targets: [
            {
                el: document.querySelector('.tit-log'),
                ClassName: 'right'
            },
            {
                el: document.querySelector('.right-me1'),
                ClassName: 'right'
            },
            {
                el: document.querySelector('.right-me2'),
                ClassName: 'right'
            },
        ]
    }
))
b.add()