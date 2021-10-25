import articles from '../article.route'
import Ellipsis from '../../assets/js/util'
String.prototype.ellipsis = function (leng) {
    var str = this.substr(0);
    if (str.length > leng) {
        str = str.substr(0, leng - 3);
        str += '...';
    };
    return str;
}
var subject = document.querySelector('.conversation');
subject.remove();
var fragment = document.createDocumentFragment();
articles.forEach(element => {
    var cloneNode = subject.cloneNode(true);
    cloneNode.querySelector('.wenzi').innerHTML = element.article;
    fragment.appendChild(cloneNode);
});
document.querySelector('.subject').appendChild(fragment);
var text = document.querySelectorAll('.text1');
text.forEach((element,index) => {
    let ellipsis = new Ellipsis({
        el:element,
        textCount: 100,
        findAllButtonText: "查看所有",
        showFindAllButton: true
    })
    ellipsis.exec();
});

var title=document.querySelectorAll('.title')
title.forEach(element => {
    element.addEventListener('click',function(){
        window.location.href='detail.html?id='+this.dataset.id
    })
});