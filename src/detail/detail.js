import articles from '../article.route';
import Mackdow from '../../assets/js/mackdow';
class Url {
    constructor(target) {
        this.target = target;
        this.searchParams = this.getSearchParams(target);
        this.params = this.getParams(this.searchParams);
    }
    getSearchParams(target){
        return Url.isPlantObject(target) ? '' : this.target.split('?')[1];
    }
    parse() {
        var res = '';
        if(Url.isPlantObject(this.target)){
            for(let key in this.target){
                res += (key + '=' + this.target[key]) + '&';
            };
            res = res.substring(0,res.length - 1);
        }
        return res;
    }
    static isPlantObject(val) {
        return Object.prototype.toString.call(val).slice(8, -1) == 'Object';
    }
    get(name) {
        return this.params[name];
    }
    getParams(str) {
        if(!str) return;
        var res = {};
        str.split('&').forEach(item => {
            let arr = item.split('=');
            res[arr[0]] = arr[1];
        })
        return res;
    }
}
var url = new Url(window.location.href);
var id = url.get('id');
var params = {
    type:'1',
    id:1,
    name:'xiaoming'
}
var url2 = new Url(params)  
var parse=url2.parse() ;//  type=2&id=1&name=xiaoming
document.querySelector('.main-text').innerHTML=getarticle();
function getarticle(){
    var data='';
    for (let i = 0; i < articles.length; i++) {
        if(id==articles[i].id){
            var md=new Mackdow(articles[i].article).parse()
            data=md;
            break;
        }        
    }
    return data;
}
