export default 

class Ellipsis {
    constructor(props) {
        this.el = props.el;
        this.text = this.el.innerHTML
        this.textCount = props.textCount;
        this.findAllButtonText = props.findAllButtonText || '查看全部';
        this.ellipsisButtonText = props.ellipsisButtonText || '收起'
        this.showFindAllButton = props.showFindAllButton || false;
        this.flag = true
    }
    get buttonText() {
        return this.flag ? this.findAllButtonText : this.ellipsisButtonText
    }
    exec() {
        if (!this.text) throw Error('文本不能为空')
        this.el.innerHTML = this.format(this.text, this.textCount)
        this.el.innerHTML.length<this.textCount?this.showFindAllButton=false:this.showFindAllButton=true
        if (this.showFindAllButton) {
            this.addButton()
        }
    }
    addButton() {
        var a = document.createElement('a')
        a.textContent = this.findAllButtonText
        var _this = this;
        a.addEventListener('click', function () {
            _this.flag = !_this.flag
            this.textContent = _this.buttonText
            _this.el.childNodes[0].textContent = _this.flag ? _this.format(_this.text, _this.textCount) : _this.text
        })
        this.el.appendChild(a, this.el.childNodes[0])
    }
    format(str, num) {
        return str.length < num ? str : (str.substring(0, num) + '...');
    }
}