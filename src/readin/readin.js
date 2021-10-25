import Mackdow from '../../assets/js/mackdow'
let md = new Mackdow({ el: document.querySelector('template').content.querySelector('article') });
let res = md.parseHtml();
document.querySelector('body').appendChild(res);