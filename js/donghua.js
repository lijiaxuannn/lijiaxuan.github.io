class Ani {
    constructor(e) {
        this.target = e.targets
        this.count=e.count
        this.num = e.count
        this.reverse = e.reverse
        this.newarr = this.target.slice()
        this.add()
    }
    add() {
        let that = this
        if (this.newarr.length > 0) {
            let targe = this.newarr.shift()
            targe.el.classList.add(targe.ClassName)
            let addevent = function () {
                this.classList.remove(targe.ClassName)
                this.removeEventListener('animationend', addevent)
                that.add()
            }
            targe.el.addEventListener('animationend', addevent)
        }
        else {
            setTimeout( ()=> {
            this.newarr = this.target.slice()
            if (this.num > 1) {
                this.num--
                if (this.reverse[0] == this.curindex()) {
                    this.newarr = this.target.slice().reverse()
                }
                this.add()
            }
            })
        }
    }
    curindex(){
        return this.count-this.num+1
    }
}