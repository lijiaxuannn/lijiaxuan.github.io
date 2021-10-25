export default class Markdown {
    constructor(props) {
        this.text = typeof props == 'string' ? props : props.el.innerHTML;
    }
    parse() {
        var str = this.text.replace(/.+/g, (item) => {
            item = item.trim();
            return item;
        })
        return str;
    }
    parseHtml() {
        let res = this.parse();
        res=res.split(/\n/g);
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